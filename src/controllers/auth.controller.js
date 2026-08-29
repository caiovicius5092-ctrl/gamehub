const authService = require("../services/auth.service");

function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Nome, email e senha são obrigatórios" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "A senha deve ter pelo menos 6 caracteres" });
  }

  const user = authService.register({ name, email, password });

  if (!user) {
    return res.status(409).json({ message: "Email já cadastrado" });
  }

  return res.status(201).json(user);
}

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  const result = authService.login(email, password);

  if (!result) {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }

  return res.status(200).json(result);
}

function me(req, res) {
  return res.status(200).json(authService.getUserById(req.user.sub));
}

module.exports = { register, login, me };
