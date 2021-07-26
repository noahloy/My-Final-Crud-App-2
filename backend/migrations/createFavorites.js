
exports.up = function(knex) {
  return knex.schema.createTable('favorites', table => {
  table.increments('id'); // adds an auto incrementing PK column
  table.string('planet').notNullable();
  table.string('vehicle');
  table.string('image_url', 1000)
});
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('table_one');
};
