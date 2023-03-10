const express = require('express')
const router = express.Router()
const {getAllPost, getSinglePost, createPost, deleteSinglePost} = require("../controllers/postsController")
const authenticate = require('../middleware/authenticate')

router.get("/", getAllPost)
router.get("/:id", getSinglePost)
router.post("/", authenticate, createPost)
router.delete("/", authenticate, deleteSinglePost)



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