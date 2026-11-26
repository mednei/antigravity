# ant_02: Fase B — anotações por aula e print por URL

- Data: 2026-11-26
- Fase: B
- Ambiente: dev
- Status: pendente

## O que foi feito

Preparado o schema de anotações com RLS por aluno e suporte às oito aulas existentes, índices 0 a 7.
Acrescentada a seção MINHAS ANOTAÇÕES abaixo do exercício, com convite ao login ou formulário e lista da aula.
Implementados criação, edição, exclusão com confirmação, data, print por URL e feedback de erro/sucesso.
Preparados estilos responsivos e testes simulados; configuração, SQL e todas as validações ficam com o usuário.

A [Fase A](./ant_01_fase-a-supabase.md) permanece pendente de configuração e testes reais. Nenhum projeto, conta, anotação ou arquivo foi criado no Supabase nesta tarefa. Não há upload direto de imagem nesta fase.

## Arquivos tocados

- [docs/supabase/fase-b-schema.sql](../../docs/supabase/fase-b-schema.sql) — criado; tabela `anotacoes`, índice de consulta e políticas RLS.
- [assets/js/course.js](../../assets/js/course.js) — modificado; interface e lógica de anotações no detalhe da aula.
- [assets/css/style.css](../../assets/css/style.css) — modificado; estilos da seção e regras de 900px, 680px e 370px.
- [tests/fase-b.test.cjs](../../tests/fase-b.test.cjs) — criado; simulações preparadas, não executadas.
- [docs/supabase/fase-b-anotacoes.md](../../docs/supabase/fase-b-anotacoes.md) — criado; instalação manual, comportamento e comandos.
- [docs/supabase/README.md](../../docs/supabase/README.md) — modificado; referência à Fase B.
- [docs/README.md](../../docs/README.md) — modificado; referência ao schema, instruções e registro desta fase.
- [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md) — modificado; itens 79 a 81.
- [registros/ant/ant_02_fase-b-anotacoes.md](./ant_02_fase-b-anotacoes.md) — criado; este registro.

Não foram editados os objetos das aulas, a chave `antigravity-lab-progress-v1`, `app.js`, `auth.js` ou `supabase-client.js`. A Fase B usa a sessão e o client já existentes.

## Testes executados (automatizados)

**Nenhum executado nesta tarefa, por instrução expressa do usuário.** Não foram executados `node --check`, suítes, scripts de conferência de links, verificações de whitespace, navegador nem SQL. Nenhum resultado foi marcado como aprovado.

Foram preparados testes simulados para convite ao login, filtros por aluno/aula, ordem da lista, salvar, editar, excluir com confirmação, print por URL, entrada inválida, texto seguro, falhas de rede, rascunhos e respostas atrasadas. Eles não fazem acesso real ao banco.

Comandos para o usuário executar a partir da raiz do projeto:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs
python tests/fase-a-estrutura.py
git diff --check 92e569a HEAD
```

Resultados de todos esses comandos: **pendentes**. A suíte da Fase A foi incluída para conferir regressões em progresso, login e cache; seus resultados históricos não foram reutilizados como validação da Fase B.

## Testes do usuário: pendentes

Pré-condição: configurar a Fase A no projeto Supabase e entrar com uma conta de teste. Para esperar uma lista vazia na Aula 02, usar uma conta ainda sem anotações naquela aula. O curso possui oito aulas; o schema contempla 0 a 7, preservando as aulas 07 e 08.

1. **Instalar o schema.** Executar [docs/supabase/fase-b-schema.sql](../../docs/supabase/fase-b-schema.sql) no SQL Editor do projeto configurado. **Esperado:** tabela `public.anotacoes` criada com RLS habilitado e políticas próprias de select/insert/update/delete. **Resultado:** pendente.
2. **Salvar texto.** Logado, abrir [produtos.html](../../produtos.html), selecionar Aula 01, escrever uma observação e salvar. **Esperado:** feedback de sucesso e anotação na lista da Aula 01. **Resultado:** pendente.
3. **Salvar print por URL.** Colar uma URL pública direta de imagem no campo de print e salvar, com ou sem texto. **Esperado:** uma anotação com a imagem e seu texto alternativo; se a imagem não puder ser carregada, aparece uma indicação e um link para abri-la. **Resultado:** pendente.
4. **Conferir persistência.** Recarregar a página mantendo a sessão. **Esperado:** as anotações salvas continuam na lista, com as mais recentes primeiro. **Resultado:** pendente.
5. **Conferir separação por aula.** Selecionar Aula 02, ainda sem anotações. **Esperado:** lista vazia dessa aula, sem exibir anotações da Aula 01. **Resultado:** pendente.
6. **Retornar à aula anterior.** Selecionar novamente Aula 01. **Esperado:** suas anotações da Aula 01 reaparecem. **Resultado:** pendente.
7. **Editar.** Editar a anotação de texto criada no passo 2 e salvar. **Esperado:** texto atualizado na mesma anotação, sem duplicação; `atualizado_em` atualizado no banco. **Resultado:** pendente.
8. **Excluir com confirmação.** Excluir a anotação editada e confirmar. **Esperado:** essa anotação sai da lista; as demais permanecem. Repetir cancelando a confirmação em outra anotação. **Esperado:** a exclusão cancelada não remove a anotação. **Resultado:** pendente.
9. **Sair da conta.** Deslogar. **Esperado:** a seção mostra “Entre para salvar suas anotações”, sem formulário privado ou anotações da conta anterior. **Resultado:** pendente.

Complementos para encerrar as pendências da fase:

10. **Duas contas e aulas 07/08.** Conferir em duas contas que uma não acessa as anotações da outra; salvar também nas aulas 07 e 08. **Esperado:** isolamento pelo RLS e gravação dos índices 6/7. **Resultado:** pendente.
11. **Erros e rascunhos.** Tentar salvar em branco e com URL fora de HTTP(S); simular uma falha de rede e redesenhar o painel marcando/desmarcando uma aula. **Esperado:** entradas inválidas não são gravadas, erros aparecem no feedback e o rascunho continua no formulário da aula, sem travar o progresso. **Resultado:** pendente.
12. **Responsividade.** Conferir a seção em 900px, 680px e 370px, com texto longo e imagem larga. **Esperado:** conteúdo legível, imagem limitada à largura disponível e botões acessíveis, sem rolagem horizontal indevida. **Resultado:** pendente.

## Pendências abertas

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

- **79:** “Upload direto de imagem para o Storage do Supabase: adiar para fase futura”.
- **80:** execução do schema, persistência real, operações e RLS de anotações.
- **81:** execução pelo usuário das validações preparadas e revisão visual.

As pendências **76–78** da Fase A continuam abertas. O status desta fase permanece **pendente** até o usuário informar os resultados; commits de implementação não comprovam funcionamento testado.

## Commits

Três commits locais da implementação, na ordem solicitada:

- `6510757` — `docs: adiciona schema sql da fase b (anotacoes)`.
- `44d891f` — `feat: adiciona anotacoes por aula com print por url`.
- `89d946f` — `style: estilos da secao de anotacoes responsivos`.

Este registro recebe um commit documental posterior para listar os três hashes já existentes. Nenhum push foi executado nesta tarefa.
