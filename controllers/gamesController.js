// Any log that handles the request and response should goto the Controller

const GamesModels = require("../models/gamesModel");

async function getAllGames(req, res){
  // receive a list of games - this router is the function that handles the request and gives the response
  // create a variable that holds all the games
  const allGames = await GamesModels.getGamesFromDB();
  res.send(allGames);
};

async function getSingleGame(req, res){
  // create a variable that holds all the games
  const gameId = req.params.id;
  const game = await GamesModels.getSingleGameFromDB(gameId);
  // const userGames = await UserModels.getUserFriendsFromDB();
  res.send(game);
};

// getGame()

// createGame()

// deleteGame()

// updateGame()

// in this object we can list out all functions
module.exports = {
  getAllGames,
  getSingleGame
};
