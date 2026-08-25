const jogos = [
  {
    "id": 1,
    "name": "FIFA 2022",
    "genre": "Esporte",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 2,
    "name": "The Witcher 3: Wild Hunt",
    "genre": "RPG",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 3,
    "name": "Red Dead Redemption 2",
    "genre": "Ação / Aventura",
    "platform": "PC, PS4, Xbox One"
  },
  {
    "id": 4,
    "name": "Grand Theft Auto V",
    "genre": "Ação / Mundo Aberto",
    "platform": "PC, PS3, PS4, PS5, Xbox 360, Xbox One, Xbox Series X/S"
  },
  {
    "id": 5,
    "name": "Elden Ring",
    "genre": "RPG / Soulslike",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 6,
    "name": "God of War Ragnarök",
    "genre": "Ação / Aventura",
    "platform": "PC, PS4, PS5"
  },
  {
    "id": 7,
    "name": "Minecraft",
    "genre": "Sobrevivência / Sandbox",
    "platform": "PC, PS4, Xbox One, Nintendo Switch, iOS, Android"
  },
  {
    "id": 8,
    "name": "The Legend of Zelda: Tears of the Kingdom",
    "genre": "Ação / Aventura",
    "platform": "Nintendo Switch"
  },
  {
    "id": 9,
    "name": "Cyberpunk 2077",
    "genre": "RPG / Ação",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 10,
    "name": "Counter-Strike 2",
    "genre": "FPS",
    "platform": "PC"
  },
  {
    "id": 11,
    "name": "Valorant",
    "genre": "FPS Tactical",
    "platform": "PC, PS5, Xbox Series X/S"
  },
  {
    "id": 12,
    "name": "League of Legends",
    "genre": "MOBA",
    "platform": "PC"
  },
  {
    "id": 13,
    "name": "Fortnite",
    "genre": "Battle Royale",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch, Android"
  },
  {
    "id": 14,
    "name": "Call of Duty: Warzone",
    "genre": "Battle Royale / FPS",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 15,
    "name": "Overwatch 2",
    "genre": "Hero Shooter",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 16,
    "name": "Apex Legends",
    "genre": "Battle Royale",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 17,
    "name": "Horizon Forbidden West",
    "genre": "Ação / RPG",
    "platform": "PC, PS4, PS5"
  },
  {
    "id": 18,
    "name": "Ghost of Tsushima",
    "genre": "Ação / Aventura",
    "platform": "PC, PS4, PS5"
  },
  {
    "id": 19,
    "name": "Spider-Man 2",
    "genre": "Ação / Aventura",
    "platform": "PS5"
  },
  {
    "id": 20,
    "name": "The Last of Us Part I",
    "genre": "Ação / Sobrevivência",
    "platform": "PC, PS5"
  },
  {
    "id": 21,
    "name": "Resident Evil 4 Remake",
    "genre": "Survival Horror",
    "platform": "PC, PS4, PS5, Xbox Series X/S"
  },
  {
    "id": 22,
    "name": "Resident Evil Village",
    "genre": "Survival Horror",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 23,
    "name": "Dark Souls III",
    "genre": "RPG / Soulslike",
    "platform": "PC, PS4, Xbox One"
  },
  {
    "id": 24,
    "name": "Bloodborne",
    "genre": "RPG / Soulslike",
    "platform": "PS4"
  },
  {
    "id": 25,
    "name": "Sekiro: Shadows Die Twice",
    "genre": "Ação / Soulslike",
    "platform": "PC, PS4, Xbox One"
  },
  {
    "id": 26,
    "name": "Hollow Knight",
    "genre": "Metroidvania",
    "platform": "PC, PS4, Xbox One, Nintendo Switch"
  },
  {
    "id": 27,
    "name": "Dead Cells",
    "genre": "Roguelike / Metroidvania",
    "platform": "PC, PS4, Xbox One, Nintendo Switch, iOS, Android"
  },
  {
    "id": 28,
    "name": "Hades",
    "genre": "Roguelike",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch, iOS"
  },
  {
    "id": 29,
    "name": "Stardew Valley",
    "genre": "Simulação / RPG",
    "platform": "PC, PS4, Xbox One, Nintendo Switch, iOS, Android"
  },
  {
    "id": 30,
    "name": "Terraria",
    "genre": "Sandbox / Sobrevivência",
    "platform": "PC, PS4, Xbox One, Nintendo Switch, iOS, Android"
  },
  {
    "id": 31,
    "name": "Forza Horizon 5",
    "genre": "Corrida",
    "platform": "PC, Xbox One, Xbox Series X/S"
  },
  {
    "id": 32,
    "name": "Gran Turismo 7",
    "genre": "Corrida / Simulação",
    "platform": "PS4, PS5"
  },
  {
    "id": 33,
    "name": "NBA 2K24",
    "genre": "Esporte",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 34,
    "name": "Rocket League",
    "genre": "Esporte / Ação",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 35,
    "name": "Super Mario Odyssey",
    "genre": "Plataforma 3D",
    "platform": "Nintendo Switch"
  },
  {
    "id": 36,
    "name": "Super Smash Bros. Ultimate",
    "genre": "Luta",
    "platform": "Nintendo Switch"
  },
  {
    "id": 37,
    "name": "Street Fighter 6",
    "genre": "Luta",
    "platform": "PC, PS4, PS5, Xbox Series X/S"
  },
  {
    "id": 38,
    "name": "Tekken 8",
    "genre": "Luta",
    "platform": "PC, PS5, Xbox Series X/S"
  },
  {
    "id": 39,
    "name": "Mortal Kombat 1",
    "genre": "Luta",
    "platform": "PC, PS5, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 40,
    "name": "Baldur's Gate 3",
    "genre": "RPG",
    "platform": "PC, PS5, Xbox Series X/S"
  },
  {
    "id": 41,
    "name": "Monster Hunter: World",
    "genre": "Ação / RPG",
    "platform": "PC, PS4, Xbox One"
  },
  {
    "id": 42,
    "name": "Devil May Cry 5",
    "genre": "Hack and Slash",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 43,
    "name": "Persona 5 Royal",
    "genre": "JRPG",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 44,
    "name": "Final Fantasy XVI",
    "genre": "Ação / RPG",
    "platform": "PC, PS5"
  },
  {
    "id": 45,
    "name": "Doom Eternal",
    "genre": "FPS",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 46,
    "name": "Halo Infinite",
    "genre": "FPS",
    "platform": "PC, Xbox One, Xbox Series X/S"
  },
  {
    "id": 47,
    "name": "Sea of Thieves",
    "genre": "Ação / Aventura",
    "platform": "PC, PS5, Xbox One, Xbox Series X/S"
  },
  {
    "id": 48,
    "name": "It Takes Two",
    "genre": "Coop / Plataforma",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
  },
  {
    "id": 49,
    "name": "Among Us",
    "genre": "Casual / Party",
    "platform": "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch, iOS, Android"
  },
  {
    "id": 50,
    "name": "Genshin Impact",
    "genre": "RPG / Ação",
    "platform": "PC, PS4, PS5, iOS, Android"
  },
  {
    "id": 51,
    "name": "Honkai: Star Rail",
    "genre": "RPG em Turnos",
    "platform": "PC, PS5, iOS, Android"
  }
]

module.exports = jogos;