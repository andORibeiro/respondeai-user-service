/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints para gerenciamento de usuários da plataforma
 */

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Criar novo usuário (aluno ou professor)
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, email, tipo]
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [aluno, professor]
 *               turma:
 *                 type: string
 *               materia:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Campos obrigatórios ausentes ou usuário já existe
 *       500:
 *         description: Erro ao criar usuário
 */

/**
 * @swagger
 * /api/usuarios/{id}/xp:
 *   patch:
 *     summary: Atualizar XP de um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [xpGanho]
 *             properties:
 *               xpGanho:
 *                 type: number
 *     responses:
 *       200:
 *         description: XP atualizado com sucesso
 *       400:
 *         description: XP inválido fornecido
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar XP do usuário
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar usuário
 */

/**
 * @swagger
 * /api/usuarios/email/{email}:
 *   get:
 *     summary: Buscar usuário por E-mail
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao buscar usuário
 */


/**
 * @swagger
 * /api/usuarios/ranking/geral:
 *   get:
 *     summary: Obter ranking geral de alunos por XP
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de alunos ordenados por XP
 *       500:
 *         description: Erro ao gerar ranking
 */

/**
 * @swagger
 * /api/usuarios/turmas/geral:
 *   get:
 *     summary: Obter as turmas que existem de alunos
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de turma dos alunos
 *       500:
 *         description: Erro ao listar turmas
 */


/**
 * @swagger
 * /api/usuarios/turmas/alunos?turma={turma}:
 *   get:
 *     summary: Obter os alunos de uma turma específica
 *     tags: [Usuários]
 *     parameters:
 *       - in: query
 *         name: turma
 *         description: Nome da turma
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de alunos da turma
 *       500:
 *         description: Erro ao listar alunos
 */