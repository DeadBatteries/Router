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
