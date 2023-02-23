exports.up = function (knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        // table.timestamp("post_date").notNullable().defaultTo(knex.fn.now());
        table.integer('users_id').notNullable();
        table.foreign('users_id').references('id').inTable('users');
        table.integer('games_id').notNullable();
        table.foreign('games_id').references('id').inTable('games');
        // table.string('post_description').notNullable;
    })
};

exports.down =  function (knex) {
    return knex.schema.dropTable('posts');
};

// exports.up = function(knex) {
//     return knex.schema.createTable('posts', table => {
//         table.increments('id').primary();
//         table.timestamp("post_date").notNullable().defaultTo(knex.fn.now());
//         table.integer('users_id').notNullable();
//         table.foreign('users_id').references('id').inTable('users');
//         table.integer('games_id').notNullable();
//         table.foreign('games_id').references('id').inTable('games');
//     })
// };

// exports.down = function(knex) {
//     return knex.schema.dropTable('friends');
// };
