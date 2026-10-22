-- Progression pédagogique, indépendante des actions du plan.
create table if not exists public.learn_module_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null check (length(course_slug) between 1 and 80),
  module_id text not null check (length(module_id) between 1 and 120),
  completed_at timestamptz not null default now(),
  primary key (user_id, course_slug, module_id)
);

alter table public.learn_module_progress enable row level security;

create policy "Read own module progress"
  on public.learn_module_progress for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Complete own modules"
  on public.learn_module_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Reopen own modules"
  on public.learn_module_progress for delete to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, delete on public.learn_module_progress to authenticated;
