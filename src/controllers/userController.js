const User = require("../models/user");

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, tipo, turma, materia } = req.body;

    if (!nome || !email || !tipo) {
      return res.status(400).json({ message: "Campos obrigatórios ausentes" });
    }

    if (!['aluno', 'professor'].includes(tipo)) {
      return res.status(400).json({ message: "Tipo de usuário inválido" });
    }

    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const novoUsuario = new User({
      nome,
      email,
      tipo,
      turma,
      materia: tipo === 'professor' ? materia : undefined
    });

    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};


exports.adicionarXp = async (req, res) => {
  const { xpGanho } = req.body;
  const { id } = req.params;

  if (typeof xpGanho !== 'number' || xpGanho <= 0) {
    return res.status(400).json({ error: "XP inválido fornecido" });
  }

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    user.xp += xpGanho;
    user.nivel = Math.floor(user.xp / 10) + 1;

    await user.save();

    res.json({ message: 'XP atualizado com sucesso', xpAtual: user.xp, nivel: user.nivel });
  } catch (error) {
    console.error('Erro ao atualizar XP:', error);
    res.status(500).json({ error: 'Erro ao atualizar XP do usuário' });
  }
};


exports.buscarUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await User.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ message: "Erro ao buscar usuário" });
  }
};

exports.rankingGeral = async (req, res) => {
  try {
    const alunos = await User.find({ tipo: 'aluno' })
      .select('nome xp nivel') // pega só os dados necessários
      .sort({ xp: -1 }); // ordena do maior para o menor

    // adiciona posição no ranking
    const ranking = alunos.map((aluno, index) => ({
      posicao: index + 1,
      nome: aluno.nome,
      xp: aluno.xp,
      nivel: aluno.nivel
    }));

    res.json(ranking);
  } catch (error) {
    console.error("Erro ao gerar ranking:", error);
    res.status(500).json({ error: 'Erro ao gerar ranking' });
  }
};

// Controller para buscar turmas únicas dos alunos
exports.listarTurmas = async (req, res) => {
  try {
    const turmas = await User.aggregate([
      { $match: { tipo: 'aluno', turma: { $ne: null, $ne: '' } } },
      { $group: {
          _id: '$turma',
          quantidadeAlunos: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } } // ordena alfabeticamente por turma
    ]);

    // Renomeia o campo _id para turma
    const resultado = turmas.map(turma => ({
      turma: turma._id,
      quantidadeAlunos: turma.quantidadeAlunos
    }));


    res.json(resultado);
  } catch (error) {
    console.error("Erro ao listar turmas:", error);
    res.status(500).json({ error: 'Erro ao listar turmas' });
  }
};

exports.filtrarAlunosPorTurma = async (req, res) => {
  const { turma } = req.query;

  if (!turma) {
    return res.status(400).json({ error: 'Turma não informada' });
  }

  try {
    const alunos = await User.find({ tipo: 'aluno', turma })
      .select('nome email xp nivel') // Seleciona apenas os campos úteis
      .sort({ nome: 1 }); // Ordena por nome

    res.json(alunos);
  } catch (error) {
    console.error('Erro ao buscar alunos por turma:', error);
    res.status(500).json({ error: 'Erro ao buscar alunos por turma' });
  }
};