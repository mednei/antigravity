-- Compatibilidade com roteiro antigo; desnecessário em instalação nova.
-- Reaplicar este arquivo não reduz a capacidade de 26 aulas.
-- Antigravity Lab: capacidade de 26 aulas, índices 0 a 25.
-- No projeto já configurado da Fase A: SQL Editor > New query > Run.
-- Aplicar DEPOIS dos schemas A e B instalados. Não apaga linhas nem altera RLS.
-- A tabela anotacoes é opcional; se instalar B depois, reaplique esta migration.
begin;

alter table public.progresso drop constraint if exists progresso_aula_index_check;
alter table public.progresso add constraint progresso_aula_index_check
  check (aula_index between 0 and 25);

do $$
begin
  if to_regclass('public.anotacoes') is not null then
    alter table public.anotacoes drop constraint if exists anotacoes_aula_index_check;
    alter table public.anotacoes add constraint anotacoes_aula_index_check
      check (aula_index between 0 and 25);
  end if;
end;
$$;

commit;
