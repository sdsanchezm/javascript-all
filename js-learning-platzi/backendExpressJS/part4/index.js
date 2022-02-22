const express = require('express');
const routerApi = require('./routes');
// const faker = require('faker');
const app = express();
const port = 3000;

app.use(express.json()); // aca se habilita un middleware 

app.get('/', (req, res) => {
    res.send('hi, this is root');
})

app.get('/new-route', (req, res) => {
    res.send('hi, this is a new route');
})

app.get('/categories/:categoriesId/products/:productsId', (req, res) => { // multiple parameters structure
    const { categoriesId, productsId } = req.params;
    res.json({
        categoriesId,
        productsId
    });
} )

app.get('/prices', (req, res) => {
    res.send('hi, this is /prices');
})

app.get('/id', (req, res) => {
    res.send('hi, this is /id');
})

app.listen(port, () => {
    console.log('running ok at port: ' + port);
})

routerApi(app);

