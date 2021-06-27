// funcion declarativa:

function miFunction(){
    return 3;
}

// Funcion Expresion (tambien expresiones anonimas)
var mifunction = function(a,b){
    return a + b;
}

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.


// =====================
// So here, with arrow functions, the 'this' word, is inside of the scope and print the name, is the suggested way to do it. 
class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout( () => {
            console.log('Arrow: ' + this.name)
        }, 100 )
    }

    printNameFunction(){
        setTimeout(
            function(){
                console.log('Function: ' + this.name)
            }, 100 )
    }

    printName(){
        console.log( 'Regular:' + this.name );
    }
}

let person = new Person('Bob');
person.printNameArrow()
person.printNameFunction()
console.log(person.name)


// ==================hoisting
// hoisting: es cuando el programa no me detecta que he declarado una variable;
// hoisting means, elevacion; 
// Declaracion de una variable: Es por ejemplo:
var nombre
// Inicializacion:
var nombre = 'Pepe';
// usando var: es como si se declarara arriba, pero sin inizializar, osea que tiene un valor undefined;
// con var queda disponible para ver que valor tenia la variable, incluso fuera del scope
// en javascript, en modo estricto, el objeto dueno de una variable es undefined, pero sin strict mode es window ('this' automatically points to window )
// las variables, se elevan (solo la declaracion)
// las funciones, se elevan por completo (se asigna un valor undefined)
// los import se elevan por completo (no es recomendado, por buenas practicas)
// las clases NO se elevan

var nombre1;
console.log(nombre1);
var nombre1 = 'James';
console.log(nombre1)

// ==================coercion
// Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
// String(a) es un metodo para volver un numero (por ejemplo) a un string
// Number(a) es un metodo para volver un string (por ejemplo) a un numero
// ver un tipo de valor: typeof a

// ================== Valores: Truthy y Falsy
// Bolean(); -- esto es falso
//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false --NaN is not a number
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también

// Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive va
// An array, can contain an array inside of it
Crear un objeto: 

// esta es la funcion constructora: 
function auto (MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
// asi se crean los objectos 
var newCar1 = new auto("Tesla", "Model X", 2020);
var newCar2 = new auto("Volkswagen", "Jetta", 2019);
var newCar3 = new auto("Peugeout", "206 X", 2018);


var carros = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  carros.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < carros.length ; i++){
  console.log(carros[i]);
}

// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información
// Como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida
// haremos el trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para lograr juntarlos en uno solo usando una función constructiva que indicara cada auto ingresado con su marca, modelo y año.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados.
// Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020

// Tambien se necesitaba obtener una lista de las marcas de los 30 autos que acababan de ingresar
// Esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// Funciones para usar con arrays
//map, crea un nuevo array, aplicando la funcion indicada a cada uno de los elementos del array
// find, retorna el primer valor encontrado de acuerdo a la condicion indicada
// forEach, aplica una condicion a cada elemento de un array
//some, retorna true or false, si un elemento esta dentro del array, que cumplan con la condicion indicada




















