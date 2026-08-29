const database = require("../config/database");

function ensureGamesTable() {
  return new Promise((resolve, reject) => {
    database.run(
      `CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        genre TEXT NOT NULL,
        platform TEXT NOT NULL
      )`,
      (error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      },
    );
  });
}

function getGames() {
  return ensureGamesTable().then(() => new Promise((resolve, reject) => {
    database.all("SELECT * FROM games", (error, games) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(games);
    });
  }));
}

function getGameById(id) {
  return ensureGamesTable().then(() => new Promise((resolve, reject) => {
    database.get("SELECT * FROM games WHERE id = ?", [id], (error, game) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(game || null);
    });
  }));
}

function getGamesByGenre(genre) {
  return ensureGamesTable().then(() => new Promise((resolve, reject) => {
    database.all("SELECT * FROM games WHERE genre = ?", [genre], (error, games) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(games);
    });
  }));
}

function addGame(newGame) {
  const { name, genre, platform } = newGame;

  return ensureGamesTable().then(() => new Promise((resolve, reject) => {
    database.run(
      "INSERT INTO games (name, genre, platform) VALUES (?, ?, ?)",
      [name, genre, platform],
      function (error) {
      if (error) {
          reject(error);
          return;
        }

        resolve({ id: this.lastID, name, genre, platform });
      }
    );
  }));
}

function deleteGame(gameid) {
  return ensureGamesTable().then(() => new Promise((resolve, reject) => {
    database.run("DELETE FROM games WHERE id = ?", [gameid], function (error) {
      if (error) {
        reject(error);
        return;
      }

      resolve(this.changes > 0);
    });
  }));
}

module.exports = {
  getGames,
  getGameById,
  getGamesByGenre,
  addGame,
  deleteGame,
};
