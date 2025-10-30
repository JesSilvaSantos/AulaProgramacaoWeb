# 💜 Anjos da Guarda: Portal de Voluntariado

Este projeto é o frontend (parte visual e interativa) do portal oficial da ONG **Anjos da Guarda**, desenvolvido para conectar voluntários com a missão de levar apoio emocional a crianças em situação de acolhimento institucional.

---

## 🌍 Estrutura Funcional e Acessível (Atividade 3 & 4)

O portal é composto por páginas de navegação claras e um módulo robusto de gestão de voluntariado, agora totalmente otimizado para **Acessibilidade (WCAG 2.1)**:

* **Página Inicial (`index.html`):** Apresenta a missão da ONG e o impacto das ações.
* **Página de Projetos (`projeto.html`):** Detalha as áreas de atuação do voluntariado.
* **Módulo de Voluntariado (`cadastro.html`):** O coração funcional da aplicação. Implementa um sistema completo de gerenciamento de cadastros.

| Funcionalidade | Status | Detalhe da Implementação |
| :--- | :--- | :--- |
| **CRUD Básico** | ✅ Completo | Gerenciamento completo (Criar, Ler, Atualizar, Excluir) de dados via `localStorage`. |
| **Tabela de Gestão** | ✅ Completo | Visualização em tempo real e dinâmica dos cadastros. |
| **Design Responsivo** | ✅ Completo | Layout se adapta perfeitamente a todos os tamanhos de tela (Mobile First). |

---

## 🛠️ Qualidade e Versionamento

Este projeto adere rigorosamente aos padrões de qualidade e desenvolvimento profissional, conforme exigido pelas Atividades 3 e 4:

### 1. Acessibilidade (WCAG 2.1 Nível AA)

* **Contraste Aprovado:** Todos os pares de texto/fundo (incluindo botões e tabela) foram ajustados no CSS para garantir o contraste mínimo de **4.5:1** (Nível AA).
* **Modo Escuro (Dark Mode):** Suporte nativo implementado via `@media (prefers-color-scheme: dark)` no CSS.
* **Navegação por Teclado:** Estilos `:focus` visíveis e claros para todos os elementos interativos, garantindo a navegação completa.
* **Estrutura Semântica:** Uso correto de tags `<main>`, `<fieldset>`, e atributos ARIA para auxiliar leitores de tela.

### 2. Versionamento e Fluxo de Trabalho (GitFlow)

* **Padrão GitFlow:** O desenvolvimento da Atividade 4 foi realizado em um *feature branch* (`feature/Atividade4`).
* **Commits Semânticos:** Uso da convenção de mensagens (`feat`, `docs`) para manter um histórico de commits claro e organizado.
* **Lançamento Oficial:** O código final e documentado da atividade foi marcado com o **Versionamento Semântico `v1.0.0`**.
* **Otimização:** O código está estruturado para a **minificação** de CSS/JS (tarefa de *build* ou produção).

---

## 🔗 Entrega e Documentação Final

O trabalho concluído foi formalizado e pode ser inspecionado nos seguintes pontos do repositório:

* **Lançamento Oficial (v1.0.0):** [Visualizar a Versão Final da Atividade 4](https://github.com/JesSilvaSantos/AulaProgramacaoWeb/releases/tag/v1.0.0)
* **Solicitação de Pull (PR):** [Visualizar a Documentação do Merge](https://github.com/JesSilvaSantos/AulaProgramacaoWeb/pulls)

---

**Tecnologias Utilizadas:** HTML5 (Semântica), CSS3 (Acessibilidade e Responsividade), JavaScript (CRUD via `localStorage`).

Feito com ❤️ por **JesSilvaSantos**.

---