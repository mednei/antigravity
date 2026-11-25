# Laboratório: RAG e contexto

Origem: módulo 5 e seção 8.1.

## Por que selecionar contexto

O material discute perda de atenção em contexto longo (Lost in the Middle), latência e consumo de tokens. A proposta é recuperar trechos relevantes em vez de enviar indiscriminadamente o projeto inteiro.

## Leitura estrutural e recuperação

AST é a estrutura sintática de um programa. Uma leitura estrutural pode organizar funções, classes, métodos e imports, permitindo concentrar a inspeção nos símbolos relevantes.

O pipeline didático de recuperação descrito no material é:

1. Dividir o código em trechos com significado, como funções e classes.
2. Representar os trechos por embeddings.
3. Comparar a consulta com essas representações.
4. Recuperar os trechos mais relacionados para o contexto da tarefa.

Isso é uma explicação conceitual, não comprovação da implementação interna do Antigravity.

> VERIFICAR: ver pendencias-verificacao.md, item 29

> VERIFICAR: ver pendencias-verificacao.md, item 40

## Menções e otimização

A apostila propõe selecionar arquivos, pastas, histórico e documentação como contexto. O catálogo de menções e as otimizações automáticas foram retirados até confirmação.

> VERIFICAR: ver pendencias-verificacao.md, item 28

> VERIFICAR: ver pendencias-verificacao.md, item 30

## Regras e memória

Regras são diretrizes prescritivas; memória reúne fatos e observações. O mecanismo de aprendizado e persistência específico do produto não foi confirmado.

> VERIFICAR: ver pendencias-verificacao.md, item 31

## Prática recebida e lacunas

O objetivo da prática original é comparar o contexto antes e depois de uma pergunta lateral sobre valores padrão mutáveis em Python. Seus comandos não confirmados estão no registro único. O campo Exemplo combinado da seção 5.1 veio vazio; não foi criado um exemplo substituto.

> VERIFICAR: ver pendencias-verificacao.md, item 34

> VERIFICAR: ver pendencias-verificacao.md, item 36

> VERIFICAR: ver pendencias-verificacao.md, item 75

A aplicação de recuperação com fontes jurídicas está no [Juriel](../04-juriel/00-capa-alem-da-apostila.md#fundamentacao-e-avaliacao).
