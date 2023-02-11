const express = require("express");
const router = express.Router();
const {
  getSingleUser,
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.post("/register", registerUser);
router.post("/log", loginUser);
// router.post("/register", register);

module.exports = router;

/* 
possible routes:
Get: /users/:id
Post: /users/:id
*/
