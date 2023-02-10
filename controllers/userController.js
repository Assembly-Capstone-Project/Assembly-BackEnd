const UserModels = require("../models/userModel");

async function getSingleUser (req, res){
  // create a variable that holds all the games
  const userId = req.params.id;
  const user = await UserModels.getSingleUseFromDB(userId);
  const userFriends = await UserModels.getUserFriendsFromDB();
  res.send(user);
};

async function getUsers(req, res){
    // create a variable that holds all the games
    const Users = await UserModels.getAllUsersFromDB();
    res.send(Users);
  };
  

module.exports = {
  getSingleUser,
  getUsers
};
