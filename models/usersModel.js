const pool = require("../db");

class UserModel {
  static async getAllUsersFromDB() {
    const query = await pool.query("SELECT * FROM users;");
    return query.rows;
  }

  static async getSingleUserFromDB(userId) {
    const query = await pool.query(
      "SELECT id, username, email FROM users WHERE id = $1;",
      [userId]
    );
    return query.rows[0];
  }

  static async postUserToDB(username, email, password) {
    let query = await pool.query(
      "INSERT INTO users (username, email, password)VALUES ($1, $2, $3) RETURNING id, username, email;",
      [username, email, password]
    );
    return query.rows[0];
  }

  static async getUserByUsername(username) {
    console.log(username)
    let query = await pool.query("SELECT * FROM users WHERE username = $1;", [
      username
    ]);
    console.log(query)
    return query.rows[0];
  }
}

module.exports = UserModel;
