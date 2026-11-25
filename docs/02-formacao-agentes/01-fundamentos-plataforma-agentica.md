# Fundamentos da plataforma agêntica

Origem declarada: material do curso (40h) do Prof. Leonardo (Notion), módulo 1, com o fundamento de ferramentas do módulo 8. Finalidade: base para futuras páginas do Antigravity Lab.

## Componentes do desenvolvimento com agentes

O material apresenta uma plataforma agêntica como um sistema com capacidade de ação e ciclo de decisão, além da resposta em um chat.

1. **Modelo de linguagem (LLM):** raciocínio, planejamento e geração de hipóteses de código.
2. **Harness do agente:** orquestração da sessão, contexto, políticas de segurança e delegação de tarefas.
3. **Ambiente de execução e ferramentas:** acesso concreto a arquivos, terminal, busca e navegador, conforme os recursos disponíveis.

## Tool calling

O modelo, isoladamente, não opera disco, rede ou janelas. Ferramentas recebem chamadas estruturadas, validadas pelo ambiente de execução, e retornam resultados para a próxima decisão do agente.

Os nomes e contratos das ferramentas específicas citadas na apostila não são apresentados aqui como APIs confirmadas.

> VERIFICAR: ver pendencias-verificacao.md, item 40

> VERIFICAR: ver pendencias-verificacao.md, item 41

> VERIFICAR: ver pendencias-verificacao.md, item 42

> VERIFICAR: ver pendencias-verificacao.md, item 43

## Leitura seguinte

- [Os quatro pilares didáticos](./02-os-4-pilares.md).
- [Ciclo e governança](./03-ciclo-agentico-e-governanca.md).
- [Laboratório de contexto e recuperação de código](../03-laboratorios/lab-rag-e-contexto.md).
