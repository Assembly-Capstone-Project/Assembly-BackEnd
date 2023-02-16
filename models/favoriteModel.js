const pool = require("../db");

class FriendsModel {
    // Gets all the favorites from the database
  static async getFavoritesFromDB() {
    const database = "SELECT * FROM favorites";
    const query = await pool.query(database);
    return query.rows;
  }

    // Gets a single favorited game from the database
  static async getSingleGameFromDB(id) {
    const query = await pool.query(
      "SELECT id,name,platform,rating FROM games WHERE id = $1",
      [id]
    );
    return query.rows[0];
  }
    // Deletes a favorted game
  static async deleteFavoriteFromDB(id) {
    const query = await pool.query("DELETE * FROM favorite WHERE id = $1", [id]);
    return query.rows[0];
  }
}

module.exports = GamesModel;
