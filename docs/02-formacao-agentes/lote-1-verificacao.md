# Lote 1: pesquisa editorial e classificação

- Consulta: **26/11/2026**.
- Escopo: documentação oficial atual; nenhum teste de CLI agy, alteração de permissão ou inspeção de credenciais.
- Os MDs-fonte permanecem intactos, inclusive marcadores de itens encerrados. O estado atual está na tabela central e nesta evidência, sem renumerar IDs.
- Um item composto só sai da tabela quando o escopo completo foi confirmado. Confirmações parciais não autorizam publicar suas demais afirmações.

## Classificação por aula

| Aula | Entra | Não entra | Cinza |
|---|---|---|---|
| 11 | Cuidados com credenciais; separação metodológica de estudo/produção; autenticação com escopo delimitado. | Fluxos, cofres, provedores, perfis e comandos não confirmados dos itens 6–11. | Nenhum; sem badges. |
| 12 | Modelo/harness/ferramentas; quatro frentes explicitamente didáticas; CLI e SDK dos itens 1 e 2 confirmados. | Nomes comerciais e contratos não comprovados dos itens 3, 4 e 40–43. | Nenhum; sem badges. |
| 13 | Ciclo; princípios e regras; AGENTS.md/GEMINI.md e Request Review apenas no escopo documentado. | Schemas, caminhos, padrões, modos e garantias não confirmados dos itens 5, 12, 13, 24–27, 33 e 41. | Nenhum; sem badges. |
| 14 | Plano, revisão e relatório; comentários documentados; referência ao consumo já abordado na aula 10; prática do validador de CPF do MD. | Garantias não confirmadas dos itens 14, 16, 17, 35 e 37–39; repetição do catálogo de planos da aula 10. | Nenhum; sem badges. |

Estimativas de 5/8/8/8 minutos e atividades de leitura orientada são organização didática da conversão, não duração medida nem exercício adicional atribuído ao professor. A prática da Aula 14 tem origem expressa no MD de artefatos.

## Veredito por item

