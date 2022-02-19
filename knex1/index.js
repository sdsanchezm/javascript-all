const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const users_services = require('./services/users_services');

app.use(bodyParser.json());

const knexConfig = require('./db/knexfile');
const req = require('express/lib/request');
const res = require('express/lib/response');
// const res = require('express/lib/response');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

app.get('/', (req, res) => {
    res.send('ok!');
});

app.get('/all', (req, res) => {
    knex('users')
    .select('*')
    .then( (users) => {
        return res.json(users);
    })
    .catch( (err) => {
        console.log(err);
        return res.json( {success: false, message: 'Error occurred, try again later.'} );
    } )
});

app.post('/all', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    knex('users')
    .insert({ name, email })
    .then( (id)=> {
        return res.json({id});
    })

});

app.get('/user', (req, res) => {
    knex('users')
  .select({
    id: 'id',
    name: 'name',
    email: 'email'
  })
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, try again later.'});
  })
});

app.post('/user', (req, res) => {
    const name = req.body.name ? req.body.name : '';
    const email = req.body.email ? req.body.email : '';

    if (!name) {
        return res.json({success: false, message: 'Name is required! '});
    }

    knex('users')
        .insert({name, email})
        .then((id) => {
        //get user by id
        knex('users')
            .select({
            id: 'id',
            name: 'name',
            email: 'email'
        })
            .where({id})
            .then((user) => {
            return res.json(user[0]);
        })
    })
        .catch((err) => {
            console.error(err);
            return res.json({success: false, message: 'An error occurred, try again later.'});
        });
});

app.put('/all', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    knex('users')
    .where('id', id)
    .update({email: email, name: name})
    .then( () => {
        knex
        .select()
        .from('users')
        .then( (users) => {
            res.json(users)
        });
    });
});

app.delete('/all', (req, res) => {
    const id = req.body.id;

    if (!id) {
        return res.json({success: false, message: 'id is required to delete, no record was removed.'});
    }

    knex('users')
    .where('id', id)
    .del()
    .then( () => {
        return res.json( {success: true, message: 'Record was deleted.'}  );
    });

});



app.listen(port, () => {
    console.log(`app running in port ${port}`);
});