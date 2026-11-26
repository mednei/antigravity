# Antigravity Lab

Curso prático e projeto educacional aberto para aprender a programar com
inteligência artificial, do zero à publicação. O site do curso está disponível
em: https://mednei.github.io/antigravity/

## O contexto

Este projeto nasceu de um processo real de aprendizagem. Iniciei o curso de
Google Antigravity e, ao longo dele, outras ferramentas foram se tornando
parte do fluxo de trabalho:

- **Google Antigravity**: plataforma de desenvolvimento com agentes de IA,
  executada dentro do VS Code, usada para gerar e refatorar o código deste
  próprio site.
- **Notion**: caderno de anotações onde registro a evolução das aulas,
  dúvidas, prints de tela e observações de cada etapa.
- **Git e GitHub**: versionamento do projeto e publicação gratuita via
  GitHub Pages, com deploy automático por GitHub Actions.
- **VS Code**: editor onde o Antigravity roda e onde o código é revisado.

A metodologia é simples: converso e planejo com um assistente de IA (Gemini
ou outro), uso o Antigravity como agente de codificação (de forma semelhante
ao Codex, descrevendo tarefas e revisando o resultado) e mantenho o controle
humano sobre todas as decisões de arquitetura e qualidade.

## O que o curso ensina

O catálogo reúne 8 aulas práticas:

1. Conheça o Antigravity
2. Prepare seu ambiente
3. Escreva bons prompts
4. Construa com agentes
5. Revise e teste
6. Publique seu projeto
7. Supabase: introdução a backend como serviço
8. MongoDB: banco de dados NoSQL e segurança de credenciais

Cada aula traz objetivo de aprendizagem, conceitos-chave, exercício prático
e resultado esperado. O progresso do aluno é salvo automaticamente no
navegador (localStorage).

## Destaques do conteúdo

- **Guia Git & GitHub**: tabela de comandos essenciais com botão de cópia,
  fluxo de trabalho com branches e boas práticas de segurança.
- **Segurança de credenciais**: cuidado com senhas master, uso de `.env`
  fora do versionamento e configuração correta do `.gitignore`.
- **Formulário de contato** com validação local e integração com WhatsApp.

## Estrutura do projeto

''' '''

## Como rodar localmente

Basta um servidor estático (não abra os arquivos direto pelo explorer,
pois alguns recursos dependem de http):

```bash
python -m http.server 8765

Depois acesse http://127.0.0.1:8765/index.html.

Como contribuir
Este é um projeto educacional aberto. Sugestões de conteúdo, correções e novas aulas são bem-vindas via issues e pull requests.

Licença
Projeto educacional aberto, feito para quem gosta de criar.
