# Trilha documental do Antigravity Lab

Material de preparação para futuras expansões do site. Origem declarada dos módulos: apostila de curso de 40h do Prof. Leonardo (Notion). Essa atribuição não equivale a carga horária ou certificação do Antigravity Lab.

A reorganização preserva conceitos e objetivos recebidos, separa hipóteses de capacidades confirmadas e não altera o aplicativo. Os relatórios históricos descrevem estados passados, outros caminhos de trabalho e decisões de sua época.

## Estrutura da trilha

Primeiros passos → formação em agentes → laboratórios → aplicação no Juriel. Guias são pontos de consulta; histórico guarda registros de execução anteriores.

### Primeiros passos

- [Contas, perfis e workspaces](./01-primeiros-passos/contas-perfis-workspaces.md)
- [Instalação e requisitos](./01-primeiros-passos/instalacao-e-requisitos.md)
- [Planos, quotas e limites de uso](./01-primeiros-passos/planos-quotas-rate-limits.md)

### Formação em agentes

- [Fundamentos da plataforma agêntica](./02-formacao-agentes/01-fundamentos-plataforma-agentica.md)
- [Os quatro pilares: organização didática](./02-formacao-agentes/02-os-4-pilares.md)
- [Ciclo agêntico e governança](./02-formacao-agentes/03-ciclo-agentico-e-governanca.md)
- [Artefatos e walkthrough](./02-formacao-agentes/04-artefatos-e-walkthrough.md)
- [Hooks e validação](./02-formacao-agentes/05-hooks-e-validacao.md)
- [MCP e integrações](./02-formacao-agentes/06-mcp-integracoes.md)
- [Módulo 14: provedores, privacidade e governança](./02-formacao-agentes/07-provedores-privacidade-governanca.md)
- [Concorrência, filas e mensagens](./02-formacao-agentes/10-concorrencia-e-mensagens.md)
- [Sessões, versionamento e rollback](./02-formacao-agentes/11-sessoes-versionamento-rollback.md)

### Laboratórios

- [Desafio: evolução do site com GitHub Actions](./03-laboratorios/desafio-site-cicd-github-actions.md)
- [Laboratório: trabalho multiagente](./03-laboratorios/lab-multi-agentes.md)
- [Laboratório: validação no navegador](./03-laboratorios/lab-navegador-sandbox.md)
- [Laboratório: RAG e contexto](./03-laboratorios/lab-rag-e-contexto.md)
- [Laboratório: terminal e shell](./03-laboratorios/lab-terminal-e-shell.md)

### Aplicação no Juriel

- [Juriel: além da apostila](./04-juriel/00-capa-alem-da-apostila.md)

### Guias de consulta

- [Guia GitHub](./guias/github.md)
- [Guia MongoDB](./guias/mongodb.md)
- [Guia Supabase](./guias/supabase.md)

### Histórico

- [RELATÓRIO TÉCNICO DE AUDITORIA E DIAGNÓSTICO (FASE 1)](./historico/fase-1-auditoria.md)
- [RELATÓRIO DE CONCLUSÃO — FASE 3: CONSOLIDAÇÃO DA ESTRUTURA E DESENVOLVIMENTO DO CONTEÚDO](./historico/fase-3-estrutura.md)
- [RELATÓRIO DE CONCLUSÃO — FASE 4: VALIDAÇÃO FINAL, INTEGRAÇÃO COM GITHUB E PREPARAÇÃO DO DEPLOY](./historico/fase-4-validacao.md)
- [RELATÓRIO DE CONCLUSÃO — FASE 5: INTEGRAÇÃO COM WHATSAPP, COMMIT E PUBLICAÇÃO NO GITHUB](./historico/fase-5-whatsapp-github.md)
- [RELATÓRIO DE PREPARAÇÃO DO AMBIENTE LOCAL](./historico/preparacao-ambiente-local.md)

## Regras obrigatórias para futuras alterações

