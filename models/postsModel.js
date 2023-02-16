const pool = require("../db");

class PostsModel {
  static async getPostsFromDB() {
    const database = "SELECT * FROM posts";
    const query = await pool.query(database);
    return query.rows;
  }

  // get a single game.
  static async getSinglePostFromDB(id) {
    const query = await pool.query("SELECT * FROM posts WHERE post_id = $1", [
      id,
    ]);
    return query.rows[0];
  }

  static async deleteFriendFromDB(id) {
    const query = await pool.query("DELETE * FROM posts WHERE post_id = $1", [
      id,
    ]);
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
