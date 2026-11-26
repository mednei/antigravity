-- Antigravity Lab — Fase B: anotações por aula, sem upload de arquivos.
-- Execute este arquivo inteiro em SQL Editor > New query > Run,
-- no mesmo projeto Supabase configurado na Fase A.
-- Capacidade preparada para 26 aulas: índices 0 a 25; o catálogo atual tem 14.
-- O script pode ser reaplicado sem remover anotações existentes.

begin;

create table if not exists public.anotacoes (
  id uuid primary key default gen_random_uuid(),
  aluno_id uuid not null references auth.users(id) on delete cascade,
  aula_index int not null constraint anotacoes_aula_index_check
    check (aula_index between 0 and 25),
  texto text not null default '',
  print_url text,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

-- Amplia também uma eventual instalação anterior com apenas seis aulas.
alter table public.anotacoes drop constraint if exists anotacoes_aula_index_check;
alter table public.anotacoes add constraint anotacoes_aula_index_check
  check (aula_index between 0 and 25);

create index if not exists anotacoes_aluno_aula_data_idx
  on public.anotacoes (aluno_id, aula_index, criado_em desc);

alter table public.anotacoes enable row level security;
revoke all on table public.anotacoes from public, anon;
grant select, insert, update, delete on table public.anotacoes to authenticated;

drop policy if exists anotacoes_select_proprias on public.anotacoes;
create policy anotacoes_select_proprias on public.anotacoes
  for select to authenticated
  using ((select auth.uid()) = aluno_id);

drop policy if exists anotacoes_insert_proprias on public.anotacoes;
create policy anotacoes_insert_proprias on public.anotacoes
  for insert to authenticated
  with check ((select auth.uid()) = aluno_id);

drop policy if exists anotacoes_update_proprias on public.anotacoes;
create policy anotacoes_update_proprias on public.anotacoes
  for update to authenticated
  using ((select auth.uid()) = aluno_id)
  with check ((select auth.uid()) = aluno_id);

drop policy if exists anotacoes_delete_proprias on public.anotacoes;
create policy anotacoes_delete_proprias on public.anotacoes
  for delete to authenticated
  using ((select auth.uid()) = aluno_id);

commit;