1. Não inventar conteúdo nem completar trechos de memória. Comandos, atalhos, arquivos de configuração, nomes de planos, versões de modelos e garantias de produto só entram como instruções após confirmação em documentação oficial ou teste documentado. Registrar fonte, versão e data da confirmação.
2. [pendencias-verificacao.md](./pendencias-verificacao.md) é o registro único de itens não confirmados. Sua tabela usa exatamente as colunas `# | Item | Onde aparece | O que verificar | Como verificar`. No ponto didático afetado, usar apenas a marcação curta indicada abaixo para o item, sem reproduzir a instrução não confirmada.

   > VERIFICAR: ver pendencias-verificacao.md, item N

3. Confirmou: remover a linha da tabela e incorporar no módulo com a evidência. Não confirmou: manter na tabela. Não renumerar os demais itens; atualizar marcadores e preservar a rastreabilidade das notas do autor. Uma afirmação refutada não vira conteúdo factual.
4. Preservar as notas de fact check do autor. As que contêm afirmações não confirmadas ficam no registro único como notas de origem, sem endosso. Não equiparar rótulos antigos “sem risco” a verificação atual.
5. Separar conteúdo didático de instruções de montagem e publicação do repositório. Não incluir passos de preparação de commits ou envio ao remoto nos módulos. O fluxo operacional canônico continua em [github.html](../github.html). Os relatórios arquivados são exceção documental: seu conteúdo é imutável, inclusive instruções antigas.
6. Cada conceito tem um arquivo canônico. Repetições devem ser substituídas por links relativos. Casos de aplicação podem apontar para a explicação geral, sem reproduzi-la.
7. Fechar todos os blocos Markdown. Separar comando de parágrafo e usar linguagem de bloco adequada. Em fragmentos truncados, preservar somente o conteúdo visível, marcado como incompleto; não acrescentar argumentos ausentes.
8. O módulo 14 está no arquivo canônico de provedores, privacidade e governança, com seções 14.1 (modelos), 14.2 (privacidade) e 14.3 (infraestrutura). O complemento recebido foi incorporado com fontes oficiais para os conceitos confirmados. O desafio continua ausente; a aplicação de VPC Service Controls à ferramenta permanece pendente.
9. Os cinco relatórios foram apenas movidos/renomeados para `historico/`, com os bytes preservados. Não corrigir caminhos, Markdown ou afirmações dentro deles. A preparação do ambiente tem arquivo próprio, pois também foi expressamente incluída no pedido de arquivamento.
10. Os guias em `guias/` apontam para as páginas HTML existentes. A extração completa está pendente; não reescrever nem duplicar os guias antes dessa tarefa.
11. Manter links locais relativos. Não executar os comandos citados em pendências como parte de limpeza editorial. Mudanças no site, publicação ou novas integrações dependem de tarefa própria.

## Consolidação e proveniência

Na conversão dos MDs em aulas, `VERIFICAR` é uma tarefa editorial do Codex: consultar fontes oficiais atuais antes de publicar. Só a parte confirmada e pertinente entra no site, com fonte e data. Trechos refutados ou não confirmados ficam no Markdown e no registro único, sem badges no site. Nesta primeira conversão, o MD-fonte permanece intacto; as decisões estão em [evidências de instalação e requisitos](./01-primeiros-passos/instalacao-e-requisitos-verificacao.md).

A conversão seguinte, [planos, quotas e limites](./01-primeiros-passos/planos-quotas-rate-limits-verificacao.md), mantém esse padrão: uma aula no índice 9, fontes e escopos documentados, MD original preservado. O catálogo passa a dez aulas; aplicar a [migration atual](./supabase/20261126-planos-quotas.sql) por último, conforme o [README do Supabase](./supabase/README.md).

