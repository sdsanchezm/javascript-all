/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const url = "https://platzi-avo.vercel.app/api/avo";
const baseUrl = "https://platzi-avo.vercel.app";
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return newPrice;
}

const appNode = document.querySelector('#app');
appNode.className = 'mt-10 grid grid-cols-2 gap2';

// Esto hace parte del Event delegation. 
appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === 'H2'){ // aca se elige solo un nodo
        window.alert("hey!");
    }
})
//varias cosas: 
// 1. Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
    // 2. Procesar la respuesta y convertirla en JSON
    .then(res => res.json())
    // 3. Vamos a tener data o info, y eso lo usaremos para renderizar la informacion en el browser.
    .then((responseJson) => {
        //console.log(data);

        const allItems = [];

        responseJson.data.forEach(element => {
            console.log(element.name);
            // crear image
            const image = document.createElement('img');
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            image.src = `${baseUrl}${element.image}`; //url de la imagen
            
            //creaar titulo 
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

            //crear precio
            const price = document.createElement('div');
            price.className = "text-gray-600";
            price.textContent = formatPrice(element.price);

            // Wrap Price and title 
            const priceAndTitle = document.createElement('div');
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);
            
            const card = document.createElement("div");
            card.className = "md:flex bg-black-200 rounded-lg p-6 hover:bg-gray-300";
            card.appendChild(image);
            card.appendChild(priceAndTitle);

            // const container = document.createElement('div');
            // container.append(image, title, price);

            //allItems.push(container);
            allItems.push(card);
        });

        //document.body.append(...allItems);
        appNode.append(...allItems);
    });
// de tarea queda user async y await
