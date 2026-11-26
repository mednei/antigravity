# ant_04: Aula de planos, quotas e limites de uso

- Data: 2026-11-26
- Fase: C (conversão de conteúdo)
- Ambiente: dev
- Status: pendente

## O que foi feito

Lido integralmente o próximo MD após instalação e requisitos: planos, quotas e limites de uso, origem seção 2.3.
Convertido o recorte confirmado em uma aula, com escopos explícitos de Gemini API, planos pessoais, SDK e agente de navegador do App.
Preservados o MD-fonte, as nove aulas anteriores e a chave de progresso; a Aula 10 usa índice 9 e trilha `primeiros-passos`.
Atualizados catálogo e instruções; preparada migration de progresso/anotações para 0–9 e testes para execução pelo usuário.

### Divisão proposta e implementada

Uma aula: **Planos, quotas e limites de uso**, categoria **PRIMEIROS PASSOS**, trilha **Primeiros passos**, duração **estimada de 5 minutos**. Total: **10 aulas**, sendo oito na trilha principal e duas em Primeiros passos. A ordem e o conteúdo das nove aulas anteriores permanecem preservados, índices 0–8.

O MD segue a ordem métricas → consumo de tarefas → saturação/retomada → referência ao módulo de modelos. Não contém comandos executáveis. A tabela RPM/TPM/RPD foi mantida conceitualmente, com escopo confirmado da Gemini API e precisão de que TPM se refere a tokens de entrada nessa fonte. Os três marcadores **14, 16 e 17** receberam decisão editorial. A estimativa e a atividade de consulta são organização didática desta conversão, sem atribuição de exercício novo ao professor.

### Checagem editorial

Fontes oficiais consultadas em 26/11/2026 e decisões por marcador: [evidências de planos e quotas](../../docs/01-primeiros-passos/planos-quotas-rate-limits-verificacao.md). Publicados somente os recortes confirmados e pertinentes, com links e data na aula. As afirmações restantes permanecem no MD e no registro único, fora do site e sem badges.

Não foram generalizados para a IDE os limites da API, os retries do SDK ou os comportamentos do agente de navegador. Não foram publicados preços, tabelas numéricas de cotas, garantias de fila/SLA, sequência ilustrativa de espera, mensagem não confirmada, retomada sem perda de progresso ou promessa geral de fallback automático com preservação de cota.

## Arquivos tocados

- `assets/js/course.js`: novo objeto de aula no índice 9; o restante da lógica permanece como antes.
- `index.html`: resumo da Aula 10 e total inicial de dez aulas.
- `produtos.html`: descrição e contadores iniciais para dez aulas.
- `docs/01-primeiros-passos/planos-quotas-rate-limits-verificacao.md`: decisões dos três marcadores e fontes oficiais.
- `docs/README.md`: referência à conversão e à migration atual.
- `docs/pendencias-verificacao.md`: delimitação dos itens 14/16/17 e pendências 84–85.
- `docs/supabase/20261126-planos-quotas.sql`: migration para índices 0–9.
- `docs/supabase/README.md`: migration atual e distinção da anterior de nove aulas.
- `tests/primeiros-passos.test.cjs`: expectativas proporcionais ao total atual, mantendo cenários anteriores.
- `tests/planos-quotas.test.cjs`: cenários preparados para a nova conversão.
- `registros/ant/ant_04_aula-planos-quotas.md`: este registro.

O MD-fonte não foi modificado. As alterações anteriores em `.env.example` e CSS continuam fora destes commits. Login, WhatsApp, anotações, menus, cópia de comandos e lógica de progresso não foram modificados nesta tarefa. O mecanismo de fallback de constraint antiga da conversão anterior atende também à Aula 10. A migration amplia a constraint de anotações sem alterar seu código.

## Testes executados (automatizados)

**Nenhum executado, por instrução do usuário.** Não foram executados `node --check`, suítes, checagem de links, whitespace, revisão no navegador ou SQL. Consulta editorial de fontes não equivale a validação do aplicativo.

Preparados cenários para preservação das nove aulas anteriores e do MD, decisões das três marcações, ausência de badges e trechos excluídos, índices 0–9, duas trilhas, progresso local com recarga, envio/recuperação do índice 9, fallback sem migration e limites das constraints. Resultados pendentes.

Comandos para o usuário executar na raiz:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs tests/primeiros-passos.test.cjs tests/planos-quotas.test.cjs
python tests/fase-a-estrutura.py
git diff --check 28ed616 HEAD
```

Para servir o site em outro terminal:

```powershell
python -m http.server 8765
```

## Testes do usuário: pendentes

1. Abrir `http://localhost:8765/produtos.html` e selecionar a Aula 10. **Esperado:** dez aulas; trilha principal com oito e Primeiros passos com duas; conteúdo confirmado, links oficiais e data, sem badges de pendências. **Resultado:** pendente.
2. Com progresso vazio e sem login, concluir a Aula 10. **Esperado:** `1 de 10`, **10%**, índice 9 na chave `antigravity-lab-progress-v1`. Se houver outras conclusões, percentual `Math.round(concluídas / 10 * 100)`. **Resultado:** pendente.
3. Recarregar, visitar a home e voltar. **Esperado:** progresso mantido, total dez e índices antigos preservados; desmarcar continua funcionando. **Resultado:** pendente.
4. Com Supabase configurado e sem a migration atual, concluir a Aula 10 em uma conta. **Esperado:** se o banco rejeitar o índice 9, feedback de gravação local e conclusão preservada na recarga do mesmo navegador. Sair/trocar de conta não transfere o progresso. Outro navegador só recebe conclusões já gravadas no banco. **Resultado:** pendente.
5. Executar `docs/supabase/20261126-planos-quotas.sql` no SQL Editor do projeto, por último. Basta ter A instalada; B é opcional e a migration de nove aulas não é pré-requisito. Conferir constraints com a consulta do README. **Esperado:** limites 0–9 nas tabelas instaladas, registros anteriores preservados e RLS mantido. Se reaplicar scripts antigos ou instalar B depois, reaplicar a migration atual. **Resultado:** pendente.
6. Após migration, desmarcar e remarcar a Aula 10 na conta do passo 4. Entrar em outro navegador. **Esperado:** `aula_index = 9` em `progresso` e conclusão recuperada; 10% se for a única conclusão. **Resultado:** pendente.
7. Se B estiver instalada, salvar anotação na Aula 10 e recarregar. **Esperado:** persistência por conta/aula. Sem migration, feedback existente pode indicar erro; não há fallback local de anotações. **Resultado:** pendente.
8. Revisar aula e catálogo em 900px, 680px e 370px. **Esperado:** fontes acessíveis, trilhas legíveis e ausência de rolagem horizontal indevida. **Resultado:** pendente.

## Pendências abertas

Registro único: [docs/pendencias-verificacao.md](../../docs/pendencias-verificacao.md).

- **84:** execução das validações e revisão didática/visual desta conversão.
- **85:** aplicação da migration atual e persistência/RLS reais para a Aula 10.
- **14, 16 e 17:** partes restantes delimitadas pelas evidências; confirmação parcial não encerra todo o item.

As pendências anteriores, inclusive **76–83**, não foram declaradas encerradas. O status permanece pendente até os resultados do usuário.

## Commits

- `ea4ee4c` — `feat: converte planos e quotas em aula do curso`.
- `ca167c3` — `feat: migra progresso e anotacoes para dez aulas`.
- `b3b1b1b` — `style: atualiza catalogo para dez aulas`.

Este registro recebe commit documental posterior para listar os três hashes já existentes. Todos os commits são locais, sem push. Nenhum serviço externo foi modificado.
