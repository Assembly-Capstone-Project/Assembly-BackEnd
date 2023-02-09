exports.up = function (knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('post_id').primary();
        table.string('post_image').notNullable();
        table.timestamp("post_date").notNullable().defaultTo(knex.fn.now());
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        // table.string('post_description').notNullable;
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts');
};