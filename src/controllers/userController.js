const User = require("../models/user");

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, tipo, turma, materia } = req.body;

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
  

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    user.xp += xpGanho;

    // (Opcional) Subir de nível automaticamente a cada 10 XP
    const novoNivel = Math.floor(user.xp / 10) + 1;
    user.nivel = novoNivel;

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
