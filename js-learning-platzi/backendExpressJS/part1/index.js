const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hi, this is root');
})

app.get('/new-route', (req, res) => {
    res.send('hi, this is a new route');
})

// this part 
app.get('/products', (req, res) => { //lo que generalmente esperamos aca, es una lista de productos, no un solo json
    // res.json({
    //     "name": "sperProduct1",
    //     "price": 500
    // });
    res.json([
        {
        "name": "product1",
        "price": 200
        },
        {
            "name": "product2",
            "price": 300
        }
])
})

app.get('/products/:id', (req, res) => {
    // const id = req.params.id; 
    const { id } = req.params; // esto es desestructurando el endpoint, se usa params para los paramatros
    res.json(
        {
            id,
            name: "product1",
            price: 200
        }
    );
})

app.get('/categories/:categoriesId/products/:productsId', (req, res) => { // multiple parameters structure
    const { categoriesId, productsId } = req.params;
    res.json({
        categoriesId,
        productsId
    });
} )

app.get('/users1', (req, res) => {
    const { limit, offset } = req.query; // here can not use params, because they are not params, they are queryes
    if( limit && offset ){
        res.json(
            {
            limit,
            offset
            }
        );
    }
    else {
        res.send("No params here");
    }
} )

app.get('/products1/filter', (req, res) => {
    res.send('all good here');
})

app.get('/products1', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10; // tamano del array por defecto
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }
    res.json(products);
})

app.get('/prices', (req, res) => {
    res.send('hi, this is root');
})

app.get('/id', (req, res) => {
    res.send('hi, this is root');
})


app.listen(port, () => {
    console.log('running ok at port: ' + port);
})