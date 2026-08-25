let jogos = require("../data/jogos");

function getGames(req, res) {
  return res.status(200).json(jogos);
}

function getGameById(req, res) {
  const id = parseInt(req.params.id);
  const jogo = jogos.find((jogo) => jogo.id === id);

  if (!jogo) {
    return res.status(404).json({ message: "Jogo não encontrado" });
  }

  return res.status(200).json(jogo);
}

module.exports = {
  getGames,
  getGameById,
};
