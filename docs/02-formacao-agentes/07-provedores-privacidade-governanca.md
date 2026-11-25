# Módulo 14: Provedores de Modelo, Privacidade e Governança Corporativa

Origem: módulo 14 da apostila e complemento fornecido pelo autor do projeto. Revisão editorial e consulta às fontes oficiais: 25/11/2026.

Este módulo conecta a escolha do modelo às decisões sobre dados, identidade e permissões. O objetivo é compreender os critérios de uso antes de configurar um provedor ou enviar informações de um projeto. Conceitos documentados de serviços de nuvem são apresentados com suas fontes; o suporte específico no Antigravity permanece separado.

Pré-requisitos: [contas e workspaces](../01-primeiros-passos/contas-perfis-workspaces.md), [governança](./03-ciclo-agentico-e-governanca.md) e [MCP e integrações](./06-mcp-integracoes.md).

<a id="modelos"></a>
## 14.1 Catálogo, provedores e escolha do modelo

### Modelo, provedor e ferramenta

O modelo realiza a inferência; o provedor oferece uma forma de acesso ou hospedagem; a ferramenta de desenvolvimento utiliza os recursos que sua integração suporta. Encontrar um modelo no catálogo de um provedor não comprova que ele está disponível na IDE, na conta ou na sessão de trabalho.

O Model Garden do Google Cloud reúne modelos do Google, de parceiros e modelos abertos, com diferentes formas de acesso e implantação. Esse catálogo é uma referência sobre o serviço de nuvem, sem comprovar por si só uma integração com o Antigravity. [Fonte: visão geral oficial do Model Garden](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models).

> VERIFICAR: ver pendencias-verificacao.md, item 62

### Correção da nota de fact check

