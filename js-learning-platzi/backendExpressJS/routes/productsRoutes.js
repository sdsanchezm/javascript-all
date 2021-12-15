const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
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
