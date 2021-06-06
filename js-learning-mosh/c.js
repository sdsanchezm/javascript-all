
let x = 10;
console.log(x);
console.log(x++);
console.log(++x);

// Stupid object literal:
const person = {
  name: 'obama',
  lastname: 'sanchez',
  age: 5,
};

console.log(person.age);

// Stupid gneral object:
person.weight = 32;

console.log(person);

function Employee(name,lastname){
  return{
    name,
    lastname
  };
}

const ee41 = new Employee('kraus','mendel');

console.log(ee41);

function user(username, userid){
  this.username = username;
  this.userid = userid;
}

const userX = new user('kk','6532');

console.log(userX.username, userX.userid);

// factory function
function createAddress1(street, city, zipCode){
  return{
    street,
    city,
    zipCode
  };
}

address1 = createAddress1('42 Korn Street', 'Chicago', 909090);

console.log(address1);

showAddress(address1);

// Constructor function
function createAddress2(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new createAddress2('44 Berlin Ave','Berlin', 422142);

showAddress(address2);

let address = {
  street: '21 Kraus Road',
  city: 'Hong Kong',
  zipCode: 987654
};

let address3 = new createAddress2('42 Korn Street', 'Chicago', 909090);

function showAddress(address){
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

// are equal, function: compares 2 objects:
function areEqual(address1, address2){
  return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

// are same, function: compares 2 objects (simplified way):
function areSame1(object1, object2){
  return object1 === object2;
}

// are same, function: compares 2 objects (large old way):
function areSame2(object1, object2){
  if (object1 === object2){
    return true;
  }
  else{
    return false;
  }
}

console.log('new thing: ');
console.log('same:' + areSame1(address1, address2));
console.log('equal:' + areEqual(address1, address3));

showAddress(address1);
showAddress(address2);
showAddress(address3);

let computer = {
  brand: 'Lenovo',
  size: 15,
  reference: 'T480',
  showAll(){
    for(let key in this) console.log(key, this[key]);
  }
};

console.log(computer);
computer.showAll();

let blogPost = {
  title: 'blog title',
  body: 'blog body',
  author: 'blog author',
  views: 10,
  comments: [
      {author: 'comm author1', body: 'comm body1'},
      {author: 'comm author2', body: 'comm body2'}
  ],
  isLive: true
};

console.log(blogPost);

// constructor function
function PostX(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; // is initialized because
  this.comments = []; // Empty object because there are not comments yet;
  this.isLive = true; // is initialized, true in this case
}

const post2 = PostX('titl1', 'body1', 'new author');
//let post1 = new PostX('titl1', 'body1', 'new author');
console.log(post2);


//address1 = createAddress1('42 Korn Street', 'Chicago', 909090);
//let address2 = new createAddress2('44 Berlin Ave','Berlin', 422142);


function gusano(x,y){
  this.x = x*2;
  this.y = y*3;
}

gusano1 = new gusano(2,3);
console.log(gusano1);

function serpiente(x, y){
  return {
    x: x*3,
    y: y*5,
    z: x * y
  };
}

serpiente1 = serpiente(4, 3);
serpiente4 = new serpiente(10, 10);
console.log(serpiente4);

function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  };
}

circle = Circle(3);

console.log(circle);

circle_2 = new Circle(22);
console.log(circle_2);

console.log(arrayFromRange(-10,-3));

function arrayFromRange(min, max){
  let array = [];
  for (let i = min; i <= max; i++)
    array.push(i);
  return array;
}


let role;
role = 1;
  switch(role){
    case 1:
      console.log('you choosed: 1');
      break;
    case '2':
      console.log('you choosed: 2');
      break;
    case 'exit':
      console.log('bye');
      break;
    default:
      console.log('please enter a valid option!');
  }

let array5 = {
  id: 21,
  name: 'kraus',
  lastname: 'klein',
  infoAll(){
    console.log(this.id);
  }
};
function showObject(object1){
  for (let key in object1)
    console.log(key, object1[key]);
}
showObject(array5);

function exampleForIn(){
  array6 = ['first', 'second', 'third', 'fourth', 'carro'];
  for (let key in array6){
    console.log(key, array6[key]);
  }
}
exampleForIn();

function exampleForOf(){
  array7 = ['erste', 'zweite', 'drite', 'vierte', 'funfte'];
  for (let key of array7){
    console.log(key);
  }
}
exampleForOf();

let i = 0;
while(i <= 10){
  if (i === 9) break;
  if (i % 2 === 0){
    i++;
    continue;
  }

  console.log(i);
  i++;
}
console.log(exampleForOf);


let array10 = {
  id: 21,
  name: 'mendel',
  lastname: 'rogus',
  infoAll(){
    console.log(this.id);
  }
};

function showAll2(object1){
  for( let key of Object.entries(object1) )
    console.log(key);
}

showAll2(array10);

function listAllProperties(o) {
	var objectToInspect;
	var result = [];

	for(objectToInspect = o; objectToInspect !== null;
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

	return result;
}

let xy = new Object();
console.log( Object.getOwnPropertyNames( array10) );
console.log( Object.getPrototypeOf( array10) );


const lastName = 'Sanc';
const date = '21/4/2020'

const zzz = `Hello
Sergio ${lastName}
This is a message example with 'examples';
created on: ${date}
`;
console.log(zzz);

// Arrays -----------

const numbers = [21, 22, 25, 45, 55];
const numbers2 = [5, 2, 5, 4, 11];
//numbers.splice(2, 0, 'a', 'b'); // first arg: position; sec arg: elements to delete; the rest: elements to add

function showArray(array1){
  for (let i; i < array1.length; i++) console.log( i );
}

numbers.push(2, 5, 4, 55);
console.log(numbers.indexOf(55));


const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];
const course = courses.find( function(course){
  return course.name === 'c';
  } );
console.log( course );

const course2 = courses.findIndex( function(course2){
  return course2.name === 'a';
  } );
console.log( course2 );


numbers2.forEach( (item, tt) => console.log(item, tt) );

const numbersY = [1, 2, 3];
const numbersY_join = numbersY.join(',');
console.log(numbersY_join);
console.log(numbersY);


const langsX = [
  {id: 1, name: 'node.js' },
  {id: 2, name: 'Cpp' },
  {id: 3, name: 'JavaScript' },
  {id: 4, name: 'Python' },
  {id: 5, name: 'Pascal' },
];

langsX.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB )  return -1;
  if (nameA > nameB )  return 1;
  return 0;
} );

