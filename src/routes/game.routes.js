const express = require('express');
const getgames = require('../controllers/game.controller');
const router = express.Router();

router.get('/', getgames.getGames);

router.get('/:id', getgames.getGameById);

module.exports = router;
