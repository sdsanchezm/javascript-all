const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query; // http://localhost:3000/products?size=2 the size is specified like this
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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if( id === '222' ){
        res.status(404).json({
            message: 'Not Found'
        })
    } else{
        res.status(200).json({
            id,
            name: 'great product',
            price: 1000
        })
    }
})

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
})

router.patch('/:id', (req, res) => { // patch recibe los objetos de forma parcial
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Product Updated',
        data: body,
        id,
    })
})

router.put('/:id', (req, res) => { // put no recibe parcial, receives the complete object
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Product Updated',
        data: body,
        id,
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Product Deleted',
        id,
    })
})

router.get('/filter', (req, res) => {
    res.send('all good here');
})

router.get('/:id', (req, res) => {
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

router.get('/products2', (req, res) => {
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

// ----------------------------- Commented Code Example

// router.get('/', (req, res) => { //lo que generalmente esperamos aca, es una lista de productos, no un solo json
//     // res.json({
//     //     "name": "sperProduct1",
//     //     "price": 500
//     // });
//     res.json([
//         {
//         "name": "product1",
//         "price": 200
//         },
//         {
//             "name": "product2",
//             "price": 300
//         }
// ])
// })

// ------------------- EXPORTS

module.exports = router;
