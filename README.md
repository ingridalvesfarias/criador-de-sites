# 🌐 Criador de Sites com IA

<p align="center">
  <strong>Uma aplicação inteligente e interativa que consome a API da Groq para transformar descrições em texto (prompts) em landing pages modernas e responsivas em segundos.</strong>
</p>

---

## 📌 Sobre o Projeto

O **Criador de Sites** é uma ferramenta desenvolvida para automatizar e democratizar a criação de páginas web. Ao fornecer um comando simples descrevendo o seu nicho ou negócio (ex: uma cafeteria ou uma academia), o sistema faz uma chamada assíncrona para um modelo de inteligência artificial de ponta, encarregue de projetar e estruturar todo o código semântico e estilização.

O grande diferencial técnico da aplicação está no ambiente de desenvolvimento integrado (IDE-like): o utilizador consegue acompanhar a geração em tempo real no painel de código enquanto visualiza o resultado final renderizado imediatamente através de um sandbox seguro.

## 🚀 Funcionalidades Principais

- 🤖 **Geração Assistida por IA:** Integração nativa com modelos LLM para conceção e estruturação ágil de layouts.
- 💬 **Filtro Avançado de Resposta:** Engenharia de prompt embutida para forçar o retorno exclusivo de estruturas limpas em HTML e CSS puros, livre de dependências pesadas de imagem (utilização de emojis).
- 🧹 **Tratamento Dinâmico de String:** Mecanismo inteligente via Expressões Regulares (RegEx) para limpar marcações acidentais de Markdown (` ```html `) antes da injeção no DOM.
- 💻 **Painel Lateral de Código:** Bloco assíncrono dedicado à leitura do código fonte produzido com quebra de linha otimizada.
- 👁️ **Preview Dinâmico (Sandbox):** Injeção de código em tempo real através da propriedade `srcdoc` de um `iframe` isolado.
- ⏳ **UX de Carregamento:** Controle rigoroso dos estados dos componentes da interface, bloqueando novas submissões simultâneas e atualizando os textos do botão e terminal durante as requisições.
- 📱 **Interface Premium Dark & Responsiva:** Design imersivo focado em tons profundos e acentos em magenta neon, perfeitamente adaptável para ecrãs menores ou dispositivos móveis.

## 🎨 Identidade Visual e Design

A interface foi projetada utilizando conceitos modernos de UI/UX baseados em um tema escuro minimalista:
- **Cor de Fundo:** `#09090b` (Deep Dark)
- **Cards e Containers:** `#141419` (Dark Grey)
- **Destaques e Elementos Ativos:** `#c614ab` (Neon Magenta)
- **Código Fonte:** `#22c55e` (Green Glow)
- **Tipografia:** *Inter* (Google Fonts)

## 🛠️ Tecnologias Utilizadas

A aplicação adota uma arquitetura baseada em tecnologias web nativas (**Vanilla JS**), eliminando a necessidade de builders ou frameworks pesados:

- **HTML5:** Estruturação semântica global da aplicação, blocos de formulário e contêineres de sandbox.
- **CSS3:** Estilização estruturada com variáveis globais (`:root`), Flexbox para gerenciamento de seções e layouts complexos, transições de foco com feedback visual e regras de responsividade (`@media`).
- **JavaScript (ES6+):** Lógica orientada a eventos, manipulação imperativa de nós do DOM, manipulação de Expressões Regulares e consumo assíncrono de APIs externas.
- **Groq API Cloud:** Integração assíncrona com o modelo de inferência de altíssima velocidade **`llama-3.3-70b-versatile`** através do endpoint HTTP `POST`.

---