| Item | Veredito | Resultado e decisão | Fontes oficiais consultadas |
|---|---|---|---|
| 1 | Confirmado | CLI agy, agy --version, configuração de terminal interativa e uso remoto por SSH documentados; removido da tabela. Não foi executada a CLI nesta tarefa. | [inicio](https://antigravity.google/docs/getting-started/); [auth](https://antigravity.google/docs/install/) |
| 2 | Confirmado | SDK Python oficial e uso em CI para revisão de Pull Requests documentados; removido da tabela. | [sdk](https://antigravity.google/docs/sdk/overview/); [ci](https://codelabs.developers.google.com/agy-cli-sdk-code-review?hl=en) |
| 3 | Parcial | A divisão em quatro frentes é didática. Não confirmados em conjunto os nomes Command Center/Agent Manager/Manager View, Inbox e aprovação em lote. | [settings](https://antigravity.google/docs/settings); [plan](https://antigravity.google/docs/implementation-plan/) |
| 4 | Parcial | Extensão e backend local confirmados; base OpenVSCode/OpenVSCode Server e conjunto IPC/RPC/webview/LSP da apostila não comprovados. | [vscode](https://antigravity.google/docs/ide/extensions/vscode/) |
| 5 | Parcial | Request Review existe como preset atual; caminho e rótulo Terminal Execution Policy = Request Review do original não correspondem integralmente à documentação atual. Há configurações anteriores distintas para contas empresariais. | [agent](https://antigravity.google/docs/agent-settings/); [settings](https://antigravity.google/docs/settings) |
| 6 | Parcial | OAuth de conta Google, modalidades empresariais, ADC e chave no escopo documentado da CLI têm descrição oficial. Não confirmada a equivalência de todo o conjunto SAML/OIDC/API Key/ADC como login genérico da IDE. | [auth](https://antigravity.google/docs/install/) |
| 7 | Parcial | OAuth e referências a keyring são documentados. Não confirmado o conjunto de porta fixa 51123, loopback e armazenamento obrigatório nos três cofres do SO em todas as modalidades. | [auth](https://antigravity.google/docs/install/); [changes](https://antigravity.google/docs/changelog) |
| 8 | Não confirmado | Não localizada garantia completa de MFA/FIDO2, todos os provedores citados e revogação de todas as instâncias após desligamento, no escopo do produto. | [auth](https://antigravity.google/docs/install/) |
| 9 | Parcial | GEMINI_API_KEY é documentada para a CLI com configuração específica. Não há confirmação de fallback automático universal da IDE nem de equivalência entre modalidades. | [auth](https://antigravity.google/docs/install/) |
| 10 | Não confirmado | Não localizado o trio agy auth status/login/logout como descrito; a documentação apresenta outros fluxos de autenticação e sessão. Nenhum desses comandos foi executado. | [auth](https://antigravity.google/docs/install/); [cli](https://antigravity.google/docs/cli/reference) |
| 11 | Não confirmado | Não confirmados perfis nativos Estudo/Produção que reúnam modelos, políticas e aprovação de planos, nem a localização universal dos controles citados. | [settings](https://antigravity.google/docs/settings); [auth](https://antigravity.google/docs/install/) |
| 12 | Parcial | Há escopos e arquivos documentados, mas a estrutura única .antigravity/ com todos os arquivos da apostila não foi confirmada; os caminhos variam por recurso e modalidade. | [rules](https://antigravity.google/docs/rules/); [settings](https://antigravity.google/docs/settings) |
| 13 | Parcial | Há políticas de acesso e sandbox; não confirmados filesystem.restrictToWorkspace/allowedExternalPaths e confinamento rígido universal. Aprovação pode autorizar recursos fora do workspace. | [perms](https://antigravity.google/docs/permissions) |
| 14 | Parcial | Planos pessoais e cotas por trabalho documentados; equivalências antigas Developer/Free Tier/Vertex AI Enterprise e garantias de filas/SLA continuam sem comprovação. A aula 14 remete à aula 10 para evitar duplicação. | [plans](https://antigravity.google/docs/plans) |
| 16 | Parcial | Backoff configurável no SDK confirmado. Jitter, 2s/4s/8s, mensagem e retomada sem perda no runtime/IDE em geral não foram confirmados. | [retry](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/examples/getting_started/customizing_retries.md) |
| 17 | Não confirmado | Não comprovada a promessa geral de troca automática com preservação da cota. No agente de navegador do App a documentação descreve interrupção para pedir orientação quando falta Flash; não generalizar esse comportamento a todos os recursos. | [browser](https://antigravity.google/docs/browser) |
| 24 | Não confirmado | Não localizados o schema agent.persona, agy --persona e a composição exata das três camadas como contrato do runtime. Mantidos apenas princípios metodológicos do MD. | [settings](https://antigravity.google/docs/settings); [cli](https://antigravity.google/docs/cli/reference) |
| 25 | Parcial | AGENTS.md/GEMINI.md e escopos são documentados. Não confirmado o conjunto de caminhos .antigravity/rules/, compatibilidade .cursorrules e precedência da apostila. Não foi feito teste real de conflito. | [rules](https://antigravity.google/docs/rules/) |
| 26 | Parcial | Há presets atuais com rótulos e escopos próprios; não confirmado o trio Supervisionado/Semi-autônomo/Autônomo-Turbo e seu padrão como descrito. | [agent](https://antigravity.google/docs/agent-settings/) |
| 27 | Parcial | Allow/Deny/Ask e correspondência de comandos são documentados. Não confirmadas as chaves terminal.policy, terminal.allowlist/denylist e a garantia de bloqueio no processo do original. | [perms](https://antigravity.google/docs/permissions); [agent](https://antigravity.google/docs/agent-settings/) |
| 33 | Parcial | /agents, /context e /diff constam da referência CLI. Não confirmado o conjunto /artifact e /hooks com todos os painéis e efeitos atribuídos; não publicar o catálogo como se fosse validado integralmente. | [cli](https://antigravity.google/docs/cli/reference); [agents](https://antigravity.google/docs/cli/commands/agents) |
| 35 | Parcial | Há modos e seleção documentados, mas não confirmado o conjunto literal /permissions terminal auto/request_review, /planning on/off, /fast e modelo Vertex/Claude citado no original. Nenhuma permissão foi alterada para testar nomes. | [cli](https://antigravity.google/docs/cli/reference); [agent](https://antigravity.google/docs/agent-settings/) |
| 37 | Parcial | Plano e walkthrough são artefatos documentados. Não confirmados task_plan.json, .antigravity/artifacts/, os atalhos e a obrigação universal de plano nos modos citados. | [plan](https://antigravity.google/docs/implementation-plan/); [walk](https://antigravity.google/docs/walkthrough/) |
| 38 | Não confirmado | Não localizada garantia de estados marcados apenas por ferramenta determinística, nem de exit code zero como prova suficiente de conclusão. O MD usa o marcador também junto a notas provisórias: essa organização conceitual não prova um estado interno do runtime. | [plan](https://antigravity.google/docs/implementation-plan/); [walk](https://antigravity.google/docs/walkthrough/) |
| 39 | Parcial | Comentários por trecho no plano são documentados. Não confirmados Ctrl+Enter, todos os mecanismos de replanejamento, comparador e deep links como conjunto descrito. | [plan](https://antigravity.google/docs/implementation-plan/) |
| 40 | Não confirmado | Não localizado view_symbol_outline como API pública/Agent Skill com o contrato literal citado. Conceito de tool calling não comprova nome ou formato dessa ferramenta. | [sdk](https://antigravity.google/docs/sdk/overview/); [cli](https://antigravity.google/docs/cli/reference) |
| 41 | Não confirmado | Não comprovados o contrato patch_file/search_block/replace_block, atomicidade, fuzzy matching e envio obrigatório à lixeira. Permissões não equivalem a garantia de recuperação. | [sdk](https://antigravity.google/docs/sdk/overview/); [perms](https://antigravity.google/docs/permissions) |
| 42 | Parcial | Execução de ferramentas e shell é documentada; não confirmado o par execute_command/execute_background_command com o contrato e garantias literais do original. | [sdk](https://antigravity.google/docs/sdk/overview/); [cli](https://antigravity.google/docs/cli/reference) |
| 43 | Parcial | Uso de navegador é documentado, com backends e escopos diferentes. Não confirmado o conjunto Chrome headless/CDP, nomes browser_navigate/inspect/type/click/screenshot e garantias universais citadas. | [browser](https://antigravity.google/docs/browser) |

**Removidos do registro único:** 1 e 2. Os demais 27 itens pesquisados permanecem listados com observação atualizada. Nenhum item duvidoso é exibido como badge ou instrução no site.

## Reutilização

As dez aulas anteriores são preservadas integralmente. A Aula 14 usa a fonte de quotas para contextualizar planejamento e consumo, remetendo à Aula 10 em vez de copiar seus detalhes. Os guias HTML existentes continuam como referências.
