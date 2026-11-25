# Pendências de verificação

Registro único de afirmações técnicas não confirmadas, lacunas de material e extrações pendentes. A inclusão aqui não confirma nem recomenda um comando, schema, garantia ou recurso.

Na reorganização inicial não foram executados comandos da apostila nem feita validação externa de produto. Na revisão do módulo 14, foram consultadas fontes oficiais da OpenAI e Google Cloud em 25/11/2026, sem executar comandos ou configurar serviços. Os conceitos confirmados foram incorporados com fonte; a integração específica com o Antigravity continua pendente onde indicada.

Os nomes de origem na tabela são os nomes recebidos antes da reorganização; os destinos são caminhos relativos a esta pasta. As referências numéricas são estáveis: não renumerar itens em futuras revisões.

Fluxo: confirmou com fonte oficial ou teste documentado, remove a linha da tabela e incorpora no módulo com evidência e data; não confirmou, mantém aqui. Se a hipótese for refutada, não a incorpora como fato. Preserve a rastreabilidade das notas do autor e corrija os marcadores afetados.

| # | Item | Onde aparece | O que verificar | Como verificar |
|---|---|---|---|---|
| 1 | CLI agy e TUI | Origem: modulo-01-fundamentos.md; modulo-03-vscode.md; destino: [02-formacao-agentes/02-os-4-pilares.md](./02-formacao-agentes/02-os-4-pilares.md) | Existência, nome, distribuição oficial, invocação agy e agy --version; TUI completa e uso em SSH. | Localizar a CLI na documentação oficial; somente então conferir versão e ajuda em ambiente de laboratório. |
| 2 | SDK oficial | Origem: modulo-01-fundamentos.md; destino: [02-formacao-agentes/02-os-4-pilares.md](./02-formacao-agentes/02-os-4-pilares.md) | Existência do SDK Python/API para CI/CD e agentes em Pull Requests. | Consultar documentação oficial e registro do pacote; distinguir SDK do modelo de SDK do produto. |
| 3 | Interface de gestão e quatro pilares | Origem: modulo-01-fundamentos.md; modulo-13-multiagente.md; destino: [02-formacao-agentes/02-os-4-pilares.md](./02-formacao-agentes/02-os-4-pilares.md) | Nomes Command Center, Agent Manager e Manager View, modelo Inbox e aprovação em lote. A divisão em quatro pilares é didática, não nomenclatura oficial confirmada. | Confrontar manual oficial e interface instalada; registrar versão e evidência de cada nome. |
| 4 | Base da IDE e extensão oficial | Origem: modulo-01-fundamentos.md; modulo-02-autenticacao.md; modulo-03-vscode.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Afirmações de fork OpenVSCode/OpenVSCode Server, extensão oficial no VS Code, daemon compartilhado, IPC/RPC, webview, LSP em tempo real e diffs aprováveis antes de salvar. | Consultar arquitetura oficial, editor publicado e Marketplace; não inferir suporte a partir de outras IDEs. |
| 5 | Terminal Execution Policy | Origem: modulo-01-fundamentos.md; modulo-04-governanca.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | Localização Settings → Agent Settings e opção Terminal Execution Policy = Request Review. | Inspecionar configurações e documentação da versão instalada sem alterar políticas. |
| 6 | Métodos de autenticação aceitos | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | Suporte no produto a OAuth 2.0, SSO Workspace/SAML/OIDC, API Key e ADC; não confundir autenticação da IDE com a de APIs ou infraestrutura. | Conferir documentação oficial de login do Antigravity e escopos de cada modalidade. |
| 7 | Fluxo OAuth e cofre de tokens | Origem: modulo-02-autenticacao.md; modulo-12-mcp.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | Loopback HTTP (exemplo original 127.0.0.1:51123), access/refresh tokens e uso de Credential Manager, Keychain ou Secret Service/libsecret pelo produto. | Conferir documentação de autenticação e armazenamento; não imprimir tokens durante inspeção. |
| 8 | SSO e revogação | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | MFA/FIDO2, federação Okta/Entra ID/Ping Identity e promessa de revogação de todas as instâncias ao desligar a conta. | Verificar políticas oficiais e testar revogação com conta de laboratório autorizada. |
| 9 | GEMINI_API_KEY | Origem: modulo-02-autenticacao.md; modulo-03-vscode.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | Suporte como autenticação ou fallback no Antigravity, origem no Google AI Studio e uso em automação. Exemplos originais: $env:GEMINI_API_KEY = "sua-chave" e export GEMINI_API_KEY="sua-chave". | Distinguir variável usada por SDKs de modelos de variável aceita pela IDE; consultar documentação oficial antes de executar exemplos. |
| 10 | Autenticação via CLI | Origem: modulo-02-autenticacao.md; modulo-03-vscode.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | Subcomandos agy auth status, agy auth login e agy auth logout. | Após confirmar o item 1, consultar a ajuda oficial; testar apenas os subcomandos documentados. |
| 11 | Menus e perfis | Origem: modulo-02-autenticacao.md; modulo-03-vscode.md; destino: [01-primeiros-passos/contas-perfis-workspaces.md](./01-primeiros-passos/contas-perfis-workspaces.md) | Ícone de contas no canto inferior esquerdo, Adicionar Conta, perfis Estudo/Produção com políticas de agente, modelos e aprovação de planos. | Registrar telas e documentação da versão instalada; separar perfis do editor de políticas do agente. |
| 12 | Estrutura interna do workspace | Origem: modulo-02-autenticacao.md; modulo-04-governanca.md; modulo-12-mcp.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | Diretório .antigravity/ com settings.json, rules/ e mcp_config.json; escopos global/workspace e recomendação de versionamento dessas configurações. | Inspecionar arquivos gerados pelo próprio produto e schema oficial; conferir se há segredos antes de qualquer versionamento. |
| 13 | Fronteiras e sandbox | Origem: modulo-01-fundamentos.md; modulo-02-autenticacao.md; modulo-04-governanca.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | Promessas de confinamento rígido ao workspace e recusa de acesso externo; filesystem.restrictToWorkspace e filesystem.allowedExternalPaths. | Conferir permissões efetivas e documentação; testar leitura/escrita com arquivos descartáveis, sem dados privados. |
| 14 | Planos e quotas por modalidade | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/planos-quotas-rate-limits.md](./01-primeiros-passos/planos-quotas-rate-limits.md) | Nomes Developer/Free Tier, Google AI Pro/Ultra, Vertex AI Enterprise; vínculo ao AI Studio, gratuidade, cobrança, filas, cotas e SLAs. | Conferir páginas oficiais de acesso, preços e limites com data de consulta. |
| 15 | Catálogo e versões de modelos | Origem: modulo-02-autenticacao.md; modulo-06-slash-commands.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | Gemini 3/3.5 Pro/Ultra/Extended Thinking, Gemini Flash, Claude 3.5/3.7/Sonnet via Vertex, latências e papéis atribuídos a cada modelo. O complemento forneceu valores ilustrativos de ~150 ms, ~400 ms e ~1.2 s; não são medições ou especificações. Esses números permanecem somente neste registro. | Conferir catálogo oficial e seletor de modelos; exigir metodologia e evidências para latências. |
| 16 | Backoff automático em HTTP 429 | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/planos-quotas-rate-limits.md](./01-primeiros-passos/planos-quotas-rate-limits.md) | Exponential Backoff + Jitter automático, sequência ilustrativa 2s/4s/8s, mensagem Aguardando liberação de cota e retomada sem perda de progresso. | Consultar comportamento documentado; observar somente em laboratório sem provocar carga abusiva. |
| 17 | Fallback automático de modelos | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/planos-quotas-rate-limits.md](./01-primeiros-passos/planos-quotas-rate-limits.md) | Desvio automático de tarefas para modelo leve/Flash sob saturação e preservação da cota principal. | Consultar política oficial e evidência de roteamento na versão instalada. |
| 18 | Divisão nuvem/local e ambientes remotos | Origem: modulo-02-autenticacao.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Inferência só na nuvem, ausência de IA local e tráfego exclusivamente HTTPS; suporte a WSL 2, Remote SSH e Cloud Workstations. | Conferir arquitetura e ambientes oficialmente suportados; não inferir privacidade só pelo transporte. |
| 19 | Privacidade contratual por plano | Origem: modulo-02-autenticacao.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | Ainda pendente: telemetria/amostragem, cache e condições por plano do Antigravity. A política geral de restrição de treinamento do Google Cloud foi incorporada ao módulo com fonte, sem estendê-la automaticamente à IDE. | Consultar termos oficiais vigentes e contrato aplicável; registrar produto, plano, região e data. |
| 20 | Marketplace e licenciamento | Origem: modulo-03-vscode.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Open VSX como catálogo padrão, acesso ao Visual Studio Marketplace, alteração de product.json/extensionsGallery, restrições de EULA e alternativas internas. | Consultar documentação oficial do editor e licenças dos catálogos; não recomendar redirecionamento não autorizado. |
| 21 | Instalação de extensões | Origem: modulo-03-vscode.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Ctrl+Shift+X, menu Instalar a partir do VSIX, agy extensions install --vsix e diretório ~/.antigravity/extensions. | Conferir menu e comandos oficiais após confirmar o item 1; usar pacote de laboratório de origem conhecida. |
| 22 | Extensões e alternativas LSP | Origem: modulo-03-vscode.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Licenças e compatibilidade de Pylance/Pyright/Ruff LSP, C/C++/clangd/CodeLLDB e C# Dev Kit/OmniSharp/Roslyn. Preservar a nota original de que Pyright fundamenta Pylance, sem validar toda a tabela por associação. | Consultar licenças e documentação de cada extensão; verificar compatibilidade no editor real. |
| 23 | Sincronização de configurações | Origem: modulo-03-vscode.md; destino: [01-primeiros-passos/instalacao-e-requisitos.md](./01-primeiros-passos/instalacao-e-requisitos.md) | Caminhos %APPDATA%/Code/User, %APPDATA%/Antigravity/User, ~/.config e ~/Library/Application Support; settings.json, keybindings.json, snippets, cópia forçada e links simbólicos. | Conferir diretórios e compatibilidade oficial; não executar exemplos Copy-Item/New-Item/ln antes dessa confirmação. |
| 24 | Personas e montagem do contexto | Origem: modulo-04-governanca.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | Schema agent.persona (role, tone, principles), agy --persona e composição exata das três camadas de contexto no runtime. | Consultar schema oficial; testar uma regra documentada e registrar seu alcance. |
| 25 | Regras e precedência | Origem: modulo-04-governanca.md; modulo-11-plugins-hooks.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | .antigravity/rules/ e ~/.antigravity/rules/, arquivos architecture/database/frontend/testing/clean-code.md, compatibilidade com .cursorrules e AGENTS.md; precedência nativa e local/global. | Localizar regras oficiais; testar conflitos inofensivos em ambiente descartável e registrar a precedência efetiva. |
| 26 | Modos de autonomia | Origem: modulo-04-governanca.md; modulo-02-autenticacao.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | Três níveis Supervisionado/Semi-autônomo/Autônomo-Turbo, modo Off e afirmação de padrão semi-autônomo; aprovação por patch/plano/comando. | Conferir rótulos e comportamento de cada modo na versão instalada. |
| 27 | Políticas de terminal e casamento de padrões | Origem: modulo-04-governanca.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | terminal.policy=request_review/always_proceed, terminal.allowlist/denylist, curingas e bloqueio no processo. Exemplos destrutivos do original são material de análise, não comandos a executar. | Consultar schema e semântica de correspondência; verificar com comandos inofensivos sem reduzir proteções. |
| 28 | Menções de contexto | Origem: modulo-05-contexto.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | @file, @folder, @codebase, @git, @docs, @terminal e @git:diff/@git:staged/@git:log; conteúdo enviado e busca semântica por menção. | Conferir autocomplete e documentação do chat; registrar as opções reais. |
| 29 | Indexação e busca no produto | Origem: modulo-05-contexto.md; modulo-08-capacidades.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | Uso de Tree-sitter/AST, embeddings e cosseno no runtime, .antigravity/index/, top 5/10 trechos e Antigravity: Rebuild Codebase Index. | Conferir documentação de busca e comandos disponíveis; distinguir pipeline didático de implementação real. |
| 30 | Otimizações de contexto do runtime | Origem: modulo-05-contexto.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | Pruning automático, sumarização por outro modelo em segundo plano e compressão de diffs com redução superior a 80%. | Buscar documentação e medidas reproduzíveis; não publicar percentuais sem evidência. |
| 31 | Memória persistente | Origem: modulo-05-contexto.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | .antigravity/memory/, aprendizado/injeção automática e agy memory list/forget --id 3/clear. | Consultar mecanismo e escopo oficiais; testar apenas com fatos fictícios de laboratório após confirmar a CLI. |
| 32 | Raciocínio e ensaio multiagente | Origem: modulo-06-slash-commands.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | /boost, Extended Thinking e /teamwork-preview; aumento de orçamento, plano sem escrita e aprovação antes de agentes. | Conferir comandos oficiais e efeitos na sessão; não inferir comportamento a partir do nome. |
| 33 | Comandos de inspeção | Origem: modulo-06-slash-commands.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | /agents, /artifact, /hooks, /diff e /context; painéis, estado e telemetria atribuídos a cada diretiva. | Conferir ajuda/autocomplete oficial e testar individualmente comandos documentados. |
| 34 | Navegação de conversas | Origem: modulo-06-slash-commands.md; modulo-06-navegacao-conversacao.md; modulo-10-sessoes-rollback.md; destino: [02-formacao-agentes/11-sessoes-versionamento-rollback.md](./02-formacao-agentes/11-sessoes-versionamento-rollback.md) | /fork, /branch, /switch, /resume, /btw; ramo isolado, canal efêmero e alegação de que /btw não grava histórico. | Conferir documentação, persistência e efeitos reais de cada comando; consolidar a duplicação dos dois módulos 6. |
| 35 | Overrides e seleção de modelo | Origem: modulo-06-slash-commands.md; modulo-06-navegacao-conversacao.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | /permissions terminal auto/request_review, /planning on\|off, /fast, /model <modelo> e /model vertex/claude-3-7-sonnet. | Verificar sintaxe, valores e modelos disponíveis na documentação; não aplicar mudanças de permissão para testar nomenclatura. |
| 36 | Entrada multimodal e voz | Origem: modulo-06-slash-commands.md; modulo-06-navegacao-conversacao.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | /voice, /record --with-screen, viés semântico com símbolos do projeto e transmissão direta de áudio/frames ao modelo. | Consultar capacidades e tratamento de dados oficiais; usar amostra sem dados pessoais caso haja teste autorizado. |
| 37 | Artefatos, caminhos e atalhos | Origem: modulo-07-artefatos.md; modulo-06-slash-commands.md; destino: [02-formacao-agentes/04-artefatos-e-walkthrough.md](./02-formacao-agentes/04-artefatos-e-walkthrough.md) | task_plan.json, implementation_plan.md, walkthrough.md, .antigravity/artifacts/, atalhos Ctrl+Alt+A/Ctrl+R e obrigação de plano prévio em modos específicos. | Inspecionar artefatos gerados e documentação; não criar uma estrutura presumida como configuração do produto. |
| 38 | Estados e comprovação de tarefas | Origem: modulo-07-artefatos.md; modulo-08-capacidades.md; destino: [02-formacao-agentes/04-artefatos-e-walkthrough.md](./02-formacao-agentes/04-artefatos-e-walkthrough.md) | Estados [ ], [/], [x], alerta de falha e marcação automática somente por ferramenta determinística; exit code zero como prova suficiente de conclusão. | Conferir critérios do runtime e comparar estado com evidência de uma tarefa de laboratório. |
| 39 | Comentários e revisão colaborativa | Origem: modulo-07-artefatos.md; destino: [02-formacao-agentes/04-artefatos-e-walkthrough.md](./02-formacao-agentes/04-artefatos-e-walkthrough.md) | Comentários inline estilo Google Docs, Ctrl+Enter, Replanning Trigger, diff do próprio plano, deep links arquivo:linha e comparador automático. | Testar recursos documentados do painel de artefatos e registrar evidência por versão. |
| 40 | Leitura estrutural e nomes de ferramentas | Origem: modulo-08-capacidades.md; destino: [03-laboratorios/lab-rag-e-contexto.md](./03-laboratorios/lab-rag-e-contexto.md) | view_symbol_outline e interpretação como Agent Skill nativa; exemplo tool_call: view_symbol_outline(file_path="src/services/billing_service.py") é ilustrativo e não JSON válido. | Consultar catálogo real de ferramentas e formatos; não apresentar pseudocódigo como API executável. |
| 41 | Ferramentas de escrita e exclusão | Origem: modulo-08-capacidades.md; destino: [02-formacao-agentes/03-ciclo-agentico-e-governanca.md](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md) | patch_file/search_block/replace_block, fuzzy matching, escrita atômica, create_file e delete_file; promessa de confirmação e envio à lixeira. | Consultar ferramentas reais; testar integridade e exclusão apenas de cópias descartáveis em laboratório autorizado. |
| 42 | Shell e processos do agente | Origem: modulo-08-capacidades.md; modulo-09-concorrencia.md; destino: [03-laboratorios/lab-terminal-e-shell.md](./03-laboratorios/lab-terminal-e-shell.md) | execute_command e execute_background_command, separação síncrona/background, processos filhos e uso do shell do sistema pelo runtime. | Conferir chamadas reais e documentação; observar saída, código de retorno e encerramento de um processo de laboratório. |
| 43 | Navegador integrado | Origem: modulo-08-capacidades.md; modulo-01-fundamentos.md; destino: [03-laboratorios/lab-navegador-sandbox.md](./03-laboratorios/lab-navegador-sandbox.md) | Chrome headless/sandboxed via CDP, browser_navigate/inspect/type/click/screenshot, eventos nativos, captura ativa de console/rede e anexação de screenshots. | Conferir suporte oficial e ferramentas da versão instalada; executar o formulário do laboratório somente pelos recursos documentados. |
| 44 | Fila de mensagens | Origem: modulo-09-concorrencia.md; destino: [02-formacao-agentes/10-concorrencia-e-mensagens.md](./02-formacao-agentes/10-concorrencia-e-mensagens.md) | Message Queue Manager, .antigravity/queue, rótulos QUEUED/Na Fila, edição, drag-and-drop e /queue list/remove 2/promote 1; estado atualizado antes do queue pop. | Conferir controles reais e testar duas tarefas simples; não presumir ausência de condições de corrida. |
| 45 | Direcionamento durante execução | Origem: modulo-09-concorrencia.md; destino: [02-formacao-agentes/10-concorrencia-e-mensagens.md](./02-formacao-agentes/10-concorrencia-e-mensagens.md) | /steer, Alt+Enter, botão Direcionar, espera por ferramenta e replanejamento seguro; recomendação absoluta de sempre usar Steer em vez de Stop. | Verificar opções e garantias documentadas; registrar diferenças entre interromper e direcionar sem regra absoluta não comprovada. |
| 46 | Tarefas em segundo plano | Origem: modulo-09-concorrencia.md; destino: [02-formacao-agentes/10-concorrencia-e-mensagens.md](./02-formacao-agentes/10-concorrencia-e-mensagens.md) | /tasks kill-all, tabela Task ID/PID/porta/health check, telemetria de morte de processos e limpeza de processos zumbis. | Conferir comandos e painel reais; limitar qualquer encerramento aos processos do laboratório. |
| 47 | Sincronização de estado | Origem: modulo-09-concorrencia.md; destino: [02-formacao-agentes/10-concorrencia-e-mensagens.md](./02-formacao-agentes/10-concorrencia-e-mensagens.md) | Git Index Check, Process Reaper, State Snapshot ID e StateConflictError; flush automático e rejeição de chamadas obsoletas. | Buscar descrição oficial e reproduzir cenários controlados; não atribuir garantias a nomes conceituais. |
| 48 | Persistência de sessões | Origem: modulo-10-sessoes-rollback.md; destino: [02-formacao-agentes/11-sessoes-versionamento-rollback.md](./02-formacao-agentes/11-sessoes-versionamento-rollback.md) | ~/.antigravity/sessions/, SQLite index.db, JSONL/UUID, agy history search/resume e exportação Markdown/.agysession. | Consultar exportação e armazenamento oficiais; verificar se bundles podem conter dados privados antes de compartilhá-los. |
| 49 | Rollback e checkpoints | Origem: modulo-10-sessoes-rollback.md; destino: [02-formacao-agentes/11-sessoes-versionamento-rollback.md](./02-formacao-agentes/11-sessoes-versionamento-rollback.md) | Shadow Git em .antigravity/shadow_git/, refs/antigravity/cp-NNN antes de cada escrita, /undo e restauração de alterações não commitadas; afirmação de que o Git oficial nunca é tocado sem autorização. | Conferir mecanismo oficial e testar restauração em cópia descartável, comparando conteúdo antes/depois. |
| 50 | Auditoria e replay | Origem: modulo-10-sessoes-rollback.md; destino: [02-formacao-agentes/11-sessoes-versionamento-rollback.md](./02-formacao-agentes/11-sessoes-versionamento-rollback.md) | Painel Auditoria e Linha do Tempo, Ctrl+Shift+A, carimbos em milissegundos, Action Replay e inspeção de estado de disco anterior. | Consultar interface/documentação oficiais e evidência de uma tarefa de laboratório. |
| 51 | Formato e escopos de plugins | Origem: modulo-11-plugins-hooks.md; destino: [02-formacao-agentes/05-hooks-e-validacao.md](./02-formacao-agentes/05-hooks-e-validacao.md) | plugin.json (engines/capabilities), SKILL.md, skills/, rules/, mcp_config.json/${pluginRoot}, hooks.json; .antigravity/plugins/ e ~/.antigravity/plugins/. | Consultar manifesto e escopos oficiais; não instalar pacotes ou criar schemas presumidos. |
| 52 | Instalação e catálogo de plugins | Origem: modulo-11-plugins-hooks.md; destino: [02-formacao-agentes/05-hooks-e-validacao.md](./02-formacao-agentes/05-hooks-e-validacao.md) | agy plugin install <url\|--global>, agy plugin list, agy bundle add google-cloud, Build with Google Bundles e catálogo auditado; Ctrl+Shift+X. | Conferir disponibilidade e origem dos pacotes em documentação e catálogo oficiais. |
| 53 | Hooks nativos e schemas | Origem: modulo-01-fundamentos.md; modulo-11-plugins-hooks.md; destino: [02-formacao-agentes/05-hooks-e-validacao.md](./02-formacao-agentes/05-hooks-e-validacao.md) | Pre-flight, Post-format, blocking: true, postFormat, .antigravity/scripts/format_check.py em settings.json e correção obrigatória por falha de linter. | Consultar eventos, parâmetros e semântica oficial; validar disparo com script inofensivo apenas após confirmar o schema. |
| 54 | MCP Store e configuração | Origem: modulo-12-mcp.md; destino: [02-formacao-agentes/06-mcp-integracoes.md](./02-formacao-agentes/06-mcp-integracoes.md) | MCP Store, Ctrl+Shift+M, /tools, categorias, instalação assistida, handshake imediato e nomes/caminhos mcp_config.json global e workspace. | Conferir interface, configuração oficial e servidores disponíveis na versão instalada. |
| 55 | Transportes e descoberta MCP | Origem: modulo-12-mcp.md; destino: [02-formacao-agentes/06-mcp-integracoes.md](./02-formacao-agentes/06-mcp-integracoes.md) | JSON-RPC 2.0, command/args/env, stdio e sse, initialize → tools/list + resources/list. A alegação stdio = sem rede/mais seguro precisa revisão; o processo pode ter outros acessos. | Consultar especificação MCP vigente e suporte do cliente; não confundir transporte com isolamento de rede. |
| 56 | Proteção de segredos em MCP | Origem: modulo-12-mcp.md; destino: [02-formacao-agentes/06-mcp-integracoes.md](./02-formacao-agentes/06-mcp-integracoes.md) | ${env:VAR}, resolução só em memória, isolamento, Secret Redaction por AKIA/ghp/PEM, entropia e comparação com env, substituição por REDACTED_SECRET antes do modelo. | Conferir suporte oficial e limites; testar somente com marcadores fictícios, sem segredos reais. |
| 57 | OAuth DCR e MCP | Origem: modulo-12-mcp.md; destino: [02-formacao-agentes/06-mcp-integracoes.md](./02-formacao-agentes/06-mcp-integracoes.md) | OAuth DCR/RFC 7591, PKCE, tokens em cofre do SO, renovação silenciosa e revogação por estação no Antigravity. | Conferir especificação, provedor e implementação do cliente; não prometer fluxo universal. |
| 58 | Servidor SQLite do laboratório | Origem: modulo-12-mcp.md; destino: [02-formacao-agentes/06-mcp-integracoes.md](./02-formacao-agentes/06-mcp-integracoes.md) | @modelcontextprotocol/server-sqlite, laboratorio.db e ferramenta read_query; existência, distribuição e manutenção do servidor citado. | Conferir repositório e pacote oficiais antes de instalação; limitar acesso a banco descartável. |
| 59 | Multiagente: interface e limite | Origem: modulo-13-multiagente.md; destino: [03-laboratorios/lab-multi-agentes.md](./03-laboratorios/lab-multi-agentes.md) | Editor View/Manager View, Ctrl+1/Ctrl+2, até 5 agentes, justificativas de limite e abertura de arquivo por clique duplo. | Conferir manual e interface da versão instalada; registrar limites efetivos por plano/ambiente. |
| 60 | Delegação e isolamento | Origem: modulo-13-multiagente.md; destino: [03-laboratorios/lab-multi-agentes.md](./03-laboratorios/lab-multi-agentes.md) | invoke_subagent, context_handoff="minimal", isolation_mode inherit/share/branch, .antigravity/worktrees/agt-worker-NN, PID próprio e subagente self; redução ilustrativa 60k→250 tokens e alegação branch = risco zero. | Consultar API real; medir e verificar isolamento em ambiente de laboratório, sem garantir risco zero. |
| 62 | Provedores e ambientes isolados | Origem: modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | models.customProviders, Vertex AI Model Garden, Claude no perímetro Google, conectores vLLM/Ollama e ambientes air-gapped. | Conferir provedores suportados e dependências de rede reais; não inferir isolamento a partir de execução local. |
| 63 | Residência de dados e CMEK | Origem: modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | Ainda pendente: cloud.region=southamerica-east1, garantias regionais/conformidade e suporte CMEK aplicável ao Antigravity. O conceito geral de CMEK foi incorporado com fonte oficial, sem presumir suporte da IDE. | Conferir documentação e contrato do serviço exato; configuração regional isolada não demonstra conformidade. |
| 64 | ADC e IAM no runtime | Origem: modulo-02-autenticacao.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | Ainda pendente: consumo automático de ADC pelo Antigravity, projeto selecionado e escopo do papel roles/aiplatform.user. O comando ADC geral foi confirmado e incorporado com fonte. O primeiro exemplo IAM era incompleto; o complemento trouxe argumentos, sem provar adequação ou integração ao curso. | Consultar documentação oficial de ADC/IAM e integração do produto; não completar os argumentos omitidos nem executar comando incompleto. |
| 65 | VPC Service Controls ausente | Origem: modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; pedido de reorganização; destino: [02-formacao-agentes/07-provedores-privacidade-governanca.md](./02-formacao-agentes/07-provedores-privacidade-governanca.md) | O trecho faltava no arquivo inicial. O complemento trouxe uma explicação geral, incorporada com fonte oficial e limites de escopo. Ainda pendente: aplicação de VPC Service Controls ao ambiente do curso e suporte efetivo na integração do Antigravity. | Conferir arquitetura, serviços compatíveis e integração reais antes de criar roteiro de configuração; não prometer bloqueio absoluto de exfiltração. |
| 66 | Privacidade e bases legais do Juriel | Origem: juriel-alem-da-apostila.md; destino: [04-juriel/00-capa-alem-da-apostila.md](./04-juriel/00-capa-alem-da-apostila.md) | Afirmação de que todo dado de processo/cliente/financeiro é sensível pelo art. 5º II, bases de contrato/obrigação legal cobrindo a maior parte e consentimento de voz/mensagens como regra geral. | Revisar classificação dos dados e bases por operação com fontes legais oficiais e análise jurídica; não publicar a generalização como fato. |
| 67 | Retenção versus imutabilidade | Origem: juriel-alem-da-apostila.md; destino: [04-juriel/00-capa-alem-da-apostila.md](./04-juriel/00-capa-alem-da-apostila.md) | Conciliar exclusão/anonimização por política de retenção com a regra absoluta original nada é apagado, tudo é estornado ou nova versão. | Definir escopo de trilha/versionamento e obrigações de retenção/exclusão antes de formular regra de produto. |
| 68 | LLM local e capacidade do hardware | Origem: juriel-alem-da-apostila.md; destino: [04-juriel/00-capa-alem-da-apostila.md](./04-juriel/00-capa-alem-da-apostila.md) | Contexto descrito de 9B/16GB não comprova operação; promessa de processo nunca sair do servidor, suporte PDF/imagem/voz, Q4/Q5 vs Q6/Q8, impacto em artigos e pico STT+LLM+TTS. | Medir qualidade e VRAM com cargas representativas e mapear fluxos de rede, logs e integrações; avaliar STT/TTS jurídico na prática. |
| 69 | Propostas específicas do Juriel | Origem: juriel-alem-da-apostila.md; destino: [04-juriel/00-capa-alem-da-apostila.md](./04-juriel/00-capa-alem-da-apostila.md) | Filtros de saída para CPF/nomes/valores, prova jurídica de revisão, integrações PJe/Projudi/bancos/NF via um MCP por serviço e qualificação dos conceitos como sem risco. | Distinguir requisitos de recursos implementados; validar conectores, autorização, auditoria e efeitos jurídicos antes de prometer capacidades. |
| 70 | Desafio Prático não recebido | Origem: modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; pedido de reorganização; destino: [03-laboratorios/desafio-site-cicd-github-actions.md](./03-laboratorios/desafio-site-cicd-github-actions.md) | Nem o arquivo inicial nem o complemento fornecido contêm o enunciado do Desafio Prático de evolução do site com GitHub Actions. Não há texto para extrair. | Obter o enunciado original completo; não transformar relatórios históricos ou o workflow em enunciado inventado. |
| 71 | Extração completa do guia GitHub | Origem: github.html; destino: [guias/github.md](./guias/github.md) | Conteúdo apenas no HTML: criado apontador, sem reescrever o guia. | Extrair fielmente o conteúdo didático da página em tarefa própria, preservando o fluxo operacional canônico no site. |
| 72 | Extração completa do guia Supabase | Origem: supabase.html; destino: [guias/supabase.md](./guias/supabase.md) | Conteúdo apenas no HTML: criado apontador, sem reescrever o guia. | Extrair fielmente a página em tarefa própria; preservar referências oficiais já presentes sem inferir validação de outros tópicos. |
| 73 | Extração completa do guia MongoDB | Origem: mongodb.html; destino: [guias/mongodb.md](./guias/mongodb.md) | Conteúdo apenas no HTML: criado apontador, sem reescrever o guia. | Extrair fielmente a página em tarefa própria; manter exemplos ilustrativos distintos de configuração executada. |
| 74 | Atribuição e complementos editoriais | Origem: pendencias-verificacao.md; modulo-01-fundamentos.md; modulo-02-autenticacao.md; destino: [README.md](./README.md) | Origem declarada Prof. Leonardo/Notion/curso 40h, referências ao SENAI, links do professor (YouTube/MonkeyType), divisão em pilares e crítica ao vibe coding como visão metodológica. | Conferir material de origem e atribuição; decidir inclusão desses complementos sem inventar carga horária ou certificação do Lab. |
| 75 | Seções e trechos incompletos | Origem: modulo-03-vscode.md; modulo-05-contexto.md; modulo-08-capacidades.md; modulo-14-modelos-seguranca.md e complemento fornecido pelo usuário; destino: [README.md](./README.md) | Salto 3.3→3.5 (3.4 não recebido), Exemplo combinado vazio em 5.1, nota de material parcial em 8.1 e módulo 14 recebido até 14.3; não completar lacunas de memória. | Obter trechos da apostila e conferir a sequência antes de publicar exercícios ou seções adicionais. |

