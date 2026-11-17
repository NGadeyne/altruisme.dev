-- A paid checkout is held until the buyer proves ownership of the Stripe email.
create table public.learn_pending_purchases (
  stripe_session_id text primary key,
  email text not null check (email = lower(trim(email)) and length(email) > 3),
  amount_total integer not null check (amount_total > 0),
  currency text not null check (length(currency) = 3),
  created_at timestamptz not null default now()
);

create index learn_pending_purchases_email_idx on public.learn_pending_purchases (email);
alter table public.learn_pending_purchases enable row level security;
revoke all on public.learn_pending_purchases from anon, authenticated;

create or replace function public.learn_find_confirmed_user_by_email(p_email text)
returns uuid
language sql
security definer
set search_path = ''
as $$
  select id from auth.users
  where lower(email) = lower(trim(p_email)) and email_confirmed_at is not null
  limit 1;
$$;

-- Keep the service-role grant path safe if another caller uses it later.
create or replace function public.learn_record_paid_checkout(
  p_session_id text,
  p_email text,
  p_amount_total integer,
  p_currency text
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid;
  v_existing_user_id uuid;
begin
  select id into v_user_id from auth.users
  where lower(email) = lower(trim(p_email)) and email_confirmed_at is not null
  limit 1;
  if v_user_id is null then
    raise exception 'Verified Learn account required';
  end if;

  select user_id into v_existing_user_id from public.learn_purchases
  where stripe_session_id = p_session_id;
  if v_existing_user_id is not null and v_existing_user_id <> v_user_id then
    raise exception 'Checkout session already belongs to another user';
  end if;

  insert into public.learn_purchases (stripe_session_id, user_id, course_slug, amount_total, currency)
  values (p_session_id, v_user_id, 'seo', p_amount_total, lower(p_currency))
  on conflict (stripe_session_id) do nothing;

  insert into public.learn_course_entitlements (user_id, course_slug)
  values (v_user_id, 'seo')
  on conflict (user_id, course_slug) do nothing;
  return v_user_id;
end;
$$;

create or replace function public.learn_record_pending_checkout(
  p_session_id text,
  p_email text,
  p_amount_total integer,
  p_currency text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_email text := lower(trim(p_email));
  v_existing_email text;
begin
  if p_session_id !~ '^cs_[A-Za-z0-9_]+$' or v_email is null then
    raise exception 'Invalid checkout';
  end if;

  -- A webhook retry after claiming must not recreate an actionable purchase.
  if exists (select 1 from public.learn_purchases where stripe_session_id = p_session_id) then
    return;
  end if;

  insert into public.learn_pending_purchases (stripe_session_id, email, amount_total, currency)
  values (p_session_id, v_email, p_amount_total, lower(p_currency))
  on conflict (stripe_session_id) do nothing;

  select email into v_existing_email from public.learn_pending_purchases
  where stripe_session_id = p_session_id;
  if v_existing_email is distinct from v_email then
    raise exception 'Checkout email mismatch';
  end if;
end;
$$;

create or replace function public.learn_claim_paid_checkouts()
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := (select auth.uid());
  v_email text;
  v_purchase record;
  v_claimed integer := 0;
begin
  select lower(email) into v_email from auth.users
  where id = v_user_id and email_confirmed_at is not null;
  if v_email is null then
    raise exception 'Verified email required';
  end if;

  for v_purchase in
    select stripe_session_id, amount_total, currency
    from public.learn_pending_purchases
    where email = v_email
    for update
  loop
    insert into public.learn_purchases (stripe_session_id, user_id, course_slug, amount_total, currency)
    values (v_purchase.stripe_session_id, v_user_id, 'seo', v_purchase.amount_total, v_purchase.currency)
    on conflict (stripe_session_id) do nothing;

    if not exists (
      select 1 from public.learn_purchases
      where stripe_session_id = v_purchase.stripe_session_id and user_id = v_user_id
    ) then
      raise exception 'Checkout session already belongs to another user';
    end if;

    delete from public.learn_pending_purchases
    where stripe_session_id = v_purchase.stripe_session_id;
    v_claimed := v_claimed + 1;
  end loop;

  if v_claimed > 0 then
    insert into public.learn_course_entitlements (user_id, course_slug)
    values (v_user_id, 'seo')
    on conflict (user_id, course_slug) do nothing;
  end if;
  return v_claimed;
end;
$$;

revoke all on function public.learn_find_confirmed_user_by_email(text) from public, anon, authenticated;
revoke all on function public.learn_record_pending_checkout(text, text, integer, text) from public, anon, authenticated;
revoke all on function public.learn_claim_paid_checkouts() from public, anon;
grant execute on function public.learn_find_confirmed_user_by_email(text) to service_role;
grant execute on function public.learn_record_pending_checkout(text, text, integer, text) to service_role;
grant execute on function public.learn_claim_paid_checkouts() to authenticated;
