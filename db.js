const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'

 const pool = new Pool({
  connectionString
 })
 
module.exports = pool


// const { Pool } = require('pg')

// const connectionString = 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'

// // const connectionLocal = {
//   //   user: 'postgres',
//   //   host: 'localhost',
//   //   database: 'assembly-backend',
//   //   password: '',
//   //   port: 5432,
//   // }
  
//   const pool = new Pool({
//     connectionString
//   })
  
//   // const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal)

// // this line of code is for heroku or netify to run the backend from a third party host
// // const connectionProduction = {
// //   connectionString: process.env.DATABASE_URL, 
// //   ssl: {rejectUnauthorized: false}
// // }


// // module.exports = pool
// // pool is an object given to us by the pg library,
// // that allows us to run query command and returns a promise to give us that data.


// // const { Pool } = require('pg')


 
// module.exports = pool