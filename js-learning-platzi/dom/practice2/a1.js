let k1 = document.querySelectorAll('li');

k1.forEach(x => console.log(x.outerText));

//const k2 = k1.sort( (a, b) => {
//    worda = a.outerText.toLocaleLowerCase();
//    wordb = b.outerText.toLocaleLowerCase();
//    console.log(worda);
//    console.log(wordb);
//    if(worda < wordb) return -1;
//    if(worda > wordb) return 1;
//    return 0;
//} );

//k2.forEach(x => console.log(x.outerText));


function temp1 (){
    const p1 = [10, 4, 18, 2];
    const kk1 = p1.sort( (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    } );

    console.log(kk1);
}

parent.getElementById(‘id’) // => nos permite obtener un elemento a través de su id.

parent.getElementsByClassName(‘class’) // => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

parent.getElementsByTagName(‘div’) //=> con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements

// best to use: 
//=> nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => (’#id’), class => (’.class’), tagName (‘div’)
parent.querySelector('#address') 
parent.querySelector('input') // select the first tag
parent.querySelector('.address') // get the first element

// best to use: 
// => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName)
parent.querySelectorAll('input') // return a nodeList
parent.querySelectorAll('.mb-3') // return all clases

/// Casi siempre el elemento “padre o parent” es document. ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores.
// Example:
const button = document.querySelector(’#button);

// nodeList:
//QuerySelector returns a NodeList

// De esta forma pasamos todos los elementos en el NodeList a un arreglo al cual si podremos usar los métodos filter, map, reduce entre otros. 
const nodeList = document.querySelectorAll("selector css");
const elementList = [...nodeList]; // here it is transformed to an array and now array methods are available to be used

// Create Nodes ==========================================================

// Get the parent element
const parentElement = document.querySelector("selector")
// Create the node, h3 in this case
const h3 = document.createElement("h3")
// Create the node text
const texto = document.createTextNode("Hola Jamecho Perruncho!")
// Insert text into the node
h3.appendChild(h3)
// Insert to the parent node
parentElement.appendChild(h3)

//some others

// Is the clasic method
parentElement.appendChild()
// can add more than 1 node, is the evolution of AppendChild
parentElement.append()

// Ejemplo:
parentElement.append(P, UL, "hola!")

// el nodo de referencia tiene que ser un hijo del padre
parentElement.insertBefore(newNode, Reference)

// 
parentElement.insertAdjacentElement('OPTIONS', nodeX)



const reference1 = document.querySelector('h2');
const node1 = document


node.outerH


















