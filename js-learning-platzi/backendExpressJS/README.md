

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


#### 9. Postman or Insomnia Installation
- Postmand
- Insomnia

#### 10. POST: the create method
- Post se usa para hacer creacion



#### 11. PUT, PATCH, DELETE methods

- If we would like to update, we should send an ID
- In a PUT we should send all attributes in order to be update completely. (hay que enviar TODOS los atributos)

- In a PATCH, it updates partially 

- PATCH recibe los objetos de forma parcial

- All REST convention is a best practice, according to the documentation

```
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
```

#### 12 Status Codes

- The best practice is to use status code, that allows to confirm thatthe request was correct, or if there is an internal server error, etc
- A good documentation is here: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status] 
- Also with cats here [https://http.cat/]
- And with Dogs here [https://httpstatusdogs.com/]

- When we create a resource, the code should be 200
- When we do not find a resource, the code should be 404

- Code Example:

```
router.post('/', (req, res) => {
    const body = req.body;
    res.status(200).json({
        message: 'created',
        data: body
    })
})
```

- Res got a new `status(200)` 

```
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
```
- Here we just validate dynamically status codes


#### 13 Introduction to Services

- the clean Architecture


#### Create, Edit, Delete

- Services:

-UpdateProduct Service
```
    update(id, updateDetails){
        const index = this.products.findIndex( item => item.id === id );
        if ( index === -1 ) { throw new Error('Product Not Found');}
        const actualProduct = this.products[index];
        this.products[index] = {
            ...actualProduct,
            ...updateDetails,
        };
        return this.products[index];
    }

```

-Delete Product Service
```
    delete(id){
        const index = this.products.findIndex( item => item.id === id );
        if ( index === -1 ) { throw new Error('Product Not Found');}
        const deletedValue = this.products.splice(index, 1); // elimina un elemento y cuandos a partir de ese elemento
        return { id };
    }
```

- Create Product Service
```
    create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.products.push(newProduct);
        return newProduct;
    }
```

- Routes to use the services above:

- Patch, to partially update
```
router.patch('/:id', (req, res) => { // patch recibe los objetos de forma parcial
    const { id } = req.params; //
    const body = req.body;
    const productUpdated = service.update(id, body);
    res.json(productUpdated);
})
```

- Delete: 
```
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const productDeleted = service.delete(id);
    res.json(productDeleted);
})
```

- Create a new record:
```
router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
})
```


#### Async and Await to capture Errors
- In this example, a route, 'patch' is an asynchronous functions and also, a try catch to receive the error that may trigger due to many factors
```
router.patch('/:id', async (req, res) => { // patch recibe los objetos de forma parcial
    try { // el try, allows me to execute code and if there is an error in my async function, show it accordingly
        const { id } = req.params; //
        const body = req.body;
        const productUpdated = await service.update(id, body);
        res.json(productUpdated);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})
```

- Also the tag async, should be included in the service itself:
```
    async find(){
        return this.products;
    }
```

- The definition of the update function, should include the async tag
```
    async update(id, updateDetails){
        const index = this.products.findIndex( item => item.id === id );
        if ( index === -1 ) { throw new Error('Product Not Found');}
        const actualProduct = this.products[index];
        this.products[index] = {
            ...actualProduct,
            ...updateDetails,
        };
        return this.products[index];
    }
```
### Middlewares

#### What are middlewares

- Uses cases for middlewares:
    - Work as pipes
    - Data Validation
    - Error Capturing
    - Permission Validation
    - Access Control

- Documentation at: [https://expressjs.com/en/guide/writing-middleware.html](https://expressjs.com/en/guide/writing-middleware.html)


#### What can we do with middlewares 

- Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

- Middleware use cases:

- Middleware a nivel de aplicación
- Middleware a nivel de direccionamiento (routers)
- error handling middleware
- third party middleware
- validate data
- Error capture
- Permission validation
- Access Control

- Actions performed by a middleware: 
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware in the stack.

- Middlewares are between request and response
- Can be used globaly or particular for endpoints
- They can work in a sequencial way
- they can validate if a user is logged in, for example
- A middleware can block (one validates date, other one validates permissions, and if not, it does not allow go to the next step)
- the structure is like this (it does include a next)

```
function example(req, res, next) {
  if (condition1) {
    res.send('Error en condition1');
  } else {
      next();
  }
}
```

- Error Middlewares are also a type of middlewares (normally these, receve the error first) `function example(req, res, next) `
- Error middlewares must have 4 parameters, (thats the way to tell is an error middleware);
- They work like pipes (the output of one is the input of the other)
- Middlewares are defined after defining the routing. 
- It is important to note in what order the are excuted



#### Middleware for HttpErrors
#### Error handling with Boom
#### Joi for data validation
#### Testing endpoints
#### Popular Middlewares
### Deployment
#### Production Env Considerations
#### Problems with CORS
#### Heroku Deployment
