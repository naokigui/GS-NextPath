# 🌐 Global Solution - NextPath

> **O Futuro do Trabalho**: Uma aplicação integrada para explorar as profissões emergentes.

Este projeto foi desenvolvido para a disciplina de **Computational Thinking & Application Server**. O objetivo é demonstrar a integração entre um Frontend estático e uma API RESTful desenvolvida em Node.js.

---

## 👨‍💻 Integrantes do Grupo

| Nome | RM |
| :--- | :--- |
| **Thiago Alves Bassi Silva** | 562304 |
| **Denise Shamira Chuquimia** | 563714 |
| **Guilherme Naoki Hirayama** | 563727 |
| **Tandara Sartore Perez de Azevedo** | 566455 |

---

## 🛠️ Estrutura do Projeto

O repositório está organizado em duas camadas principais:

* 📁 **`/backend`**: Servidor Node.js com Express (API REST).
* 📁 **`/frontend`**: Aplicação Web com HTML, Tailwind CSS e JS Vanilla.

---

## 🚀 Guia de Instalação e Execução

Siga os passos abaixo para rodar o projeto em sua máquina local.

### ✅ Pré-requisitos
Antes de começar, certifique-se de ter instalado:
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* Git

### 1️⃣ Passo 1: Configurar e Rodar o Backend (API)
O servidor precisa estar ligado para fornecer os dados das profissões.

1.  Abra o terminal na pasta raiz do projeto e entre na pasta do backend:
    ```bash
    cd backend
    ```

2.  Instale as dependências necessárias:
    ```bash
    npm install
    ```

3.  Inicie o servidor:
    ```bash
    node server.js
    ```
    > 🎉 **Sucesso:** Você verá a mensagem: `Servidor rodando em http://localhost:3000`

    ⚠️ **Atenção:** Não feche este terminal. O servidor precisa continuar rodando.

### 2️⃣ Passo 2: Abrir o Frontend
Agora que a API está ativa, vamos visualizar a aplicação.

1.  Abra uma nova janela do terminal (ou navegue pelo explorador de arquivos) até a pasta `frontend`.
2.  Abra o arquivo `index.html` no seu navegador preferido.
    * *Dica:* Se estiver usando VS Code, clique com o botão direito no arquivo e escolha **"Open with Live Server"**.

---

## 🧪 Como Testar

1.  Ao abrir o site, os cards das profissões devem carregar automaticamente.
2.  Utilize os botões de filtro (Tecnologia, Saúde, etc.) para testar a interatividade.
3.  Caso apareça uma mensagem de erro vermelha, verifique se o **Passo 1** foi executado corretamente.

---