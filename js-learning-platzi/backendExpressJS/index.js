const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
// const faker = require('faker');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json()); // here, we enable a middleware

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin) || !origin ){
            callback(null, true);
        } else {
            callback(new Error('Not allowed'));
        }
    }
}
app.use(cors(options)); // if only this statement is used, then it will accept all origins/domains 

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


routerApi(app);

// These are the middlewares
// the order is important
// they must be implemented AFTER the routing is created
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('running ok at port: ' + port);
})

