// las hash tables no estan tan construidas en js
// en js se puede conocer como objetos
// en python son diccionarios
// en java son maps
// en globalThis, son maps
// en rugy son hashes

// son similares a los objetos, por que son key: value;
// Por ejemplo:

// {
//     "nombre": "Kraus",
//     "germanWorte": "Papieren"
// }

// una hash function, poder acceder al valor por el medio del key
// se le pasa un key, y la hash function regresa un numero un hash, y ese hash es el mismo numero siempre, es como el address
// esto se convierte en buckets, para poder acceder al valor, tengo que pasarle el key
// Los metodos son: 

// - insert
// - search
// - delete

// trabajar con hastables, puede ser problema a veces por las colisiones
// pasar un valor, puede retornar un mismo hash

//“Una función criptográfica hash- usualmente conocida como “hash”- es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud.”

//En pocas palabras, un hash es un string aleatorio que se genera a partir de un string que le pasamos nosotros, este string que se genera tendrá una longitud fija, no importa si el string que nosotros le pasamos es muy largo.

//El hash se suele usar mucho al momento de encriptar contraseñas, y la forma de calcularlos es mediante un algoritmo matemático 


class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod (key) { // funcion para asignar la direccion aleatoria
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set (key, value) { // funcion para guardar un valor
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if( currentBucket[i][0] === key ){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if( currentBucket[i][0] === key ){
                    // this.data[i].splice(i, 1);
                    currentBucket.splice(i, 1);
                    return currentBucket;
                }
            }
        }
        return undefined;
    }

    getAllKeys() {
        const tempArray = [];
        this.data.forEach(element => {
            element.forEach(key => {
                tempArray.push(key[0]);
            });
        });
        return tempArray;
    }

      remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              const deletedValue = this.data[address][i];
              this.data[address].splice(i, 1);
              return deletedValue;
            }
          }
        }
        return undefined;
      }

}

const myHashTable = new HashTable(50); // aca generamos una instancia con 50 espacios

//para agregar valores:
myHashTable.set("asd", 123)
myHashTable.set("qwe", 345)
myHashTable.set("zxc", 63)

// guarda valores en direcciones aleatorias, si la direccion es la misma, quiere decir que hay una colision


