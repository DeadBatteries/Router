🧠 Mini Node.js Framework (Router + Middleware Engine)
📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de entender profundamente o funcionamento interno de um servidor backend, recriando do zero conceitos fundamentais presentes em frameworks como Express.

A proposta não foi apenas “fazer funcionar”, mas sim:

Compreender controle de fluxo
Construir um sistema de middlewares
Implementar roteamento dinâmico
Tratar erros síncronos e assíncronos
Organizar o código com Separation of Concerns (SoC)
🚀 O que foi construído


🔹 Sistema de Roteamento (Router)

Suporte a rotas por:
String (/health)
Regex (/api/v1/users/:id)
Extração de parâmetros dinâmicos via grupos nomeados ((?<userId>))
Tratamento de query string manual (?user=...)


🔹 Pipeline de Middlewares

Execução sequencial baseada em stack:
globalMiddlewares → routeMiddlewares → controller
Cada middleware:
Decide continuar (next())
Ou interromper o fluxo (res.end / sendJson)

🔹 Sistema de Controle de Fluxo (runStack)
Execução controlada por índice (index)
Implementação manual do next()
Suporte a dois fluxos:
Fluxo normal
Fluxo de erro (next(err))


🔹 Tratamento de Erros

Detecção automática de error middleware:
fn.length === 4
Suporte a:
Erros síncronos (try/catch)
Erros assíncronos (Promise.catch(next))


🔹 Suporte a Async/Await

Middlewares podem ser async
Tratamento de Promise sem quebrar o fluxo
Integração de erro async no pipeline


🔹 Parsing manual de dados

Query string (req.query)
Body (req.body)
Params (req.params)
🔹 Middleware de autenticação (exemplo)
Simulação de auth via query
Interrupção de fluxo quando inválido
Demonstração prática de proteção de rota


🔹 Logger Middleware

Log de requisições:
[LOG] GET /api/v1/users/19
🛠️ Tecnologias utilizadas
Node.js (HTTP nativo)
JavaScript (ES Modules)
Nodemon (dev)



🧩 Principais desafios enfrentados


🔴 Controle de fluxo
Entender que:
quem controla o fluxo é o middleware, não o runner
🔴 Execução assíncrona

Diferença entre:
throw
next(err)
.catch(next)

🔴 Erros de parsing (difíceis de debugar)
Illegal continue statement
Illegal return statement

➡️ Causados por:

Funções mal fechadas
Escopo quebrado
Código sendo interpretado incorretamente
🔴 Escopo de variáveis
Bug com match fora do escopo
Entendimento de blocos {}
🔴 Debugging real
Identificar que:
o erro nem sempre está onde o Node aponta


🧠 Principais aprendizados
✅ Arquitetura
Separation of Concerns (SoC)
Pipeline de execução
Organização de responsabilidades
✅ Backend na prática
Como um framework funciona internamente
Como middlewares controlam o fluxo
Como rotas são resolvidas
✅ JavaScript avançado
Closures (next dentro do runStack)
Controle de execução
Tratamento de erro avançado
✅ Debugging
Identificação de erros de parsing vs runtime
Leitura de stack trace
Diagnóstico por isolamento


🎯 Objetivo do projeto
Este projeto foi criado como exercício de aprendizado profundo, com foco em:

entender, e não apenas usar
🚀 Possíveis evoluções
Sistema de autenticação real (JWT)
Middleware global de erro
Validação de dados
Integração com banco de dados
Refatoração para arquitetura modular
Utilização da IA como forma de auxilio no aprendizado, sem depêndencia de código pronto


📎 Conclusão

Este projeto representa a construção de um mini framework backend, permitindo domínio sobre:

fluxo de execução
arquitetura de servidor
tratamento de erros
organização de código

Mais do que o código em si, o valor está no entendimento construído ao longo do processo.