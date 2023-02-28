const { Pool } = require('pg')

const connectionString = "postgresql://postgres:zwZQJ7z1Z7BpZGJuWUNq@containers-us-west-125.railway.app:6560/railway"
const connectionLocal = {
  user: 'postgres',
  host: 'localhost',
  database: 'assembly-backend',
  password: ''
}

// this line of code is for heroku or netify to run the backend from a third party host
const connectionProduction = {
  connectionString: connectionString, 
  ssl: {rejectUnauthorized: false}
}


const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction  : connectionLocal)

module.exports = pool
// pool is an object given to us by the pg library,
// that allows us to run query command and returns a promise to give us that data.

// const { Pool } = require('pg')

// const connectionString = 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'

// const developmentPool = new Pool(
//   {
//     database: 'todo4',
//     user:     'postgres',
//     password: ''
//   })
 
 
//  const productionPool = new Pool({
//   connectionString
//  })
 

// const pool = (process.env.NODE_ENV === "production" ? productionPool: developmentPool)
 
// module.exports = pool