const express = require('express')
const router = express.Router()
const {getAllFriends , getSingleFriend} = require("../controllers/friendsController")

router.get("/", getAllFriends)
router.get("/:id", getSingleFriend)

module.exports = router
