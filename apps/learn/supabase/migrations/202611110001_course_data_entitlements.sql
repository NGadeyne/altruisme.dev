-- Course records remain private to their owner and require an active course grant.
-- The entitlement table already permits authenticated users to read only their own grants.

drop policy if exists "Read own plan statuses" on public.learn_plan_statuses;
drop policy if exists "Create own plan statuses" on public.learn_plan_statuses;
drop policy if exists "Update own plan statuses" on public.learn_plan_statuses;

create policy "Read own plan statuses"
  on public.learn_plan_statuses for select to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_plan_statuses.course_slug
    )
  );

create policy "Create own plan statuses"
  on public.learn_plan_statuses for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_plan_statuses.course_slug
    )
  );

create policy "Update own plan statuses"
  on public.learn_plan_statuses for update to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_plan_statuses.course_slug
    )
  )
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_plan_statuses.course_slug
    )
  );

drop policy if exists "Read own personal actions" on public.learn_personal_actions;
drop policy if exists "Create own personal actions" on public.learn_personal_actions;
drop policy if exists "Update own personal actions" on public.learn_personal_actions;
drop policy if exists "Delete own personal actions" on public.learn_personal_actions;

create policy "Read own personal actions"
  on public.learn_personal_actions for select to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_personal_actions.course_slug
    )
  );

create policy "Create own personal actions"
  on public.learn_personal_actions for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_personal_actions.course_slug
    )
  );

create policy "Update own personal actions"
  on public.learn_personal_actions for update to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_personal_actions.course_slug
    )
  )
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_personal_actions.course_slug
    )
  );

create policy "Delete own personal actions"
  on public.learn_personal_actions for delete to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_personal_actions.course_slug
    )
  );

drop policy if exists "Read own module progress" on public.learn_module_progress;
drop policy if exists "Complete own modules" on public.learn_module_progress;
drop policy if exists "Reopen own modules" on public.learn_module_progress;

create policy "Read own module progress"
  on public.learn_module_progress for select to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_module_progress.course_slug
    )
  );

create policy "Complete own modules"
  on public.learn_module_progress for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_module_progress.course_slug
    )
  );

create policy "Reopen own modules"
  on public.learn_module_progress for delete to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.learn_course_entitlements e
      where e.user_id = (select auth.uid())
        and e.course_slug = learn_module_progress.course_slug
    )
  );
