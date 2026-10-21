-- A grant is created by an administrator after purchase verification.
-- Authenticated users may only read their own grants; they cannot grant access.
create table if not exists public.learn_course_entitlements (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null check (length(course_slug) between 1 and 80),
  granted_at timestamptz not null default now(),
  primary key (user_id, course_slug)
);

alter table public.learn_course_entitlements enable row level security;

revoke all on public.learn_course_entitlements from anon, authenticated;
grant select on public.learn_course_entitlements to authenticated;

create policy "Learners can read their own course grants"
  on public.learn_course_entitlements
  for select
  to authenticated
  using (user_id = (select auth.uid()));
