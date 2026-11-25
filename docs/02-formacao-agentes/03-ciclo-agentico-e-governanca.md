# Ciclo agêntico e governança

Origem: módulos 1, 4, 6 e 8. Os itens abaixo descrevem o método de trabalho proposto pelo material, sem afirmar uma configuração padrão do produto.

## Ciclo de execução

Objetivo → observação dos arquivos → planejamento → seleção de ferramentas → execução → análise do resultado → correção ou conclusão.

O ambiente de execução aplica a política de acesso às chamadas de ferramentas. Saída, erros e código de retorno alimentam a próxima decisão. Os detalhes de implementação dependem da ferramenta efetivamente disponível.

## Personas e regras

O material distingue a postura de engenharia (premissas, tom e princípios) das regras operacionais de um projeto. Exemplos de princípios propostos:

- Preferir funções puras e imutabilidade quando possível.
- Justificar dependências externas.
- Documentar padrões de arquitetura, dados, frontend e validação.

> VERIFICAR: ver pendencias-verificacao.md, item 24

> VERIFICAR: ver pendencias-verificacao.md, item 25

> VERIFICAR: ver pendencias-verificacao.md, item 12

## Autonomia, terminal e fronteiras

A escolha do grau de autonomia e das permissões deve acompanhar o risco do trabalho. Listas de comandos permitidos ou bloqueados são mecanismos discutidos no material; seus nomes, padrões e garantias específicos permanecem em verificação.

> VERIFICAR: ver pendencias-verificacao.md, item 5

> VERIFICAR: ver pendencias-verificacao.md, item 26

> VERIFICAR: ver pendencias-verificacao.md, item 27

> VERIFICAR: ver pendencias-verificacao.md, item 13

> VERIFICAR: ver pendencias-verificacao.md, item 41

## Diretivas operacionais

O módulo 6 distingue instruções ao modelo de diretivas interpretadas pelo ambiente de execução. O catálogo exato foi retirado do texto didático enquanto não houver confirmação.

> VERIFICAR: ver pendencias-verificacao.md, item 33

## Referências canônicas

- [Artefatos e revisão](./04-artefatos-e-walkthrough.md).
- [Hooks e validação](./05-hooks-e-validacao.md).
- [Contexto e memória](../03-laboratorios/lab-rag-e-contexto.md).
- [Concorrência e mensagens](./10-concorrencia-e-mensagens.md).
- [Sessões e rollback](./11-sessoes-versionamento-rollback.md).
