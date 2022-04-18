
const express = require('express');
//const faker = require('faker');
const ProductsService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema'); // cada endpoint debe definir cual es su schema

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
})

router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.findOne(id);
            res.json(product);
        } catch (error) {
            next(error);
        }
})

router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json(newProduct);
})

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => { // patch recibe los objetos de forma parcial
        try { // el try, allows me to execute code and if there is an error in my async function, show it accordingly
            const { id } = req.params; //
            const body = req.body;
            const productUpdated = await service.update(id, body);
            res.json(productUpdated);
        } catch (error) {
            next(error);
        }
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const productDeleted = await service.delete(id);
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
