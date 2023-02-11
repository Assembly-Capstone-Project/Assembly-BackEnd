const UserModels = require("../models/userModel");
const bcrypt = require("bcrypt");

async function getSingleUser(req, res) {
  const userId = req.params.id;
  const user = await UserModels.getSingleUserFromDB(userId);
  // const userFriends = await UserModels.getUserFriendsFromDB();
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
}

async function getUsers(req, res) {
  const Users = await UserModels.getAllUsersFromDB();
  res.send(Users);
}

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;
    let hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await UserModels.postUserToDB(
      username,
      email,
      hashedPassword
    );
    res.send(newUser);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function loginUser(req, res) {
  try {
    let { username, password } = req.body;
    console.log(username);
    const foundUser = await UserModels.getUserByUsername(username);
    if(foundUser && bcrypt.compareSync(password, foundUser.password)){
    console.log(foundUser)
    res.send(foundUser);
    }
  } catch (e) {
    res.status(401).send("invalid username or password");
  }
}

module.exports = {
  getSingleUser,
  getUsers,
  registerUser,
  loginUser,
};

/*
Example piece
// async function getSingleUser (req, res) {
//   const userId = req.params.id
//   const user = await UserModel.getSingleUserFromDB(userId) //async
//   if(user){
//     const usersRobots = await UserModel.getUsersRobotsFromDB(userId)
//     res.send({user, usersRobots})
//   }else{
//     res.sendStatus(404)
//   }
// }
*/
