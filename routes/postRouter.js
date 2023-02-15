const express = require('express')
const router = express.Router()
const {getAllPost, getSinglePost} = require("../controllers/postController")
const authenticate = require('../middleware/authenticate')

router.get("/", authenticate, getAllPost)
router.get("/:id", authenticate, getSinglePost)

module.exports = router

/*
R: 
Step 1: require express
Step 2: express.Router()
Step 3: destructure functions 
Step 3: router.get("/" route , "ControllerFunctionName")
Step 4: module.exports = router

C:

M:
*/