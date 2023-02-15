const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate")

const {getSingleUser, getUsers, registerUser, loginUser} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", authenticate, getSingleUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/register", register);

module.exports = router;

/* 
possible routes:
Get: /users/:id
Post: /users/:id
*/
