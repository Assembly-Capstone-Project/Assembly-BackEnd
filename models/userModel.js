const pool = require("../db")

class UserModel {

    static async getAllUsersFromDB (){
        const query = await pool.query("SELECT * FROM users;")
        return query.rows
    }

    static async getSingleUserFromDB(userId){
        const query = await pool.query("SELECT * FROM users WHERE id = $1;", [userId]);
        return query.rows[0]
    }

}

module.exports = UserModel