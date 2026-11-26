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

O catálogo reúne 21 aulas práticas, distribuídas em duas trilhas:

### Trilha principal (10 aulas)

1. Conheça o Antigravity
2. Prepare seu ambiente
3. Escreva bons prompts
4. Construa com agentes
5. Revise e teste
6. Publique seu projeto
7. Introdução ao Supabase
8. Introdução ao MongoDB
9. Instalação e requisitos
10. Planos, quotas e limites de uso

### Formação em agentes (11 aulas)

11. Contas, perfis e workspaces
12. Arquitetura do agente e ambientes de trabalho
13. Ciclo, regras e permissões
14. Planos, artefatos e relatório de entrega
15. Contexto, recuperação e memória
16. Terminal, filas e tarefas dependentes
17. Sessões, versões e restauração
18. Validação e automação com hooks
19. MCP e integrações
20. Trabalho com múltiplos agentes
21. Validação no navegador

Cada aula traz objetivo de aprendizagem, conceitos-chave, exercício prático
e resultado esperado. O site mantém o progresso local no navegador e possui
integração com Supabase para sincronização do progresso de usuários autenticados,
quando configurada.

## Catálogo reutilizável e aplicativo Android

O arquivo [courses.json](./courses.json) foi criado em 26/11/2026 a partir das
21 aulas de [assets/js/course.js](./assets/js/course.js), preservando os campos
originais, o conteúdo HTML e a organização das trilhas.

- Schema versão 1, com suporte a múltiplos cursos.
- Hierarquia: cursos, módulos e aulas.
- Identificadores estáveis para cursos, módulos e aulas; preservar os IDs
  existentes nas futuras atualizações, inclusive quando houver reordenação.
- Referência ao arquivo-fonte e ao SHA do blob utilizado na extração.
- Links relativos do conteúdo devem ser resolvidos a partir de
  `source.baseUrl` ou de recursos locais equivalentes.

O catálogo está disponível no [GitHub](https://github.com/mednei/antigravity/blob/main/courses.json).
A versão publicada pelo GitHub Pages depende do deploy.

### Planejamento do Android

Aplicativo educacional independente, multiuso e com arquitetura híbrida:
conteúdo local para estudo offline e possibilidade futura de atualização remota.

Primeira versão planejada:

- Catálogo de cursos, inicialmente com Antigravity Lab.
- Navegação por módulos e aulas.
- Leitura do conteúdo e exercícios existentes.
- Registro local do progresso.

A aplicação Android ainda não foi implementada nesta etapa. Autenticação,
sincronização com Supabase, quizzes e administração de cursos ficam para
etapas posteriores.

O site continua consumindo `assets/js/course.js`. O JSON é uma extração
independente e ainda não existe sincronização automática entre os dois arquivos.
Ao atualizar as aulas, manter ambos coerentes, sem alterar os IDs já publicados.

## Destaques do conteúdo

- **Guia Git & GitHub**: tabela de comandos essenciais com botão de cópia,
  fluxo de trabalho com branches e boas práticas de segurança.
- **Segurança de credenciais**: cuidado com senhas master, uso de `.env`
  fora do versionamento e configuração correta do `.gitignore`.
- **Formulário de contato** com validação local e integração com WhatsApp.

## Estrutura do projeto

```text
antigravity/
├── index.html             # Site do curso
├── courses.json           # Catálogo reutilizável
├── github.html            # Guia Git e GitHub
├── mongodb.html           # Guia MongoDB
├── supabase.html          # Guia Supabase
├── assets/                # CSS, JavaScript e imagens
│   └── js/course.js        # Conteúdo e lógica do site
├── docs/                  # Trilhas documentais e integração Supabase
├── imagens/               # Recursos visuais
├── registros/             # Registros do projeto
└── tests/                 # Testes existentes
```

Consulte também a [trilha documental](./docs/README.md).

## Como rodar localmente

Basta um servidor estático (não abra os arquivos direto pelo explorer,
pois alguns recursos dependem de http):

```bash
python -m http.server 8765
```

Depois acesse http://127.0.0.1:8765/index.html.

## Como contribuir
Este é um projeto educacional aberto. Sugestões de conteúdo, correções e novas aulas são bem-vindas via issues e pull requests.

## Licença
Projeto educacional aberto, feito para quem gosta de criar.
