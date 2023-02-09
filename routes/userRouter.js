const express = require('express')
const router = express.Router()

router.get("/", (req, res) => { // receive a list of games
    res.send("here are the users")
  })

module.exports = router

/* 
possible routes:
Get: /users/:id
Post: /users/:id
*/