Atualização do Lote 1: o catálogo agora possui **14 aulas reais**. As dez anteriores permanecem intactas e as aulas 11–14 usam a trilha `formacao`. A [pesquisa editorial do lote](./02-formacao-agentes/lote-1-verificacao.md) registra 29 itens pesquisados: 1 e 2 confirmados e removidos da tabela central; os demais mantidos no escopo ainda não comprovado. Os MDs-fonte não foram modificados. A instrução de migration acima descreve a etapa anterior: para ativação nova, os schemas A e B já aceitam 26 aulas, **sem migrations incrementais**, conforme o [README de ativação](./supabase/README.md).

Atualização do Lote 2: **18 aulas reais**, índices 0–17, com as 14 anteriores preservadas. As aulas 15–18 usam a trilha `formacao`. A [pesquisa editorial do Lote 2](./02-formacao-agentes/lote-2-verificacao.md) registra 19 itens examinados, mantidos por confirmação parcial, ausência de comprovação ou lacuna de origem. O banco permanece com capacidade 0–25; nenhuma migration adicional é necessária.

| Material recebido | Destino canônico |
|---|---|
| Módulo 1 | Fundamentos, quatro pilares, governança e validação. |
| Módulo 2 | Primeiros passos, privacidade e autenticação de infraestrutura. |
| Módulo 3 | Instalação/requisitos; comandos e configurações não confirmados no registro único. |
| Módulo 4 | Ciclo e governança. |
| Módulo 5 | Laboratório de RAG e contexto. |
| Dois arquivos do módulo 6 | Catálogo não confirmado no registro único; navegação em sessões e seleção em modelos. A versão completa prevalece sobre o recorte repetido. |
| Módulo 7 | Artefatos e walkthrough. |
| Módulo 8 | Fundamentos de ferramentas e laboratórios de terminal, navegador e contexto. |
| Módulo 9 | Concorrência e laboratório de terminal. |
| Módulo 10 | Sessões, versionamento e rollback. |
| Módulo 11 | Hooks e validação. |
| Módulo 12 | MCP e integrações. |
| Módulo 13 | Laboratório multiagente. |
| Módulo 14 e complemento recebido | Provedores, privacidade e governança em um único arquivo, com notas corrigidas, fontes oficiais e lacunas no registro único. |
| Juriel | Capa de aplicação, com requisitos propostos e referências aos conceitos canônicos. |
| Pendências antigas | Tabela única numerada e notas originais preservadas. |
| Cinco relatórios anteriores | Histórico, sem alteração de conteúdo. |

Além dos seis arquivos iniciais, a formação inclui o módulo 14 consolidado, concorrência e sessões. Os três arquivos intermediários de modelos, privacidade e infraestrutura foram reunidos no módulo 14 para evitar duplicação.

## Lacunas que aguardam material ou decisão

- Enunciado do Desafio Prático com GitHub Actions: item 70.
- Aplicação de VPC Service Controls ao ambiente do curso: item 65. O complemento recebido trouxe a explicação geral, verificada na fonte oficial.
- Seção 3.4, exemplo vazio de 5.1 e complementos dos módulos parciais: item 75.
- Atribuições e complementos editoriais do material de origem: item 74.

Nenhum arquivo inteiro ficou sem classificação. As lacunas acima não foram preenchidas; a implementação didática correspondente aguarda os trechos de origem.

## Implementação do site: Fase A

A integração opcional de conta e progresso com Supabase tem [instruções próprias](./supabase/README.md) e [schema SQL](./supabase/fase-a-schema.sql). A instalação e a verificação no projeto real ficam com o responsável pelo site; o registro único acompanha as pendências 76 a 78. Os conceitos e comandos específicos de Antigravity da trilha acima mantêm seu status editorial.

## Implementação do site: Fase B

As anotações por aula, com texto e URL de print, têm [instruções próprias](./supabase/fase-b-anotacoes.md), [schema SQL](./supabase/fase-b-schema.sql) e [registro ant_02](../registros/ant/ant_02_fase-b-anotacoes.md). Upload direto fica adiado. Instalação e todas as validações desta fase ficam com o usuário; pendências 79 a 81 no registro único.
