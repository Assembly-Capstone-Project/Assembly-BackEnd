const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const gamesRouter = require("./routes/gamesRouter");
const usersRouter = require("./routes/userRouter");
const friendsRouter = require("./routes/friendsRouter");
const postRouter = require("./routes/postRouter");

// EndPoints
app.use("/games", gamesRouter);

app.use("/friends", friendsRouter);

app.use("/posts", postRouter);

app.use("/users", usersRouter);

app.listen(PORT, function () {
  console.log("Server started on port: ", PORT);
});

/*
Notes
gamesRouter -> gamesControllers -> gamesModel -> db ->                |
http/client <- gamesRouter <- gamesControllers <- gamesModel <- db  <-

// app.get("/users/:id", usersRouter);
// usersRoute -> usersControllers -> usersModel -> db
// app.get("/post/:id", (req, res) => {
//   // receive a single user
//   res.send("you are looking for a post");
// });

// app.get("/friends/:id", (req, res) => {
//   // receive a single user
//   res.send("you are looking for a friend");
// });

// app.get("/games/:id", (req, res) => {
//   // receive a single user
//   res.send("you are looking for a game");
// });
*/