A versão anterior afirmava que “GPT-OSS” era apenas uma expressão genérica. Essa nota foi refutada: a OpenAI publicou os modelos de pesos abertos **gpt-oss-20b** e **gpt-oss-120b**. A existência desses modelos não demonstra suporte no Antigravity. A nota original permanece preservada no registro editorial, identificada como corrigida. [Fonte: anúncio oficial da OpenAI](https://openai.com/index/introducing-gpt-oss/).

<a id="criterios-de-escolha"></a>
### Escolher conforme a tarefa

O material propõe **Model Right-Sizing**: ajustar a capacidade do modelo ao trabalho. Classificar e-mails ou produzir um resumo tem requisitos diferentes de analisar arquitetura, refatorar um módulo amplo ou revisar segurança.

| Perfil de tarefa | Critério de escolha proposto no material |
|---|---|
| Classificação, formatação e resumos | Avaliar modelos menores e respostas rápidas, preservando a qualidade necessária. |
| Implementação e refatoração pontual | Equilibrar qualidade de código, tempo de resposta e consumo. |
| Arquitetura e análise complexa | Avaliar capacidade de raciocínio, contexto e qualidade da solução. |

As classes organizam a comparação, sem garantir desempenho de uma família. A tabela recebida com tempos ilustrativos foi encaminhada ao registro de pendências: ela não representa medição de uma tarefa, hardware ou serviço.

> VERIFICAR: ver pendencias-verificacao.md, item 15

### Seleção e raciocínio estendido

Escolher o modelo e ajustar o esforço de raciocínio são decisões distintas. Os comandos e controles atribuídos à ferramenta no material recebido ainda não compõem um roteiro executável.

> VERIFICAR: ver pendencias-verificacao.md, item 32

> VERIFICAR: ver pendencias-verificacao.md, item 35

### Provedores privados e execução local

O material propõe avaliar execução em infraestrutura própria para necessidades de controle de dados. Conectores, configurações e operação sem internet precisam ser comprovados no ambiente utilizado; não são consequência automática da escolha de um modelo aberto.

> VERIFICAR: ver pendencias-verificacao.md, item 62

<a id="privacidade"></a>
## 14.2 Privacidade e controle dos dados

A pergunta que orienta esta parte é: **para onde vão os dados quando o agente os processa?** O texto recebido reúne quatro aspectos: uso para treinamento, retenção, residência e gestão de chaves.

### Treinamento e retenção

A política publicada do Google Cloud restringe o uso de dados de clientes para treinar ou ajustar modelos sem permissão ou instrução prévia. Esse compromisso deve ser lido no escopo do produto e dos termos aplicáveis. [Fonte: compromisso oficial de privacidade de IA](https://cloud.google.com/security/compliance/ai-trust-and-transparency).

Retenção é uma questão separada: a documentação de governança descreve cenários de armazenamento de dados e condições para retenção zero. Portanto, a restrição de treinamento não permite concluir que todo prompt é descartado imediatamente. [Fonte: governança e retenção de dados](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/data-governance).

As regras aplicáveis aos planos e integrações do Antigravity ainda precisam ser confirmadas.

> VERIFICAR: ver pendencias-verificacao.md, item 19

### Residência e chaves de criptografia

O material propõe avaliar onde o processamento e o armazenamento acontecem. Os nomes de diretivas e as garantias regionais atribuídas à ferramenta não foram confirmados.

> VERIFICAR: ver pendencias-verificacao.md, item 63

**CMEK** permite ao cliente controlar as chaves usadas na criptografia de dados em repouso em serviços compatíveis do Google Cloud. O recurso depende da integração do serviço: não deve ser tratado como uma configuração universal da IDE. [Fonte: documentação oficial de CMEK](https://docs.cloud.google.com/kms/docs/cmek).

<a id="infraestrutura"></a>
## 14.3 Autenticação e governança de infraestrutura

### ADC: descoberta de credenciais

Application Default Credentials (ADC) é uma estratégia usada pelas bibliotecas de autenticação do Google para encontrar credenciais no ambiente. Entre as fontes possíveis estão uma variável de ambiente, um arquivo local de ADC e a identidade associada ao recurso de execução. Não é uma garantia de login automático de qualquer aplicativo. [Fonte: funcionamento oficial de ADC](https://docs.cloud.google.com/docs/authentication/application-default-credentials).

O comando abaixo está documentado para preparar credenciais ADC em desenvolvimento local. Sua presença aqui é uma referência conceitual; não foi executado nesta revisão.

```bash
gcloud auth application-default login
```

Ele cria um arquivo de credenciais local. As credenciais de ADC são distintas das usadas pelo próprio gcloud. O fluxo de autenticação depende da conta e da configuração; não se presume SSO com um provedor corporativo específico. [Fonte: configuração oficial de ADC](https://docs.cloud.google.com/docs/authentication/provide-credentials-adc).

O uso de ADC pelo runtime do Antigravity, a seleção automática de projeto e os papéis citados na apostila continuam sem confirmação nesta revisão.

> VERIFICAR: ver pendencias-verificacao.md, item 64

### IAM e menor privilégio

A proposta didática é identificar quem acessa um recurso e conceder somente as permissões necessárias à tarefa. Autenticar uma identidade não equivale a autorizar todas as operações. A documentação de ADC orienta conceder os papéis menos privilegiados necessários às identidades de execução. [Fonte: ADC e identidade do recurso](https://docs.cloud.google.com/docs/authentication/application-default-credentials).

O exemplo de alteração de permissões recebido não foi convertido em exercício de administração do projeto. O fluxo de instalação e permissões do provedor exige uma prática própria, após confirmação do escopo.

<a id="vpc-service-controls"></a>
### VPC Service Controls

O complemento recebido permite contextualizar o tema, ausente do primeiro arquivo: VPC Service Controls utiliza perímetros de serviço para reduzir riscos de exfiltração em serviços compatíveis do Google Cloud. É uma camada complementar de proteção, com limites documentados; não uma promessa de bloqueio absoluto de toda saída de dados. [Fonte: visão geral oficial](https://docs.cloud.google.com/vpc-service-controls/docs/overview).

A aplicação desse recurso ao ambiente do curso e sua integração com o Antigravity não foram demonstradas.

> VERIFICAR: ver pendencias-verificacao.md, item 65

## Conexão com o curso e com o Juriel

- A [governança do agente](./03-ciclo-agentico-e-governanca.md) define o escopo do trabalho e das ferramentas.
- Os [guias de bancos](../guias/mongodb.md) apresentam os cuidados já documentados com credenciais; a [consulta sobre Supabase](../guias/supabase.md) aborda acesso aos dados.
- O [caso Juriel](../04-juriel/00-capa-alem-da-apostila.md) aplica esses critérios à escolha de modelos, revisão humana e tratamento de documentos. O uso local de um modelo não comprova que todos os dados permanecem no servidor; essa hipótese depende da avaliação do sistema completo.

> VERIFICAR: ver pendencias-verificacao.md, item 68

O enunciado original do desafio de evolução do site ainda não foi recebido. Seu [destino reservado](../03-laboratorios/desafio-site-cicd-github-actions.md) permanece sem exercício inventado.
