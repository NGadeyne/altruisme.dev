-- Only the trusted Stripe webhook can record a purchase and grant course access.
create table if not exists public.learn_purchases (
  stripe_session_id text primary key,
  user_id uuid not null references auth.users (id) on delete restrict,
  course_slug text not null check (course_slug = 'seo'),
  amount_total integer not null check (amount_total > 0),
  currency text not null check (length(currency) = 3),
  purchased_at timestamptz not null default now()
);

alter table public.learn_purchases enable row level security;
revoke all on public.learn_purchases from anon, authenticated;

create or replace function public.learn_find_user_by_email(p_email text)
returns uuid
language sql
security definer
set search_path = ''
as $$
  select id from auth.users where lower(email) = lower(p_email) limit 1;
$$;

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
  select id into v_user_id from auth.users where lower(email) = lower(p_email) limit 1;
  if v_user_id is null then
    raise exception 'No Learn account for paid checkout';
  end if;

  select user_id into v_existing_user_id
  from public.learn_purchases where stripe_session_id = p_session_id;
  if v_existing_user_id is not null and v_existing_user_id <> v_user_id then
    raise exception 'Checkout session already belongs to another user';
  end if;

  insert into public.learn_purchases (stripe_session_id, user_id, course_slug, amount_total, currency)
  values (p_session_id, v_user_id, 'seo', p_amount_total, p_currency)
  on conflict (stripe_session_id) do nothing;

  insert into public.learn_course_entitlements (user_id, course_slug)
  values (v_user_id, 'seo')
  on conflict (user_id, course_slug) do nothing;

  return v_user_id;
end;
$$;

revoke all on function public.learn_find_user_by_email(text) from public, anon, authenticated;
revoke all on function public.learn_record_paid_checkout(text, text, integer, text) from public, anon, authenticated;
grant execute on function public.learn_find_user_by_email(text) to service_role;
grant execute on function public.learn_record_paid_checkout(text, text, integer, text) to service_role;
