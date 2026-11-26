# ant_08: Lote 3 — aulas 19 a 21 e modelos de organização

- Data: 2026-11-26
- Fase: C
- Ambiente: dev
- Status: pendente

## O que foi feito

Implementadas três aulas nos índices 18–20, reutilizando o catálogo, progresso, anotações e menus existentes.
Pesquisados oito itens VERIFICAR das três fontes; publicados somente conceitos do material e recortes comprovados com escopo explícito.
Ajustadas aulas 2, 8 e 11 e guia MongoDB para apresentar a organização de pastas como modelo adaptável, conforme orientação do usuário.
Atualizados contadores e documentação para 21 aulas reais, mantendo os schemas 0–25 sem nova migration.
Executados 64 testes automatizados e conferência estrutural; revisão manual e ativação real do Supabase seguem pendentes.

### Aulas e classificação

| Aula / índice | Título e fonte | Entra | Não entra | Cinza |
|---|---|---|---|---|
| 19 / 18 | MCP e integrações — docs/02-formacao-agentes/06-mcp-integracoes.md | Papéis, capacidades, autenticação/autorização e prática de consulta SQLite; transportes e OAuth delimitados à fonte oficial. | Pacote/configuração sem comprovação, redação automática presumida e garantias universais de isolamento. | Nenhum. |
| 20 / 19 | Trabalho com múltiplos agentes — docs/03-laboratorios/lab-multi-agentes.md | Divisão de escopo, consolidação e delegação/workspace no recorte documentado. | Limite fixo, atalhos, diretórios internos, redução de tokens e risco zero não comprovados. | Nenhum. |
| 21 / 20 | Validação no navegador — docs/03-laboratorios/lab-navegador-sandbox.md | Formulário, navegação, envio, sucesso, evidência visual e observação de console/rede. | APIs e sandbox universal não confirmados. | Nenhum. |

Duração estimada: 10 minutos por aula. As práticas são as propostas dos MDs, sem criar dados de estoque, credenciais, configuração de MCP ou formulário real nesta tarefa. A execução depende do ambiente de laboratório escolhido e de seus recursos documentados. MDs-fonte intactos.

### Orientação do usuário sobre organização de pastas

- **Aula 2:** objetivo, corpo, exercício e resultado esperado passam a permitir escolher pasta existente ou criar uma, com organização adaptável.
- **Aula 8:** corpo esclarece que o caminho externo de credenciais é um modelo; preserva carregamento no backend, proteção contra versionamento e resposta a vazamentos.
- **Aula 11:** corpo distingue a sugestão de nomes/locais das exigências técnicas da ferramenta e da proteção de credenciais.
- **Aula 21:** public/ e porta 8080 são exemplos do laboratório, não uma obrigatoriedade; caminho servido e URL devem acompanhar a escolha do aluno.
- **Guia MongoDB:** mesma distinção, com orientação para ajustar o campo path. Conteúdo dos atributos data-copy e mecanismo de copiar preservados.

Os demais campos das 18 aulas anteriores permanecem iguais. Não se tornou opcional proteger segredos nem obedecer um caminho de configuração efetivamente exigido pela ferramenta. Essa distinção foi adicionada às regras de docs/README.md para próximas conversões.

### Pesquisa editorial

Consulta em **26/11/2026**. Fonte, resultado e motivo por item: [pesquisa completa do Lote 3](../../docs/02-formacao-agentes/lote-3-verificacao.md).