console.log(langsX);

const numbersX2 = [2, 2, 4, 5, 34, 21, 89];
const atLeastOnePositive = numbersX2.some( function(value) {
  return value <= 1;
  } );

console.log(atLeastOnePositive);

const numbersY2 = [1, -11, 2, 3];
const sum = numbersY2.reduce( (accumulator, currentValue) => accumulator + currentValue );
console.log(sum);

function includesV(arrayY, elementY){
  for (let i of arrayY){
    if (i === elementY) return true;
  }
  return false;

}

console.log( includesV(numbersY2, 6) );


function except(arrayZ, arrayExcluded){
  const returnOut = [];
  for (let i of arrayZ){
      if ( !arrayExcluded.includes(i) ) returnOut.push(i);
  }
  return returnOut;
}


console.log( except(numbersY2, [3]) );


const numbersY3 = [1, 2, 3, 4, 5];

function move(arrayT, index, offset){
  if (index + arrayT >= arrayT.length || index + arrayT < 0 ){
    console.error("Invalid Offset");
    return;
  }
  returnOut = [];
  elementMoved = arrayT[index];
  arrayT.splice(index, 1);
  arrayT.splice(index+offset, 0, elementMoved);
  returnOut = [...arrayT];
  return returnOut;
}

const moveResult = move(numbersY3, 3, -3);
console.log( moveResult );

// const numbersY4 = [1, 2, 3, 4, 5];
// const qweasd = numbersY4.splice(1, 0, 'a');
// console.log( numbersY4 );
//
// const numbersP = [3, 4];
// numbersP.splice(2, 0, 'a', 'b');
//
// const numbersR = [21, 22, 25, 45, 55];
// numbersR.splice(2, 0, 'a', 'b');
//
// console.log(numbersP);
// console.log(numbersR);

// ----  Find how may times a value appears in an array Algorithm
const numbersY5 = [1, 2, 3, 4, 5, 3, 5, 2, 5, 5, 5, 6, 5];
const numbersY6 = [1, 2, 3, 4, 5];

// - first implementation using arrow function and accumulator - way 1
function countOcurrences1(array, SearchElement){
  const sumD = array.reduce( (accumulator, currentValue) => {
    return (currentValue === SearchElement) ? accumulator += 1 : accumulator += 0;
    //return accumulator;
  }, 0 );
  return sumD;
}

// - second implementation using arrow function reduced method - way 2
function countOcurrences2(array, SearchElement){
  return array.reduce( (accumulator, currentValue) => {
    const happen = (currentValue === SearchElement);
    return happen + accumulator;
    //return accumulator;
  }, 0 );
}

const sumC = numbersY6.reduce( (accumulator, currentValue) => {return accumulator + currentValue; }, 0 );
console.log(sumC);

const countY5 = countOcurrences2(numbersY5, 5);
console.log( countY5 );

// ----- find the max number in an Array - way 1

function getMax1 (array){
  let acc = 0;
  for(let i = 1; i < array.length; i++){
    console.log(i);
    if (array[i] >= array[i-1]) acc = array[i];
    else if (i == 1)  acc = array[i-1];
  }
  return acc;
}

// ----- find the max number in an Array - way 2

function getMax2 (array){
  let maxNum = array[0];
  for(let i = 1; i < array.length; i++){
    if (array[i] >= maxNum) maxNum = array[i];
  }
  return maxNum;
}

// ----- find the most simplified way (single line) - way 3

function getMax3(array){
  return array.reduce( (accumulator, currentValue) => (currentValue > accumulator) ? currentValue : accumulator ); // no initial value, means accumulator equal the first element of the array;
}

const numbersY7 = [21, 2, 33, 4, 5, 1, 93, 1, 1, 103];
console.log( getMax3(numbersY7) );

// -- filtering and ordergin object ins an array

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

const titles = movies
  .filter( m => m.year === 2018 && m.rating >= 4)
  .sort( (a, b) => a.rating - b.rating)
  .reverse()
  .map( m => m.title )

console.log(titles);

// -- property not modifiable in an object (gotta use get - topic: getters and setters):

const circle3 = {
  radius: 1,
  get area(){ // area is not modifiable
    return Math.PI * this.radius * this.radius;
  }
};


// ------- Error handling example:
try {
  const numbersY5 = [1, 2, 3, 4, 5, 3, 5, 2, 5, 5, 5, 6, 1, 5];
  const countY5 = countOcurrences4(numbersY5, 1);
  console.log( countY5 );
}
catch(e){
  console.log(e.message);
}

function countOcurrences4(array, SearchElement){
  const sumD = array.reduce( (accumulator, currentValue) => {
    return (currentValue === SearchElement) ? accumulator += 1 : accumulator += 0;
  }, 0 );
  return sumD;
}
