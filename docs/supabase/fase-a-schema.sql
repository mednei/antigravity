-- Antigravity Lab — Fase A (Supabase Auth + progresso).
-- No painel do SEU projeto Supabase, abra SQL Editor > New query,
-- cole este arquivo inteiro e execute com Run. Não executar no navegador.
-- Os alunos são as identidades de auth.users; não há tabela própria de alunos.
-- Capacidade preparada para 26 aulas: índices 0 a 25; o catálogo atual tem 14.
-- As aulas futuras até o índice 25 não precisam de migrations incrementais.
-- O script pode ser reaplicado na tabela desta fase, sem apagar seu progresso.

begin;

create table if not exists public.progresso (
  id uuid primary key default gen_random_uuid(),
  aluno_id uuid not null references auth.users(id) on delete cascade,
  aula_index int not null constraint progresso_aula_index_check
    check (aula_index between 0 and 25),
  concluida_em timestamptz not null default now(),
  unique (aluno_id, aula_index)
);

-- Também permite atualizar uma instalação anterior limitada às seis aulas.
alter table public.progresso drop constraint if exists progresso_aula_index_check;
alter table public.progresso add constraint progresso_aula_index_check
  check (aula_index between 0 and 25);

alter table public.progresso enable row level security;

revoke all on table public.progresso from public, anon;
grant select, insert, update, delete on table public.progresso to authenticated;

drop policy if exists progresso_select_proprio on public.progresso;
create policy progresso_select_proprio on public.progresso
  for select to authenticated
  using ((select auth.uid()) = aluno_id);

drop policy if exists progresso_insert_proprio on public.progresso;
create policy progresso_insert_proprio on public.progresso
  for insert to authenticated
  with check ((select auth.uid()) = aluno_id);

drop policy if exists progresso_update_proprio on public.progresso;
create policy progresso_update_proprio on public.progresso
  for update to authenticated
  using ((select auth.uid()) = aluno_id)
  with check ((select auth.uid()) = aluno_id);

drop policy if exists progresso_delete_proprio on public.progresso;
create policy progresso_delete_proprio on public.progresso
  for delete to authenticated
  using ((select auth.uid()) = aluno_id);

commit;
