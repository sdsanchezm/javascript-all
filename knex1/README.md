== Install knex

```
npm init
```

=== Basic knex structure:

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