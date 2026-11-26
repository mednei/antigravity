# Fase B — anotações por aula

Implementação de estudo sobre a Fase A: o aluno autenticado pode manter várias anotações por aula, contendo texto, URL de print ou ambos. Após o Lote 1, o catálogo tem 14 aulas, índices 0 a 13. O schema inicial já aceita 0 a 25, preparando 26 aulas sem migrations incrementais; seguir o [README de ativação atual](./README.md).

## Preparação manual

1. Concluir a configuração do projeto descrita na [Fase A](./README.md).
2. No mesmo projeto Supabase, abrir **SQL Editor → New query** e executar o conteúdo completo de [fase-b-schema.sql](./fase-b-schema.sql) com **Run**.
3. Conferir no Table Editor a tabela `public.anotacoes`, com RLS habilitado. As quatro políticas limitam leitura, inserção, atualização e exclusão ao aluno de `auth.users` identificado por `auth.uid()`.
4. Entrar em [login.html](../../login.html) e abrir [produtos.html](../../produtos.html). A seção **MINHAS ANOTAÇÕES** fica abaixo do exercício da aula selecionada.

Não é necessário preencher outra chave nem criar tabela própria de alunos. A Fase B usa o mesmo client e a sessão da Fase A. O SQL está apenas preparado: sua execução e a verificação real ficam com o usuário.

## Comportamento implementado

- Deslogado ou sem client configurado: convite com link relativo para entrar, sem consulta de anotações.
- Logado: observação, URL do print, botão de salvar e lista com as mais recentes primeiro, pela data de criação.
- Cada anotação mostra data, texto e imagem quando há URL HTTP(S) válida; a imagem tem texto alternativo, carregamento tardio e opção de abrir em outra aba. Uma falha de imagem não impede o uso da aula.
- Editar preenche o formulário e salva na mesma linha, atualizando `atualizado_em`. Cancelar edição limpa o formulário. Excluir pede confirmação e remove somente a linha filtrada por anotação, aluno e aula.
- É preciso informar texto ou URL. O texto admite até 10.000 caracteres; a URL, até 2.048. URLs com outros protocolos ou com usuário/senha são recusadas.
- Texto vindo do banco é inserido como texto, sem interpretar HTML. As URLs são validadas antes de criar imagens ou links.
- Rascunhos ficam somente na memória da página, separados por conta e aula. Redesenhar o painel de progresso não deve apagá-los. Recarregar a página perde rascunhos não salvos; não há fila offline nem gravação local de anotações nesta fase.
- Erros de leitura/escrita aparecem em feedback acessível, sem bloquear o dashboard. Em falha de gravação, o formulário mantém seu conteúdo para nova tentativa. Ao sair ou trocar de conta, as anotações da conta anterior deixam de ser mostradas.
- Imagens são apenas links de um serviço externo. Não há upload, bucket nem integração com Storage nesta fase.

## Validações a cargo do usuário

Nenhuma validação, suíte automatizada, teste visual ou SQL real foi executado pelo agente nesta tarefa, por instrução do usuário. Os testes foram preparados para execução manual:

```powershell
node --check assets/js/course.js
node --test tests/fase-a.test.cjs tests/fase-b.test.cjs
python tests/fase-a-estrutura.py
git diff --check 92e569a HEAD
```

O script de estrutura confere os links das oito páginas existentes; a simulação nova inclui o link de convite renderizado pelo JavaScript. As simulações de banco não demonstram a aplicação das políticas RLS no Supabase real.

Depois de executar o SQL, seguir o roteiro do [registro ant_02](../../registros/ant/ant_02_fase-b-anotacoes.md), incluindo revisão de 900px, 680px e 370px. Resultados continuam pendentes até evidência do usuário.

## Referências e pendências

APIs consultadas em 26/11/2026: [insert](https://supabase.com/docs/reference/javascript/insert), [update](https://supabase.com/docs/reference/javascript/update), [delete](https://supabase.com/docs/reference/javascript/delete) e [order](https://supabase.com/docs/reference/javascript/order). As consultas pedem as linhas retornadas para refletir a operação na lista, conforme a documentação dessas APIs.

[Registro único de pendências](../pendencias-verificacao.md): 79 (upload direto adiado), 80 (schema/RLS e fluxo real), 81 (execução das validações preparadas e revisão visual). As pendências 76–78 da Fase A também permanecem abertas.
