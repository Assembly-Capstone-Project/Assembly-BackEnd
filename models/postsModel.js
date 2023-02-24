const { urlencoded } = require("express");
const pool = require("../db");

class PostsModel {
  static async getPostsFromDB() {
    const database =
      "SELECT posts.id, users_id, games_id, name, platform, rating, url, username FROM posts JOIN games ON posts.games_id = games.id JOIN users ON posts.users_id = users.id ORDER BY posts DESC";
    const query = await pool.query(database);
    return query.rows;
  }

  static async getSinglePostFromDB(id) {
    const query = await pool.query(
      "SELECT posts.id, users_id, games_id FROM posts JOIN users ON posts.users_id = users.id WHERE posts.id = $1",
      [id]
    );
    return query.rows[0];
  }
  // Post a post to from the database
  static async createPostsToDB(users_id, games_id) {
    let query = await pool.query(
      "INSERT INTO posts (users_id , games_id ) VALUES ($1, $2) RETURNING *;",
      [users_id, games_id]
    );
    return query.rows[0];
  }

  static async deletePostFromDB(id) {
    const query = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    return query.rows[0];
  }
}

module.exports = PostsModel;

/*
R: 
Step 1: require express
Step 2: express.Router()
Step 3: destructure functions 
Step 3: router.get("/" route , "ControllerFunctionName")
Step 4: module.exports = router

C:

M: 
Step 1: is to require pool and connect to the db
Step 2: Create a class to hold all
of your functions that execute your queries
Step 3: modeule.export your class.
*/
