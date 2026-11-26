# Fase A — conta e progresso no Supabase

Implementação de estudo: Supabase Auth e tabela de progresso, com funcionamento local quando o serviço não estiver configurado ou acessível. O catálogo atual tem **dez aulas**, índices **0 a 9**. As nove anteriores mantêm seus índices e conteúdos.

## Preparar o projeto

1. Entre no [painel do Supabase](https://supabase.com/dashboard) e crie seu projeto. Aguarde a preparação do banco. A senha administrativa do banco permanece no painel/gerenciador de segredos, nunca no código do site.
2. Abra **SQL Editor → New query**. Cole o conteúdo completo de [fase-a-schema.sql](./fase-a-schema.sql) e execute **Run**. O script cria `public.progresso`, habilita RLS e permite operações somente nas linhas do usuário autenticado. Não existe tabela própria de alunos: a identidade vem de `auth.users`.
3. Em **Authentication**, confira se o provedor **Email** permite cadastro. Para este estudo, a confirmação de e-mail pode permanecer no padrão do seu projeto ou ser desativada por você nas opções do provedor. O site não muda essa configuração.
4. Em **Authentication → URL Configuration**, informe como **Site URL** `https://mednei.github.io/antigravity/`. Adicione `https://mednei.github.io/antigravity/login.html` à lista de URLs de redirecionamento. Para testar localmente, adicione também a URL local exata, por exemplo `http://localhost:8765/login.html`.
5. Em **Settings → API / API Keys**, copie a URL do projeto e **somente a chave pública** `anon` ou `publishable`. Os nomes dos menus podem variar com o painel.
6. Preencha `url` e `anonKey` no objeto `SUPABASE_CONFIG`, no topo de [supabase-client.js](../../assets/js/supabase-client.js). O nome do campo continua `anonKey` para aceitar a configuração pedida; uma chave `publishable` também funciona. Nunca use `service_role`, `sb_secret_...`, senha de banco ou URI MongoDB no frontend.
7. Sirva o site por HTTP local ou GitHub Pages e abra [login.html](../../login.html). O código não lê `.env`, não contém credenciais reais e não cria o projeto nem executa SQL automaticamente.

## Cadastro e sessão

- O nome informado no cadastro é enviado em `user_metadata.nome`. É usado somente para apresentação do primeiro nome, inserido como texto na navegação.
- Se a confirmação de e-mail estiver habilitada, o cadastro exibe orientação e aguarda confirmação; não simula uma sessão autenticada. Se estiver desabilitada e o Supabase devolver a sessão, o cadastro abre as aulas imediatamente.
- O login com e-mail/senha abre `produtos.html`. Links de saída encerram a sessão neste navegador; a sessão é gerenciada pela biblioteca oficial.
- As funções estão em `window.AntigravityAuth`: `cadastro(email, senha, nome)`, `login(email, senha)`, `logout()` e `obterUsuarioAtual()` (assíncrona).

## Regras de progresso

- Sem login, o comportamento é local. A chave `antigravity-lab-progress-v1` mantém o array de índices inteiros concluídos.
- Com login, a leitura do banco prevalece no carregamento. Marcar faz `upsert` por `aluno_id,aula_index`; desmarcar faz `delete` com os dois filtros. A tabela registra aulas concluídas, por isso desmarcar remove a linha.
- O cache ativo usa a chave original. Chaves auxiliares com sufixo `:owner`, `:guest` e `:<id da conta>` separam visitante e contas no mesmo navegador. Nenhum progresso de visitante é enviado à conta automaticamente. Ao sair, o progresso do visitante reaparece.
- Cliques durante a leitura são preservados; escritas são enviadas em ordem. Respostas de uma sessão anterior não substituem o progresso da sessão atual.
- Em falha de rede, o dashboard permanece utilizável e informa que a alteração ficou neste navegador. **Não há fila persistente para reenviar alterações offline.** Ao recarregar com a conta disponível, o banco volta a prevalecer. Esta é a regra simples da Fase A.
- Sem URL/chave, ou com falha no CDN, as páginas e o progresso local continuam disponíveis. A biblioteca v2 só é carregada quando há configuração pública preenchida.

## Verificação

As simulações de Auth, leitura, upsert, exclusão, cache e falhas estão em [fase-a.test.cjs](../../tests/fase-a.test.cjs). Elas não acessam rede nem um banco real.

```powershell
node --check assets/js/supabase-client.js
node --check assets/js/auth.js
node --check assets/js/course.js
node --check assets/js/app.js
node --test tests/fase-a.test.cjs
python tests/fase-a-estrutura.py
```

Resultado da verificação em 26/11/2026: 17 simulações aprovadas, JavaScript sem erros de sintaxe e 198 referências locais válidas nas oito páginas. A chave original, os oito objetos de aula e o `app.js` foram comparados à versão anterior e preservados. As regras CSS para 900px, 680px e 370px foram conferidas; a revisão visual não pôde ser feita porque a ferramenta de navegador estava indisponível (pendência 78).

Depois de preencher seu projeto, verificar manualmente:

1. Cadastrar, confirmar e-mail se necessário, entrar e sair.
2. Marcar/desmarcar inclusive as aulas 07 e 08 e conferir `public.progresso` no painel.
3. Abrir a mesma conta em outro navegador e conferir o progresso recuperado.
4. Usar duas contas de teste e conferir que uma não lê nem altera as linhas da outra, validando as políticas RLS na instalação real.
5. Conferir o cadastro/login e os menus em 900px, 680px e 370px.

## Migration atual: planos e quotas, dez aulas

Após os schemas instalados, execute [20261126-planos-quotas.sql](./20261126-planos-quotas.sql) no **SQL Editor → New query → Run** do mesmo projeto. Este é o arquivo a aplicar **por último**: amplia `progresso` e, se existir, `anotacoes` para **0 a 9**, contemplando as aulas 09 e 10. Preserva registros e políticas RLS. Basta ter a Fase A instalada; a migration anterior de nove aulas não é pré-requisito.

Se instalar/reaplicar B ou qualquer script anterior depois, reaplique esta migration atual. Sem ela, a Aula 10 pode funcionar apenas com o cache local de progresso ao receber erro de constraint; após aplicar, desmarque e marque novamente a conclusão para sincronizar. Não existe fallback local de anotações. O mecanismo de progresso já implementado não precisou ser alterado nesta conversão.

Na consulta SQL abaixo, o resultado **atual** esperado é limite `aula_index >= 0 AND aula_index <= 9` nas tabelas instaladas. Confira `aula_index = 9` em `progresso` e a recuperação em outro navegador. Aplicação e validações reais ficam com o usuário, pendências 84–85.

## Histórico da migration anterior: nove aulas

Os schemas históricos A e B têm limite superior 7. Após instalar os schemas que utilizar, execute o arquivo completo [20261126-primeiros-passos.sql](./20261126-primeiros-passos.sql) no **SQL Editor → New query → Run** do mesmo projeto Supabase. A migration amplia o limite de `progresso` e, se existir, `anotacoes` para **0 a 8**, sem apagar registros ou alterar as políticas RLS. A ampliação de anotações é necessária para a Aula 09 também aceitar a funcionalidade da Fase B.

Se instalar ou reaplicar algum schema histórico depois, reaplique a migration por último. Se usar apenas a Fase A, a ausência de `anotacoes` é aceita; ao instalar B posteriormente, execute novamente a migration.

Sem executar a migration, o banco pode rejeitar o novo índice com erro de constraint (`23514`). A conclusão fica no cache local da própria conta e é preservada ao recarregar neste navegador; uma chave auxiliar `antigravity-lab-progress-v1:schema-pending:<id da conta>` identifica essas conclusões. A chave original continua sendo um array de índices. Não há envio automático posterior: depois da migration, desmarque e marque novamente a aula para sincronizar. Outros navegadores só recebem aulas já gravadas no banco. Essa exceção para schema antigo não altera a regra de falhas de rede da Fase A.

O fallback acima é de **progresso**. As anotações continuam dependentes do Supabase; sem migration, uma tentativa na Aula 09 pode mostrar o feedback de erro existente, sem gravar a anotação. Nenhuma mudança foi feita no fluxo de anotações.

Para conferir as constraints no SQL Editor após aplicar:

```sql
select conrelid::regclass as tabela, conname, pg_get_constraintdef(oid) as definicao
from pg_constraint
where connamespace = 'public'::regnamespace
  and conname in ('progresso_aula_index_check', 'anotacoes_aula_index_check');
```

Resultado histórico desta migration anterior: limite `aula_index >= 0 AND aula_index <= 8`. Para o catálogo atual, use a migration de dez aulas acima; aplicar somente o arquivo antigo não contempla a Aula 10. As pendências 82–83 não foram declaradas encerradas por esta atualização.

## Fontes oficiais consultadas em 26/11/2026

- [Biblioteca JavaScript e CDN](https://supabase.com/docs/reference/javascript/installing).
- [Cadastro e metadata; sessão com ou sem confirmação](https://supabase.com/docs/reference/javascript/auth-signup).
- [Login com senha](https://supabase.com/docs/reference/javascript/auth-signinwithpassword).
- [Mudanças de sessão](https://supabase.com/docs/reference/javascript/auth-onauthstatechange).
- [Upsert](https://supabase.com/docs/reference/javascript/upsert).
- [Políticas RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).

As pendências de verificação real estão no [registro único](../pendencias-verificacao.md), itens 76 a 78.

A Fase B acrescenta anotações com um [schema e roteiro separados](./fase-b-anotacoes.md), reutilizando esta configuração. Ela não altera a tabela de progresso nem encerra as pendências da Fase A.
