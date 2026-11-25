# Concorrência, filas e mensagens

Origem: módulo 9.

## Separação das demandas

O material distingue três situações: deixar uma tarefa seguinte na fila, corrigir a direção do trabalho em andamento e interromper uma execução. O objetivo é manter foco e evitar decisões baseadas em estado antigo dos arquivos.

> VERIFICAR: ver pendencias-verificacao.md, item 44

> VERIFICAR: ver pendencias-verificacao.md, item 45

## Processos longos

Servidores e observadores de arquivos permanecem ativos por mais tempo que uma verificação pontual. A proposta é acompanhá-los separadamente, incluindo seus resultados e encerramento.

> VERIFICAR: ver pendencias-verificacao.md, item 46

## Estado compartilhado

Antes de iniciar uma tarefa dependente, o material propõe considerar o estado resultante da anterior. Os mecanismos e garantias internos descritos no original não foram confirmados.

> VERIFICAR: ver pendencias-verificacao.md, item 47

Os objetivos práticos foram reunidos no [laboratório de terminal](../03-laboratorios/lab-terminal-e-shell.md). A divisão entre agentes está no [laboratório multiagente](../03-laboratorios/lab-multi-agentes.md).
