// Crear nodos

const container = document.querySelector('div.py-5.text-center')
const h3 = document.createElement('h3')
const texto = document.createTextNode('holita')
h3.appendChild(texto)


container.append('hola 2 - this is my text', document.createElement('div'))
const referencia = document.querySelector('h2')
const titulo = document.createElement('h1')
container.insertBefore(titulo, referencia)
titulo.append('this is a randonm text')


const referencia = document.querySelector('h2')
const nodo = document.createElement('span')
referencia.insertAdjacentElement('OPCIONES', nodo)

OPCIONES could be:
beforebegin
afterbegin
beforeend
afterend


--
Inner and Outer: 
const referencia = document.querySelector('h2')
referencia.innerHTML
'Checkout form'
referencia.outerHTML
'<h2>Checkout form</h2>'
referencia.innerHTML
'Checkout form'
referencia.innerHTML.replace('C','X')
'Xheckout form'

-- 
Accessing the console, click on an element and type:

$0.

so, all methods will appear

---
eliminar un nodo:
const nodoAEliminar = document.querySelector('input')
nodoAEliminar.remove()

Reemplazar nodos:
const toReplace = document.querySelector("h2")
const containerParent = toReplace.parentElement
const node = document.createElement("h1")
node.textContent = "Un texto cualquiera"
containerParent.replaceChild(node, toReplace)

----

Procesos en lote:
const nodos = []

for( let i = 0; i< 100; i++ ){
    const nodex = document.createElement('input')
    nodos.push(nodex)
}

document.body.append(...nodos) // se debe reducir al menos numero possible de escitura en el DOM

---

Obtaining responses from the DOM:

const input = document.getElementById('firstName')

const action = () => {
    console.log('this is action 1');
}
      
input.addEventListener('click', action)

input.addEventListener('input', () => { console.log('key pressed!')})


const action2 = () => {
    console.log("this is action 2");
}

const email = document.getElementById('email')

email.addEventListener('click', action);
email.addEventListener('click', action2);

email.removeEventListener('click', action);


------
    
Propagation events


const accion = (evento) => {
    console.log(`This is from ${evento.currentTarget.nodeName}`);
}

$0.addEventListener('click', accion);

const accion = (evento) => {
    evento.stopPropagation()
    console.log(`This is from ${evento.currentTarget.nodeName}`);
}


--------
Event Delegation 


appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === 'H2'){ // aca se elige solo un nodo
        window.alert("hey!");
    }
})

// esto se hace asi: 
const title = document.createElement('h2');
title.className = "text-lg text-green-600";
title.textContent = element.name;
//title.style.fontSize = "3rem";

// esto es opcional: se debe hacer siguiento las best practice the Event delegation: 
/*
title.addEventListener('click', () => {
    window.alert('hey!');
})
*/ 

// --------------------------------------

https://randomfox.ca/?i=1

// --------------------------------------





























