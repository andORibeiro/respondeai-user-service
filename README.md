
# 👤 RespondeAI User Service

[![Documentação Swagger](https://img.shields.io/badge/Swagger-Documentação-green?logo=swagger)](http://localhost:3002/api-docs)

🚀 **RespondeAI User Service** é um microserviço responsável por gerenciar usuários da plataforma RespondeAI, incluindo alunos e professores. Ele também gerencia o acúmulo de XP, níveis e o ranking geral da plataforma.

---

## 🧠 Inspirado por
### Esse projeto faz parte do ecossistema **RespondeAI**, focado em soluções educacionais assistidas por IA.

---

## 🛠️ Funcionalidades

- **Cadastro de usuários**: alunos e professores.
- **Armazenamento de XP e atualização automática de nível**.
- **Ranking geral baseado em XP acumulado**.
- **Recuperar as turmas existentes dos alunos**.
- **Retorna os alunos de uma turma**.
- **Validação de dados de entrada** (ex: tipo de usuário, XP positivo, campos obrigatórios).
- **Associação de alunos a turmas e professores a matérias**.

---

## 📁 Estrutura de Pastas
### respondeai-user-service
```
├── .env.example              # Exemplo de variáveis de ambiente
├── README.md                 # Documentação do projeto
├── server.js                 # Configuração principal do servidor
└── src/
    ├── config/               # Configurações auxiliares (db.js, swaggerConfig.js)
    ├── controllers/          # Controladores das rotas (userController.js)
    ├── models/               # Modelo do usuário (user.js)
    ├── routes/               # Definição das rotas da API (userRoutes.js)
    └── swaggerDocs/          # Documentação Swagger centralizada
```

---

## ✅ Pré-requisitos

- Node.js >= 18
- MongoDB Atlas (recomendado) ou instância local

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/respondeai-user-service.git

# Acesse a pasta do projeto
cd respondeai-user-service

# Instale as dependências
npm install

# Copie o exemplo de variáveis de ambiente
cp .env.example .env

# Inicie o servidor
npm start
```

---

## 🔐 Variáveis de Ambiente
### Exemplo de `.env`:

```bash
PORT=3002
MONGODB_URI=mongodb://localhost:27017/respondeai_users
```

---

## 📄 Endpoints Úteis

| Método | Rota                          | Descrição                                         |
|--------|-------------------------------|---------------------------------------------------|
| POST   | /api/usuarios                 | Cria um novo usuário                              |
| PATCH  | /api/usuarios/:id/xp          | Atualiza o XP e nível de um usuário               |
| GET    | /api/usuarios/:id             | Retorna os dados de um usuário por ID             |
| GET    | /api/usuarios/ranking/geral   | Retorna ranking geral dos alunos com base no XP   |
| GET    | /api/usuarios/turmas/geral    | Retorna as turmas existentes dos alunos cadastrados   |
| GET    | /api/usuarios/turmas/turma?turma={turma}    | Retorna os alunos de uma turma   |

---

## 📄 Documentação Swagger

### A documentação interativa da API está disponível em:

```bash
http://localhost:3002/api-docs
```

Use a interface para testar os endpoints, visualizar schemas e entender melhor como integrar esse microserviço com outros componentes da RespondeAI.


---

## 📘 Swagger - Documentação Técnica da API

A API do RespondeAI User Service é totalmente documentada usando o Swagger (OpenAPI 3.0).

### 🔗 Acesse via navegador:
```
http://localhost:3002/api-docs
```

### ✨ O que está documentado:

- `POST /api/usuarios`: Criação de usuários com validações (aluno ou professor)
- `GET /api/usuarios/:id`: Busca de usuário por ID
- `PATCH /api/usuarios/:id/xp`: Atualização de XP e nível do usuário
- `GET /api/usuarios/ranking/geral`: Ranking geral de alunos com base no XP acumulado
- `GET /api/usuarios/turmas/geral`: Turmas existentes dos alunos
- `GET /api/usuarios/turmas/turma?turma={turma}`: Alunos de uma turma

Essa interface permite que você:
- Visualize todos os endpoints disponíveis e suas descrições
- Veja exemplos de entrada e saída
- Faça testes diretamente do navegador

> Dica: Ideal para integração com frontend ou ferramentas como Postman, Insomnia, etc.
