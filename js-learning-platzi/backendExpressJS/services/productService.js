const faker = require('faker');

class ProductsService {

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
        const limit = 10; // tamano del array por defecto
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            });
        }
    }

    async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data,
        }
        this.products.push(newProduct);
        return newProduct;
    }

    /* async */ find(){
        return new Promise( (resolve, reject) => { // this function contains an await in the products route -includes an await already-
            setTimeout( () => {
                resolve(this.products);
            }, 4000 );
        })
        //return this.products;
    }

    async findOne(id){
        return this.products.find(item => item.id === id);
    }

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
    
    async delete(id){
        const index = this.products.findIndex( item => item.id === id );
        if ( index === -1 ) { throw new Error('Product Not Found');}
        const deletedValue = this.products.splice(index, 1); // elimina un elemento y cuandos a partir de ese elemento
        return { id };
    }


}

module.exports = ProductsService;