## Fragmentos visíveis preservados

Item 64: o trecho de IAM estava misturado ao parágrafo e com argumentos omitidos. Abaixo há somente o texto visível recebido, não um comando pronto para execução:

```text
gcloud projects add-iam-policy-binding ... --role=roles/aiplatform.user
```

Verificação encerrada — antigo item 61: a nota editorial abaixo foi refutada em 25/11/2026 pelo [anúncio oficial da OpenAI](https://openai.com/index/introducing-gpt-oss/). A linha foi removida da tabela e a correção incorporada ao módulo 14. O número fica reservado, sem renumeração dos demais itens. Transcrição preservada, sem endosso:

```text
Não existe modelo OpenAI chamado "GPT-OSS": termo genérico para pesos
abertos (Gemma, Llama, Mistral, DeepSeek). No Antigravity, flexibilidade
via Vertex AI Model Garden (incluindo Claude hospedado no perímetro
Google Cloud) e conectores locais (vLLM, Ollama).
```

## Notas de fact check do autor original

Transcrições das notas de status, verificação e avaliação encontradas nos módulos recebidos. Permanecem neste registro editorial, não no roteiro executável. As menções a “sem risco” ou “confirmado” são classificações do texto de origem, não validações desta reorganização.


### modulo-01-fundamentos.md

Itens relacionados: 1, 2, 3, 4, 5, 13, 43, 53, 74.

```text
> Status do conteúdo: AGUARDANDO VERIFICAÇÃO
> Origem: material do curso (40h) do Prof. Leonardo (Notion)
> Finalidade: base para futuras páginas do site Antigravity Lab
```

```text
> NOTA: a divisão em "4 pilares" é estrutura didática do material,
> não necessariamente nomenclatura oficial do Google.
```

```text
> VERIFICAR: "Command Center" é nomenclatura didática do material;
> o nome oficial seria Agent Manager. Confirmar na documentação oficial.
```

```text
> VERIFICAR: afirmação de que existe "extensão oficial" para instalação
> existente do VS Code conectada ao "mesmo daemon local".
```

```text
> VERIFICAR: não confirmado que a CLI se chama `agy` nem que possui TUI
> completa. Testar `agy --version` e consultar documentação oficial antes
> de publicar no site.
```

```text
Lembrete: IA propõe soluções; engenharia valida resultados. Nunca aceite tarefa como pronta apenas porque o agente declarou sucesso. Exija a evidência determinística dos testes.
```


### modulo-02-autenticacao.md

Itens relacionados: 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 26, 64, 74.

```text
> Status do conteúdo: AGUARDANDO VERIFICAÇÃO (nomes de métodos e variáveis)
> Origem: material do curso (40h) do Prof. Leonardo (Notion)
```

```text
> VERIFICAR: localização exata dos menus (canto inferior esquerdo),
> subcomandos `agy auth status/logout` e estrutura do diretório
> `.antigravity/`. Confirmar no app instalado e na documentação oficial.
```

```text
> VERIFICAR: menção a "Gemini 3 / 3.5" (já pendente). O modelo híbrido
> nuvem/local é coerente com a arquitetura de plataformas agênticas,
> mas confirmar detalhes como WSL 2 e Cloud Workstations na doc oficial.
```

```text
> VERIFICAR: os termos exatos de privacidade por plano. Este ponto muda
> com frequência e deve ser conferido na fonte oficial antes de publicar.
```

```text
VERIFICAR: nomes exatos dos arquivos (settings.json, mcp_config.json) e se o diretório se chama .antigravity/.
```


### modulo-03-vscode.md

Itens relacionados: 1, 4, 9, 10, 11, 20, 21, 22, 23, 75.

```text
> VERIFICAÇÃO GERAL: este módulo contém as afirmações mais específicas do
> material (fork OpenVSCode, daemon agy, product.json, subcomando
> `agy extensions`). Tratar tudo como "plausível, não verificado" até
> conferir na documentação oficial e no app instalado.
```

```text
> VERIFICAR: se a Antigravity IDE realmente usa Open VSX por padrão.
```

```text
> Fato verificável e estável: o motor do Pylance é derivado do Pyright,
> projeto open source da Microsoft. Alternativas via LSP são prática
> consolidada da indústria. Baixo risco de desatualização.
```


### modulo-04-governanca.md

Itens relacionados: 5, 12, 13, 24, 25, 26, 27.

```text
> VERIFICAÇÃO GERAL: as chaves de configuração descritas neste módulo
> ("agent.persona", "terminal.policy", "terminal.allowlist",
> "terminal.denylist", "filesystem.restrictToWorkspace",
> "filesystem.allowedExternalPaths") e o parâmetro `agy --persona`
> são específicos e não verificados. Confirmar nomes exatos na
> documentação oficial antes de publicar como referência técnica.
```

```text
Nota didática: os exemplos de denylist (rm -rf, curl | sh, mkfs) refletem práticas reais de endurecimento de shell. O conteúdo de segurança é sólido; o que precisa verificação são os nomes das chaves.
```


### modulo-05-contexto.md

Itens relacionados: 28, 29, 30, 31, 75.

```text
> VERIFICAÇÃO GERAL: as menções (@file, @folder, @codebase, @git, @docs,
> @terminal), o diretório .antigravity/index/ e os slash commands deste
> módulo são específicos e não verificados. Confirmar na doc oficial e
> testando na prática.
```


### modulo-06-navegacao-conversacao.md

Itens relacionados: 34, 35, 36.

```text
> VERIFICAR: sintaxe exata de /permissions e nomes de modelos.
```

```text
> VERIFICAR: ambos os comandos e o flag --with-screen.
```


### modulo-06-slash-commands.md

Itens relacionados: 15, 32, 33, 34, 35, 36, 37.

```text
> VERIFICAÇÃO GERAL: nenhum destes comandos foi verificado. São o grupo
> de maior risco do material até agora, pois são nomes exatos de
> diretivas. Testar um a um na IDE/CLI antes de publicar.
```

```text
> VERIFICAR: sintaxe exata de /permissions e nomes de modelos.
```

```text
> VERIFICAR: ambos os comandos e o flag --with-screen.
```


### modulo-07-artefatos.md

Itens relacionados: 37, 38, 39.

```text
> VERIFICAÇÃO GERAL: nomes de artefatos (task_plan, implementation_plan,
> walkthrough), atalhos (Ctrl+Alt+A, Ctrl+R) e estrutura de pastas em
> .antigravity/artifacts/ não verificados.
```


### modulo-08-capacidades.md

Itens relacionados: 29, 38, 40, 41, 42, 43, 75.

```text
> VERIFICAÇÃO GERAL: em andamento (material parcial recebido, seção 8.1
> de um conjunto maior). Nomes de tool calls (view_symbol_outline etc.)
> são conceituais e não verificados.
```

```text
Nota: Tree-sitter e AST são fatos estáveis da indústria (sem risco). O nome view_symbol_outline é ilustrativo, verificar catálogo real.
```


### modulo-09-concorrencia.md

Itens relacionados: 42, 44, 45, 46, 47.

```text
> VERIFICAÇÃO GERAL: Message Queue Manager, comandos /queue, /steer,
> /tasks kill-all, Alt+Enter para Steer e estrutura .antigravity/queue
> não verificados.
```


### modulo-10-sessoes-rollback.md

Itens relacionados: 34, 48, 49, 50.

```text
> VERIFICAÇÃO GERAL: Shadow Git, /undo, agy history/resume, formato
> .agysession, Ctrl+Shift+A e estrutura ~/.antigravity/sessions/ não
> verificados.
```


### modulo-11-plugins-hooks.md

Itens relacionados: 25, 51, 52, 53.

```text
> VERIFICAÇÃO GERAL: plugin.json, hooks.json, agy plugin/bundle, Build
> with Google Bundles e schema oficial não verificados.
```


### modulo-12-mcp.md

Itens relacionados: 7, 12, 54, 55, 56, 57, 58.

```text
> VERIFICAÇÃO GERAL: MCP Store (Ctrl+Shift+M), /tools, OAuth DCR na
> prática e nomes de servidores do catálogo não verificados.
> NOTA: MCP é protocolo aberto real e documentado (fato estáível);
> o que verificar é a implementação específica no Antigravity.
```


### modulo-13-multiagente.md

Itens relacionados: 3, 59, 60.

```text
> VERIFICAÇÃO GERAL: Manager View (Ctrl+2), limite de 5 agentes, Inbox,
> invoke_subagent, isolation_mode e .antigravity/worktrees/ não
> verificados.
```


### modulo-14-modelos-seguranca.md

Itens relacionados: 15, 19, 32, 35, 62, 63, 64, 65, 70, 75. Nota do antigo item 61 corrigida acima.

```text
> STATUS: material recebido até 14.3 (IAM). Falta o restante do capítulo.
> VERIFICAR: nomes/versões de modelos (Gemini 3.5, Claude 3.5/3.7 via
> Vertex, latências da tabela), /boost, models.customProviders,
> cloud.region e políticas contratuais vigentes.
```


### Juriel — itens 66 a 69

```text
## Fatos estáveis vs a verificar

**Sem risco (engenharia geral, pode aplicar direto):**
LGPD art. 5º II, RLS, append-only, grounding/RAG, quantização, Golden set, MCP.

**Verificar na prática antes de prometer no produto:**
comportamento do 9B quantizado em peças reais, pico de VRAM com voz + peça simultâneos, qualidade do STT/TTS em terminologia jurídica.
```

## Complemento do módulo 14 recebido após a reorganização

As referências do complemento aos itens 8 a 14 pertenciam a outra numeração e não foram reutilizadas. Nesta tabela, o catálogo/latências corresponde ao item 15; raciocínio e seleção, 32/35; contratos, 19; provedores, 62; residência/CMEK, 63; ADC/IAM, 64; VPC Service Controls, 65. A nota GPT-OSS foi corrigida na verificação encerrada 61.

Nota de fact check do complemento, preservada como texto de origem refutado (ver correção e fonte acima):

```text
> **Nota do autor:** o termo "GPT-OSS" utilizado em versões anteriores
> deste material é nomenclatura genérica e não corresponde a um produto
> oficial. O mecanismo real de acesso a modelos de terceiros e modelos
> abertos no ecossistema Google é o **Vertex AI Model Garden**, catálogo
> que concentra modelos próprios do Google, modelos de parceiros e modelos
> de pesos abertos prontos para deploy gerenciado.
```

A existência de um catálogo foi contextualizada com fonte no módulo; o mecanismo de acesso a ele pelo Antigravity continua no item 62. A associação automática entre execução local e ausência de saída de dados continua no item 68.
