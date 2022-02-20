# working with knex 

## Install knex and all modules required

- Initialize node
```
npm init -y
```

- Install packages:
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
    connection: { filename: "./db/mydb.sqlite3", },
    migrations: { directory: "./migrations", },
    seeds: { directory: "./seeds", },
    useNullAsDefault: true,
  }
}
```
- Documentation at [https://knexjs.org/#Installation-browser](https://knexjs.org/#Installation-browser)

## Create the migration: 
- Official documentation at [https://knexjs.org/#Installation-migrations](https://knexjs.org/#Installation-migrations)
- Inside of the db folder, run:
```
knex migrate:make create_users_table
```

- The above command creates a folder name migrations and also a file with the `up` and `down` functions on it: 
- Note, really cool documentation at: [https://www.codegrepper.com/code-examples/whatever/knexjs+table.date](https://www.codegrepper.com/code-examples/whatever/knexjs+table.date)
- Include the following structure, into the migrations file (inside of the migrations folder):
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

- This will create the `mydb.sqlite3` file and also the schema.


## Create the seed
- Documentation about this part, is here [https://knexjs.org/#Seeds-CLI](https://knexjs.org/#Seeds-CLI)
- To create a seed file, run: 
```
knex seed:make customers --knexfile db/knexfile.js
```

- The above command, will create the folder `seed`, and also the file `customers.js`

- the folllowing code inside:

- Include the following script:
```
"seed": "knex seed:run --knexfile db/knexfile.js"
```

- Run the script:
```
npm run seed
```

- To explore the sqlite3 database, we can use the terminal tool:
```
sqlite3 mydb.sqlite3
// running the .schema or 
select * from customers;
```

## Creating the endpoing using express:
- Create the endpoint, using express, and method get:
```
const express = require('express');

const port = 3000;
const app = express();

const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);

app.get('/', (req, res) => {
  res.json({ message: 'alles gutte hier'})
});

app.get('/all', (req, res) => {
  knex('customers')
  .select('*')
  .then( (customers) => {
    res.json(customers);
  })
  .catch( (err) => {
    console.log( err );
    return res.json({ success: false, message: "it was an error, please try again later." });
  })
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
})
```

- Add the script into `package.json`:
```
"start": "NODE_ENV=development nodemon index.js"
```

- To run:
```
npm start
```


### Basic knex structure:

```
    knex('table')
    .select()
    .then()
    .catch()
```

