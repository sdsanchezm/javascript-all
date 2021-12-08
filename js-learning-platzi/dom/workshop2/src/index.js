// base code at https://github.com/jonalvarezz/snowpack-template-tailwind
// https://www.npmjs.com/package/snowpack-template-tailwind?activeTab=dependents
// npx create-snowpack-app my-app --template snowpack-template-tailwind
import { registerImage } from './lazy'

console.log('all good here');

//const appNode1 = document.querySelector('#appImages1');

//const images1 = appNode1.createElement('img');

const maxNum = 123;
const minNum = 1;
const randomNumber = () => Math.floor(Math.random() * (maxNum - minNum) + minNum);
console.log(randomNumber);

const imagex = document.createElement('img');
imagex.className = "p-4";
//imagex.src = `https://randomfox.ca/images/${randomNumber}.jpg`;

//appNode1.append('image1');



const createImage = () => {
    const container = document.createElement('div')
    container.className = 'p-4';

    const image1 = document.createElement('img');
    image1.className = "mx-auto";
    image1.width = '320';
    image1.dataset.src = `https://randomfox.ca/images/${randomNumber()}.jpg`; 

    container.appendChild(image1);

    return container;
}

const newImage = createImage();
const mountNode = document.getElementById("appImages1");

//mountNode.appendChild(newImage);


const addImageButton = () => {
    const newImage = createImage();
    mountNode.append(newImage);
    registerImage(newImage);
}

const addbutton1 = document.querySelector('button');
addbutton1.addEventListener('click', addImageButton)


//mountNode.append(newImage);
