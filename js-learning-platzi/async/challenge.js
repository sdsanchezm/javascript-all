const fetchData = require("../utils/fetchData");

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try{
        const data = await( fetchData(url_api) );
        const character = await ( fetchData( `${API}${data.results[0].id}` ) );
        const origin = await ( fetchData( character.origin.url ) );

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }
    catch (error){
        console.error('error');
    }
}

console.log('before');
anotherFunction(API);
console.log('after');



//=========== another way, using fetch: 

const fetch = require('node-fetch'); // to install the package: npm install node-fetch 
const API_BASE = 'https://rickandmortyapi.com/api/character/';

const anotherFunction2 = async (url_api) => {
  try {
    const data = await fetch(url_api).then((res) => res.json());
    const character = await fetch(
      `${url_api}${data.results[0].id}`
    ).then((res) => res.json());
    const origin = await fetch(`${character.origin.url}`).then((res) =>
      res.json()
    );

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (err) {
    console.error(err);
  }
};

anotherFunction2(API_BASE);


// == third way to do it

function getData(){
    return fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(json => json)
    }
    async function anotherFunction3(){
      try{
    const data = await getData()
    const character = await data.results[0]
    const origin = await fetch(character.origin.url)
    .then(response => response.json())
    .then(json => json)
    console.log('another way, using getData');
    console.log(data.info.count)
    console.log(character.name)
    console.log(origin.dimension)
    }catch(error){
    console.error(error)}
    }

anotherFunction3();