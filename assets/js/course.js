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
    objective: 'Organizar as ferramentas fundamentais, isolamento de pastas e controle de versões.',
    intro: 'Organize o espaço de trabalho antes de começar a criar.',
    body: '<h4>Comece pelo essencial</h4><p>Acesse o site oficial do Antigravity para verificar a disponibilidade, os requisitos e as instruções de instalação atualizadas. Crie ou entre na sua conta quando solicitado.</p><ul><li>Separe uma pasta para seu projeto.</li><li>Tenha um navegador e o Git instalados, se necessário.</li><li>Evite incluir senhas ou informações privadas nos seus pedidos.</li></ul>',
    concepts: ['Estrutura de diretórios', 'Controle de versão com Git', 'Segurança de credenciais'],
    exercise: 'Crie uma pasta para seu primeiro projeto e anote o que você quer construir.',
    expected: 'Diretório de trabalho criado na máquina e arquivo de notas ou README inicial configurado.'
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
    "body": "<h4>Documentos, coleções e credenciais</h4><p>MongoDB organiza documentos BSON em coleções. Uma connection string contém as credenciais de um usuário do banco: nunca coloque a chamada “senha master” no código nem use o administrador na aplicação. Crie um usuário específico com o menor privilégio e restrinja o acesso por IP.</p><p>Guarde o .env fora do projeto, por exemplo em <code>D:/projetos/credenciais/mongodb.env</code>, e carregue-o somente no backend. Se estiver dentro do projeto, ignore-o antes do primeiro commit. O .gitignore não remove arquivos já rastreados: use <code>git rm --cached .env</code> e registre a remoção. Se já houve push, troque a senha imediatamente, revogue acessos e revise o histórico; versões antigas continuam no Git.</p><p>Consulte o <a href=\"./mongodb.html#seguranca\">Guia MongoDB e a seção de segurança</a>. Esta aula não conecta o site ao banco.</p>",
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
  }
];

const storageKey = 'antigravity-lab-progress-v1';
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
    const trails = new Map();
    lessons.forEach((lesson, index) => {
      const done = completed.includes(index);
      const trail = lesson.trail || 'principal';
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
      const labels = { principal: 'Trilha principal', 'primeiros-passos': 'Primeiros passos' };
      list.innerHTML = [...trails].map(([trail, buttons], groupIndex) => `
        <section class="lesson-trail" aria-labelledby="lesson-trail-${groupIndex}">
          <h3 class="lesson-trail-title" id="lesson-trail-${groupIndex}">${labels[trail] || 'Outras aulas'} <span>${buttons.length} ${buttons.length === 1 ? 'aula' : 'aulas'}</span></h3>
          <div class="lesson-trail-lessons">${buttons.join('')}</div>
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
