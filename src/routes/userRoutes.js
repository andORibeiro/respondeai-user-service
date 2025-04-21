const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// ✅ Criar novo usuário (aluno ou professor)
router.post("/", userController.criarUsuario);

// ✅ Atualizar XP e recalcular nível de um usuário
router.patch('/:id/xp', userController.adicionarXp);

// ✅ Buscar informações completas de um usuário por ID
router.get('/:id', userController.buscarUsuarioPorId);

// ✅ Gerar ranking geral de alunos baseado no XP
router.get('/ranking/geral', userController.rankingGeral);

// ✅ Recuperar as turmas que existem de alunos
router.get('/turmas/geral', userController.listarTurmas);

module.exports = router;
