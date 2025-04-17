const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tipo: { type: String, enum: ["aluno", "professor"], required: true },
  turma: { type: String },
  materia: { type: String }, // ✅ novo campo opcional
  xp: { type: Number, default: 0 },
  nivel: { type: Number, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
