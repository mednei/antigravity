# Lote 3: pesquisa editorial, colaboração e organização de pastas

Consulta em **26/11/2026**. Três fontes lidas integralmente: MCP e integrações, laboratório multiagente e laboratório de navegador. Fontes preservadas. Não foram instalados servidores MCP, delegadas tarefas reais ou executado navegador durante a pesquisa.

## Aulas e classificação

| Aula / índice | Entra | Não entra | Cinza |
|---|---|---|---|
| 19 / 18 — MCP e integrações | Cliente/servidor, capacidades, autenticação versus autorização, recortes oficiais de transportes/OAuth e objetivo de consulta SQLite descartável. | Configuração/pacote SQLite não comprovados, ocultação automática de segredos e garantias universais de isolamento. | Nenhum. |
| 20 / 19 — Trabalho com múltiplos agentes | Escopo, divisão de trabalho, consolidação e opções de workspace apenas no escopo documentado. | Limite fixo, atalhos, caminhos internos, redução de tokens e risco zero não comprovados. | Nenhum. |
| 21 / 20 — Validação no navegador | Formulário, interação, mensagem, evidência visual, console/rede; modalidades de navegador documentadas. | Nomes de APIs e sandbox universal não comprovados. | Nenhum. |

Duração estimada: 10 minutos por aula. Práticas extraídas dos MDs. As condições ainda não confirmadas não viraram comandos de instalação nem exemplos reconstruídos.

## Correção editorial autorizada sobre pastas

Nas aulas **2, 8 e 11**, a organização de diretórios agora é apresentada como modelo sugerido e adaptável, não uma obrigatoriedade. O guia MongoDB recebeu a mesma distinção sem mudar o mecanismo ou conteúdo dos botões de cópia. Na Aula 21, public/ e 8080 são exemplos do exercício; o aluno pode escolher outros caminhos e porta. Caminhos que uma ferramenta de fato exige continuam sujeitos à documentação; proteger credenciais continua necessário, independentemente da árvore escolhida. Os MDs-fonte não foram modificados.

## Pesquisa por item

| Item | Veredito | Resultado e decisão | Fontes consultadas |
|---|---|---|---|
| 43 | Parcial | Validação por navegador documentada; App e CLI têm backends e requisitos distintos. Não confirmado o conjunto universal Chrome headless/CDP, nomes de ferramentas e garantias sandboxed do material. | [navegador](https://antigravity.google/docs/browser/) |
| 54 | Parcial | MCP Store na IDE e configuração MCP documentados. Não confirmado o conjunto Ctrl+Shift+M, /tools e handshake imediato; o changelog atribui o atalho a outra função no App. Caminhos técnicos, quando exigidos, não são uma árvore obrigatória para organizar todo projeto. | [MCP](https://antigravity.google/docs/mcp/); [changelog](https://antigravity.google/docs/changelog?tab=hub&version=2.24.0) |
| 55 | Parcial | JSON-RPC e transportes confirmados, com stdio e Streamable HTTP na especificação atual. Não confirmado o fluxo initialize/list e SSE como conjunto universal descrito no material; stdio não comprova ausência de outros acessos de rede do processo. | [MCP](https://antigravity.google/docs/mcp/); [transportes](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports) |
| 56 | Não confirmado | Não localizado o conjunto ${env:VAR}, resolução só em memória, isolamento e redação automática AKIA/ghp/PEM/entropia com substituição REDACTED_SECRET antes do modelo como garantia do cliente. Não publicar esse mecanismo presumido. | [MCP](https://antigravity.google/docs/mcp/) |
| 57 | Parcial | OAuth 2.0 com PKCE e registro dinâmico para servidores compatíveis documentados. Não comprovadas garantias universais de cofre por SO, renovação silenciosa e revogação por estação citadas no original. | [MCP](https://antigravity.google/docs/mcp/); [autorização](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) |
| 58 | Parcial | O repositório oficial referencia implementação SQLite arquivada. Isso não valida a existência/manutenção atual do pacote literal @modelcontextprotocol/server-sqlite nem sua instalação no ambiente. A prática permanece objetivo de laboratório, sem comando de instalação inventado. | [servidores](https://github.com/modelcontextprotocol/servers); [SQLite arquivado](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) |
| 59 | Parcial | Delegação, acompanhamento e interfaces documentados; não comprovados Editor View/Manager View, Ctrl+1/Ctrl+2, limite fixo de cinco e justificativas do material como conjunto vigente. | [subagentes](https://antigravity.google/docs/subagents/) |
| 60 | Parcial | invoke_subagent e opções inherit/branch/share documentados. Não confirmado context_handoff=minimal, caminhos internos, PID próprio, redução 60k→250 e risco zero; não publicar garantias de isolamento por associação. | [subagentes](https://antigravity.google/docs/subagents/) |

Nenhum dos oito itens foi confirmado integralmente; permanecem no registro central com observação atualizada. Partes comprovadas podem ser ensinadas delimitadas sem validar o restante do item. Nenhum badge aparece nas aulas.
