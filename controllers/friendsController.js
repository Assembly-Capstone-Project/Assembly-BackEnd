const FriendsModels = require("../models/friendsModel");

async function getAllFriends(req, res){
  // receive a list of games - this router is the function that handles the request and gives the response
  // create a variable that holds all the games
  const allFriends = await FriendsModels.getFriendsFromDB();
  res.send(allFriends);
};

async function getSingleFriend(req, res){
  const friendId = req.params.id;
  const friend = await FriendsModels.getSingleFriendFromDB(friendId);
  res.send(friend);
};

// getGame()

// createGame()

// deleteGame()

// updateGame()

// in this object we can list out all functions
module.exports = {
  getAllFriends,
  getSingleFriend
};

// const userGames = await UserModels.getUserFriendsFromDB();