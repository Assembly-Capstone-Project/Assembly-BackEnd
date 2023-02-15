// All games routes go here
// this route handles all request that starts with "/games"
const express = require('express')
const router = express.Router()
const {getAllGames , getSingleGame} = require('../controllers/gamesController')
const authenticate = require("../middleware/authenticate")

//Endpoint: /Games
router.get("/", authenticate, getAllGames)
router.get("/:id", authenticate, getSingleGame);

  
/* 
Opportunies:
Get: /games/:id
Post: /games/:id
*/

// router.get("/", getAllGames)

module.exports = router

