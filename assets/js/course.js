// course.js — Dashboard e gerenciamento educacional do curso
const lessons = [
  {
    title: 'Conheça o Antigravity',
    category: 'PRIMEIROS PASSOS',
    duration: '5 min',
    objective: 'Entender a arquitetura e proposta de desenvolvimento orientado por agentes de inteligência artificial.',
    intro: 'Entenda a proposta de trabalhar com uma ferramenta de desenvolvimento orientada por inteligência artificial.',
    body: '<h4>Uma nova forma de construir</h4><p>O Google Antigravity é uma plataforma de desenvolvimento que utiliza agentes de IA para ajudar em tarefas de programação. Você descreve o objetivo, acompanha o trabalho e avalia os resultados.</p><p>A IA é uma parceira de execução: a direção, as decisões e a revisão continuam sendo suas.</p>',
    concepts: ['Agentes autônomos de código', 'Supervisão humana', 'Ciclos rápidos de prototipagem'],
    exercise: 'Pense em um projeto simples que você gostaria de criar e escreva seu objetivo em uma frase.',
    expected: 'Definição em uma linha de um objetivo claro de software (ex: "Criar uma lista de compras responsiva que salva no navegador").'
  },
  {
    title: 'Prepare seu ambiente',
    category: 'CONFIGURAÇÃO',
    duration: '8 min',
    objective: 'Organizar as ferramentas fundamentais, as pastas do projeto e o controle de versões.',
    intro: 'Organize o espaço de trabalho antes de começar a criar.',
    body: '<h4>Uma organização que você pode adaptar</h4><p>A organização de pastas apresentada no curso é um modelo sugerido, não uma obrigatoriedade. Você pode adaptar nomes e diretórios à sua forma de trabalhar. Caminhos exigidos por uma ferramenta devem seguir a documentação dessa ferramenta.</p><h4>Comece pelo essencial</h4><p>Acesse o site oficial do Antigravity para verificar a disponibilidade, os requisitos e as instruções de instalação atualizadas. Crie ou entre na sua conta quando solicitado.</p><ul><li>Separe uma pasta para seu projeto.</li><li>Tenha um navegador e o Git instalados, se necessário.</li><li>Evite incluir senhas ou informações privadas nos seus pedidos.</li></ul>',
    concepts: ['Estrutura de diretórios', 'Controle de versão com Git', 'Segurança de credenciais'],
    exercise: 'Escolha uma pasta existente ou crie uma para seu primeiro projeto e anote o que você quer construir; a organização é uma sugestão adaptável.',
    expected: 'Local de trabalho escolhido e objetivo registrado em notas ou README, conforme a organização escolhida pelo aluno.'
  },
  {
    title: 'Escreva bons prompts',
    category: 'COMUNICAÇÃO COM IA',
    duration: '10 min',
    objective: 'Dominar técnicas de engenharia de prompt aplicadas à geração e refatoração de código.',
    intro: 'Uma boa orientação dá contexto, define o resultado e deixa claros os limites.',
    body: '<h4>Peça com clareza</h4><p>Descreva quem vai usar o projeto, o que ele precisa fazer e quais tecnologias você quer utilizar. Divida trabalhos maiores em pequenas etapas verificáveis.</p><p>Exemplo: “Crie uma lista de tarefas responsiva com HTML, CSS e JavaScript. Permita adicionar e concluir tarefas, e salve os dados no navegador.”</p>',
    concepts: ['Contexto e restrições', 'Tarefas atômicas', 'Validação incremental'],
    exercise: 'Escreva um prompt para seu projeto incluindo objetivo, público e três funcionalidades.',
    expected: 'Prompt estruturado pronto para ser enviado ao agente de código.'
  },
  {
    title: 'Construa com agentes',
    category: 'MÃO NA MASSA',
    duration: '12 min',
    objective: 'Orquestrar agentes para criação de telas, componentes e lógica de interação.',
    intro: 'Transforme seu pedido em um projeto, acompanhando cada etapa do trabalho.',
    body: '<h4>Construa por partes</h4><p>Abra a pasta do projeto no ambiente e apresente seu objetivo ao agente. Comece pela estrutura básica e, depois, peça uma funcionalidade de cada vez.</p><ul><li>Leia o plano e as alterações propostas.</li><li>Teste cada funcionalidade antes de seguir.</li><li>Peça ajustes específicos quando algo não estiver certo.</li></ul>',
    concepts: ['Iteração de código', 'Revisão de diffs', 'Implementação modular'],
    exercise: 'Peça a criação da primeira versão do seu projeto e abra o resultado no navegador.',
    expected: 'Código HTML, CSS e JS gerado e renderizado com sucesso no navegador.'
  },
  {
    title: 'Revise e teste',
    category: 'QUALIDADE',
    duration: '10 min',
    objective: 'Auditar criticamente o código produzido quanto à responsividade, estabilidade e acessibilidade.',
    intro: 'Um projeto bem feito não termina quando o código é gerado.',
    body: '<h4>Olhe com atenção</h4><p>Confira se o resultado corresponde ao pedido, leia as alterações e teste os caminhos principais. Verifique a experiência em telas grandes e pequenas.</p><ul><li>Botões e links funcionam?</li><li>O conteúdo continua legível no celular?</li><li>Há erros no console do navegador?</li></ul><p>Nunca publique credenciais ou dados sensíveis no repositório.</p>',
    concepts: ['Acessibilidade básica', 'Testes responsivos em múltiplos viewports', 'Inspecionar console DevTools'],
    exercise: 'Teste seu projeto em dois tamanhos de tela e registre um ponto de melhoria.',
    expected: 'Identificação e ajuste de ao menos um elemento responsivo ou de acessibilidade.'
  },
  {
    title: 'Publique seu projeto',
    category: 'PRÓXIMO PASSO',
    duration: '10 min',
    objective: 'Publicar a aplicação estática na nuvem gratuitamente utilizando GitHub Pages.',
    intro: 'Compartilhe sua criação com o mundo usando o GitHub Pages.',
    body: '<h4>Da sua pasta para a internet</h4><p>Crie um repositório no GitHub e envie os arquivos do seu site. Para um site estático, mantenha o arquivo <strong>index.html</strong> na pasta que será publicada.</p><p>No repositório, abra <strong>Settings → Pages</strong>, escolha a publicação a partir de uma branch e selecione a branch e a pasta corretas. Após a publicação, acesse o endereço informado pelo GitHub.</p>',
    concepts: ['Deploy estático', 'GitHub Pages', 'Branch de publicação e index.html'],
    exercise: 'Publique seu projeto e abra o link em outro dispositivo para conferir o resultado.',
    expected: 'URL pública acessível no formato https://usuario.github.io/repositorio/.'
  },
  {
    "title": "Introdução ao Supabase",
    "category": "BACKEND COMO SERVIÇO",
    "duration": "12 min",
    "objective": "Reconhecer os serviços do Supabase e distinguir acesso público de acesso privilegiado.",
    "intro": "Conheça um backend como serviço antes de integrar sua aplicação.",
    "body": "<h4>PostgreSQL e serviços prontos</h4><p>O Supabase reúne PostgreSQL gerenciado, autenticação e Storage. A chave legada anon é pública por design; permissões e Row Level Security controlam o acesso às linhas. A chave service_role é privilegiada e nunca deve estar no frontend. Nos projetos atuais, os equivalentes são publishable e secret.</p><p>Uma policy pode permitir que cada usuário autenticado leia somente suas próprias anotações. A integração real será feita em uma fase futura.</p><p>Consulte o <a href=\"./supabase.html\">Guia Supabase</a> para explorar os conceitos.</p>",
    "concepts": [
      "PostgreSQL gerenciado",
      "Chave anon vs service_role (publishable vs secret nos projetos atuais)",
      "Row Level Security"
    ],
    "exercise": "Crie uma conta gratuita no Supabase e explore o painel sem criar nada. Se uma seção exigir um projeto, consulte sua documentação ou demonstração.",
    "expected": "Familiaridade com Table Editor, Authentication e Settings → API / API Keys."
  },
  {
    "title": "Introdução ao MongoDB",
    "category": "BANCO NOSQL",
    "duration": "15 min",
    "objective": "Entender documentos e coleções e documentar cuidados com credenciais de banco.",
    "intro": "Conheça o modelo documental com segurança desde o primeiro contato.",
    "body": "<h4>Documentos, coleções e credenciais</h4><p>MongoDB organiza documentos BSON em coleções. Uma connection string contém as credenciais de um usuário do banco: nunca coloque a chamada “senha master” no código nem use o administrador na aplicação. Crie um usuário específico com o menor privilégio e restrinja o acesso por IP.</p><p>Uma opção é guardar o .env fora do projeto, por exemplo em <code>D:/projetos/credenciais/mongodb.env</code>. Esse caminho é apenas um modelo de organização, não uma obrigatoriedade; adapte o local e carregue as credenciais somente no backend. Se estiver dentro do projeto, ignore-o antes do primeiro commit. O .gitignore não remove arquivos já rastreados: use <code>git rm --cached .env</code> e registre a remoção. Se já houve push, troque a senha imediatamente, revogue acessos e revise o histórico; versões antigas continuam no Git.</p><p>Consulte o <a href=\"./mongodb.html#seguranca\">Guia MongoDB e a seção de segurança</a>. Esta aula não conecta o site ao banco.</p>",
    "concepts": [
      "Documentos e coleções",
      "Princípio do menor privilégio",
      "Rotação de senhas"
    ],
    "exercise": "Escreva um checklist pessoal com 5 regras de segurança para credenciais de banco.",
    "expected": "Checklist documentado com cinco regras práticas de proteção de credenciais."
  },
  {
    "title": "Instalação e requisitos",
    "category": "PRIMEIROS PASSOS",
    "trail": "primeiros-passos",
    "duration": "5 min (estimativa)",
    "source": "./docs/01-primeiros-passos/instalacao-e-requisitos.md",
    "objective": "Distinguir a IDE independente da extensão para VS Code e conhecer a instalação e as configurações documentadas.",
    "intro": "Editor, extensões e preferências compõem o ambiente de desenvolvimento.",
    "body": "<h4>Escolha o ambiente</h4><p>Você pode baixar a IDE independente do Antigravity ou usar sua extensão oficial no VS Code. Para a IDE, escolha o instalador do seu sistema no site oficial. Consulte os requisitos da opção escolhida no <a href=\"https://antigravity.google/docs/getting-started\" target=\"_blank\" rel=\"noopener noreferrer\">guia de instalação do Google</a>.</p><h4>Instale a extensão no VS Code</h4><p>O guia exige VS Code 1.90 ou posterior, em Windows, Linux ou macOS, e uma conta com acesso ao Antigravity.</p><ol><li>Abra Extensões: Ctrl+Shift+X no Windows/Linux ou Cmd+Shift+X no macOS.</li><li>Procure Google Antigravity, publicado pelo Google, e clique em Install.</li><li>Abra o ícone Antigravity e faça login. Na primeira abertura, a extensão instala o serviço local agy.</li></ol><h4>Extensões de linguagem</h4><p>A Microsoft documenta que Pylance usa Pyright para verificação de tipos. Sua <a href=\"https://github.com/microsoft/pylance-release/blob/main/FAQ.md\" target=\"_blank\" rel=\"noopener noreferrer\">FAQ oficial</a> restringe o uso de Pylance aos produtos e serviços Microsoft indicados nela.</p><h4>Ambiente remoto</h4><p>O Antigravity App, a partir da versão 2.33.0, documenta conexão SSH a hosts Linux de 64 bits com glibc 2.26 ou posterior. Consulte os demais <a href=\"https://antigravity.google/docs/ssh/\" target=\"_blank\" rel=\"noopener noreferrer\">requisitos oficiais de SSH do App</a> antes de preparar o acesso remoto.</p><h4>Ajuste suas preferências</h4><p>No VS Code, abra Settings e pesquise antigravity; a extensão também aceita configuração em settings.json. Seu painel permite conversar com o agente e revisar alterações no editor.</p><p><a href=\"https://antigravity.google/docs/ide/extensions/vscode/\" target=\"_blank\" rel=\"noopener noreferrer\">Procedimento e configurações oficiais para VS Code</a>. Fontes consultadas em 26/11/2026.</p>",
    "concepts": [
      "IDE independente e extensão para VS Code",
      "Instalação pelo painel de extensões",
      "Configurações pessoais do editor"
    ],
    "exercise": "Consulte o guia oficial da opção escolhida e identifique o instalador ou a extensão e os requisitos correspondentes.",
    "expected": "Identificação da opção de ambiente, de sua origem oficial e dos requisitos aplicáveis."
  },
  {
    "title": "Planos, quotas e limites de uso",
    "category": "PRIMEIROS PASSOS",
    "trail": "primeiros-passos",
    "duration": "5 min (estimativa)",
    "source": "./docs/01-primeiros-passos/planos-quotas-rate-limits.md",
    "objective": "Distinguir métricas da API, cotas do Antigravity e comportamentos documentados sob saturação.",
    "intro": "Uma tarefa com agente pode envolver várias chamadas; o consumo depende do trabalho realizado.",
    "body": "<h4>Entenda as métricas</h4><p>Na Gemini API, RPM significa requisições por minuto; TPM, tokens de entrada por minuto; RPD, requisições por dia. Exceder qualquer limite aplicável pode gerar um erro de limite de uso. Esses limites são aplicados por projeto, não por chave. Consulte a <a href=\"https://ai.google.dev/gemini-api/docs/rate-limits\" target=\"_blank\" rel=\"noopener noreferrer\">documentação da Gemini API</a>.</p><h4>Confira o plano do Antigravity</h4><p>Para contas pessoais, a documentação lista Free, Google AI Plus, Google AI Pro e Google AI Ultra, com cotas e disponibilidade de modelos diferentes. O consumo varia com o trabalho do agente; tarefas complexas podem consumir mais cota.</p><p>Em Pro e Ultra, créditos adicionais podem cobrir uso além da cota básica. A opção AI Credit Overages controla esse uso automático: Never aguarda a renovação da cota; Always permite consumir créditos. Consulte o saldo e as condições atuais na <a href=\"https://antigravity.google/docs/plans\" target=\"_blank\" rel=\"noopener noreferrer\">página oficial de planos</a> e nas configurações da conta.</p><h4>Saturação e retomada</h4><p>No SDK Python do Antigravity, há tentativas automáticas com espera crescente para erros transitórios, incluindo HTTP 429. Esse comportamento é configurável; consulte o <a href=\"https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/examples/getting_started/customizing_retries.md\" target=\"_blank\" rel=\"noopener noreferrer\">exemplo oficial de retries do SDK</a>.</p><p>No agente de navegador do Antigravity App, se a cota de Gemini Flash acabar ou estiver indisponível, o agente para e pergunta como prosseguir, em vez de trocar automaticamente de modelo. Veja o escopo em <a href=\"https://antigravity.google/docs/browser\" target=\"_blank\" rel=\"noopener noreferrer\">uso do navegador</a>.</p><p>Fontes consultadas em 26/11/2026. Os limites do serviço podem mudar; consulte a documentação da modalidade utilizada.</p>",
    "concepts": [
      "RPM, TPM e RPD",
      "Cotas por modalidade e consumo do agente",
      "Créditos adicionais",
      "Retentativas e troca de modelo"
    ],
    "exercise": "Consulte as fontes oficiais da modalidade que você usa e identifique onde acompanhar a cota, quando ela renova e se há uso de créditos adicionais.",
    "expected": "Registro da modalidade consultada, da fonte e da data, distinguindo métricas da API das cotas do Antigravity."
  },
  {
    "title": "Contas, perfis e workspaces",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "5 min (estimativa)",
    "sources": [
      "./docs/01-primeiros-passos/contas-perfis-workspaces.md"
    ],
    "objective": "Organizar conta, postura de trabalho e ambientes de estudo e produção, protegendo credenciais.",
    "intro": "Organizar conta, postura de trabalho e ambientes de estudo e produção, protegendo credenciais.",
    "body": "<h4>Credenciais fora do código</h4><p>O princípio do material é não escrever senhas em arquivos de configuração nem na linha de comando. Quando possível, mantenha credenciais fora da pasta do projeto. A organização de pastas é um modelo sugerido: o aluno pode escolher outros nomes e locais, preservando os cuidados com credenciais e os caminhos exigidos pela ferramenta utilizada. Os <a href=\"./mongodb.html#seguranca\">cuidados do guia MongoDB</a> e o <a href=\"./supabase.html\">guia Supabase</a> continuam como referências, sem duplicar seus exemplos.</p><h4>Conta, perfil e ambiente</h4><p>O material propõe separar a postura de estudo da de produção. Essa organização de trabalho não comprova a existência de perfis automáticos com políticas próprias no produto.</p><p>O <a href=\"https://antigravity.google/docs/install/\" target=\"_blank\" rel=\"noopener noreferrer\">guia oficial de autenticação</a> documenta login por conta Google e fluxos distintos conforme a modalidade. Na CLI, há autenticação com chave da Gemini API sob configuração específica; isso não equivale a um fallback automático da IDE.</p><h4>Workspace e permissões</h4><p>O workspace delimita o contexto do projeto; as regras e fronteiras de acesso devem ser consideradas junto com a governança. Autenticar uma conta e definir as permissões do trabalho são decisões diferentes.</p>",
    "concepts": [
      "Proteção de credenciais",
      "Separação entre estudo e produção",
      "Conta e contexto do projeto"
    ],
    "exercise": "Faça uma leitura orientada dos cuidados com credenciais e da separação de ambientes descritos no material, usando os guias existentes como consulta.",
    "expected": "Identificação dos cuidados com credenciais e da distinção entre conta, postura de trabalho e ambiente do projeto."
  },
  {
    "title": "Arquitetura do agente e ambientes de trabalho",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "8 min (estimativa)",
    "sources": [
      "./docs/02-formacao-agentes/01-fundamentos-plataforma-agentica.md",
      "./docs/02-formacao-agentes/02-os-4-pilares.md"
    ],
    "objective": "Distinguir modelo, harness e ferramentas, relacionando-os às quatro frentes didáticas do curso.",
    "intro": "Distinguir modelo, harness e ferramentas, relacionando-os às quatro frentes didáticas do curso.",
    "body": "<h4>Três componentes</h4><ul><li><strong>Modelo de linguagem:</strong> raciocínio, planejamento e hipóteses de código.</li><li><strong>Harness:</strong> orquestração da sessão, contexto, políticas e delegação.</li><li><strong>Ambiente e ferramentas:</strong> operações sobre arquivos, terminal, busca e navegador, conforme os recursos disponíveis.</li></ul><h4>Como uma ação acontece</h4><p>O modelo isolado não opera disco, rede ou janelas. Ele solicita chamadas estruturadas; o ambiente valida e executa as ferramentas e devolve os resultados para a decisão seguinte.</p><h4>Quatro frentes didáticas</h4><ul><li>Gestão de agentes: acompanhar tarefas e decisões que exigem revisão humana.</li><li>Editor: examinar código e alterações.</li><li>Terminal: interagir com tarefas pelo shell.</li><li>Integração programática: acionar trabalho por software.</li></ul><p>Essa divisão organiza o material; não é uma nomenclatura comercial oficial.</p><p>A CLI <code>agy</code>, a consulta <code>agy --version</code> e a interface de terminal estão no <a href=\"https://antigravity.google/docs/getting-started/\" target=\"_blank\" rel=\"noopener noreferrer\">guia inicial</a>. O <a href=\"https://antigravity.google/docs/sdk/overview/\" target=\"_blank\" rel=\"noopener noreferrer\">SDK Python oficial</a> oferece integração programática; o <a href=\"https://codelabs.developers.google.com/agy-cli-sdk-code-review?hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">codelab do Google</a> mostra revisão de Pull Requests em CI.</p>",
    "concepts": [
      "Modelo, harness e ambiente",
      "Chamadas estruturadas de ferramentas",
      "Quatro frentes como organização didática"
    ],
    "exercise": "Relacione, por leitura orientada, os três componentes da arquitetura às quatro frentes apresentadas no material.",
    "expected": "Distinção entre produzir uma hipótese, coordenar o trabalho e executar uma operação por ferramenta."
  },
  {
    "title": "Ciclo, regras e permissões",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "8 min (estimativa)",
    "sources": [
      "./docs/02-formacao-agentes/03-ciclo-agentico-e-governanca.md"
    ],
    "objective": "Acompanhar o ciclo de execução e distinguir princípios de engenharia, regras operacionais e permissões.",
    "intro": "Acompanhar o ciclo de execução e distinguir princípios de engenharia, regras operacionais e permissões.",
    "body": "<h4>O ciclo de execução</h4><p>Objetivo → observação dos arquivos → planejamento → seleção de ferramentas → execução → análise do resultado → correção ou conclusão.</p><p>O ambiente aplica a política de acesso às chamadas. Saída, erros e código de retorno alimentam a decisão seguinte; os detalhes dependem da ferramenta disponível.</p><h4>Princípios e regras</h4><p>O material distingue postura de engenharia de regras operacionais do projeto. Propõe preferir funções puras e imutabilidade quando possível, justificar dependências e documentar padrões de arquitetura, dados, frontend e validação.</p><p>A <a href=\"https://antigravity.google/docs/rules/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação atual de regras</a> reconhece AGENTS.md e GEMINI.md, com escopos de projeto e globais. Isso não comprova os caminhos antigos da apostila nem uma precedência presumida entre arquivos.</p><h4>Autonomia acompanha o risco</h4><p>Defina o grau de autonomia e as permissões conforme o trabalho. Instruções ao modelo e diretivas interpretadas pelo ambiente têm papéis diferentes.</p><p>No App, o preset Request Review exige revisão de comandos de terminal. Os controles e escopos atuais estão em <a href=\"https://antigravity.google/docs/agent-settings/\" target=\"_blank\" rel=\"noopener noreferrer\">configurações do agente</a>. Uma regra escrita não substitui a política efetiva de acesso.</p>",
    "concepts": [
      "Ciclo de execução e retorno das ferramentas",
      "Princípios e regras operacionais",
      "Permissões proporcionais ao risco"
    ],
    "exercise": "Faça a leitura do ciclo e dos princípios propostos, distinguindo orientação ao agente de permissão aplicada pelo ambiente.",
    "expected": "Identificação das etapas do ciclo, das regras do projeto e das decisões de acesso que dependem do ambiente."
  },
  {
    "title": "Planos, artefatos e relatório de entrega",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "8 min (estimativa)",
    "sources": [
      "./docs/01-primeiros-passos/planos-quotas-rate-limits.md",
      "./docs/02-formacao-agentes/04-artefatos-e-walkthrough.md"
    ],
    "objective": "Transformar demanda, plano e entrega em informações revisáveis, considerando também o consumo do trabalho.",
    "intro": "Transformar demanda, plano e entrega em informações revisáveis, considerando também o consumo do trabalho.",
    "body": "<h4>Da demanda ao plano</h4><p>A conversa alinha o trabalho; os artefatos tornam plano, decisões e entrega revisáveis. Notas provisórias e hipóteses têm finalidade diferente de um plano apresentado para revisão.</p><p>O plano proposto pelo material reúne problema e contexto, alterações por arquivo, estratégia de validação e riscos ou efeitos colaterais. O fluxo é demanda → inspeção → plano → revisão humana → execução.</p><h4>Entrega com evidências</h4><p>O walkthrough reúne resumo, mapa das alterações, trechos relevantes, resultados das verificações e evidências visuais quando aplicáveis. Um relato de conclusão deve ser confrontado com os resultados apresentados.</p><p>A documentação oficial descreve o <a href=\"https://antigravity.google/docs/implementation-plan/\" target=\"_blank\" rel=\"noopener noreferrer\">plano e seus comentários</a> e o <a href=\"https://antigravity.google/docs/walkthrough/\" target=\"_blank\" rel=\"noopener noreferrer\">walkthrough</a>. Comentários permitem ajustar o plano; isso não comprova todos os atalhos ou mecanismos automáticos citados no original.</p><h4>Planejamento e consumo</h4><p>Uma tarefa com agente pode encadear várias chamadas. RPM, TPM e RPD são as métricas apresentadas no material para discutir consumo. A Aula 10 concentra a consulta de planos e limites; não se deve atribuir a todos os planos os limites de outra modalidade.</p>",
    "concepts": [
      "Plano de implementação revisável",
      "Relatório de entrega e evidências",
      "Comentários para ajustar o plano",
      "Consumo em chamadas encadeadas"
    ],
    "exercise": "Solicite um validador de CPF com histórico de consultas e acompanhe plano, revisão, execução e relatório, conforme a prática proposta no material.",
    "expected": "Plano revisável, alterações acompanhadas e relatório de entrega com resultados das verificações, sem presumir aprovação ou execução automática."
  },
  {
    "title": "Contexto, recuperação e memória",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "10 min (estimativa)",
    "sources": [
      "./docs/03-laboratorios/lab-rag-e-contexto.md"
    ],
    "objective": "Selecionar contexto relevante e distinguir recuperação de informação, regras e memória.",
    "intro": "Selecionar contexto relevante e distinguir recuperação de informação, regras e memória.",
    "body": "<h4>Escolha o contexto da tarefa</h4><p>O material discute atenção em contextos longos, latência e consumo de tokens. A proposta é recuperar trechos relevantes em vez de enviar indiscriminadamente todo o projeto.</p><h4>Estrutura e recuperação</h4><p>AST é a estrutura sintática de um programa. A leitura estrutural permite organizar funções, classes, métodos e imports e concentrar a inspeção nos símbolos relevantes.</p><ol><li>Dividir o código em trechos com significado, como funções e classes.</li><li>Representar esses trechos por embeddings.</li><li>Comparar a consulta com as representações.</li><li>Recuperar os trechos mais relacionados para a tarefa.</li></ol><p>Esse pipeline explica o conceito de recuperação; não descreve uma implementação interna comprovada do Antigravity.</p><h4>Regras e memória</h4><p>Regras são diretrizes prescritivas. Memória reúne fatos e observações. Esses papéis não demonstram aprendizado ou persistência automática no produto.</p><p>A <a href=\"https://antigravity.google/docs/at-mentions/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação de menções</a> descreve como apontar arquivos e pastas com @. Para a pergunta lateral da prática, <a href=\"https://antigravity.google/docs/commands/btw/\" target=\"_blank\" rel=\"noopener noreferrer\">/btw</a> mantém a troca fora do histórico principal. É um recurso com comportamento próprio, não garantia de isolamento separado das permissões da sessão.</p>",
    "concepts": [
      "Seleção de contexto",
      "AST e recuperação por embeddings como conceitos",
      "Regras e memória",
      "Pergunta lateral com escopo documentado"
    ],
    "exercise": "Compare o contexto antes e depois de uma pergunta lateral sobre valores padrão mutáveis em Python, conforme o objetivo da prática recebida. Use a documentação da modalidade para consultar o contexto disponível.",
    "expected": "Comparação registrada do contexto principal e da pergunta lateral, distinguindo o que foi observado de hipóteses sobre memória ou indexação."
  },
  {
    "title": "Terminal, filas e tarefas dependentes",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "12 min (estimativa)",
    "sources": [
      "./docs/03-laboratorios/lab-terminal-e-shell.md",
      "./docs/02-formacao-agentes/10-concorrencia-e-mensagens.md"
    ],
    "objective": "Observar execução, erros e resultados, coordenando tarefas dependentes com base no estado real.",
    "intro": "Observar execução, erros e resultados, coordenando tarefas dependentes com base no estado real.",
    "body": "<h4>Observe antes de corrigir</h4><p>Execução, saída, erro e correção fazem parte do trabalho no terminal. Uma verificação pontual termina e devolve um resultado; servidores e observadores de arquivos podem permanecer ativos e precisam de acompanhamento próprio.</p><h4>Fila, direção e interrupção</h4><p>O material distingue deixar uma demanda seguinte na fila, corrigir a direção do trabalho em andamento e interromper uma execução. São decisões diferentes: antes de iniciar uma tarefa dependente, considere os arquivos e o resultado deixados pela anterior.</p><p>Na CLI, a opção Queued Messages distingue Queue de Send Immediately. O escopo e os controles atuais estão nas <a href=\"https://antigravity.google/docs/settings?tab=cli\" target=\"_blank\" rel=\"noopener noreferrer\">configurações oficiais</a>; não se presume uma garantia universal de preservação de processos.</p><h4>Dois exercícios do material</h4><p>Primeiro, uma calculadora recebe uma lista com números e a string “trinta”. Observe o erro de soma e peça a correção para ignorar valores não convertíveis.</p><p>Depois, solicite um programa que calcule primos até 50.000 e registre o tempo. A documentação seguinte deve usar o resultado efetivamente obtido, sem inventar medições.</p>",
    "concepts": [
      "Saída e erro de execução",
      "Processos pontuais e contínuos",
      "Fila, direcionamento e interrupção",
      "Dependência entre tarefas"
    ],
    "exercise": "Execute a prática da calculadora e acompanhe a correção. Na prática de primos até 50.000, solicite em seguida instruções e tempo médio, conferindo se o documento usa medições reais; não apresente uma média sem medições que a sustentem.",
    "expected": "Erro observado e correção da calculadora; documento da segunda tarefa coerente com os resultados medidos da primeira."
  },
  {
    "title": "Sessões, versões e restauração",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "8 min (estimativa)",
    "sources": [
      "./docs/02-formacao-agentes/11-sessoes-versionamento-rollback.md"
    ],
    "objective": "Distinguir o histórico da conversa do estado dos arquivos e conferir uma restauração em laboratório.",
    "intro": "Distinguir o histórico da conversa do estado dos arquivos e conferir uma restauração em laboratório.",
    "body": "<h4>Conversa e arquivos são estados diferentes</h4><p>Desfazer uma mensagem no chat não equivale a restaurar arquivos no disco. Apagar uma mensagem também não demonstra recuperação do código.</p><ul><li>Rollback de conversa altera o histórico ou o contexto.</li><li>Rollback de arquivos altera o conteúdo no sistema de arquivos.</li></ul><h4>Retomar e explorar alternativas</h4><p>O material propõe retomar tarefas e explorar caminhos alternativos de conversa. Na CLI, o <a href=\"https://antigravity.google/docs/cli/conversations/\" target=\"_blank\" rel=\"noopener noreferrer\">gerenciamento de conversas</a> documenta /resume e sessões relacionadas ao diretório de trabalho. Retomar a conversa não comprova o isolamento dos arquivos de uma ramificação.</p><h4>Compare o que foi restaurado</h4><p>O objetivo é recuperar alterações preservando o trabalho manual anterior e inspecionar as ações realizadas. Examine as diferenças e compare os arquivos antes e depois; a <a href=\"https://antigravity.google/docs/review-changes/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação de revisão</a> é uma referência para avaliar mudanças.</p><p>A prática deve ocorrer em uma cópia de laboratório. Não se presume um mecanismo automático capaz de preservar toda alteração manual.</p>",
    "concepts": [
      "Histórico de conversa e estado de arquivos",
      "Retomada de sessão",
      "Comparação antes/depois",
      "Preservação do trabalho manual"
    ],
    "exercise": "Em uma cópia de laboratório, crie um arquivo com alterações manuais, solicite uma mudança e compare o conteúdo antes e depois de uma restauração. Use somente o mecanismo documentado e disponível no ambiente escolhido.",
    "expected": "Registro do que mudou na conversa e nos arquivos, verificando se o trabalho manual foi preservado, sem presumir o resultado."
  },
  {
    "title": "Validação e automação com hooks",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "10 min (estimativa)",
    "sources": [
      "./docs/02-formacao-agentes/05-hooks-e-validacao.md"
    ],
    "objective": "Avaliar entregas com verificações reproduzíveis e compreender o papel dos hooks e dos procedimentos reutilizáveis.",
    "intro": "Avaliar entregas com verificações reproduzíveis e compreender o papel dos hooks e dos procedimentos reutilizáveis.",
    "body": "<h4>Engenharia valida o resultado</h4><p>O material contrapõe geração probabilística a verificações reproduzíveis. Considere linters, checagens estáticas, formatadores, verificadores de tipos, testes e cobertura conforme a tarefa.</p><p>Planejar → executar → verificar → corrigir quando necessário → apresentar evidências para revisão. Não aceite uma tarefa como pronta apenas porque o agente declarou sucesso.</p><h4>Hooks no ciclo de trabalho</h4><p>Hooks associam scripts a momentos do trabalho para preparar ou verificar alterações. A <a href=\"https://antigravity.google/docs/hooks/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação atual de hooks</a> descreve eventos como PreToolUse e PostToolUse, antes e depois de uma ferramenta. Esses eventos não confirmam o schema antigo citado na apostila.</p><h4>Operação e procedimento</h4><p>Uma ferramenta é uma operação; uma habilidade ou procedimento encadeia operações. Empacotar procedimentos evita repetir a distribuição manual de regras e integrações entre projetos.</p><p>O <a href=\"https://antigravity.google/docs/build-plugins/\" target=\"_blank\" rel=\"noopener noreferrer\">guia de plugins</a> documenta manifesto plugin.json, habilidades em SKILL.md e hooks.json. A existência desses componentes não comprova qualquer configuração presumida de plugin ou hook.</p>",
    "concepts": [
      "Verificações reproduzíveis",
      "Evidências para revisão",
      "Eventos de hooks com escopo documentado",
      "Ferramentas e procedimentos reutilizáveis"
    ],
    "exercise": "Observe um script de verificação receber os arquivos de uma tarefa e retornar seu resultado, conforme a prática proposta. Registre a automação somente depois de conferir eventos e formatos documentados; não crie configuração presumida.",
    "expected": "Resultado da verificação registrado e apresentado para revisão, com distinção entre execução manual e automação de hook efetivamente configurada."
  },
  {
    "title": "MCP e integrações",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "10 min (estimativa)",
    "sources": [
      "./docs/02-formacao-agentes/06-mcp-integracoes.md"
    ],
    "objective": "Distinguir cliente, servidor, capacidades e autorização em uma integração MCP.",
    "intro": "Distinguir cliente, servidor, capacidades e autorização em uma integração MCP.",
    "body": "<h4>Cliente e servidores</h4><p>O material apresenta MCP como protocolo aberto de integração entre um cliente e servidores que expõem recursos e ferramentas. O cliente utiliza as capacidades anunciadas; esse modelo permite expandir as ferramentas disponíveis para um agente.</p><h4>Conexão não é autorização</h4><p>Evite segredos escritos diretamente nas configurações e separe autenticação de uso das ferramentas. Conectar um servidor não concede, por si só, autorização para qualquer operação.</p><p>A <a href=\"https://antigravity.google/docs/mcp/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação do Antigravity</a> descreve configuração MCP e OAuth com PKCE para servidores remotos compatíveis. O suporte depende da modalidade e do servidor; não é uma garantia universal de isolamento ou ocultação automática de segredos.</p><p>A <a href=\"https://modelcontextprotocol.io/specification/latest/basic/transports\" target=\"_blank\" rel=\"noopener noreferrer\">especificação de transportes</a> distingue stdio e Streamable HTTP. O transporte define como as mensagens são entregues; um processo local pode ter outros acessos, conforme suas permissões.</p><h4>Consulta em laboratório</h4><p>O objetivo da prática é consultar um estoque em SQLite descartável: identificar o produto de maior preço e o valor total. Confirme um servidor compatível e sua documentação antes de instalar ou configurar a integração. Os nomes de banco e pastas do exercício são exemplos adaptáveis.</p>",
    "concepts": [
      "Cliente, servidor e capacidades MCP",
      "Autenticação e autorização",
      "Transportes e permissões",
      "Consulta a banco descartável"
    ],
    "exercise": "Em um SQLite de laboratório, com servidor compatível e configuração documentada, pergunte qual produto tem maior preço e qual o valor total do estoque. Use somente os dados descartáveis do exercício.",
    "expected": "Respostas conferidas com os dados do laboratório, identificando a ferramenta consultada e as permissões necessárias, sem acesso a dados reais."
  },
  {
    "title": "Trabalho com múltiplos agentes",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "10 min (estimativa)",
    "sources": [
      "./docs/03-laboratorios/lab-multi-agentes.md"
    ],
    "objective": "Dividir trabalho com escopo definido e consolidar resultados sem presumir isolamento automático.",
    "intro": "Dividir trabalho com escopo definido e consolidar resultados sem presumir isolamento automático.",
    "body": "<h4>Divida responsabilidades</h4><p>O material propõe distribuir tarefas com escopo definido e consolidar cada frente. Seus exemplos incluem testes de faturamento, análise de dependências de um legado e investigação de um erro de produção.</p><h4>Delegar não dispensa conferir</h4><p>Observe o que cada frente recebeu, os resultados apresentados e como o retorno é consolidado. Os exemplos ilustram divisão de trabalho, sem comprovar paralelismo ou isolamento automático no ambiente utilizado.</p><p>A <a href=\"https://antigravity.google/docs/subagents/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação de subagentes do Antigravity</a> descreve delegação e opções de workspace, incluindo herdar, compartilhar e criar worktree. Essa distinção exige conferir o modo efetivamente usado; uma worktree não significa risco zero nem substitui revisão.</p><h4>Prática recebida</h4><p>Delegue uma auditoria de segurança de um arquivo e um plano de documentação. Acompanhe o trabalho e confira o relatório consolidado. Reutilize o ciclo e as permissões da Aula 13 e a coordenação de tarefas da Aula 16.</p>",
    "concepts": [
      "Escopo de cada frente",
      "Delegação e consolidação",
      "Workspace compartilhado ou separado",
      "Revisão dos resultados"
    ],
    "exercise": "No ambiente de laboratório escolhido, delegue a auditoria de segurança de um arquivo e um plano de documentação; observe os retornos e confira a consolidação, conforme a prática proposta.",
    "expected": "Escopos identificados e retorno consolidado conferido, distinguindo o isolamento observado das capacidades apenas presumidas."
  },
  {
    "title": "Validação no navegador",
    "category": "FORMAÇÃO EM AGENTES",
    "trail": "formacao",
    "duration": "10 min (estimativa)",
    "sources": [
      "./docs/03-laboratorios/lab-navegador-sandbox.md"
    ],
    "objective": "Acompanhar uma interação real com formulário e reunir evidências do resultado no navegador.",
    "intro": "Acompanhar uma interação real com formulário e reunir evidências do resultado no navegador.",
    "body": "<h4>Da página à evidência</h4><p>A prática original propõe criar uma página de laboratório com formulário simples, servir por HTTP, abrir no navegador, preencher um campo, enviar e confirmar a mensagem de sucesso.</p><h4>Organização adaptável</h4><p>A pasta <code>public/</code> e a porta <code>8080</code> são exemplos do exercício, não uma obrigatoriedade. O aluno pode escolher outra organização de pastas e outra porta disponível, ajustando o caminho servido e a URL de acesso. Isso não altera caminhos que uma ferramenta realmente exija.</p><h4>O que observar</h4><p>Confira navegação, preenchimento, clique e mensagem resultante. Reúna evidência visual e examine erros no console e falhas de rede, como proposto no material.</p><p>A <a href=\"https://antigravity.google/docs/browser/\" target=\"_blank\" rel=\"noopener noreferrer\">documentação de navegador do Antigravity</a> distingue navegador integrado e conexão com Chrome conforme modalidade e disponibilidade. A existência desse recurso não comprova os nomes de ferramentas ou um sandbox universal citados na apostila.</p><p>Reutilize a Aula 16 para acompanhar o servidor e a Aula 14 para apresentar as evidências da entrega.</p>",
    "concepts": [
      "Interação real com formulário",
      "Pasta e porta como exemplos",
      "Mensagem de sucesso e evidência visual",
      "Console e rede"
    ],
    "exercise": "Crie uma página de laboratório com formulário simples. Solicite ao agente servir a pasta escolhida por HTTP, abrir sua URL, preencher o campo, enviar e confirmar a mensagem de sucesso. Você pode adotar public/ e 8080 como modelo ou adaptá-los.",
    "expected": "Resultado do envio conferido no navegador, evidência visual registrada e observações de console/rede quando aplicáveis."
  }
];

