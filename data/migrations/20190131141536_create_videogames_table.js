exports.up = function(knex, Promise) {
  return knex.schema.createTable('videogames', function(tbl) {
    // Primary Key 'id'
    tbl.increments();

    // Other Columns
    tbl
      .string('name', 255)
      .notNullable()
      .unique();
    tbl.text('platform').notNullable();
    tbl
      .boolean('completed')
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropUnique('name').dropTableIfExists('videogames');
};
