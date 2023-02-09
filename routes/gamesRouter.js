// All games routes go here
const express = require('express')
const router = express.Router()

//Endpoint: /Games
router.get("/", (req, res) => { // receive a list of games - this router is the function that handles the request and gives the response
    res.send("here are the games")
  })

  
/* 
Opportunies:
Get: /games/:id
Post: /games/:id
*/

// router.get("/", getAllGames)

module.exports = router

