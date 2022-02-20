# working with knex 

## Install knex and all modules required

- Initialize node
```
npm init -y
```

- Install:
```
npm i nodemon
npm i express
npm i sqlite3
npm i knex
npm i @vscode/sqlite3
```

- init knex inside of the Database folder:
```
mkdir db
cd db
knex init
```

- open the `knexfile.js`
- customize it accordingly, sqlite config in this case: 

```
module.exports = {
  development: {  client: 'sqlite3', // or 'better-sqlite3'
    connection: { filename: "./mydb.sqlite3", },
    migrations: { directory: "./migrations", },
    seeds: { directory: "./seeds", },
    useNullAsDefault: true,
  }
}
```
- Documentation at [https://knexjs.org/#Installation-browser](https://knexjs.org/#Installation-browser)

## Create the migration: 
- inside of the db folder:
```
knex migrate:make create_users_table
```

- the above command creates a folder name migrations and also a file with the `up` and `down` functions on it: 
- Note, really cool documentation: [https://www.codegrepper.com/code-examples/whatever/knexjs+table.date](https://www.codegrepper.com/code-examples/whatever/knexjs+table.date)
- Included the following structure, into the migrations file (inside of the migrations folder):
```
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
       table.string('name', 100).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("products")
      .dropTable("customers");
};

exports.config = { transaction: false };
```

- Include the script inside of the package.json file:
```
"migrate": "knex migrate:latest --knexfile db/knexfile.js"
```

- Run:
```
npm run migrate
```

### Basic knex structure:

```
    knex('table')
    .select()
    .then()
    .catch()
```

- in `index.js` initialize knex:
```
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])
```

- create the migration
```
knex migrate:make create_users_table
```

- Add the migrate script to package.json
```
"migrate": "knex migrate:latest --knexfile db/knexfile.js"
```

- then just run the run ccommand:
```
npm run migrate
```

- create a seed;
```
knex seed:make users --knexfile db/knexfile.js
```

- 