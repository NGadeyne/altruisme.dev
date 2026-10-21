-- États personnels du plan d'action Learn. Le catalogue prédéfini vit dans le code de Learn.
create table public.learn_plan_statuses (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null check (length(course_slug) between 1 and 80),
  action_key text not null check (length(action_key) between 1 and 120),
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'done')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz,
  primary key (user_id, course_slug, action_key)
);

create table public.learn_personal_actions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null check (length(course_slug) between 1 and 80),
  module_id text check (module_id is null or length(module_id) between 1 and 120),
  title text not null check (length(btrim(title)) between 1 and 200),
  description text check (description is null or length(description) <= 4000),
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'done')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz
);

create index learn_personal_actions_owner_course_idx
  on public.learn_personal_actions (user_id, course_slug, created_at);

create function public.learn_set_plan_timestamps()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  if tg_op = 'INSERT' then
    new.created_at := now();
  else
    new.created_at := old.created_at;
  end if;

  if new.status <> 'done' then
    new.completed_at := null;
  elsif tg_op = 'INSERT' then
    new.completed_at := now();
  elsif old.status is distinct from 'done' then
    new.completed_at := now();
  else
    new.completed_at := old.completed_at;
  end if;
  return new;
end;
$$;

create trigger learn_plan_statuses_timestamps
before insert or update on public.learn_plan_statuses
for each row execute function public.learn_set_plan_timestamps();

create trigger learn_personal_actions_timestamps
before insert or update on public.learn_personal_actions
for each row execute function public.learn_set_plan_timestamps();

alter table public.learn_plan_statuses enable row level security;
alter table public.learn_personal_actions enable row level security;

create policy "Read own plan statuses"
on public.learn_plan_statuses for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Create own plan statuses"
on public.learn_plan_statuses for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Update own plan statuses"
on public.learn_plan_statuses for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Read own personal actions"
on public.learn_personal_actions for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Create own personal actions"
on public.learn_personal_actions for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Update own personal actions"
on public.learn_personal_actions for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Delete own personal actions"
on public.learn_personal_actions for delete to authenticated
using ((select auth.uid()) = user_id);

grant select, insert, update on public.learn_plan_statuses to authenticated;
grant select, insert, update, delete on public.learn_personal_actions to authenticated;
