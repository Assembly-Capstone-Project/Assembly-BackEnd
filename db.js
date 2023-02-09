const { Pool } = require('pg')

const connectionLocal = {
  user: 'postgres',
  host: 'localhost',
  database: 'assembly-backend',
  password: '',
  port: 5432,
}

// this line of code is for heroku or netify to run the backend from a third party host
const connectionProduction = {
  connectionString: process.env.DATABASE_URL, 
  ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal)

module.exports = pool
// pool is an object given to us by the pg library,
// that allows us to run query command and returns a promise to give us that data.