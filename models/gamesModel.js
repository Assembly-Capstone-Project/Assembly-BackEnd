const pool = require("../db");

class GamesModel {
  static async getGamesFromDB() {
    const database = "SELECT * FROM games";
    const query = await pool.query(database);
    return query.rows;
  }

  // get a single game.
  static async getSingleGameFromDB(id) {
    const query = await pool.query(
      "SELECT id,name,platform,rating FROM games WHERE id = $1",
      [id]
    );
    return query.rows[0];
  }

  static async deleteGamesFromDB(id) {
    const query = await pool.query("DELETE * FROM games WHERE id = $1", [id]);
    return query.rows[0];
  }
}

module.exports = GamesModel;
