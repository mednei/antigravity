# ant_05: Menu desdobrável e fixável do conteúdo interativo

- Data: 2026-11-26
- Fase: C
- Ambiente: dev
- Status: pendente

## O que foi feito

Após esclarecimento com screenshot, cada trilha do catálogo tornou-se um menu desdobrável nativo: “Trilha principal” contém aulas 1–8 e “Primeiros passos” contém 9–10.
As trilhas começam recolhidas sem preferência anterior; abrir uma exibe suas aulas dentro dela. A aula selecionada permanece ao lado e não é escondida ao recolher a trilha.
Por padrão, a navegação não é fixada e fica em uma faixa acima da aula: a leitura usa toda a largura disponível. Selecionar aula ou desafixar recolhe as trilhas para liberar espaço.
Fixar abre as trilhas e mantém a navegação visível na lateral durante a rolagem em desktop. Em telas pequenas fica acima, sem dividir a largura da leitura. A fixação vale apenas nesta visita e começa desativada ao recarregar.
Preferência de abertura das trilhas: `antigravity-lab-trail-menus-v1`, independente do progresso. A antiga preferência persistente de fixação é ignorada. A home mantém seu agrupamento dos dez cartões e preferência própria anterior.
Atualizados os URLs do CSS e do script de menu para evitar reutilização da versão anterior desses arquivos pelo cache.

## Arquivos tocados

- `produtos.html`: estrutura e controles do menu, inclusão do script dedicado.
- `index.html`: cartões das aulas 1–10 dentro do menu Conteúdo interativo e inclusão do script compartilhado.
- `assets/js/course-menu.js`: controle de estado, persistência das preferências, teclado e seleção em telas pequenas.
- `assets/js/course.js`: renderização de cada trilha em details/summary, com preservação da abertura ao redesenhar e persistência local.
- `assets/css/style.css`: estilos e comportamento responsivo do menu, acrescentados ao final.
- `docs/pendencias-verificacao.md`: item 86.
- `registros/ant/ant_05_menu-conteudo-interativo.md`: este registro.

As dez aulas, seus índices, conteúdo, progresso, Supabase e anotações não foram alterados. As mudanças anteriores de `.env.example` e do cursor no CSS foram preservadas. Não foi feito push.

## Testes executados (automatizados)

Nenhum executado, conforme orientação do usuário. Não foram executados testes, conferência de links, validação de sintaxe ou navegador. Esta alteração de interface será validada pelo usuário.

Comandos na raiz do projeto:

```powershell
node --check assets/js/course-menu.js
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs
python tests/fase-a-estrutura.py
git diff --check
python -m http.server 8765
```

Os testes existentes cobrem regressões de aulas, progresso e anotações; não substituem o roteiro visual e de interação abaixo.

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html` sem preferências anteriores. **Esperado:** “Trilha principal” e “Primeiros passos” recolhidos. Abrir Trilha principal exibe somente suas aulas 1–8 dentro do menu; Primeiros passos exibe aulas 9–10. Recolher uma trilha não esconde o detalhe da aula selecionada.
2. Clicar em Fixar e rolar a aula. **Esperado:** menu permanece visível abaixo da barra superior, dentro da seção de aulas; a lista possui rolagem própria se necessário. Desafixar devolve o comportamento normal.
3. Recolher as duas trilhas com a navegação fixada. **Esperado:** títulos compactos continuam acessíveis durante a rolagem dentro da seção; permitem reabrir ou desafixar.
4. Desafixar e recolher as trilhas. **Esperado:** sem coluna vazia, leitura ocupa toda a largura. Fixar abre as trilhas e reserva a lateral no desktop. Recarregar sempre começa não fixado; chave de progresso não muda por manipular o menu.
5. Navegar por Tab e acionar os títulos das trilhas e o botão Fixar com Enter/Espaço. **Esperado:** foco visível e operação nativa dos menus details/summary.
6. Em 900px, 680px e 370px, abrir uma trilha e selecionar uma aula. **Esperado:** trilha permanece aberta e conteúdo selecionado aparece abaixo da navegação. Fixar mantém a navegação acessível; a lista tem altura limitada e rolagem própria.
7. Marcar aula concluída e usar Próxima aula. **Esperado:** progresso e anotações mantêm o funcionamento existente; redesenhar o catálogo não altera as preferências do menu.
8. Bloquear localStorage ou usar uma preferência inválida. **Esperado:** controles continuam funcionando nesta página, sem travar as aulas; sem armazenamento não se exige persistência após recarregar. Sem JavaScript, a estrutura não esconde a lista por padrão, embora as aulas continuem dependendo do script do catálogo.

Todos os resultados permanecem pendentes.

Complemento após correção: abrir também `http://localhost:8765/index.html`. Esperado: os dez cartões ficam dentro de Conteúdo interativo; recolher esconde todos e reabrir os restaura. Fixar mantém o cabeçalho acessível durante a leitura dessa seção.

## Pendências abertas

- **86:** validação dos controles, persistência de preferências e revisão responsiva do menu, no registro único `docs/pendencias-verificacao.md`.
- As pendências anteriores permanecem com seus estados registrados.

## Commits

Implementação consolidada no commit de interface que contém este registro, para o envio ao GitHub autorizado pelo usuário em 26/11/2026. A revisão visual permanece pendente; consolidar para publicação não equivale a aprová-la.
