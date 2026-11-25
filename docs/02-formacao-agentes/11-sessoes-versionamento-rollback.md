# Sessões, versionamento e rollback

Origem: módulo 10 e seções de navegação do módulo 6, consolidadas a partir da versão mais completa.

## Conversa e arquivos são estados diferentes

Desfazer uma mensagem no chat não equivale a restaurar arquivos no disco. Apagar uma mensagem não demonstra recuperação do código.

| Operação conceitual | O que muda |
|---|---|
| Rollback de conversa | Histórico ou contexto da conversa. |
| Rollback de arquivos | Conteúdo do sistema de arquivos. |

## Histórico e ramificações

O material propõe retomar tarefas e explorar caminhos alternativos a partir de um ponto de conversa. Formatos de sessão, comandos e isolamento efetivo de ramos aguardam confirmação.

> VERIFICAR: ver pendencias-verificacao.md, item 34

> VERIFICAR: ver pendencias-verificacao.md, item 48

## Checkpoints e auditoria

O objetivo proposto é recuperar alterações preservando o trabalho manual anterior e inspecionar as ações realizadas. Os mecanismos automáticos descritos na apostila não são garantias verificadas.

> VERIFICAR: ver pendencias-verificacao.md, item 49

> VERIFICAR: ver pendencias-verificacao.md, item 50

## Prática sugerida

Em uma cópia de laboratório, criar um arquivo com alterações manuais, solicitar uma mudança e comparar o conteúdo antes e depois de uma restauração. O comando de restauração específico foi retirado até confirmação.

As práticas de versionamento do caso de produto estão no [Juriel](../04-juriel/00-capa-alem-da-apostila.md#versoes-e-lancamentos).
