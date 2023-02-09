exports.up = function(knex) {
    return knex.schema.createTable('friends', table => {
        table.increments('friends_id').primary();
        table.integer('sender_id').notNullable();
        table.integer('receiver_id').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('friends');
};
