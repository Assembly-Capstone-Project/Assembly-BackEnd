const pool = require("../db");

class FriendsModel {
  static async getFriendsFromDB() {
    const database = "SELECT * FROM friends";
    const query = await pool.query(database);
    return query.rows;
  }

  // get a single game.
  static async getSingleFriendFromDB(id) {
    const query = await pool.query(
      "SELECT * FROM friends WHERE friends_id = $1",
      [id]
    );
    return query.rows[0];
  }

  static async deleteFriendFromDB(id) {
    const query = await pool.query("DELETE * FROM friends WHERE id = $1", [id]);
    return query.rows[0];
  }
}

module.exports = FriendsModel
