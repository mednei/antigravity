# Ativação do Supabase — schemas preparados para 26 aulas

O catálogo atual tem **18 aulas reais**, índices **0 a 17**. Os schemas aceitam **0 a 25**, preparando os próximos lotes sem migrations incrementais. O progresso considera o total real do array, hoje 18; a capacidade do banco não cria aulas no site.

Segundo o usuário, não há progresso de usuários em produção e o Supabase ainda não está configurado/ativo. Nenhum SQL ou configuração real foi executado pelo Codex nesta tarefa.

## Ativação inicial

1. Criar o projeto no [painel Supabase](https://supabase.com/dashboard) e aguardar sua preparação. Não colocar a senha administrativa no site.
2. Abrir **SQL Editor → New query**, colar [fase-a-schema.sql](./fase-a-schema.sql) inteiro e executar **Run** uma vez. Cria `public.progresso`, índices 0–25 e RLS por usuário de `auth.users`.
3. Para habilitar as anotações existentes, executar também [fase-b-schema.sql](./fase-b-schema.sql) inteiro. Cria `public.anotacoes`, índices 0–25 e suas políticas RLS. Não é nova integração nem upload.
4. Conferir em **Authentication** se o provedor **Email** permite cadastro. Manter ou ajustar a confirmação de e-mail conforme a configuração escolhida; o site respeita o resultado devolvido pelo serviço.
5. Em **Authentication → URL Configuration**, configurar Site URL `https://mednei.github.io/antigravity/` e autorizar `https://mednei.github.io/antigravity/login.html`. Para desenvolvimento, autorizar também a URL local exata usada, por exemplo `http://localhost:8765/login.html`.
6. Em **Settings → API / API Keys**, obter URL do projeto e **somente a chave pública** `anon` ou `publishable`. Preencher `url` e `anonKey` em `SUPABASE_CONFIG` de [supabase-client.js](../../assets/js/supabase-client.js). Nunca usar `service_role`, chave `secret`, senha de banco ou URI MongoDB no frontend.
7. Servir o site por HTTP, abrir [login.html](../../login.html) e seguir o cadastro/login da Fase A. Com confirmação habilitada, aguardar o e-mail; o site não inventa uma sessão.

Os scripts A e B já nascem preparados para 26 aulas e podem ser reaplicados sem apagar suas linhas. **Não executar migrations incrementais na instalação nova.** Os arquivos antigos [primeiros-passos](./20261126-primeiros-passos.sql) e [planos-quotas](./20261126-planos-quotas.sql) permanecem apenas por compatibilidade com referências anteriores; também foram ajustados para não reduzir o limite 0–25 se reaplicados.

## Conferência após ativar

No SQL Editor:

```sql
select conrelid::regclass as tabela, conname, pg_get_constraintdef(oid) as definicao
from pg_constraint
where connamespace = 'public'::regnamespace
  and conname in ('progresso_aula_index_check', 'anotacoes_aula_index_check');
```

Esperado: `aula_index >= 0 AND aula_index <= 25` nas tabelas instaladas. Concluir a Aula 11 e conferir `aula_index = 10` em `progresso`. Entrar em outro navegador para conferir recuperação; usar duas contas para conferir RLS. Execução real permanece pendente, itens 76–77, 80 e 88 do [registro único](../pendencias-verificacao.md).

## Integração existente

- Sem configuração ou login, estudo e progresso funcionam neste navegador com a chave `antigravity-lab-progress-v1`, mantendo um array de índices.
- O limite do SQL não muda o percentual: uma aula concluída em 18 resulta em **6%** por arredondamento. A capacidade de 26 não altera esse denominador.
- Com login, leitura remota prevalece e marcar/desmarcar envia upsert/delete por conta e aula. Caches auxiliares separam contas e visitante; nenhum progresso de visitante é importado automaticamente.
- Em falha de rede, há feedback local e dashboard utilizável. Não existe fila persistente geral para reenvio offline; no próximo carregamento remoto com sucesso, o banco prevalece.
- Se um banco antigo rejeitar a conclusão com erro de constraint (`23514`), o mecanismo existente de `:schema-pending:<id da conta>` preserva a conclusão local. Após corrigir o schema, desmarcar e marcar novamente envia a conclusão. Outro navegador só recebe o que foi gravado no banco.
- Não há fallback local de anotações. A [Fase B](./fase-b-anotacoes.md) mantém seu roteiro funcional; seus schemas agora aceitam 0–25.
- O site não lê `.env` nem executa SQL. Não foram alterados login nem integração no Lote 1.

## Testes locais

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs tests/lote1.test.cjs tests/lote2.test.cjs
python tests/fase-a-estrutura.py
```

Simulações não comprovam SQL/RLS no projeto real. Resultados atuais e roteiro manual estão no [registro ant_07](../../registros/ant/ant_07_lote2-aulas-15-18.md); o [registro ant_06](../../registros/ant/ant_06_lote1-aulas-11-14.md) preserva os resultados do lote anterior.

## Referências da integração

- [Cadastro e metadata](https://supabase.com/docs/reference/javascript/auth-signup).
- [Login com senha](https://supabase.com/docs/reference/javascript/auth-signinwithpassword).
- [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).
- [Upsert](https://supabase.com/docs/reference/javascript/upsert).

As pendências anteriores não foram encerradas por preparar os schemas.
