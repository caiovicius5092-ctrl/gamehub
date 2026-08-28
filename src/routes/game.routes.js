const express = require("express");
const games = require("../controllers/game.controller");
const router = express.Router();

router.get("/", games.getGames);

router.get("/genero", games.getGamesByGenre);

router.get("/:id", games.getGameById);

router.post("/addgame", games.addGame);

router.delete("/:id", games.deleteGame);

module.exports = router;
