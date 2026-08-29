# GameHub

API REST para cadastro, consulta e gerenciamento de jogos, com autenticação de usuários usando JWT e persistência em SQLite.

## Tecnologias

- Node.js
- Express
- SQLite3
- JSON Web Token
- Node.js `crypto` para hash das senhas

## Instalação

Clone o projeto e instale as dependências:

```bash
npm install
```

## Execução

Inicie o servidor:

```bash
npm start
```

A API estará disponível em:

```text
http://localhost:3000
```

A chave JWT pode ser configurada pela variável `JWT_SECRET`. Em PowerShell:

```powershell
$env:JWT_SECRET="uma-chave-secreta"
npm start
```

> O projeto usa uma chave padrão apenas para desenvolvimento. Em produção, configure uma chave secreta própria.

## Banco de dados

O banco SQLite é criado automaticamente no arquivo `gamehub.db`.

As tabelas principais são:

- `users`: usuários, emails e hashes das senhas;
- `games`: nome, gênero e plataforma dos jogos.

O arquivo do banco está no `.gitignore` e não deve ser enviado ao GitHub.

## Rotas de autenticação

### Cadastrar usuário

```text
POST /auth/register
```

Corpo da requisição:

```json
{
  "name": "Ana",
  "email": "ana@gamehub.com",
  "password": "123456"
}
```

A senha deve ter pelo menos 6 caracteres.

### Fazer login

```text
POST /auth/login
```

Corpo da requisição:

```json
{
  "email": "ana@gamehub.com",
  "password": "123456"
}
```

A resposta contém um token JWT:

```json
{
  "token": "seu-token-jwt",
  "user": {
    "id": 1,
    "name": "Ana",
    "email": "ana@gamehub.com"
  }
}
```

### Consultar usuário autenticado

```text
GET /auth/me
```

Envie o token no cabeçalho:

```text
Authorization: Bearer seu-token-jwt
```

Sem um token válido, a API retorna `401 Unauthorized`.

## Rotas de jogos

### Listar jogos

```text
GET /jogos
```

### Buscar jogo por ID

```text
GET /jogos/:id
```

Exemplo:

```text
GET /jogos/1
```

### Filtrar por gênero

```text
GET /jogos/genero?genre=RPG
```

### Cadastrar jogo

```text
POST /jogos/addgame
```

Corpo da requisição:

```json
{
  "name": "Elden Ring",
  "genre": "RPG",
  "platform": "PC"
}
```

### Excluir jogo

```text
DELETE /jogos/:id
```

Exemplo:

```text
DELETE /jogos/1
```

## Estrutura do projeto

```text
src/
├── app.js                 # Configuração do Express e registro das rotas
├── server.js              # Inicialização do servidor
├── config/
│   └── database.js        # Conexão SQLite e criação das tabelas
├── controllers/           # Recebem requisições e enviam respostas
├── middlewares/           # Autenticação, logs e tratamento de erros
├── routes/                # Endpoints da API
└── services/              # Regras de negócio e consultas ao banco
```

## Testes

O projeto ainda não possui testes automatizados configurados. Para testar manualmente, use Postman, Insomnia ou `curl`.