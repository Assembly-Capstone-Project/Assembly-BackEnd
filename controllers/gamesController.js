
const GamesModels = require("../models/gamesModel");

async function getAllGames(req, res){
  const allGames = await GamesModels.getGamesFromDB();
  res.send(allGames);
};

async function getSingleGame(req, res){
  const gameId = req.params.id;
  const game = await GamesModels.getSingleGameFromDB(gameId);
  res.send(game);
};

module.exports = {
  getAllGames,
  getSingleGame
};
