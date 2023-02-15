const express = require('express')
const router = express.Router()
const {getAllFriends , getSingleFriend} = require("../controllers/friendsController")
const authenticate = require("../middleware/authenticate")

router.get("/", authenticate, getAllFriends)
router.get("/:id", authenticate, getSingleFriend)

module.exports = router
