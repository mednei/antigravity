# ant_01: Fase A — conta e progresso no Supabase

- Data: 2026-11-26
- Fase: A
- Ambiente: dev
- Status: pendente

## O que foi feito

Implementados cadastro, login e saída com Supabase Auth e uma página de acesso na identidade visual do site.
Preparado o schema de progresso com RLS por aluno e suporte às oito aulas existentes, índices 0 a 7.
Integrada a leitura e escrita do progresso no banco, com fallback local e caches separados por visitante e conta.
Adicionados links de acesso nas oito páginas; a ativação do projeto e os testes reais do usuário continuam pendentes.

Fonte deste registro: quatro commits da Fase A, arquivos atuais e [relatório/instruções da implementação](../../docs/supabase/README.md). Não foram criados projeto, contas ou dados no Supabase. URL e chave pública estão vazias na configuração consultada em 26/11/2026.

## Arquivos tocados

Relação obtida dos commits `266380f`, `ea9667e`, `70c9857` e `f3e5a94`: sete arquivos criados e doze modificados.

- [.env.example](../../.env.example) — modificado.
- [assets/css/style.css](../../assets/css/style.css) — modificado.
- [assets/js/auth.js](../../assets/js/auth.js) — criado.
- [assets/js/course.js](../../assets/js/course.js) — modificado.
- [assets/js/supabase-client.js](../../assets/js/supabase-client.js) — criado.
- [contato.html](../../contato.html) — modificado.
- [docs/README.md](../../docs/README.md) — modificado.
- [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md) — modificado.
- [docs/supabase/README.md](../../docs/supabase/README.md) — criado.
- [docs/supabase/fase-a-schema.sql](../../docs/supabase/fase-a-schema.sql) — criado.
- [github.html](../../github.html) — modificado.
- [index.html](../../index.html) — modificado.
- [login.html](../../login.html) — criado.
- [mongodb.html](../../mongodb.html) — modificado.
- [produtos.html](../../produtos.html) — modificado.
- [sobre.html](../../sobre.html) — modificado.
- [supabase.html](../../supabase.html) — modificado.
- [tests/fase-a-estrutura.py](../../tests/fase-a-estrutura.py) — criado.
- [tests/fase-a.test.cjs](../../tests/fase-a.test.cjs) — criado.

O `assets/js/app.js`, os oito objetos de aula e a chave `antigravity-lab-progress-v1` foram preservados na implementação.

## Testes executados (automatizados)

Resultados executados durante a implementação em 26/11/2026 e documentados no relatório; não reexecutados nesta tarefa de registro:

- `node --check` em `supabase-client.js`, `auth.js`, `course.js` e `app.js`: sem erros de sintaxe.
- `node --test tests/fase-a.test.cjs`: 17 simulações aprovadas, sem falhas. Cobrem modo local, falha de CDN/rede, storage bloqueado, Auth, confirmação de e-mail, upsert/delete, troca de contas, respostas atrasadas e barra da home.
- `python tests/fase-a-estrutura.py`: oito páginas, 198 referências locais válidas, navegação desktop/mobile, ordem dos scripts, labels e feedback acessíveis conferidos.
- Regras CSS de 900px, 680px e 370px: conferidas estaticamente. A revisão visual em navegador não foi realizada porque a ferramenta retornou `The browser access host is unavailable`.
- `git diff --check`: sem erros de whitespace.

As simulações não comprovam funcionamento no banco real nem aplicação efetiva do RLS no projeto do usuário. O SQL foi preparado, mas não executado no Supabase nesta fase.

## Testes do usuário: pendentes

Pré-condição do roteiro de percentual: usar uma conta nova, inicialmente sem aulas concluídas. O curso tem oito aulas e calcula `Math.round(concluídas / 8 × 100)`: **uma aula corresponde a 13%**. Os 17% do roteiro recebido correspondiam ao catálogo antigo de seis aulas; nenhuma alteração de código foi feita para mudar esse cálculo.

