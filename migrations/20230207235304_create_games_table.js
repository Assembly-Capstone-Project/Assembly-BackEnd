exports.up = function(knex) {
    return knex.schema.createTable('games', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('platform').notNullable();
        table.string('rating').notNullable();
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
