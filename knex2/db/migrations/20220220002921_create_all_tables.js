
exports.up = function(knex) {
  return knex.schema
    .createTable('customers', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('email', 255).notNullable();
       table.date('bday_day').notNullable();
       table.time('bday_time').notNullable();
       table.timestamps();
    })
    .createTable('products', function (table) {
       table.increments('id');
       table.decimal('price').notNullable();
       table.string('product_name', 100).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("products")
      .dropTable("customers");
};

exports.config = { transaction: false };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//
// };
//
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//
// };
