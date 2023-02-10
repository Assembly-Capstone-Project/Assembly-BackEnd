const express = require("express");
const router = express.Router();
const { getSingleUser , getUsers} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getSingleUser);


module.exports = router;

/* 
possible routes:
Get: /users/:id
Post: /users/:id
*/
