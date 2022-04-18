console.log("start program");
let name = "jamecho";
let lastname = "sanc";
let age = 5;
let x1 = 4, x2 = 5;
const pi_value = 3.141;
let isApproved = false;
let country_origin = undefined; //default value of variables in javascript
let city_origin = null;
typeof name;

console.log(x1*x2)

user = {
  name: 'Kraus',
  age: 21
};

// dot notation
user.name = 'Mark';

// bracket notation:
user['name'] = 'Kork';
//or
let select = 'name';
user[select] = 'Piorg'


//
console.log(user);
console.log(user.name);
console.log(user.age);

// arrays
let selectedColorsx = [] // declared empty array
let selectedColors = ['red','black'];
selectedColors[2] = 'purple'; // this is just the regular index notation
console.log(selectedColors);

typeof selectedColors; //would be object

function greet(){
  console.log('hi everyone');
}

greet();

function greet_2(namex, lastnamex){ //parameter of the function at declaration
  console.log('hi mister/miss ' + namex + ' ' + lastnamex)
}

greet_2('Andrea','Lex'); // argument of the function at calling the function

function square(y1){
  return y1 * y1;
}

console.log(square(5));

let i = 0, j = 0, n = 4;
let matrix1 = [
  [],
  []
];
for(i=0;i<n;i++){
  document.write('<p>' + i + '</p>');
};

for(i=0;i<n;i++){
  for(j=0;j<n;j++){
    //matrix1[[i],[j]] = 2+i;
  };
};


for(i=0; i<n; i++){
  for(j=0; j<n; j++){
    document.write(matrix1[i],[j]+ ' ');
  }
  document.write('<br>')
};

document.write("<p>asd</p>")
document.write(matrix1)


const output = fizzBuzz(true);
console.log(output);
const output2 = fizzBuzz(true);
document.write(output2);

function fizzBuzz(input){
  if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  if (typeof input !== 'number') return NaN;

  return input;
}


checkSpeed(130);

function checkSpeed(speed){
  const maxSpeed = 70;
  const kmPerPoint = 5;

  if (speed < maxSpeed + kmPerPoint){
    console.log("all good");
  }
  else{
    const points = Math.floor( (speed - maxSpeed) / kmPerPoint );
    if (points >= 12) console.log("License Suspended");
    else{ console.log('Points: ', points); }
  }
}

showNumbers(10);
// let i = 0;
function showNumbers(number){
  for (i = 0; i <= number; i++){
    const r = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, r);
  }
}


const array1 = [0, null, undefined, '', 2, 3, ''];
console.log(countTruthy(array1));
function countTruthy(expression){
  let countx = 0;
  for (let x of expression){
    if (x){
      countx++;
    }
  }
    return countx;
}



const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 7.8,
  director: 'b'
};
showProperties(movie);
function showProperties(object1){
  for (let x in object1){
    if (typeof object1[x] === 'string'){
        console.log(x, object1[x]);
    }
  }
}


console.log(sumatoryMof3Mof5(10))

function sumatoryMof3Mof5(number){
  let county = 0;
// space here
  for (i=0; i<=number; i++){
    if (i % 3 === 0)
      county+=i;
    if (i % 5 === 0)
      county+=i;
  }
// space here
    return county;
}

let array3 = [90, 90, 90, 90];
console.log( calculateGrade(array3) );

function calculateGrade(marks){
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array){
  let totalmark = 0;
  for (let value of array)
    totalmark += value;
  return totalmark / array.length;
}

showStarts(5);
function showStarts(number){
  let pattern = '';
  for (i = 0; i < number; i++ ){
    for (let j = 0; j <= i; j++)
      pattern += '*';
    console.log(pattern)
    pattern = '';
  }
}


//showPrimes(20);

function showPrimes(limit){
  let control1 = 0;
  for (i = 1; i <= limit; i++){
    for (j = 1; j <= i; j++){
      if (i % j == 0) control1++;
    }
    if (control1 == 2) console.log(i)
    control1 = 0;
  }
}

//showPrimes2(20);

function showPrimes2(limit){
  let isPrime = true;
  for (number = 2; number <= limit; number++){

    for (factor = 2; factor < number; factor++){
      if (number % factor == 0) {
        isPrime = false;
        break; // we break because is not need to continue spending computational resources
      }

    }

    if (isPrime)
    console.log(number);
    isPrime = true;
  }
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false;

    return true;
}

showPrimes3(20);

function showPrimes3(limit){
  for (let i = 2; i <= limit; i++)
    if (isPrime(i)) console.log('y',i);
}


function createCircle(radius){
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Based on this:
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' }
];
// --- First Option (this is the most sofisticated option)
const arrayx1 = [5, 12, 8, 130, 44];
const foundx1 = arrayx1.find(element => element > 10); // this return the first element that matches this criteria and undefined if not
console.log(foundx1);

//-- using arrow functions syntax
const coursez1 = courses.find( kk => kk.name === 'c' )
console.log(coursez1);

// -- second option: (used in 2018, but the previous is more sofisticated)
const found = courses.find(
  function(course) {
    return course.name === 'a';
  }
);
console.log(found)

// --to find the index, use findIndex()
const found2 = courses.findIndex(
  function(course) {
    return course.name === 'b';
  }
);
console.log(found2)


arrayxx1 = [44,55,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
console.log(arrayxx1.splice(0,2)[0])
//console.log(arrayxx1)



let numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);
console.log('asd');


function sum(){
  let total = 0;
  for( let value of arguments )
    total += value;
  console.log(arguments);
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 11))


const person = {
  firstName: 'Kraus',
  lastName: 'Wegzeug',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value){
    if (typeof value !== 'string')
      throw new Error('Value is not a String.');

    const parts = value.split(' ');
    if(parts.length !== 2)
      throw new Error('Enter a first and last name!');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try{
  person.fullName = 'qwe ert';
}
catch (e){
  console.log(e); // typically report an error is in a red label
}



const coursesX = [
  {id: 1, name: 'node.js' },
  {id: 2, name: 'Cpp' },
  {id: 3, name: 'JavaScript' },
  {id: 4, name: 'Python' },
  {id: 5, name: 'Pascal' },
];

coursesX.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB )  return -1;
  if (nameA > nameB )  return 1;
  return 0;
  } );

  console.log(coursesX);




  const numbersX1 = [2, 2, 1, 5];
  const allPositive = numbersX1.every( function(value) {
    return value === 1;
    } );

  console.log(allPositive);


  const numbersX2 = [2, 2, 1, 5];
  const atLeastOnePositive = numbersX2.some( function(value) {
    return value === 1;
    } );

  console.log(atLeastOnePositive);



  const numbersX3 = [4, -1, 2, 3];
  const filtered = numbersX3.filter( function(value){
    return value >= 0;
    } );

  console.log(filtered);


  const numbersX5 = [4, -1, 9, 3];

  const itemsY = numbersX5
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter( obj => obj.value )
    .map( obj => obj.value );

  console.log(itemsY);


  const numbersX6 = [4, -1, 9, 3];
  const filteredX1 = numbersX6.filter( value => value >= 2 ).map( n => '<li>' + n + '</li>' ).join('');
  console.log(filteredX1);


  const video1 = {
   title: 'xxyyzz',
   tags: ['x', 'y', 'z'],
   showTags(){
     this.tags.forEach( tag => { // arrow f inherit `this` from the containing function
       console.log(this.title, tag);});
   }
  };
  video1.showTags();
