# ant_07: Lote 2 — aulas 15 a 18

- Data: 2026-11-26
- Fase: C
- Ambiente: dev
- Status: pendente

## O que foi feito

Implementadas quatro aulas nos índices 14–17, preservando integralmente as 14 anteriores.
Lidas as cinco fontes e pesquisados seus 19 itens VERIFICAR em documentação oficial atual, sem executar CLI agy, plugins, hooks ou restaurações.
Publicados conceitos do material e recortes comprovados com escopo explícito; nenhum badge ou instrução duvidosa nas aulas.
Atualizados os contadores e o progresso para 18 aulas reais, reutilizando duas trilhas e o SQL já preparado para 26.
Executados 57 testes automatizados e conferência estrutural; revisão visual/didática e Supabase real continuam pendentes.

### Divisão e classificação por aula

| Aula / índice | Título e fontes | Entra | Não entra | Cinza |
|---|---|---|---|---|
| 15 / 14 | Contexto, recuperação e memória — docs/03-laboratorios/lab-rag-e-contexto.md | Seleção de contexto, AST e recuperação conceitual; regras versus memória; menções e pergunta lateral delimitadas. | Indexação interna presumida, comandos de memória, percentuais, garantias de isolamento e trechos ausentes. | Nenhum. |
| 16 / 15 | Terminal, filas e tarefas dependentes — docs/03-laboratorios/lab-terminal-e-shell.md + docs/02-formacao-agentes/10-concorrencia-e-mensagens.md | Observação de saída, erro, processos contínuos e tarefas dependentes; práticas da calculadora e primos; Queued Messages com escopo de CLI. | Contratos antigos de APIs, garantias de fila, sincronização ou encerramento de processos não comprovados. | Nenhum. |
| 17 / 16 | Sessões, versões e restauração — docs/02-formacao-agentes/11-sessoes-versionamento-rollback.md | Conversa versus arquivos; retomada documentada; comparação de restauração em cópia de laboratório. | Shadow Git, caminhos e comandos não confirmados e promessa absoluta de preservação manual. | Nenhum. |
| 18 / 17 | Validação e automação com hooks — docs/02-formacao-agentes/05-hooks-e-validacao.md | Verificações reproduzíveis, revisão, eventos documentados de hooks e componentes de plugins. | Schema antigo, instalação automática presumida e correção obrigatória não demonstrada. | Nenhum. |

Durações estimadas: 10, 12, 8 e 10 minutos, respectivamente. A prática da pergunta sobre valores padrão mutáveis em Python, calculadora com “trinta”, primos até 50.000, comparação de restauração e observação de script de verificação vêm dos MDs. Nenhuma lacuna recebeu exercício substituto. Estimativas e adaptação editorial não são medições nem capacidades atribuídas ao professor ou à ferramenta.

### Pesquisa dos itens VERIFICAR

Consulta em **26/11/2026**. O veredito se refere ao item completo: confirmação parcial não encerra as demais afirmações. Nenhuma remoção da tabela central neste lote; todos os 19 itens continuam com observação atualizada. A lacuna 75 depende do material de origem, não de documentação do fornecedor.

Resultados completos, motivos e recortes publicados: [pesquisa do Lote 2](../../docs/02-formacao-agentes/lote-2-verificacao.md).

