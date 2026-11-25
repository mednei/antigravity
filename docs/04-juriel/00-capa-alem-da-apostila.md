# Juriel: além da apostila

Origem: juriel-alem-da-apostila.md. Este arquivo reúne requisitos e propostas do caso de estudo; não comprova recursos implementados nem conformidade jurídica.

## Contexto proposto

O documento descreve um sistema de gestão de escritório de advocacia, do atendimento ao encerramento do processo. Propõe três perfis: administração, advogado e cliente, com escopos distintos de acesso.

O escopo pretendido inclui documentos, imagem, voz, minutas, classificação de e-mails e rotinas financeiras e tributárias. A capacidade efetiva do hardware e das integrações permanece em verificação.

> VERIFICAR: ver pendencias-verificacao.md, item 68

> VERIFICAR: ver pendencias-verificacao.md, item 69

<a id="dados-e-retencao"></a>
## Dados e retenção

O material propõe mapear o tratamento de dados por módulo, registrar acessos (quem, quando, de qual origem), definir retenção de áudios/mensagens/documentos e evitar exposição de dados em logs e saídas do modelo.

As afirmações jurídicas e garantias de privacidade do original foram separadas para revisão.

> VERIFICAR: ver pendencias-verificacao.md, item 66

> VERIFICAR: ver pendencias-verificacao.md, item 67

## Autorização e auditoria

Requisito proposto: autorização aplicada no backend, não apenas por filtros na tela. Administradores também devem ter seus acessos registrados.

Prática sugerida no original: tentar acessar o processo de outro cliente alterando seu identificador e verificar se a API impede o acesso indevido.

O guia de consulta de [Supabase](../guias/supabase.md) contém a referência existente sobre RLS.

<a id="fundamentacao-e-avaliacao"></a>
## Fundamentação e avaliação

O material propõe:

- Vincular cada afirmação jurídica gerada aos trechos recuperados da base.
- Sinalizar ausência de fundamento em vez de inventar referências.
- Associar vigência e atualização às fontes.
- Manter um conjunto de referência de 20 a 50 peças revisadas por advogado para comparar mudanças de prompt, modelo e recuperação.

Prática sugerida: pedir uma minuta com artigo inexistente e observar se o sistema sinaliza a ausência de fonte.

O conceito geral de recuperação está no [laboratório de RAG e contexto](../03-laboratorios/lab-rag-e-contexto.md).

<a id="hardware-e-qualidade"></a>
## Hardware e qualidade

O documento propõe comparar qualidade por tarefa, quantizações e disputa de recursos entre voz e elaboração de minutas. A prática sugerida é medir a memória de GPU durante atendimento simultâneo à geração de peça, além de avaliar reconhecimento e síntese de voz em terminologia jurídica.

> VERIFICAR: ver pendencias-verificacao.md, item 68

O critério geral de seleção está em [modelos e dimensionamento](../02-formacao-agentes/07-provedores-privacidade-governanca.md#criterios-de-escolha).

<a id="revisao-humana"></a>
## Revisão humana

Fluxo proposto: minuta com fontes vinculadas → revisão do advogado por trecho → registro da versão aprovada → aprovação humana registrada antes de qualquer protocolo.

As consequências jurídicas e a promessa de prova da revisão precisam de validação própria.

> VERIFICAR: ver pendencias-verificacao.md, item 69

O método geral de revisão está em [artefatos e walkthrough](../02-formacao-agentes/04-artefatos-e-walkthrough.md).

<a id="versoes-e-lancamentos"></a>
## Versões e lançamentos

O documento propõe versões rastreáveis de peças e documentos e estornos financeiros que preservem o lançamento original, a autoria e a justificativa. A retenção e a exclusão de dados precisam ser conciliadas com esse desenho.

> VERIFICAR: ver pendencias-verificacao.md, item 67

O conceito de restauração está em [sessões e rollback](../02-formacao-agentes/11-sessoes-versionamento-rollback.md).

<a id="integracoes"></a>
## Integrações

O material sugere integrações com sistemas processuais, bancos e emissão fiscal. Conectores, permissões e viabilidade não foram comprovados.

> VERIFICAR: ver pendencias-verificacao.md, item 69

O conceito de integração está em [MCP](../02-formacao-agentes/06-mcp-integracoes.md).

## Ordem de trabalho sugerida no original

1. Autorização no backend e trilha de auditoria.
2. Conjunto de avaliação e fundamentação com fontes.
3. Separação de modelos por tarefa.
4. Aprovação de minutas com comentários.
5. Formalização de requisitos de proteção de dados, retenção e consentimento quando aplicável.

As notas originais que qualificavam temas como estáveis ou sem risco foram preservadas no registro único, sem converter essa classificação em validação técnica ou jurídica.

> VERIFICAR: ver pendencias-verificacao.md, item 66

> VERIFICAR: ver pendencias-verificacao.md, item 69
