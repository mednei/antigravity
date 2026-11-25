# Hooks e validação

Origem: seção 1.4 e módulo 11.

## Verificação da entrega

O material contrapõe geração probabilística a verificações reproduzíveis. Propõe checagens estáticas, formatação, tipos e testes para avaliar o resultado produzido.

Exemplos de categorias citadas na apostila:

- Linters e checagens estáticas.
- Formatadores.
- Verificadores de tipos.
- Suítes de testes e cobertura.

Como método de trabalho: planejar → executar → verificar → corrigir quando necessário → apresentar evidências para revisão.

> IA propõe soluções; engenharia valida resultados. Nunca aceite tarefa como pronta apenas porque o agente declarou sucesso.

## Hooks como proposta de automação

O material apresenta hooks como scripts associados a momentos do ciclo de trabalho: preparar o ambiente antes de uma tarefa e verificar alterações depois de uma escrita. Isso descreve o propósito da automação, sem confirmar eventos ou schemas do Antigravity.

> VERIFICAR: ver pendencias-verificacao.md, item 53

## Plugins, ferramentas e procedimentos

Ferramenta é uma operação; uma habilidade/procedimento encadeia operações. O objetivo de empacotar procedimentos é evitar distribuição manual repetida de regras e integrações entre projetos.

> VERIFICAR: ver pendencias-verificacao.md, item 51

> VERIFICAR: ver pendencias-verificacao.md, item 52

## Prática proposta no material

Observar um script de verificação receber os arquivos de uma tarefa e retornar seu resultado. O registro automático do hook depende da confirmação dos eventos e formatos do produto; não foi criado arquivo de configuração presumido.

O [laboratório de terminal](../03-laboratorios/lab-terminal-e-shell.md) concentra observação de saídas e processos. O [guia GitHub](../guias/github.md) aponta para o fluxo de publicação já existente no site.