| Item | Veredito | Fontes consultadas |
|---|---|---|
| 28 | Parcial | [menções](https://antigravity.google/docs/at-mentions/) |
| 29 | Parcial | [busca](https://antigravity.google/docs/cli/commands/codesearch); [contexto](https://antigravity.google/docs/learn/context-and-tokens/) |
| 30 | Parcial | [contexto](https://antigravity.google/docs/learn/context-and-tokens/); [changelog](https://antigravity.google/docs/changelog) |
| 31 | Não confirmado | [CLI](https://antigravity.google/docs/cli/reference); [contexto](https://antigravity.google/docs/learn/context-and-tokens/) |
| 34 | Parcial | [sessões](https://antigravity.google/docs/cli/conversations/); [pergunta lateral](https://antigravity.google/docs/commands/btw/) |
| 36 | Parcial | [CLI](https://antigravity.google/docs/cli/reference) |
| 40 | Não confirmado | [hooks](https://antigravity.google/docs/hooks/); [busca](https://antigravity.google/docs/cli/commands/codesearch) |
| 42 | Parcial | [hooks](https://antigravity.google/docs/hooks/); [CLI](https://antigravity.google/docs/cli/reference) |
| 44 | Parcial | [configurações](https://antigravity.google/docs/settings?tab=cli) |
| 45 | Parcial | [configurações](https://antigravity.google/docs/settings?tab=cli); [changelog](https://antigravity.google/docs/changelog) |
| 46 | Parcial | [hooks](https://antigravity.google/docs/hooks/); [CLI](https://antigravity.google/docs/cli/reference) |
| 47 | Não confirmado | [CLI](https://antigravity.google/docs/cli/reference); [sessões](https://antigravity.google/docs/cli/conversations/) |
| 48 | Parcial | [sessões](https://antigravity.google/docs/cli/conversations/); [CLI](https://antigravity.google/docs/cli/reference) |
| 49 | Não confirmado | [revisão](https://antigravity.google/docs/review-changes/); [sessões](https://antigravity.google/docs/cli/conversations/) |
| 50 | Parcial | [revisão](https://antigravity.google/docs/review-changes/) |
| 51 | Parcial | [manifesto](https://antigravity.google/docs/build-plugins/); [plugins](https://antigravity.google/docs/plugins/) |
| 52 | Parcial | [plugins](https://antigravity.google/docs/plugins/); [manifesto](https://antigravity.google/docs/build-plugins/) |
| 53 | Parcial | [hooks](https://antigravity.google/docs/hooks/); [manifesto](https://antigravity.google/docs/build-plugins/) |
| 75 | Lacuna | [Fonte recebida e lacunas](../03-laboratorios/lab-rag-e-contexto.md) |

## Arquivos tocados

- `assets/js/course.js`: aulas 15–18, trilha `formacao`, demais objetos e lógica preservados.
- `index.html` e `produtos.html`: contadores e descrição para 18 aulas reais.
- `tests/lote1.test.cjs`: expectativas variáveis para preservar seus cenários quando o catálogo cresce.
- `tests/lote2.test.cjs`: cenários do lote, preservação de fontes, trilhas, progresso e decisões editoriais.
- `docs/README.md`: atualização do lote e fontes.
- `docs/02-formacao-agentes/lote-2-verificacao.md`: 19 vereditos com fontes e classificação.
- `docs/pendencias-verificacao.md`: observações dos 19 itens e pendência 89.
- `docs/supabase/README.md` e `fase-b-anotacoes.md`: total real atualizado, comandos e registro atual.
- `registros/ant/ant_07_lote2-aulas-15-18.md`: este registro.

Os cinco MDs-fonte, os quatro SQLs preparados para 0–25, login, WhatsApp, anotações, menus e cópia de comandos não foram alterados neste lote. A capacidade do banco não define o percentual: o denominador é 18. Não foi criada migration ou integração.

As alterações anteriores de interface, seu registro ant_05, pendência 86, CSS e `.env.example` foram preservadas separadamente no diretório de trabalho e ficaram fora dos commits do lote. Nenhum push foi realizado.

## Testes executados (automatizados)

- `node --check assets/js/course.js`: aprovado, saída 0.
- Suítes Fase A, Fase B, Primeiros passos, Planos/quotas, Lote 1 e Lote 2: **57 testes aprovados, zero falhas**.
- `python tests/fase-a-estrutura.py`: aprovado, **8 páginas e 202 referências locais válidas**, scripts e menus completos, `app.js` preservado.

Comprovados nas simulações: 18 aulas e índices únicos 0–17; 14 objetos e cinco fontes intactos; ausência de badges/VERIFICAR e contratos excluídos; duas trilhas, 10 + 8; `[0,1,2]` mantido e 17%; concluir Aula 15 preserva `[0,1,2,14]`, 22% e recarga; envio/recuperação simulados do índice 17; schemas existentes intactos; 19 itens com fonte/veredito e mantidos na tabela.

Não foram executados navegador, Supabase/SQL real, CLI agy, instalação de plugin/hook ou restauração. Revisão visual e funcionamento real do banco não foram declarados aprovados.

Comandos para repetição pelo usuário:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs tests/lote1.test.cjs tests/lote2.test.cjs
python tests/fase-a-estrutura.py
python -m http.server 8765
```

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html`. Esperado: 18 aulas, Trilha principal com 1–10 e Formação em agentes com 11–18. Menus desdobráveis e fixação mantêm a interface existente. Resultado: pendente.
2. Abrir aulas 15–18 e conferir objetivo, corpo, conceitos, exercício e resultado esperado. Esperado: conteúdo coerente com os MDs e fontes, sem badges ou capacidades não comprovadas. Resultado: pendente.
3. Em progresso local vazio, concluir Aula 15. Esperado: 1 de 18, **6%**. Recarregar mantém a conclusão; para mais aulas usar `Math.round(concluídas / 18 * 100)`. Resultado: pendente.
4. Conferir as conclusões anteriores, marcar/desmarcar uma nova e recarregar. Esperado: mesmos índices e persistência na chave `antigravity-lab-progress-v1`. Resultado: pendente.
5. Consultar pesquisa e tabela central. Esperado: 19 itens com observações atualizadas, nenhum removido por confirmação parcial e cinco fontes intactas. Resultado: pendente.
6. Se ativar Supabase, seguir seu README e usar os schemas existentes 0–25, sem nova migration. Entrar, concluir Aula 18 e recuperar em outro navegador. Esperado: `aula_index = 17`; duas contas devem permanecer isoladas. Resultado: pendente.
7. Revisar menu, leitura, progresso e anotações em 900px, 680px e 370px. Esperado: sem regressão na interface ou rolagem horizontal indevida. Resultado: pendente.

## Pendências abertas

- **89:** revisão manual visual/didática e funcional do Lote 2.
- **28–31, 34, 36, 40, 42, 44–53 e 75:** os 19 itens pesquisados permanecem abertos nos escopos restantes, conforme evidências.
- **88** e pendências anteriores de ativação real do Supabase continuam abertas. Simulações não comprovam ativação ou RLS real; **86** permanece da interface anterior.

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

## Commits

- `c4c880f` — `feat: implementa lote 2 com aulas 15 a 18`.
- `69bb10e` — `style: atualiza catalogo para dezoito aulas`.
- `6871c4b` — `docs: registra pesquisa editorial do lote 2`.

Este registro recebe commit documental posterior com os hashes reais. Commits locais na main, sem push.
