const gameService = require('../services/game.service');

async function getGames(req, res) {
  try {
    const games = await gameService.getGames();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar jogos" });
  }
}

async function getGameById(req, res) {
  const id = parseInt(req.params.id);
  const game = await gameService.getGameById(id);

  if (!game) {
    return res.status(404).json({ message: "Jogo não encontrado" });
  }

  return res.status(200).json(game);
}

async function getGamesByGenre(req, res) {
  const genre = req.query.genre;
  const games = await gameService.getGamesByGenre(genre);
  return res.status(200).json(games);
}

async function addGame(req, res) {
  const newGame = req.body;
  const game = await gameService.addGame(newGame);
  return res.status(201).json(game);
}

async function deleteGame(req, res) {
  const gameid = parseInt(req.params.id);
  const deleted = await gameService.deleteGame(gameid);
  if (!deleted) {
    return res.status(404).json({ message: "Jogo não encontrado" });
  }
  return res.status(204).send();
}

module.exports = {
  getGames,
  getGameById,
  getGamesByGenre,
  addGame,
  deleteGame
};

