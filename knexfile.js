// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '',
        database: 'assembly-backend',
    }
  },
  production: {
    client: 'pg',
    connection: "postgresql://postgres:m2awBeVZZ4sbcIOlF1Pq@containers-us-west-178.railway.app:7639/railway",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
