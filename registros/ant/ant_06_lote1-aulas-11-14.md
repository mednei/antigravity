# ant_06: Lote 1 — aulas 11 a 14

- Data: 2026-11-26
- Fase: C
- Ambiente: dev
- Status: pendente

## O que foi feito

Implementadas quatro aulas nos índices 10–13, mantendo intactos os dez objetos anteriores.
Lidas integralmente as seis fontes e pesquisados 29 itens na documentação oficial atual, sem executar CLI agy.
Confirmados e removidos os itens 1 e 2; os demais permanecem com observações e escopos delimitados, fora do site quando não comprovados.
Preparados schemas iniciais para 26 aulas; catálogo com 14 aulas reais e duas trilhas, sem aviso de recálculo ou badges.
Executados testes automatizados e conferência estrutural; ativação do Supabase e validação visual/didática ficam pendentes para o usuário.

### Escopo final recebido

O último texto anexado substituiu o pedido anterior de 26 aulas no array, aviso de recálculo e badges cinza. O escopo final é **14 aulas reais**, índices **0–13**, progresso calculado sobre **14**, capacidade SQL **0–25**, sem migrations incrementais na instalação nova e sem itens duvidosos nas aulas. Segundo o usuário, não há progresso de usuários em produção e o Supabase não está ativo/configurado. Não foi criada integração nova nem executado SQL remoto.

### Aulas e fontes utilizadas

| Aula / índice | Título | Fonte relativa à raiz | Duração estimada |
|---|---|---|---|
| 11 / 10 | Contas, perfis e workspaces | docs/01-primeiros-passos/contas-perfis-workspaces.md | 5 min |
| 12 / 11 | Arquitetura do agente e ambientes de trabalho | docs/02-formacao-agentes/01-fundamentos-plataforma-agentica.md + 02-os-4-pilares.md, referido pela fonte e pelo plano aprovado | 8 min |
| 13 / 12 | Ciclo, regras e permissões | docs/02-formacao-agentes/03-ciclo-agentico-e-governanca.md | 8 min |
| 14 / 13 | Planos, artefatos e relatório de entrega | docs/01-primeiros-passos/planos-quotas-rate-limits.md + docs/02-formacao-agentes/04-artefatos-e-walkthrough.md | 8 min |

Fontes preservadas, sem completar lacunas. As atividades de leitura orientada e as durações estimadas são organização didática da conversão, não novas afirmações atribuídas ao professor. A atividade da Aula 14 preserva a prática de validador de CPF com histórico proposta no MD.

### Classificação de conteúdo por aula

| Aula | Entra | Não entra | Cinza |
|---|---|---|---|
| 11 | Credenciais; separação metodológica estudo/produção; autenticação com modalidade explícita. | Conjunto não comprovado de métodos, cofres, revogação, comandos e perfis dos itens 6–11. | Nenhum. |
| 12 | Modelo, harness e ferramentas; quatro frentes como divisão didática; CLI e SDK confirmados. | Nomenclaturas comerciais e contratos de ferramentas ainda não comprovados, itens 3, 4 e 40–43. | Nenhum. |
| 13 | Ciclo, princípios, regras e permissões; AGENTS.md/GEMINI.md e Request Review com fonte e escopo explícitos. | Schemas, caminhos, modos, padrões e garantias ainda não comprovados, itens 5, 12, 13, 24–27, 33 e 41. | Nenhum. |
| 14 | Plano, revisão, comentários e walkthrough; consumo relacionado à Aula 10; prática do MD. | Garantias não comprovadas dos itens 14, 16, 17, 35 e 37–39; duplicação dos detalhes já tratados na Aula 10. | Nenhum. |

### Pesquisa dos itens VERIFICAR

Consulta em **26/11/2026**. Veredito refere-se ao item completo. Partes comprovadas de itens compostos podem entrar delimitadas, mas o item permanece enquanto houver outra afirmação sem comprovação. “Não confirmado” não equivale a afirmar impossibilidade do recurso.

Descrição completa de cada resultado, motivos e versões/escopos consultados: [pesquisa editorial do Lote 1](../../docs/02-formacao-agentes/lote-1-verificacao.md).

