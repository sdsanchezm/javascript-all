//import json1 from './json1.json' assert {type: 'json'};
//import json1 from './json1.json';
//import json1 from "./json1.json";
//const json1 = require('./json1.json');
//import * as json1 from './json1.json';
//const {json1} = require('./json1.json');

//const json1 = { {name: "jamecho", nameid: 21 } };
//const json1 = { 
//    name: "jamecho",
//    details: {
//        id: 21,
//        user: "jacho21"
//    }
//};

const json1 = [
    {
        name: "k1",
        id: 1
    },
    {
        name: "k2",
        id: 2
    },
    {
        name: "k3",
        id: 3
    }
];

let nodes1 = document.querySelectorAll('li');
let ul1 = document.querySelector('ul');
let appNode = document.querySelector('#app');


const h3 = document.createElement("h3");
//nodeTest.innerHTML = h3;
appNode.append(h3);

const nodes2 = [...nodes1];

const nodes3 = nodes2.sort((a, b) => {
    if (a.textContent < b.textContent) return -1;
    if (a.textContent > b.textContent) return 1;
    return 0;
});

appNode.append(...nodes3);

//function sort1(item1, item2){
//    if (item1.textContent < item2.textContent) return -1;
//    if (item1.textContent > item2.textContent) return 1;
//    return 0;
//}
//
////nodes1.remove();
//appNode.append(...nodes3);
//
//nodes1.forEach(x => {console.log(x);});
//console.log("==================");
//nodes3.sort(sort1);
//nodes3.forEach(x => {console.log(x);});

const h21 = document.createElement('h2');
h21.textContent = "This Is An Example";
appNode.append(h21);


console.log(json1);
//
//const mapping1 = json1.map(item => {
//    return `<li> Name: ${item.name} </li>`;
//}).join('');

//ul1.append(mapping1);
//ul1.innerHTML = mapping1;

const allItems = [];
json1.forEach(item => {
    const li1 = document.createElement('li');
    li1.textContent = `${item.name}`;
    allItems.push(li1);
    //    li1.append(item.name);
});

document.body.append(...allItems);



//JSON.parse() // converts a JSON string into an OBJECT
//JSON.stringify() // creates a json STRING
