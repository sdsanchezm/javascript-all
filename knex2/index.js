const express = require('express');

const port = 3000;
const app = express();

const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);

app.use(express.json()); // this config is required in order to get json from post method

app.get('/', (req, res) => {
  res.json({ message: 'alles gutte hier'})
});

app.get('/customers', (req, res) => {
  knex('customers')
  .select()
  .then( (customers) => {
    console.log('im here');
    return res.json(customers);
  })
  .catch( (err) => {
    console.log( err );
    return res.json({ success: false, message: "it was an error, please try again later." });
  })
});

app.post('/customers', (req, res) => {
  const name = req.body.name ? req.body.name : '';
  const email = req.body.email ? req.body.email : '';
  const bday_day = req.body.bday_day ? req.body.bday_day : '';
  const bday_time = req.body.bday_time ? req.body.bday_time : '';

// console.log(req.body);

  // const name = req.body.name;
  // const email = req.body.email;
  // const bday_day = req.body.bday_day;
  // const bday_time = req.body.bday_time;

  // const name = "zerk";
  // const email = "zerk@zerk.de";
  // const bday_day = '2001-01-01';
  // const bday_time = '11:11:11';

  knex('customers')
  .insert({name, email, bday_day, bday_time})
  .then( (customers) => {
    return res.json({ message: "customer added!" });
  })
  .catch( (err) => {
    console.log(err);
    return res.json({ success: false, message: 'Product not added, something went wrong, try again later.' })
  });

  // return res.json({ success: false, message: "asdasd"});
});



app.listen(port, () => {
  console.log(`server running at port ${port}`);
})
