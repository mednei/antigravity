# Evidências editoriais: planos, quotas e limites

Consulta em **26/11/2026**, fontes oficiais públicas vigentes. Checagem editorial, sem requisições de carga, alteração de assinatura, compra de créditos ou validação do aplicativo.

## Leitura e divisão

O [MD-fonte](./planos-quotas-rate-limits.md), origem seção 2.3, foi lido integralmente e permanece intacto. Sequência: tabela RPM/TPM/RPD; consumo em chamadas encadeadas; saturação e retomada; referência ao módulo canônico de modelos. Não contém comando executável ou nota adicional de fact check além das marcações dos itens **14, 16 e 17**.

Uma aula: **Planos, quotas e limites de uso**, categoria **PRIMEIROS PASSOS**, trilha `primeiros-passos`, **5 minutos estimados**, índice **9** (Aula 10). As nove aulas anteriores mantêm conteúdo e ordem. A atividade de consulta e a estimativa são organização didática desta conversão, não exercício ou duração atribuídos ao professor.

## Fontes e decisões

- **Métricas:** a [Gemini API](https://ai.google.dev/gemini-api/docs/rate-limits) confirma RPM, TPM de entrada e RPD. Essa documentação tem escopo de API; suas tabelas não foram apresentadas como limites do Antigravity. Não foram transportados números de quota entre produtos.
- **Item 14, confirmação parcial:** a [página oficial de planos](https://antigravity.google/docs/plans) confirma as modalidades pessoais atuais, cotas dependentes do trabalho e controles de créditos adicionais. Publicado esse recorte. Ficaram fora preços, SLAs, garantias de fila e equivalências antigas Developer/Free Tier/Vertex AI Enterprise. A documentação distingue equipes sob Gemini Enterprise de planos pessoais; isso não confirma a nomenclatura composta do material. Sem versão fixa da página, registrar a data de consulta.
- **Item 16, confirmação parcial:** o [exemplo oficial do SDK Python](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/examples/getting_started/customizing_retries.md), branch `main`, documenta retries configuráveis para erros transitórios. Publicada a descrição com escopo explícito do SDK. O [changelog](https://antigravity.google/docs/changelog), CLI v1.2.1 de 11/09/2026, também documenta backoff para erros transitórios, incluindo 429 por minuto; é evidência complementar, não garantia universal da IDE. Jitter, sequência ilustrativa 2s/4s/8s, texto “Aguardando liberação de cota” e preservação absoluta de progresso não foram confirmados e não entraram na aula.
- **Item 17, generalização sem suporte:** a [documentação de navegador](https://antigravity.google/docs/browser) traz um contraexemplo à promessa geral de troca automática: no agente de navegador do App, falta de cota/disponibilidade Flash interrompe para pedir orientação. Publicado apenas esse comportamento delimitado. Não afirmar que nenhuma modalidade permite fallback; tampouco prometer economia ou preservação da cota principal por roteamento automático.

As três marcações têm decisão acima, sem badges no site. O [registro único](../pendencias-verificacao.md) mantém as partes ainda abertas; a checagem parcial não encerra itens compostos nem modifica o MD-fonte. Afirmações sem confirmação ficam nos documentos, fora da aula; ausência de evidência não foi tratada como refutação.