| Item | Veredito | Fontes oficiais consultadas |
|---|---|---|
| 11 | Cuidados com credenciais; separação metodológica de estudo/produção; autenticação com escopo delimitado. | Nenhum; sem badges. |
| 12 | Modelo/harness/ferramentas; quatro frentes explicitamente didáticas; CLI e SDK dos itens 1 e 2 confirmados. | Nenhum; sem badges. |
| 13 | Ciclo; princípios e regras; AGENTS.md/GEMINI.md e Request Review apenas no escopo documentado. | Nenhum; sem badges. |
| 14 | Plano, revisão e relatório; comentários documentados; referência ao consumo já abordado na aula 10; prática do validador de CPF do MD. | Nenhum; sem badges. |
| 1 | Confirmado | [inicio](https://antigravity.google/docs/getting-started/); [auth](https://antigravity.google/docs/install/) |
| 2 | Confirmado | [sdk](https://antigravity.google/docs/sdk/overview/); [ci](https://codelabs.developers.google.com/agy-cli-sdk-code-review?hl=en) |
| 3 | Parcial | [settings](https://antigravity.google/docs/settings); [plan](https://antigravity.google/docs/implementation-plan/) |
| 4 | Parcial | [vscode](https://antigravity.google/docs/ide/extensions/vscode/) |
| 5 | Parcial | [agent](https://antigravity.google/docs/agent-settings/); [settings](https://antigravity.google/docs/settings) |
| 6 | Parcial | [auth](https://antigravity.google/docs/install/) |
| 7 | Parcial | [auth](https://antigravity.google/docs/install/); [changes](https://antigravity.google/docs/changelog) |
| 8 | Não confirmado | [auth](https://antigravity.google/docs/install/) |
| 9 | Parcial | [auth](https://antigravity.google/docs/install/) |
| 10 | Não confirmado | [auth](https://antigravity.google/docs/install/); [cli](https://antigravity.google/docs/cli/reference) |
| 11 | Não confirmado | [settings](https://antigravity.google/docs/settings); [auth](https://antigravity.google/docs/install/) |
| 12 | Parcial | [rules](https://antigravity.google/docs/rules/); [settings](https://antigravity.google/docs/settings) |
| 13 | Parcial | [perms](https://antigravity.google/docs/permissions) |
| 14 | Parcial | [plans](https://antigravity.google/docs/plans) |
| 16 | Parcial | [retry](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/examples/getting_started/customizing_retries.md) |
| 17 | Não confirmado | [browser](https://antigravity.google/docs/browser) |
| 24 | Não confirmado | [settings](https://antigravity.google/docs/settings); [cli](https://antigravity.google/docs/cli/reference) |
| 25 | Parcial | [rules](https://antigravity.google/docs/rules/) |
| 26 | Parcial | [agent](https://antigravity.google/docs/agent-settings/) |
| 27 | Parcial | [perms](https://antigravity.google/docs/permissions); [agent](https://antigravity.google/docs/agent-settings/) |
| 33 | Parcial | [cli](https://antigravity.google/docs/cli/reference); [agents](https://antigravity.google/docs/cli/commands/agents) |
| 35 | Parcial | [cli](https://antigravity.google/docs/cli/reference); [agent](https://antigravity.google/docs/agent-settings/) |
| 37 | Parcial | [plan](https://antigravity.google/docs/implementation-plan/); [walk](https://antigravity.google/docs/walkthrough/) |
| 38 | Não confirmado | [plan](https://antigravity.google/docs/implementation-plan/); [walk](https://antigravity.google/docs/walkthrough/) |
| 39 | Parcial | [plan](https://antigravity.google/docs/implementation-plan/) |
| 40 | Não confirmado | [sdk](https://antigravity.google/docs/sdk/overview/); [cli](https://antigravity.google/docs/cli/reference) |
| 41 | Não confirmado | [sdk](https://antigravity.google/docs/sdk/overview/); [perms](https://antigravity.google/docs/permissions) |
| 42 | Parcial | [sdk](https://antigravity.google/docs/sdk/overview/); [cli](https://antigravity.google/docs/cli/reference) |
| 43 | Parcial | [browser](https://antigravity.google/docs/browser) |

Somente **1 e 2** foram removidos da tabela central; IDs não renumerados. Os outros **27** continuam nela com resultado da pesquisa. Os marcadores dos MDs que apontavam para os itens encerrados permanecem preservados por instrução explícita de não editar fontes; a evidência e o rodapé da tabela central registram seu encerramento.

## Arquivos tocados

- `assets/js/course.js`: quatro objetos novos e agrupamento das aulas 1–10 em Trilha principal e 11–14 em Formação em agentes.
- `index.html` e `produtos.html`: contadores e descrição do total real.
- `docs/supabase/fase-a-schema.sql` e `fase-b-schema.sql`: constraints iniciais 0–25; RLS e operações existentes preservados.
- `docs/supabase/20261126-primeiros-passos.sql` e `20261126-planos-quotas.sql`: compatibilidade com roteiros anteriores, sem rebaixar capacidade se reaplicados; não necessários na instalação nova.
- `docs/supabase/README.md` e `fase-b-anotacoes.md`: ativação sem migrations incrementais e capacidade atualizada.
- `docs/README.md`: referência ao lote e prevalência do roteiro atual de instalação.
- `docs/02-formacao-agentes/lote-1-verificacao.md`: fontes e decisões dos 29 itens.
- `docs/pendencias-verificacao.md`: remoções 1/2, observações dos demais e pendências 87–88.
- `tests/fase-a.test.cjs`, `primeiros-passos.test.cjs` e `planos-quotas.test.cjs`: expectativas compatíveis com o total real e os schemas atuais.
- `tests/lote1.test.cjs`: preservação, conteúdo, trilhas, progresso e rastreabilidade das decisões editoriais.
- `registros/ant/ant_06_lote1-aulas-11-14.md`: este registro.

Alterações de interface já existentes antes deste lote foram preservadas no diretório de trabalho e separadas dos commits: menu desdobrável/fixação, seus estilos, registro ant_05 e pendência 86. `.env.example` e a correção anterior do cursor do login também ficaram fora dos commits. Login, WhatsApp, anotações, menu mobile e cópia de comandos não foram modificados pelo Lote 1.

## Testes executados (automatizados)

- `node --check assets/js/course.js`: **aprovado**, saída 0.
- `node --check assets/js/course-menu.js`: **aprovado**, saída 0; script da interface anterior preservado.
- Suítes Fase A, Fase B, Primeiros passos, Planos/quotas e Lote 1: **50 testes aprovados, zero falhas**.
- `python tests/fase-a-estrutura.py`: **aprovado**, oito páginas, **202 referências locais válidas**, scripts e menus completos; `app.js` preservado.

Comprovados nas simulações: 14 aulas e índices únicos 0–13; dez objetos anteriores e seis MDs intactos; nenhum VERIFICAR/badge nas aulas; duas trilhas (10 + 4); `[0,1,2]` mantido e percentual 21%; concluir Aula 11 conserva `[0,1,2,10]`, percentual 29% e recarga; schemas com 0–25; todos os itens removidos com fonte e todos os mantidos ainda na tabela.

Não foram executados navegador, SQL, cadastro real, CLI agy ou testes de isolamento reais no Supabase. Testes simulados não comprovam ativação do serviço. As validações automatizadas foram executadas porque o último pedido as solicitou expressamente, substituindo a orientação anterior de deixá-las com o usuário.

Comandos para repetição pelo usuário, na raiz:

```powershell
node --check assets/js/course.js
node --check assets/js/course-menu.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs tests/lote1.test.cjs
python tests/fase-a-estrutura.py
python -m http.server 8765
```

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html`. **Esperado:** 14 aulas; Trilha principal reúne 1–10 e Formação em agentes reúne 11–14. Abrir os menus para ver as aulas; leitura ampla quando desafixado e navegação visível quando fixado, conforme a interface já preparada. **Resultado:** pendente.
2. Abrir cada aula 11–14. **Esperado:** objetivo, corpo, conceitos, exercício e resultado esperado coerentes com as fontes; sem badges ou itens duvidosos. **Resultado:** pendente.
3. Com progresso local vazio, concluir Aula 11. **Esperado:** 1 de 14, **7%**. Recarregar mantém a conclusão. Se já houver outras marcações locais, usar `Math.round(concluídas / 14 * 100)`. **Resultado:** pendente.
4. Conferir pesquisa e tabela central. **Esperado:** itens 1 e 2 removidos da tabela, com fontes neste registro; outros 27 pesquisados mantidos com observações. MDs originais permanecem intactos. **Resultado:** pendente.
5. Para ativar Supabase, seguir `docs/supabase/README.md`: criar/configurar projeto, executar `fase-a-schema.sql` e, para anotações, `fase-b-schema.sql`, preencher só URL/chave pública e configurar Auth/redirecionamentos. **Esperado:** schemas já aceitam 0–25, sem migrations incrementais; RLS ativo. **Resultado:** pendente.
6. Após ativar, entrar com uma conta e concluir Aula 11. Abrir outra sessão/navegador com a mesma conta. **Esperado:** `aula_index = 10` gravado e recuperado; conferir duas contas para validar isolamento. Sem configuração, localStorage continua funcionando. **Resultado:** pendente.
7. Conferir menu, leitura, progresso e anotações em 900px, 680px e 370px. **Esperado:** sem perda das funcionalidades existentes nem rolagem horizontal indevida. **Resultado:** pendente.

## Pendências abertas

- **87:** revisão manual visual/didática das quatro aulas e trilhas.
- **88:** ativação real do Supabase, schemas, Auth e RLS; informados pelo usuário como ainda não ativos.
- **3–14, 16, 17, 24–27, 33, 35, 37–43:** itens pesquisados que continuam sem confirmação integral, detalhados na tabela de evidências.
- Pendências anteriores mantêm seu estado; testes simulados não encerram revisão visual ou ativação real. A pendência 86 é da interface anterior e ficou fora dos commits do lote.

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

## Commits

- `707a198` — `feat: implementa lote 1 com aulas 11 a 14`.
- `c9512f6` — `chore: ajusta schema supabase para 26 aulas`.
- `fdd11b2` — `style: agrupamento por trilha no catalogo`.
- `2bdf152` — `docs: atualiza pendencias de verificacao apos pesquisa do lote 1`.

Registro em commit documental posterior para conter os quatro hashes reais. Commits locais na main, sem push.
