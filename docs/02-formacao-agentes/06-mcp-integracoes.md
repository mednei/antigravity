# MCP e integrações

Origem: módulo 12. O material apresenta MCP como protocolo aberto de integração entre um cliente e servidores que expõem recursos e ferramentas.

## Papéis

O cliente utiliza as capacidades anunciadas por servidores externos. A apostila propõe esse modelo como caminho de expansão das ferramentas de um agente.

> VERIFICAR: ver pendencias-verificacao.md, item 54

> VERIFICAR: ver pendencias-verificacao.md, item 55

## Credenciais e autorização

O material propõe evitar segredos escritos diretamente nos arquivos de configuração e separar autenticação de uso das ferramentas. Os mecanismos específicos de interpolação, isolamento e ocultação automática não foram confirmados.

> VERIFICAR: ver pendencias-verificacao.md, item 56

> VERIFICAR: ver pendencias-verificacao.md, item 57

## Prática sugerida: consulta a um banco de laboratório

O objetivo é consultar um estoque de exemplo em um SQLite descartável, perguntando qual produto tem maior preço e qual o valor total do estoque. O servidor, a configuração e a ferramenta citados no original permanecem fora do roteiro executável até confirmação.

> VERIFICAR: ver pendencias-verificacao.md, item 58

Para o contexto de produto, consultar [as propostas de integração do Juriel](../04-juriel/00-capa-alem-da-apostila.md#integracoes).
