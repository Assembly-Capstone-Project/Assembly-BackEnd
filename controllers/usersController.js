const UserModels = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
/**
 * Registers user's credentials, adding them to the database using the User model
 * @param {object} req - The request object containing users credentials
 * @param {object} res - The response object used to send a repsonse back to the client
 */
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // if (validateInputs(username, email, password) === false)
    // throw Error("Invalid Credentials.");
    const saltRounds = 7;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await UserModels.postUserToDB(username, email, hashedPassword);
    const token = jwt.sign({ username: username }, process.env.AUTH_KEY);
    res.cookie("token", token).sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

/**
 * Gives the user a token after verifying user's entered credentials
 * @param {object} req - The request object containing users credentials
 * @param {object} res - The response object used to send a repsonse back to the client
 */
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModels.getUserByUsername(username);

    if (!user) {
      return res.status(401).send("User Does Not Exist.");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      const token = jwt.sign({ username: user.username }, process.env.AUTH_KEY);
      res.cookie("safeToken", token).status(200).send(JSON.stringify(user));
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

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

module.exports = {
  getSingleUser,
  getUsers,
  registerUser,
  loginUser,
};
