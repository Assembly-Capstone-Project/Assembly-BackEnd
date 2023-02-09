const express = require('express')
const router = express.Router()

router.get("/", (req, res) => { // receive a list of games
    res.send("here are the friendslist")
  })

module.exports = router
