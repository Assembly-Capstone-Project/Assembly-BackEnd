exports.up = function(knex) {
    return knex.schema.createTable('favorites', (table) => {
        table.increments('favorites_id').primary();
        table.integer('users_id').notNullable();
        table.integer('games_id').notNullable();
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites');
};
