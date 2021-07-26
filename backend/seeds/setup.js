exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('').del()
    .then(() => knex('table_one').insert([
      { id: 1, planet: '', vehicle: '', image_url: '' },]));
}; 
