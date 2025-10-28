# 👼 Anjos da Guarda: Portal de Voluntariado

Este projeto é o frontend (parte visual) do portal oficial da ONG **Anjos da Guarda**, que conecta voluntários com a missão de levar apoio emocional, carinho e atenção individualizada a crianças em situação de acolhimento institucional (orfanatos).

## 🌍 Estrutura do Site

O portal é composto por páginas de navegação claras e um módulo robusto de gestão de voluntariado:

### 1. Página Inicial (`index.html`)
Apresenta a missão da ONG, o impacto das ações e dados de contato, servindo como a porta de entrada para a organização.

### 2. Página de Projetos (`projeto.html`)
Detalha as áreas de atuação do voluntariado (Educação, Saúde, Cultura e Inclusão), reforçando como a participação do voluntário se manifesta na prática.

### 3. Módulo de Voluntariado (`cadastro.html`)
É o coração funcional da aplicação. Implementa um sistema completo de gestão de cadastros, utilizando o `localStorage` do navegador:

| Funcionalidade | Descrição |
| :--- | :--- |
| **Formulário Completo** | Captação de dados pessoais, de endereço, disponibilidade e motivação dos voluntários. |
| **Tabela de Gestão** | Visualização em tempo real de todos os cadastros, simulando um painel administrativo. |
| **Exclusão de Registros** | Função implementada em JavaScript que permite remover voluntários da lista. |
| **Design Responsivo** | O formulário e a tabela se adaptam perfeitamente a todos os tamanhos de tela. |

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização moderna e layout responsivo.
* **JavaScript (ES6+):** Lógica de manipulação do DOM, controle de navegação e gestão completa (CRUD Básico) dos dados via `localStorage`.

## 🔗 Como Visualizar o Projeto

Para testar a aplicação no seu navegador:

1.  Baixe ou clone este repositório.
2.  Abra o arquivo principal (`html/index.html`) ou o módulo de cadastro (`html/cadastro.html`) no seu navegador.

***# HTML