| Item | Veredito | Fontes consultadas |
|---|---|---|
| 43 | Parcial | [navegador](https://antigravity.google/docs/browser/) |
| 54 | Parcial | [MCP](https://antigravity.google/docs/mcp/); [changelog](https://antigravity.google/docs/changelog?tab=hub&version=2.24.0) |
| 55 | Parcial | [MCP](https://antigravity.google/docs/mcp/); [transportes](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports) |
| 56 | Não confirmado | [MCP](https://antigravity.google/docs/mcp/) |
| 57 | Parcial | [MCP](https://antigravity.google/docs/mcp/); [autorização](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) |
| 58 | Parcial | [servidores](https://github.com/modelcontextprotocol/servers); [SQLite arquivado](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) |
| 59 | Parcial | [subagentes](https://antigravity.google/docs/subagents/) |
| 60 | Parcial | [subagentes](https://antigravity.google/docs/subagents/) |

Nenhum dos oito itens foi integralmente confirmado; permanecem na tabela central com observação atualizada. Partes comprovadas foram aproveitadas sem validar as restantes. A implementação SQLite referenciada oficialmente está arquivada; não foi transformada em instalação recomendada ou em pacote presumido. Nenhum badge é exibido nas aulas.

## Arquivos tocados

- `assets/js/course.js`: aulas 19–21 e correções pontuais autorizadas de pastas em 2/8/11.
- `mongodb.html`: esclarecimento editorial sobre caminhos ilustrativos, sem mudar cópia de comandos.
- `index.html` e `produtos.html`: contadores e descrição de 21 aulas.
- `tests/course-fixtures.cjs`: comparação de preservação com exceções de campos explicitamente autorizados.
- `tests/fase-a.test.cjs`, `primeiros-passos.test.cjs`, `planos-quotas.test.cjs`, `lote1.test.cjs` e `lote2.test.cjs`: regressões adaptadas às exceções editoriais e ao crescimento do catálogo.
- `tests/lote3.test.cjs`: auditoria dos campos alterados, conteúdo, fontes, cópia de comandos, trilhas e progresso.
- `docs/README.md`: organização sugerida versus caminhos técnicos e atualização do lote.
- `docs/02-formacao-agentes/lote-3-verificacao.md`: oito vereditos e classificação.
- `docs/pendencias-verificacao.md`: observações dos oito itens e pendência 90.
- `docs/supabase/README.md` e `fase-b-anotacoes.md`: total real e comandos atualizados.
- `registros/ant/ant_08_lote3-aulas-19-21.md`: este registro.

SQLs mantidos intactos, capacidade 0–25. Nenhuma migration ou integração nova. Login, WhatsApp, anotações e menus não foram alterados neste lote. Alterações de interface anteriores, seu ant_05, pendência 86, CSS e `.env.example` continuam separados no diretório de trabalho, fora dos commits do lote. Sem push.

## Testes executados (automatizados)

- `node --check assets/js/course.js`: aprovado, saída 0.
- Suítes Fase A, Fase B, Primeiros passos, Planos/quotas e lotes 1–3: **64 testes aprovados, zero falhas**.
- `python tests/fase-a-estrutura.py`: aprovado; **8 páginas e 202 referências locais válidas**, scripts/menus completos e app.js preservado.

As simulações conferiram 21 aulas, índices únicos 0–20, duas trilhas (10 + 11), presença dos campos das três novas aulas e ausência de badges. A auditoria das 18 anteriores encontrou diferenças somente nos campos autorizados: Aula 2 objective/body/exercise/expected; Aula 8 body; Aula 11 body. Os demais campos ficaram iguais. Três MDs intactos, atributos de cópia MongoDB iguais, SQLs intactos e oito itens com fonte/veredito mantidos na tabela.

Progresso simulado: `[0,1,2]` resulta em 14%; concluir Aula 19 mantém `[0,1,2,18]`, 19% e recarga. Envio/recuperação simulados de índice 20 e percentual 5% para uma conclusão em 21.

Não foram executados navegador, SQL/Supabase real, servidor SQLite, ferramenta MCP, delegação real de agentes ou CLI agy. Testes simulados não comprovam esses recursos ou a configuração de produção.

Comandos para repetição:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs tests/lote1.test.cjs tests/lote2.test.cjs tests/lote3.test.cjs
python tests/fase-a-estrutura.py
python -m http.server 8765
```

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html`. Esperado: 21 aulas, Trilha principal com 1–10 e Formação em agentes com 11–21; menus e fixação preservados. Resultado: pendente.
2. Conferir aulas 19–21: objetivo, corpo, conceitos, exercício e resultado esperado presentes, coerentes com o material e sem badges. Resultado: pendente.
3. Conferir aulas 2, 8 e 11, guia MongoDB e Aula 21. Esperado: nomes/locais de pastas e public/8080 como modelos adaptáveis; segurança de credenciais mantida; comandos de cópia iguais. Resultado: pendente.
4. Sem progresso local anterior, concluir Aula 19. Esperado: 1 de 21 e **5%**; recarregar mantém. Com outras conclusões, usar `Math.round(concluídas / 21 * 100)`. Resultado: pendente.
5. Conferir progresso antigo e marcar/desmarcar uma nova aula. Esperado: índices mantidos e persistência na chave existente. Resultado: pendente.
6. Se ativar Supabase conforme README, usar os schemas existentes 0–25, sem nova migration; concluir Aula 21 e recuperar em outro navegador. Esperado: `aula_index = 20`; isolamento entre contas deve ser verificado no projeto real. Resultado: pendente.
7. Revisar menus, leitura, progresso e anotações em 900px, 680px e 370px. Esperado: sem regressões ou rolagem horizontal indevida. Resultado: pendente.

## Pendências abertas

- **90:** validação manual visual/didática do lote e das orientações de pastas.
- **43, 54–60:** oito itens pesquisados permanecem abertos nos escopos ainda não confirmados.
- **88** e demais pendências anteriores de ativação real permanecem abertas. **86** pertence à interface anterior.

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

## Commits

- `df1c924` — `feat: implementa lote 3 e esclarece modelos de pastas`.
- `2f4bfe5` — `style: atualiza catalogo para vinte e uma aulas`.
- `c8dc8b3` — `docs: registra pesquisa editorial do lote 3`.

Este registro recebe commit documental posterior com os hashes reais. Commits locais na main, sem push.
