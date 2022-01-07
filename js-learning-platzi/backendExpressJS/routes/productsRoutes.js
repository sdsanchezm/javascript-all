
const express = require('express');
//const faker = require('faker');
const ProductsService = require('../services/productService');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
})

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => { // patch recibe los objetos de forma parcial
    const { id } = req.params; //
    const body = req.body;
    const productUpdated = service.update(id, body);
    res.json(productUpdated);
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
    const productDeleted = service.delete(id);
    res.json(productDeleted);
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
