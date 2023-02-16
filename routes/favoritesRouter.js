const express = require('express')
const router = express.Router()
const {getAllFavorites , getSingleFavorite} = require("../controllers/favoritesController")
const authenticate = require("../middleware/authenticate")

router.get("/", getAllFavorites)
router.get("/:id", getSingleFavorite)

module.exports = router
