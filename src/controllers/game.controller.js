const gameService = require('../services/game.service');

function getGames(req, res) {
  const games = gameService.getGames();
  return res.status(200).json(games);
}

function getGameById(req, res) {
  const id = parseInt(req.params.id);
  const game = gameService.getGameById(id);

  if (!game) {
    return res.status(404).json({ message: "Jogo não encontrado" });
  }

  return res.status(200).json(game);
}

function getGamesByGenre(req, res) {
  const genre = req.query.genre;
  const games = gameService.getGamesByGenre(genre);
  return res.status(200).json(games);
}

function addGame(req, res) {
  const newGame = req.body;
  const game = gameService.addGame(newGame);
  return res.status(201).json(game);
}

function deleteGame(req, res) {
  const gameid = parseInt(req.params.id);
  gameService.deleteGame(gameid);
  return res.status(204).send();
}

module.exports = {
  getGames,
  getGameById,
  getGamesByGenre,
  addGame,
  deleteGame
};

