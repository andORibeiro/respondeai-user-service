# 👤 RespondeAI User Service

[![Documentação Swagger](https://img.shields.io/badge/Swagger-Documentação-green?logo=swagger)](http://localhost:3002/api-docs)

🚀 **RespondeAI User Service** é um microserviço responsável por gerenciar usuários da plataforma RespondeAI, incluindo alunos e professores. Ele também é responsável pelo controle de XP, níveis e rankings.

---

## 🧠 Inspirado por
### Esse projeto faz parte do ecossistema **RespondeAI**, focado em soluções educacionais assistidas por IA.

---

## 🛠️ Funcionalidades

- **Cadastro de usuários**: alunos e professores.
- **Armazenamento de XP e níveis**.
- **Associação de usuários a turmas e matérias (para professores)**.
- **Ranking geral baseado em XP**.
- **Atualização automática de nível conforme XP acumulado**.

---

## 📁 Estrutura de Pastas
### respondeai-user-service
 - **├── .env.example** # Exemplo de variáveis de ambiente
 - **├── README.md** # Documentação do projeto
 - **├── server.js** # Configuração principal do servidor
 - **├── src/**
 - **│ ├── config/** # Configurações do projeto
 - **│ │ ├── db.js** # Configuração do banco de dados
 - **│ ├── controllers/** # Controladores das rotas (userController.js)
 - **│ ├── models/** # Modelo do usuário (user.js)
 - **│ ├── routes/** # Definição das rotas da API (userRoutes.js)

---

## ✅ Pré-requisitos

- Node.js >= 18
- MongoDB Atlas ou local

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/respondeai-user-service.git

# Acesse a pasta
cd respondeai-user-service

# Instale as dependências
npm install

# Copie o arquivo de variáveis de ambiente
cp .env.example .env

# Inicie o servidor
npm start
```

## 🔐 Variáveis de Ambiente
### Configure o arquivo .env com as seguintes variáveis:

```bash
PORT=3002
MONGODB_URI=mongodb://localhost:27017/respondeai_users
```

## 📄 Endpoints Úteis

| Método | Rota                          | Descrição                                |
|--------|-------------------------------|------------------------------------------|
| POST   | /api/usuarios                 | Cria um novo usuário                     |
| PATCH  | /api/usuarios/:id/xp          | Atualiza o XP do usuário                 |
| GET    | /api/usuarios/:id             | Retorna dados do usuário por ID          |
| GET    | /api/usuarios/ranking/geral   | Retorna ranking geral de alunos por XP   |

---

## 📄 Documentação Swagger

### A documentação interativa da API está disponível em:

```bash
http://localhost:3002/api-docs
```

### Nela você pode visualizar e testar os endpoints, ver os formatos de entrada/saída e integrar mais facilmente com outros serviços ou frontends.
