### 1. Estrutura e Arquivos (PASSO 1)

A estrutura básica deve incluir as pastas:
* `src`
* `config`
* `controllers`
* `routes`

E os arquivos principais: `server.js`, `app.js`, `.env`, `package.json`, etc.

---

### 2. Inicialização e Dependências (PASSO 2)

Execute os comandos para iniciar o projeto e instalar o Express e o Nodemon:

1.  **Inicializar o projeto:**
    ```bash
    npm init -y
    ```

2.  **Instalar dependências:**
    ```bash
    npm install express nodemon
    ```

---

### 3. Configuração do Express (PASSO 3)

* Crie o arquivo `server.js`.
* Importe e configure o Express.
* Configure a porta e a rota base.
* Configure o `nodemon` no `package.json`.

### 4. Rotas e Métodos (PASSO 4)

* Crie as rotas de produtos (ex: `/api/products`).
* Implemente os métodos: **GET, POST, PUT, DELETE**.
* Exemplo de produtos: Bicicletas, peças, acessórios.

### 5. Integração com Supabase (PASSO 5)

1.  Crie sua tabela no Supabase.
2.  Crie o arquivo `.env`.
3.  Use a **chave anon** e a **URL** para a conexão.
4.  Conecte o Supabase ao código.

### 6. Teste da API (PASSO 6)

Use o Thunder Client para testar sua API:

1.  Vá em **Extensões**.
2.  Busque e instale "Thunder Client".
3.  **Teste as rotas**.

###7. Link do vídeo:
https://youtu.be/I1lokDXypyQ
