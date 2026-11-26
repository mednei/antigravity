# ant_03: Aula de instalação e catálogo por trilha

- Data: 2026-11-26
- Fase: C (conversão de conteúdo)
- Ambiente: dev
- Status: pendente

## O que foi feito

Convertido o tema de instalação em uma aula, após consulta editorial às fontes oficiais atuais.
Mantidos o MD-fonte, os oito objetos de aula anteriores e seus índices; a nova Aula 09 usa índice 8 e trilha `primeiros-passos`.
Preparados catálogo em duas trilhas, contadores globais e migration de progresso/anotações para nove aulas.
Acrescentada preservação local, por conta, das conclusões rejeitadas pela constraint antiga; preparados testes para execução pelo usuário.

### Divisão proposta e implementada

Uma aula: **Instalação e requisitos**, categoria **PRIMEIROS PASSOS**, trilha **Primeiros passos**, duração **estimada de 5 minutos**. Não foi necessário ultrapassar o limite de três aulas nem interromper para aprovação da divisão.

A base real tinha **oito**, e não seis aulas: as duas de bancos já existiam. As oito foram preservadas, índices 0–7; total novo **9**. A trilha principal mantém essas oito na mesma ordem. O percentual global agora considera nove aulas.

### Verificação editorial e orientação posterior do usuário

Foi lido o MD inteiro: ambiente de desenvolvimento, procedimentos retirados e lacuna 3.4, com sete marcadores para os itens 4, 18, 20, 21, 22, 23 e 75. Não há comando executável de instalação no MD atual. A checagem das afirmações a que esses marcadores remetem e suas decisões estão em [evidências e fontes oficiais](../../docs/01-primeiros-passos/instalacao-e-requisitos-verificacao.md), consultadas em 26/11/2026.

O usuário esclareceu que **VERIFICAR é trabalho editorial do Codex**, e não um badge para o aluno: publicar apenas o trecho confirmado, mantendo no Markdown os trechos incorretos ou não confirmados. Essa instrução substituiu a exigência inicial de renderizar todas as marcações. O MD-fonte permaneceu intacto. No site entram os trechos confirmados sobre IDE/extensão, instalação pelo painel do VS Code, configurações, Pyright/Pylance e SSH com escopo explícito do App. As fontes e a data aparecem na aula.

Não foram publicados comandos CLI de instalação não confirmados, troca de catálogo, cópias forçadas, links simbólicos nem lacunas editoriais. A generalização de ausência de IA local foi refutada pelo suporte documentado no SDK, sem presumir suporte equivalente na IDE. Os itens compostos continuam abertos somente quanto às partes restantes; ausência de confirmação não foi classificada como falsidade.

A atividade de consulta e a duração estimada são organização didática desta conversão, sem atribuição de exercício novo ao professor. Para os próximos MDs, reutilizar o mesmo filtro editorial documentado em docs/README.md.

## Arquivos tocados

- `assets/js/course.js`: aula no índice 8, `trail`, agrupamento, contadores e fallback de constraint antiga para progresso.
- `assets/css/style.css`: somente novos estilos de trilhas nos commits desta tarefa.
- `index.html`: resumo da Aula 09 e contadores do catálogo.
- `produtos.html`: total de nove aulas e contador alimentado pelo array.
- `docs/README.md`: interpretação editorial de VERIFICAR para conversões futuras.
- `docs/01-primeiros-passos/instalacao-e-requisitos-verificacao.md`: fontes, decisões e divisão didática.
- `docs/pendencias-verificacao.md`: delimitação das partes confirmadas e pendências 82–83.
- `docs/supabase/20261126-primeiros-passos.sql`: migration para índices 0–8 de progresso e, se instalada, anotações.
- `docs/supabase/README.md`: ordem de aplicação, consulta SQL e comportamento sem migration.
- `tests/course-fixtures.cjs`: mocks compartilhados das simulações, sem rede real.
- `tests/fase-a.test.cjs`: comparação das oito aulas originais e expectativas sobre total variável, reutilizando os mocks.
- `tests/fase-a-estrutura.py`: mensagem final sem referência fixa a oito aulas.
- `tests/primeiros-passos.test.cjs`: cenários da conversão preparados para execução pelo usuário.
- `registros/ant/ant_03_aulas-primeiros-passos.md`: este registro.

