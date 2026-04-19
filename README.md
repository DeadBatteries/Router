# Router

# 🚀 Mini HTTP Framework (Node.js)

Este projeto é um **mini framework HTTP construído do zero com Node.js puro**, com o objetivo de entender profundamente como funcionam frameworks como Express por baixo dos panos.

---

## 🧠 Objetivo

Aprender na prática:

- Roteamento HTTP
- Manipulação de requests e responses
- Regex aplicado a rotas dinâmicas
- Parsing de query params
- Parsing de body (JSON)
- Estruturação de código limpa e escalável

---

## ⚙️ Funcionalidades

### 🔹 Router customizado
- Sistema de rotas baseado em:
  - `method` (GET, POST, etc.)
  - `path` (string ou regex)
- Controle de fluxo com fallback 404

---

### 🔹 Params dinâmicos (via Regex)
Suporte a rotas como:

```bash
GET /api/v1/users/42

Com extração automática:

req.params = {
  userId: "42"
}

Utilizando named groups:

/^\/api\/v1\/users\/(?<userId>\d+)$/
🔹 Query Params

Suporte a URLs como:

/api/v1/users/42?active=true&role=admin

Resultado:

req.query = {
  active: "true",
  role: "admin"
}
🔹 Body Parsing (JSON)

Suporte a métodos:

POST
PUT
PATCH

Exemplo:

{
  "name": "João",
  "age": 25
}

Resultado:

req.body = {

  name: "João",
  age: 25
}

🔹 Controllers separados

Organização baseada em responsabilidades:

controllers/
  ├── homeController.js
  ├── healthController.js
  └── userController.js

🔹 Código limpo (Clean Code)

Uso de destructuring

Flat-line code (sem aninhamentos desnecessários)

Separação clara de responsabilidades

Padrão consistente (req, res)

📁 Estrutura do Projeto
src/
├── controllers/
├── http/
│   ├── parseBody.js
│   └── response.js
├── router/
│   ├── router.js
│   └── routes.js
└── server.js

▶️ Como executar
node src/server.js

Servidor roda em:

http://localhost:3000
🧪 Exemplos de uso

GET (rota simples)
GET /
GET (com params)
GET /api/v1/users/42
GET (com query)
GET /api/v1/users/42?active=true
POST (com body)
POST /api/v1/users
Content-Type: application/json

{
  "name": "João"
}

🧠 Aprendizados principais
Como funciona o fluxo HTTP no Node.js
Diferença entre:
req.params
req.query
req.body
Uso de regex para rotas dinâmicas
Importância de padronização (req, res)
Construção de um sistema escalável sem frameworks
🚀 Próximos passos
 Middleware system (estilo Express)
 Validação de dados
 Suporte a headers
 Autenticação básica
 Logger de requests
