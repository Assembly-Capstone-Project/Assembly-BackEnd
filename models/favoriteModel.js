const pool = require("../db");

class FavoritesModel{
    // Gets all the favorites from the database
  static async getFavoritesFromDB() {
    const database = "SELECT * FROM favorites";
    const query = await pool.query(database);
    return query.rows;
  }

    // Gets a single favorited game from the database
  static async getSingleFavoriteFromDB(id) {
    const query = await pool.query(
      "SELECT * FROM favorites WHERE id = $1",
      [id]
    );
    return query.rows[0];
  }
    // Deletes a favored game
  static async deleteFavoriteFromDB(id) {
    const query = await pool.query("DELETE * FROM favorite WHERE id = $1", [id]);
    return query.rows[0];
  }
}

module.exports = FavoritesModel;