As alterações anteriores de `.env.example` e do cursor do login no CSS ficaram fora dos commits desta tarefa. Não foram modificados login, WhatsApp, anotações, menu mobile ou cópia de comandos. A migration amplia também a constraint de anotações para que a funcionalidade existente aceite a Aula 09; seu código não foi alterado. Nenhum push foi executado.

## Testes executados (automatizados)

**Nenhum executado, por instrução expressa do usuário.** Não foram executados `node --check`, suítes, conferência de links, whitespace, navegador nem SQL. A consulta de fontes oficiais foi uma checagem editorial, sem equivaler a testes do aplicativo.

Foram preparados cenários para preservação das oito aulas e do MD, correspondência dos sete marcadores com decisões editoriais, ausência de badges/instruções excluídas, duas trilhas, índices 0–8, progresso na chave existente, recarga, envio/recuperação do índice 8, erro de schema, separação de contas e retomada após migration. Nenhum resultado foi declarado aprovado.

Comandos para o usuário, na raiz do repositório:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs
python tests/fase-a-estrutura.py
git diff --check 874e923 HEAD
```

Resultados: **pendentes**. Para servir o site em outro terminal:

```powershell
python -m http.server 8765
```

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html`. **Esperado:** trilhas “Trilha principal” (8 aulas) e “Primeiros passos” (1 aula); nove aulas no contador. Selecionar a Aula 09. Conteúdo confirmado e links oficiais visíveis, sem badges de pendências ou instruções excluídas. **Resultado:** pendente.
2. Em um navegador sem conclusões, concluir a Aula 09. **Esperado:** `1 de 9`, **11%**; a chave `antigravity-lab-progress-v1` permanece um array contendo o índice 8. Se já houver conclusões, calcular `Math.round(concluídas / 9 * 100)`. **Resultado:** pendente.
3. Recarregar a página, visitar a home e voltar ao catálogo. **Esperado:** progresso mantido e mesmo total global, com aulas anteriores preservadas nos índices 0–7. **Resultado:** pendente.
4. Com a Fase A configurada e o schema antigo, mas sem a migration, concluir a Aula 09 em uma conta. **Esperado:** feedback de gravação local/atualização de schema; recarga no mesmo navegador mantém a conclusão. Sair ou trocar de conta não transfere essa conclusão. Outro navegador não recebe a conclusão ainda não sincronizada. **Resultado:** pendente.
5. No SQL Editor do mesmo projeto Supabase, executar `docs/supabase/20261126-primeiros-passos.sql` **após** os schemas A e B instalados. Se usar apenas A, B é opcional; ao instalar B depois, reaplicar a migration. Executar a consulta de constraints do README. **Esperado:** limites 0–8 nas tabelas instaladas, sem perda de linhas ou alteração de RLS. **Resultado:** pendente.
6. Depois da migration, desmarcar e remarcar a Aula 09 na conta do passo 4; entrar em outro navegador. **Esperado:** `aula_index = 8` em `progresso` e conclusão recuperada. Sem conclusões anteriores, barra em 11%. **Resultado:** pendente.
7. Se a Fase B estiver instalada, salvar uma anotação na Aula 09 após a migration e recarregar. **Esperado:** anotação persistida, pertencente apenas à conta e aula corretas. Sem migration, o feedback existente pode indicar erro; não há fallback local de anotações. **Resultado:** pendente.
8. Sem login, concluir/desmarcar uma aula e recarregar. Conferir catálogo, links de fontes e navegação em 900px, 680px e 370px. **Esperado:** progresso local funciona como antes; trilhas legíveis e sem rolagem horizontal indevida. **Resultado:** pendente.

## Pendências abertas

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

- **82:** testes preparados e revisão visual/didática desta conversão, a executar pelo usuário.
- **83:** aplicação da migration e persistência/RLS reais para a Aula 09.
- **4, 18, 20, 21, 22, 23:** partes ainda não confirmadas, delimitadas pelas evidências; não publicadas como fatos.
- **75:** lacunas do material-fonte, preservadas e fora da aula.

As pendências anteriores **76–81** continuam com o status registrado; a nova aula não as encerra. O status deste registro permanece pendente até os resultados do usuário.

## Commits

- `f1b1a23` — `feat: converte instalacao-e-requisitos em aulas do curso`.
- `5df47cc` — `feat: migra schema de progresso para novo total de aulas`.
- `8e2a942` — `style: agrupamento por trilha no catalogo`.

Este registro recebe um commit documental posterior para listar os três hashes de implementação já existentes. Todos são locais, sem push.
