// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let API = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = newError('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}



fetchData(API, function(error1, data1){
    if(error1) console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})

/* Basic structure of the callback

fetchData(API, function(){
    if() console.error();
    fetchData(data1, function (){
        if() console.error();
        fetchData(data2, function () {
            if() console.error();
            console.log();
            console.log();
            console.log();
        })
    })
})

*/



// This is another way to it, without using xmlHttpRequest 
const https = require("https");
const API_BASE = 'https://rickandmortyapi.com/api/';

function APIRequest(url, callback) {
    https.get(url, (res) => {
        res.setEncoding('utf8');
        if(res.statusCode === 200) {
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => { 
                callback(null, JSON.parse(body));
            });
        } else {
            const error = new Error(`REQUEST ERROR ON ${url}. Status ${res.statusCode}`);
            callback(error, null);
        };
    });
}

APIRequest(API_BASE + 'character/', (error, response) => {
    if(error) return console.error(error.message);
    APIRequest(API_BASE + 'character/' + response.results[0].id, (error2, response2) => {
        if(error2) return console.error(error2.message);
        APIRequest(response2.origin.url, (error3, response3) => {
            if(error3) return console.error(error3.message);
            console.log(response.info.count);
            console.log(response2.name);
            console.log(response3.dimension);
        })
    });
});