1. **Criar o projeto e executar o SQL.** No painel Supabase, criar o projeto, abrir SQL Editor e executar [docs/supabase/fase-a-schema.sql](../../docs/supabase/fase-a-schema.sql). **Esperado:** tabela `public.progresso` criada, RLS habilitado, políticas para linhas do próprio aluno e índices de aula permitidos de 0 a 7. **Resultado:** pendente.
2. **Preencher a configuração pública.** Informar `url` e `anonKey` no topo de [assets/js/supabase-client.js](../../assets/js/supabase-client.js). Usar somente chave pública `anon` ou `publishable`. Servir o site por HTTP/HTTPS. **Esperado:** páginas carregam sem erros no console, com acesso à conta disponível. **Resultado:** pendente.
3. **Configurar o Auth.** Habilitar o provedor Email e adicionar `https://mednei.github.io/antigravity/login.html` às URLs de redirecionamento; se testar localmente, adicionar também a URL local exata. **Esperado:** cadastro/login por e-mail disponíveis e retorno para a página de login permitido. **Resultado:** pendente.
4. **Criar a conta.** Abrir [login.html](../../login.html), escolher Criar conta e preencher nome, e-mail e senha. **Esperado:** com confirmação de e-mail desabilitada, sessão iniciada e redirecionamento para `produtos.html`; com confirmação habilitada, mensagem orientando confirmar o e-mail e, após confirmar e entrar, redirecionamento para `produtos.html`. **Resultado:** pendente.
5. **Concluir a Aula 01.** Com a conta nova autenticada, marcar a primeira aula. **Esperado:** `1 de 8 aulas concluídas`, barra em **13%** e uma linha em `progresso` com `aula_index = 0` e `aluno_id` correspondente à conta, conferida no Table Editor. **Resultado:** pendente.
6. **Recuperar em outro navegador.** Abrir o site em outro navegador e entrar com a mesma conta. **Esperado:** a primeira aula continua concluída, com barra em **13%**, após carregar o progresso da conta. **Resultado:** pendente.
7. **Conferir o modo sem login.** Sair da conta e marcar uma aula ainda não concluída no contexto de visitante. **Esperado:** a marcação funciona em `localStorage`, sem criar ou alterar linha no Supabase; ao recarregar sem entrar, o progresso local é mantido. O progresso do visitante permanece separado do progresso da conta. **Resultado:** pendente.

Complementos necessários para encerrar as pendências já abertas da fase:

8. **Isolamento e exclusão.** Testar duas contas e desmarcar uma aula, inclusive 07/08. **Esperado:** cada conta acessa somente suas linhas; desmarcar remove a linha da própria conta, sem afetar a outra. **Resultado:** pendente.
9. **Revisão visual.** Conferir login/cadastro, campos, feedback e navegação em 900px, 680px e 370px. **Esperado:** conteúdo legível, botões acessíveis e ausência de rolagem horizontal indevida. **Resultado:** pendente.

## Pendências abertas

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

- **76:** configuração do projeto, Auth, URLs e credenciais públicas; testes reais de cadastro/login.
- **77:** execução do schema, persistência e políticas RLS reais, inclusive aulas 07/08 e outro navegador.
- **78:** revisão visual em navegador nos três tamanhos.

O status deste registro permanece **pendente**, aguardando configuração do Supabase e evidências dos testes do usuário. Uma aprovação nas simulações não encerra essas pendências.

## Commits

Os quatro commits locais da implementação da Fase A, em ordem:

- `266380f` — `docs: adiciona schema sql da fase a (supabase)`.
- `ea9667e` — `feat: integra supabase com fallback para localStorage`.
- `70c9857` — `feat: adiciona pagina de login e cadastro`.
- `f3e5a94` — `feat: adiciona link de login na navegacao`.

Esses hashes identificam a implementação, não os commits posteriores deste registro. Nenhum push foi executado nesta tarefa.
