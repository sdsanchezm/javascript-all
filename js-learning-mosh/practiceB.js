let name = 'ser';
console.log(name);
name = 'dross';
console.log(name);

// is not allowed:
// const lastname = 'Kraus';
// console.log(lastname);
// lastname = 'mock';
// console.log(lastname);

let letx1 = 21;
const constx1 = 42;
var varx1 = 63;

function kk1() {
  console.log(letx1, constx1, varx1);
  return 0;
}

kk1();
// console.log(varx1);
// console.log(letx1);
console.log(constx1);


// Loop:

function printLoop(toVar) {
  for (let i = 0; i < toVar; i++){
    console.log(i + '\n');
  }
}
printLoop(10);

const arrayVar = ['first', 'second', 'third'];
const arrayObjects = [{ id: 31 }, { id: 32 }, { id: 33 }];
function printArray(arrayX){
  for (let i in arrayX){
    console.log(arrayX[i]);
  }
}

printArray(arrayObjects);
function myFunction() {
  document.body.style.backgroundColor = "red";
}

// big in an array:
const array_x1 = [2, 5, 6, 9, 20];
const array_x3 = [6, 50, 69, 92, 20];

function randomIntGenerator(){
  let arrayx = [];
  for (let i = 0; i < 10; i++) {
    arrayx [i] = Math.floor(Math.random()*100);
  }
  return arrayx;
}

function getMaxInArray(arrayArg){
  let max = 0;
  for (let i in arrayArg){
    if (i > max) max = i;
  }
  return max;
}

console.log('max: ' + getMaxInArray(array_x3));

const array_x2 = randomIntGenerator();
console.log(array_x2);

console.log(randomIntGenerator());
document.write(randomIntGenerator());



function x1(){
  for (let i = 0; i< 10; i++){
    document.write("<p>asd</p>");
  }

  return 0;
}

setTimeout(x1(),1);


function test2()
{
    // defer the execution of anonymous function for
    // 3 seconds and go to next line of code.
    setTimeout(function(){

        console.log("po2");
    }, 3000);

    console.log("poi");
}

test2();
