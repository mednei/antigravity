# Evidências editoriais: instalação e requisitos

Consulta em **26/11/2026**, documentação oficial pública vigente, sem instalar ferramentas nem testar o aplicativo. As páginas consultadas não fixam uma versão única da IDE. A exigência de VS Code 1.90+ refere-se à extensão, não à IDE independente.

O [MD-fonte](./instalacao-e-requisitos.md) foi preservado integralmente. Sua sequência é ambiente de desenvolvimento, procedimentos retirados e lacunas de origem. Não há comando executável ou exercício de instalação validado nele. As marcações remetem aos itens 4, 18, 20, 21, 22, 23 e 75 do [registro único](../pendencias-verificacao.md). As notas editoriais e lacunas não viraram conteúdo de aula.

## Decisões para a Aula 09

- **Item 4, confirmação parcial:** extensão oficial, serviço local e revisão no editor documentados em [VS Code](https://antigravity.google/docs/ide/extensions/vscode/). A alternativa de IDE independente consta do [guia inicial](https://antigravity.google/docs/getting-started). Publicada somente essa parte. Não confirmados: fork OpenVSCode/OpenVSCode Server e a arquitetura IPC/RPC/LSP descrita na apostila.
- **Item 18, generalização refutada:** “não existe IA local” não vale para toda a plataforma; o [SDK documenta modelos locais](https://antigravity.google/docs/sdk/local-models/). Isso não demonstra o mesmo suporte na IDE. [SSH](https://antigravity.google/docs/ssh/) é documentado para o App v2.33.0+, com host Linux 64 bits e glibc 2.26+. Essa parte foi publicada explicitamente como App, sem transferi-la à IDE. HTTPS exclusivo, WSL 2 e Cloud Workstations do roteiro não foram confirmados com o mesmo escopo. As demais instruções ficaram fora da aula.
- **Item 20, confirmação parcial:** a extensão oficial para VS Code é distribuída no Marketplace, segundo o [catálogo oficial](https://antigravity.google/docs/ide/extensions). Isso não confirma o catálogo interno da IDE. Open VSX como padrão atual e alteração de product.json/extensionsGallery não foram confirmados oficialmente nesta consulta e não foram publicados.
- **Item 21, confirmação parcial:** publicado o procedimento pelo painel Extensões para **VS Code**, conforme o guia oficial. Não confirmados para a IDE: instalação manual via VSIX, `agy extensions install --vsix` e `~/.antigravity/extensions`. Não foram publicados.
- **Item 22, confirmação parcial:** a relação entre Pyright e Pylance consta do [repositório da Microsoft](https://github.com/microsoft/pylance-release). Ela não comprova a compatibilidade ou o licenciamento da tabela inteira no Antigravity. Publicadas a relação Pyright/Pylance e a restrição de uso descrita na [FAQ da Microsoft](https://github.com/microsoft/pylance-release/blob/main/FAQ.md); as demais alternativas LSP não foram publicadas. A nota de origem permanece no registro único.
- **Item 23, confirmação parcial:** publicada a configuração da extensão no próprio VS Code, com fonte oficial. Não confirmadas a migração direta de todos os arquivos, a cópia forçada e a compatibilidade dos links simbólicos entre editores; ficaram fora do site. Não foram executados comandos de cópia ou de links.
- **Item 75:** é uma lacuna do material recebido, não uma capacidade do produto verificável pela documentação do fornecedor. Preservada no MD e no registro único, fora da aula.

Ausência de confirmação não significa refutação. Os itens compostos continuam abertos somente no registro único, com a parte confirmada delimitada; não foi declarada validada toda uma tabela a partir de uma única extensão.

## Divisão didática

**Uma aula**, “Instalação e requisitos”, categoria **PRIMEIROS PASSOS**, trilha `primeiros-passos`, duração **estimada de 5 minutos**, índice **8** (Aula 09). Os oito objetos anteriores permanecem na ordem original, incluindo as aulas de Supabase e MongoDB. A estimativa e a atividade de consulta são organização didática desta conversão, não afirmações de duração nem exercício atribuídos ao professor.

O padrão para próximos MDs é: ler a fonte completa; mapear os itens VERIFICAR; consultar fontes oficiais atuais; publicar apenas o trecho confirmado e pertinente; conservar no MD e nas pendências os trechos refutados ou não confirmados. Não renderizar badges de pendências no site. Essa orientação posterior do usuário substitui o pedido inicial de badges.
