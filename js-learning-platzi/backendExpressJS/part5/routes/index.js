const express = require('express');

const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const categoriesRouter = require('./categoriesRoutes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router); // this would have to be used like this: http://localhost:3000/api/v1/products 
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
}

module.exports = routerApi;