// All games routes go here
// this route handles all request that starts with "/games"
const express = require('express')
const router = express.Router()
const {getAllGames , getSingleGame} = require('../controllers/gamesController')

//Endpoint: /Games
router.get("/", getAllGames)
router.get("/:id", getSingleGame);

  
/* 
Opportunies:
Get: /games/:id
Post: /games/:id
*/

// router.get("/", getAllGames)

module.exports = router

