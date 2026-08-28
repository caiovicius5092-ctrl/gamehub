const jogos = require("../data/jogos");

function getGames() {
    return jogos;
}

function getGameById(id) {
    const jogo = jogos.find((jogo) => jogo.id === id);

    return jogo;
}

function getGamesByGenre(genre) {
    const filtro = jogos.filter((jogo) => jogo.genre.toLowerCase() === genre.toLowerCase());

    return filtro;
}

function addGame(newGame) {
    const id = jogos.length + 1;
    const jogo = { id, ...newGame };
    jogos.push(jogo);
    return jogo;
}

function deleteGame(gameid){
    const jogo = jogos.find((jogo) => jogo.id === gameid);
    if (jogo) {
        jogos.splice(jogos.indexOf(jogo), 1);
    }
    
}

module.exports = {
    getGames,
    getGameById,
    getGamesByGenre,
    addGame,
    deleteGame
};

