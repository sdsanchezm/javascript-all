

# Backend with NodeJS

### Classes

#### 1. Que es ExpressJs? 
#### 2. Environment configuration 
#### 3. ExpressJS Install
```
npm install express nodemon
```
#### 4. Routing with ExpressJS
### CRUD
#### 5. What is a RESTful API (Representation State Transfer)?
##### GET
- Obtener information (todos o solo en detalle, generalmente con ID)
##### PUT
- Se usa para modificar (se envia el ID generalmente)
##### POST
- Crear nuevos records 
##### DELETE
- Hacer eliminacion

- Note: Images in oneNote

#### 6. GET: recibir parametros
- Endpoints work together with entrypoints 
- they could be composed like these examples
```
api.example.com/tasks/{id}
api.example.com/users/{id}
api.example.com/users/{id}/task/{id}
```
- Code:
```
app.get('/categories/:categoriesId/products/:productsId', (req, res) => { // multiple parameters structure
    const { categoriesId, productsId } = req.params;
    res.json({
        categoriesId,
        productsId
    });
} )
```

#### 7. GET: parametros query
- ejemplos de parametros query - query params example
```
api.example.com/products
api.example.com/products?page=1
api.example.com/products?limit=10&offset=0
api.example.com/products?region=USA
api.example.com/products?region=USA&brand=XYZ
```
- code (req.query instead of req.):
```
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
```
- install faker: 
```
npm install faker
```
- Use faker like this:
```
const faker = require('faker');

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
```
- In order to create a route like this:
```
app.get('/products1/filter', (req, res) => {
```
- Without interfere with this:
```
app.get('/products1/:id', (req, res) => {
```
- What is required, is just put the first expresion first in the code, otherwise, filter will be consider as int
- this code is working on folder `part1`

#### Single Responsability Principle
- The single-responsibility principle is a computer-programming principle that states that every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part.
- Clases, archivos y metodos, debe tener una funcion unica. (1 sola responsabilidad);
- Por ejemplo, the routes should be inside of the folder 'routes' 
- Inside of the folder routes, it should be only the routers files


#### Postman or Insomnia Installation
- Postmand
- Insomnia

#### POST: the create method
- Post se usa para hacer creacion

#### PUT, PATCH, DELETE methods
#### Status Codes
#### Introduction to Services
#### Create, Edit, Delete
#### Async and Await to capture Errors
### Middlewares
#### What are middlewares
#### Middleware for HttpErrors
#### Error handling with Boom
#### Joi for data validation
#### Testing endpoints
#### Popular Middlewares
### Deployment
#### Production Env Considerations
#### Problems with CORS
#### Heroku Deployment
