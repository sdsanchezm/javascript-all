exports.seed = async function(knex) {
      // Deletes ALL existing entries
      await knex('customers').del()
      // Inserts seed entries
      await knex('customers').insert([
        {id: 1, name: 'Kraus', email: 'kraus@test0.ve', bday_day: '2001-11-29', bday_time: '21:22:23'},
        {id: 2, name: 'Owen', email: 'owen@test0.ve', bday_day: '2002-12-29', bday_time: '10:22:23'},
        {id: 3, name: 'Merk', email: 'merk@test0.ve', bday_day: '2003-01-29', bday_time: '12:22:23'},
      ]);

      // Deletes ALL existing entries
      await knex('products').del()
      // Inserts seed entries
      await knex('products').insert([
        {id: 1, product_name: 'cookies', price: 5.1},
        {id: 2, product_name: 'pineapple', price: 10.2},
        {id: 3, product_name: 'garlic bread', price: 15.3},
      ]);

    };

//
//
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };
