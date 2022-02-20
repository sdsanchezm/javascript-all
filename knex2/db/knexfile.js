const path = require('path');

module.exports = {
  development: {  client: 'sqlite3', // or 'better-sqlite3'
    // connection: { filename: './db/mydb.sqlite3' },
    connection: { filename: path.join(__dirname, 'mydb.sqlite3')},
    migrations: { directory: "./migrations", },
    seeds: { directory: "./seeds", },
    useNullAsDefault: true,
  }
}

//
// // Update with your config settings.
//
// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {
//
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './cars.sqlite3'
//     }
//   },
//
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
//
// };
