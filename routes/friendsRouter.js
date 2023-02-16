const express = require('express')
const router = express.Router()
const {getAllFriends , getSingleFriend} = require("../controllers/friendsController")
const authenticate = require("../middleware/authenticate")

router.get("/", getAllFriends)
router.get("/:id", getSingleFriend)

module.exports = router
