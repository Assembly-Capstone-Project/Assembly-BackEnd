const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const PORT = process.env.PORT || 8000;
const gamesRouter = require("./routes/gamesRouter");
const usersRouter = require("./routes/usersRouter");
const friendsRouter = require("./routes/friendsRouter");
const postsRouter = require("./routes/postsRouter");
const favoritesRouter = require("./routes/favoritesRouter")

// EndPoints
app.use(cors());
app.use("/games", gamesRouter);

app.use("/friends", friendsRouter);

app.use("/posts", postsRouter);

app.use("/users", usersRouter);

app.use("/favorites" , favoritesRouter)
app.get("/" , (res, req) => {
  res.send("This is a test")
})
app.listen(PORT, function () {
  console.log("Server started on port: ", PORT);
});