const storageKey = 'antigravity-lab-progress-v1';
const trailMenuKey = 'antigravity-lab-trail-menus-v1';
let trailMenus = {};
try {
  const saved = JSON.parse(localStorage.getItem(trailMenuKey) || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) trailMenus = saved;
} catch (error) { /* Trilhas começam recolhidas sem preferências válidas. */ }
const progressOwnerKey = `${storageKey}:owner`;
const progressMemory = new Map();
const schemaPendingMemory = new Map();
let progressUserId = null;
let progressInitialized = false;
let progressEpoch = 0;
let progressLoad = Promise.resolve();
let progressWrites = Promise.resolve();
let progressEdits = new Map();

function validProgress(value) {
  return Array.isArray(value)
    ? [...new Set(value.filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length))]
    : [];
}

function readLocalProgress(key) {
  try { return validProgress(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch (error) { return []; }
}

function readProgressOwner() {
  try { return localStorage.getItem(progressOwnerKey) || 'guest'; }
  catch (error) { return 'guest'; }
}

// Conclusões rejeitadas por um schema antigo ficam separadas por conta.
function schemaPending(userId) {
  if (!schemaPendingMemory.has(userId)) {
    schemaPendingMemory.set(userId, readLocalProgress(`${storageKey}:schema-pending:${userId}`));
  }
  return [...schemaPendingMemory.get(userId)];
}

function setSchemaPending(userId, values) {
  const pending = validProgress(values);
  schemaPendingMemory.set(userId, pending);
  try { localStorage.setItem(`${storageKey}:schema-pending:${userId}`, JSON.stringify(pending)); }
  catch (error) { /* A cópia em memória continua disponível nesta sessão. */ }
}

function contextProgressKey(userId) {
  return `${storageKey}:${userId || 'guest'}`;
}

function readContextProgress(userId) {
  const context = userId || 'guest';
  if (progressMemory.has(context)) return [...progressMemory.get(context)];
  // O array legado pertence ao visitante até a primeira troca de contexto.
  const value = readProgressOwner() === context
    ? readLocalProgress(storageKey)
    : readLocalProgress(contextProgressKey(userId));
  progressMemory.set(context, value);
  return [...value];
}

// Mantém a cópia ativa anterior mesmo se uma gravação parcial tiver perdido o cache separado.
progressMemory.set(readProgressOwner(), readLocalProgress(storageKey));
let completed = readContextProgress(null);

function cacheProgress() {
  progressMemory.set(progressUserId || 'guest', [...completed]);
  try {
    const value = JSON.stringify(completed);
    // Preserva a chave e o formato original, agora usados como cache ativo.
    localStorage.setItem(contextProgressKey(progressUserId), value);
    localStorage.setItem(storageKey, value);
    localStorage.setItem(progressOwnerKey, progressUserId || 'guest');
  } catch (error) {
    /* O progresso continua disponível nesta sessão mesmo com storage bloqueado. */
  }
}

function progressStatus(message) {
  const status = document.getElementById('progress-sync-status');
  if (status) status.textContent = message;
}

function refreshProgress() {
  renderCourseDashboard();
}

function synchronizeProgress(state) {
  const nextUserId = state.user ? state.user.id : null;
  if (progressInitialized && nextUserId === progressUserId) return;
  // Guarda o visitante antes de ativar o cache da conta; nunca importa seu progresso silenciosamente.
  cacheProgress();
  progressUserId = nextUserId;
  progressInitialized = true;
  const epoch = ++progressEpoch;
  progressEdits = new Map();
  progressWrites = Promise.resolve();
  completed = readContextProgress(nextUserId);
  cacheProgress();
  refreshProgress();

  if (!nextUserId || !state.client) {
    progressLoad = Promise.resolve();
    progressStatus('Progresso salvo neste navegador. Entre para salvar na sua conta.');
    return;
  }

  progressStatus('Buscando o progresso da sua conta…');
  progressLoad = (async () => {
    try {
      const { data, error } = await state.client.from('progresso')
        .select('aula_index').eq('aluno_id', nextUserId);
      if (error) throw error;
      if (epoch !== progressEpoch) return;
      const remote = new Set(validProgress((data || []).map(row => row.aula_index)));
      const pending = schemaPending(nextUserId).filter(index => !remote.has(index));
      setSchemaPending(nextUserId, pending);
      pending.forEach(index => { if (completed.includes(index)) remote.add(index); });
      // Cliques feitos durante a leitura prevalecem sobre a resposta antiga.
      progressEdits.forEach((done, index) => done ? remote.add(index) : remote.delete(index));
      completed = [...remote].sort((a, b) => a - b);
      cacheProgress();
      refreshProgress();
      progressStatus(pending.length
        ? 'Progresso carregado. Há aulas salvas só neste navegador; aplique a migration e marque-as novamente para sincronizar.'
        : 'Progresso da conta carregado.');
    } catch (error) {
      if (epoch !== progressEpoch) return;
      progressStatus('Não foi possível buscar sua conta. Usando o progresso salvo neste navegador.');
    }
  })();
}

function saveLessonProgress(index, done) {
  cacheProgress();
  const auth = window.AntigravityAuth;
  const state = auth && auth.getState();
  if (!progressUserId || !state || !state.user || state.user.id !== progressUserId || !state.client) {
    progressStatus('Progresso salvo neste navegador.');
    return;
  }
  const userId = progressUserId;
  const epoch = progressEpoch;
  if (!done) setSchemaPending(userId, schemaPending(userId).filter(value => value !== index));
  progressEdits.set(index, done);
  progressStatus('Progresso salvo neste navegador. Sincronizando com sua conta…');
  // Serializa marcação/desmarcação para que respostas fora de ordem não invertam o resultado.
  progressWrites = progressWrites.then(async () => {
    await progressLoad;
    const current = auth.getState();
    if (epoch !== progressEpoch || !current.user || current.user.id !== userId) return;
    try {
      const query = done
        ? state.client.from('progresso').upsert(
          { aluno_id: userId, aula_index: index },
          { onConflict: 'aluno_id,aula_index' }
        )
        : state.client.from('progresso').delete().eq('aluno_id', userId).eq('aula_index', index);
      const { error } = await query;
      if (error) throw error;
      setSchemaPending(userId, schemaPending(userId).filter(value => value !== index));
      if (epoch === progressEpoch) progressStatus('Progresso salvo na sua conta.');
    } catch (error) {
      if (epoch === progressEpoch) {
        if (done && error.code === '23514' && progressEdits.get(index) === true && completed.includes(index)) {
          setSchemaPending(userId, [...schemaPending(userId), index]);
          progressStatus('Salvo neste navegador. Atualize o schema do curso no Supabase para sincronizar esta aula.');
        } else {
          progressStatus('Salvo neste navegador. Não foi possível sincronizar com sua conta.');
        }
      }
    }
  }).catch(() => {
    if (epoch === progressEpoch) progressStatus('Salvo neste navegador. A sincronização não foi concluída.');
  });
}

// Anotações ficam no Supabase; rascunhos existem somente na memória desta página.
const lessonNotes = (() => {
  const contexts = new Map();
  const columns = 'id,aula_index,texto,print_url,criado_em,atualizado_em';
  let active = null;
  let lastUserId = null;

  function authState() {
    return window.AntigravityAuth ? window.AntigravityAuth.getState() : {};
  }

  function sameAccount(context) {
    const state = authState();
    return state.user && state.client && state.user.id === context.userId;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function imageURL(value) {
    if (!value || !value.trim()) return null;
    try {
      const url = new URL(value.trim());
      return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
    } catch (error) { return null; }
  }

  function resetDraft(context) {
    context.editId = null;
    context.text = '';
    context.url = '';
    context.invalid = null;
  }

  function notify(context, message, error = false) {
    context.notice = { message, error };
  }

  function noteCard(context, note) {
    const card = element('article', 'lesson-note-card');
    const date = new Date(note.criado_em);
    const time = element('time', 'lesson-note-date', Number.isNaN(date.getTime()) ? 'Data indisponível' : date.toLocaleString('pt-BR'));
    if (!Number.isNaN(date.getTime())) time.dateTime = date.toISOString();
    card.appendChild(time);
    const text = typeof note.texto === 'string' ? note.texto : '';
    if (text) card.appendChild(element('p', 'lesson-note-text', text));
    const url = typeof note.print_url === 'string' ? imageURL(note.print_url) : null;
    if (url) {
      const image = element('img', 'lesson-note-image');
      image.alt = `Print anexado à anotação da Aula ${String(context.index + 1).padStart(2, '0')}`;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.referrerPolicy = 'no-referrer';
      const unavailable = element('p', 'lesson-note-image-error', 'Não foi possível carregar o print. Use o link para abrir a imagem.');
      unavailable.hidden = true;
      image.addEventListener('error', () => { image.hidden = true; unavailable.hidden = false; });
      image.src = url;
      card.appendChild(image);
      card.appendChild(unavailable);
      const link = element('a', 'lesson-note-image-link', 'Abrir print em nova aba');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      card.appendChild(link);
    }
    const actions = element('div', 'lesson-note-actions');
    const edit = element('button', 'secondary-button', 'Editar');
    edit.type = 'button';
    edit.disabled = context.busy || context.loading;
    edit.addEventListener('click', () => {
      if (context.busy || context.loading || !sameAccount(context)) return;
      context.editId = note.id;
      context.text = text;
      context.url = typeof note.print_url === 'string' ? note.print_url : '';
      context.invalid = null;
      notify(context, 'Editando anotação. Salve as alterações ou cancele a edição.');
      paint(context);
      if (active && active.context === context) active.text.focus();
    });
    const remove = element('button', 'secondary-button lesson-note-delete', 'Excluir');
    remove.type = 'button';
    remove.disabled = context.busy || context.loading;
    remove.addEventListener('click', () => removeNote(context, note.id));
    actions.appendChild(edit);
    actions.appendChild(remove);
    card.appendChild(actions);
    return card;
  }

  function paint(context) {
    if (!active || active.context !== context || !sameAccount(context)) return;
    const view = active;
    view.text.value = context.text;
    view.url.value = context.url;
    view.text.disabled = context.busy;
    view.url.disabled = context.busy;
    view.text.setAttribute('aria-invalid', String(context.invalid === 'text'));
    view.url.setAttribute('aria-invalid', String(context.invalid === 'url'));
    view.form.setAttribute('aria-busy', String(context.busy));
    view.save.disabled = context.busy || context.loading;
    view.save.textContent = context.busy ? 'Aguarde…' : context.editId ? 'Salvar alterações' : 'Salvar anotação';
    view.cancel.hidden = !context.editId;
    view.cancel.disabled = context.busy;
    view.retry.hidden = !context.loadError;
    view.retry.disabled = context.busy || context.loading;
    view.feedback.textContent = context.notice ? context.notice.message : '';
    view.feedback.className = context.notice
      ? `form-feedback is-visible ${context.notice.error ? 'error' : 'info'}` : 'form-feedback';
    view.list.setAttribute('aria-busy', String(context.loading));
    view.list.replaceChildren();
    if (!context.entries.length) {
      view.list.appendChild(element('p', 'lesson-notes-empty', context.loading
        ? 'Carregando anotações…' : context.loadError
          ? 'A lista não pôde ser carregada.' : 'Você ainda não tem anotações nesta aula.'));
    }
    context.entries.forEach(note => view.list.appendChild(noteCard(context, note)));
  }

  async function load(context) {
    if (context.loading || context.busy || !sameAccount(context)) return;
    context.loading = true;
    notify(context, 'Carregando suas anotações…');
    paint(context);
    try {
      const { data, error } = await context.client.from('anotacoes').select(columns)
        .eq('aluno_id', context.userId).eq('aula_index', context.index)
        .order('criado_em', { ascending: false }).order('id', { ascending: false });
      if (error) throw error;
      if (!sameAccount(context)) return;
      context.entries = (data || []).filter(note => typeof note.id === 'string' && note.aula_index === context.index);
      context.loaded = true;
      context.loadError = false;
      notify(context, `${context.entries.length} anotação(ões) nesta aula.`);
    } catch (error) {
      context.loadError = true;
      notify(context, 'Não foi possível carregar suas anotações. Verifique a conexão e tente novamente.', true);
    } finally {
      context.loading = false;
      paint(context);
    }
  }

  async function save(context) {
    if (context.busy || context.loading || !sameAccount(context)) return;
    const text = context.text.trim();
    const rawURL = context.url.trim();
    const url = imageURL(rawURL);
    context.invalid = null;
    if (!text && !rawURL) {
      context.invalid = 'text';
      notify(context, 'Escreva uma observação ou informe a URL de um print.', true);
      paint(context);
      return;
    }
    if (text.length > 10000 || rawURL.length > 2048 || (rawURL && !url)) {
      context.invalid = text.length > 10000 ? 'text' : 'url';
      notify(context, context.invalid === 'text'
        ? 'A observação deve ter no máximo 10.000 caracteres.'
        : 'Informe uma URL de imagem HTTP ou HTTPS válida, sem usuário ou senha e com até 2.048 caracteres.', true);
      paint(context);
      return;
    }
    const editId = context.editId;
    context.busy = true;
    notify(context, 'Salvando anotação…');
    paint(context);
    try {
      const values = { texto: text, print_url: url, atualizado_em: new Date().toISOString() };
      const request = editId
        ? context.client.from('anotacoes').update(values).eq('id', editId)
          .eq('aluno_id', context.userId).eq('aula_index', context.index)
        : context.client.from('anotacoes').insert({ ...values, aluno_id: context.userId, aula_index: context.index });
      const { data, error } = await request.select(columns).single();
      if (error || !data || typeof data.id !== 'string') throw error || new Error('Anotação não retornada.');
      if (!sameAccount(context)) return;
      context.entries = [data, ...context.entries.filter(note => note.id !== data.id)]
        .sort((a, b) => new Date(b.criado_em).getTime() - new Date(a.criado_em).getTime());
      resetDraft(context);
      notify(context, editId ? 'Anotação atualizada.' : 'Anotação salva.');
    } catch (error) {
      notify(context, 'Não foi possível salvar a anotação. Seu texto continua no formulário; tente novamente.', true);
    } finally {
      context.busy = false;
      paint(context);
    }
  }

  async function removeNote(context, id) {
    if (context.busy || context.loading || !sameAccount(context)) return;
    if (!window.confirm('Excluir esta anotação? A exclusão não pode ser desfeita.')) return;
    context.busy = true;
    notify(context, 'Excluindo anotação…');
    paint(context);
    try {
      const { data, error } = await context.client.from('anotacoes').delete().eq('id', id)
        .eq('aluno_id', context.userId).eq('aula_index', context.index).select('id').maybeSingle();
      if (error || !data) throw error || new Error('Anotação não encontrada.');
      if (!sameAccount(context)) return;
      context.entries = context.entries.filter(note => note.id !== id);
      if (context.editId === id) resetDraft(context);
      notify(context, 'Anotação excluída.');
    } catch (error) {
      notify(context, 'Não foi possível excluir a anotação. Tente novamente.', true);
    } finally {
      context.busy = false;
      paint(context);
    }
  }

  function render(root, index) {
    if (!root) return;
    const state = authState();
    const userId = state.user && state.client ? state.user.id : null;
    if (userId !== lastUserId) { contexts.clear(); active = null; lastUserId = userId; }
    root.replaceChildren(element('h4', 'lesson-notes-title', 'MINHAS ANOTAÇÕES'));
    if (!userId) {
      active = null;
      const invitation = element('p', 'lesson-notes-invitation');
      const link = element('a', '', 'Entre para salvar suas anotações');
      link.href = './login.html';
      invitation.appendChild(link);
      root.appendChild(invitation);
      return;
    }

    const key = `${userId}:${index}`;
    if (!contexts.has(key)) contexts.set(key, {
      userId, index, client: state.client, entries: [], text: '', url: '', editId: null,
      busy: false, loading: false, loaded: false, loadError: false, notice: null, invalid: null
    });
    const context = contexts.get(key);
    const switched = !active || active.context !== context;
    const prefix = `lesson-note-${index}`;
    const form = element('form', 'lesson-notes-form');
    form.noValidate = true;
    const textLabel = element('label', 'form-label', 'Observação');
    textLabel.htmlFor = `${prefix}-text`;
    const text = element('textarea', 'form-textarea');
    text.id = textLabel.htmlFor;
    text.rows = 4;
    text.maxLength = 10000;
    text.setAttribute('aria-describedby', `${prefix}-feedback`);
    text.addEventListener('input', () => { context.text = text.value; });
    const urlLabel = element('label', 'form-label', 'URL do print (opcional)');
    urlLabel.htmlFor = `${prefix}-url`;
    const url = element('input', 'form-input');
    url.type = 'url';
    url.id = urlLabel.htmlFor;
    url.inputMode = 'url';
    url.maxLength = 2048;
    url.setAttribute('aria-describedby', `${prefix}-feedback`);
    url.addEventListener('input', () => { context.url = url.value; });
    const actions = element('div', 'lesson-note-actions');
    const saveButton = element('button', 'primary-button', 'Salvar anotação');
    saveButton.type = 'submit';
    const cancel = element('button', 'secondary-button', 'Cancelar edição');
    cancel.type = 'button';
    cancel.addEventListener('click', () => { resetDraft(context); context.notice = null; paint(context); });
    actions.appendChild(saveButton);
    actions.appendChild(cancel);
    [textLabel, text, urlLabel, url, actions].forEach(child => form.appendChild(child));
    form.addEventListener('submit', event => { event.preventDefault(); return save(context); });
    const feedback = element('div', 'form-feedback');
    feedback.id = `${prefix}-feedback`;
    feedback.setAttribute('role', 'alert');
    feedback.setAttribute('aria-live', 'polite');
    feedback.setAttribute('aria-atomic', 'true');
    const retry = element('button', 'secondary-button', 'Tentar carregar novamente');
    retry.type = 'button';
    retry.addEventListener('click', () => load(context));
    const list = element('div', 'lesson-notes-list');
    list.setAttribute('aria-label', 'Anotações desta aula');
    [form, feedback, retry, list].forEach(child => root.appendChild(child));
    active = { context, root, form, text, url, save: saveButton, cancel, feedback, retry, list };
    paint(context);
    if (!context.loaded || switched) void load(context);
  }

  return { render };
})();

let selected = 0;

function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function updateProgressUI() {
  const percent = Math.round((completed.length / lessons.length) * 100);
  const label = document.getElementById('progress-label');
  const percentEl = document.getElementById('progress-percent');
  const bar = document.getElementById('progress-bar');
  const track = document.querySelector('.progress-track');

  if (label) label.textContent = `${completed.length} de ${lessons.length} aulas concluídas`;
  if (percentEl) percentEl.textContent = `${percent}%`;
  if (bar) bar.style.width = `${percent}%`;
  if (track) track.setAttribute('aria-valuenow', String(percent));
  document.querySelectorAll('[data-course-count]').forEach(node => {
    node.textContent = node.getAttribute('data-course-count') === 'pad'
      ? String(lessons.length).padStart(2, '0') : String(lessons.length);
  });
}

function renderCourseDashboard() {
  const list = document.getElementById('lesson-list');
  const detail = document.getElementById('lesson-detail');

  if (list) {
    // Preserva a abertura ao marcar progresso ou redesenhar a aula.
    if (list.querySelectorAll) list.querySelectorAll('details[data-trail]').forEach(menu => {
      trailMenus[menu.dataset.trail] = menu.open;
    });
    const trails = new Map();
    lessons.forEach((lesson, index) => {
      const done = completed.includes(index);
      const trail = index < 10 ? 'principal' : (lesson.trail || 'principal');
      if (!trails.has(trail)) trails.set(trail, []);
      trails.get(trail).push(`<button class="lesson-button ${selected === index ? 'selected' : ''}" type="button" data-lesson="${index}" aria-pressed="${selected === index}">
        <span class="lesson-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="lesson-name">
          <strong>${lesson.title}</strong>
          <small>${lesson.category} · ${lesson.duration}</small>
        </span>
        <i class="lesson-state ${done ? 'complete' : ''}" data-lucide="${done ? 'circle-check' : 'chevron-right'}"></i>
      </button>`);
    });
    if (trails.size > 1) {
      list.classList.add('lesson-list-grouped');
      const labels = { principal: 'Trilha principal', 'primeiros-passos': 'Primeiros passos', formacao: 'Formação em agentes' };
      list.innerHTML = [...trails].map(([trail, buttons], groupIndex) => `
        <section class="lesson-trail" aria-labelledby="lesson-trail-${groupIndex}">
          <details class="lesson-trail-menu" data-trail="${trail}" ${trailMenus[trail] === true ? 'open' : ''}>
            <summary class="lesson-trail-title" id="lesson-trail-${groupIndex}">${labels[trail] || 'Outras aulas'} <span>${buttons.length} ${buttons.length === 1 ? 'aula' : 'aulas'}</span></summary>
            <div class="lesson-trail-lessons">${buttons.join('')}</div>
          </details>
        </section>`).join('');
    } else {
      list.classList.remove('lesson-list-grouped');
      list.innerHTML = [...trails.values()].flat().join('');
    }
  }

  if (detail) {
    const lesson = lessons[selected];
    const done = completed.includes(selected);
    const conceptsList = (lesson.concepts || []).map(c => `<li>${c}</li>`).join('');

    // Mensagem dinâmica contextual do WhatsApp para a aula atual
    const lessonNumber = String(selected + 1).padStart(2, '0');
    const lessonMsg = `Olá! Estou acessando o Antigravity Lab e gostaria de saber mais sobre a Aula ${lessonNumber} — ${lesson.title}.`;
    const waLessonUrl = `https://wa.me/551151922878?text=${encodeURIComponent(lessonMsg)}`;

    detail.innerHTML = `
      <div class="detail-top">
        <span class="detail-tag">${lesson.category}</span>
        <span class="detail-number">${lessonNumber} / ${String(lessons.length).padStart(2, '0')}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p class="detail-intro"><strong>Objetivo:</strong> ${lesson.objective || lesson.intro}</p>
      <div class="detail-divider"></div>
      <div class="detail-body">
        ${lesson.body}
        ${conceptsList ? `<h4>Conceitos-chave</h4><ul>${conceptsList}</ul>` : ''}
      </div>
      <div class="exercise">
        <strong>COLOQUE EM PRÁTICA</strong>
        <p>${lesson.exercise}</p>
        <div class="exercise-expected"><strong>Resultado esperado:</strong> ${lesson.expected}</div>
      </div>
      <section class="lesson-notes" data-lesson-notes aria-label="Minhas anotações"></section>
      <div class="detail-actions">
        <button class="complete-button ${done ? 'is-complete' : ''}" type="button" id="complete-button">
          <i data-lucide="${done ? 'circle-check' : 'check'}"></i>
          ${done ? 'Aula concluída' : 'Marcar como concluída'}
        </button>
        ${selected < lessons.length - 1 ? '<button class="next-button" type="button" id="next-button">Próxima aula <i data-lucide="arrow-right"></i></button>' : ''}
        <a class="whatsapp-button-context" href="${waLessonUrl}" target="_blank" rel="noopener noreferrer" title="Tirar dúvidas sobre esta aula no WhatsApp">
          <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Tirar dúvidas desta aula
        </a>
      </div>
    `;
    lessonNotes.render(detail.querySelector('[data-lesson-notes]'), selected);
  }

  updateProgressUI();
  renderIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('lesson-list');
  const detail = document.getElementById('lesson-detail');

  if (list || detail) {
    renderCourseDashboard();

    if (list) {
      list.addEventListener('toggle', event => {
        const menu = event.target;
        if (!menu.matches || !menu.matches('details[data-trail]') || !list.contains(menu)) return;
        trailMenus[menu.dataset.trail] = menu.open;
        try { localStorage.setItem(trailMenuKey, JSON.stringify(trailMenus)); }
        catch (error) { /* A abertura continua funcionando nesta página. */ }
      }, true);
      list.addEventListener('click', event => {
        const button = event.target.closest('[data-lesson]');
        if (!button) return;
        selected = Number(button.dataset.lesson);
        renderCourseDashboard();
      });
    }

    if (detail) {
      detail.addEventListener('click', event => {
        if (event.target.closest('#complete-button')) {
          completed = completed.includes(selected) 
            ? completed.filter(index => index !== selected) 
            : [...completed, selected];
          saveLessonProgress(selected, completed.includes(selected));
          renderCourseDashboard();
        } else if (event.target.closest('#next-button')) {
          selected += 1;
          renderCourseDashboard();
          if (window.matchMedia('(max-width: 680px)').matches) {
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }
  } else {
    updateProgressUI();
  }

  if (window.AntigravityAuth) {
    window.AntigravityAuth.subscribe(synchronizeProgress);
    window.AntigravityAuth.ready.then(synchronizeProgress).catch(() => {
      progressStatus('Progresso salvo neste navegador.');
    });
  } else {
    progressStatus('Progresso salvo neste navegador.');
  }
});
