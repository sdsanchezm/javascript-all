# Javascript README - Study Session, December 2020:

## Best ATOM Packages (configuration and usage) for Javascript:

**Markdown basic syntaxys:**
1. https://www.markdownguide.org/basic-syntax/ [this link](https://www.markdownguide.org/basic-syntax/)

**Install Packages in ATOM:**
File > Settings > Install (Ruindows)
Edit > Settings > Preferences > Install (Linux)

**Module Usage in ATOM:**
Ctrl + Shift + P

**Looking for active working file:**
Crtl + b

**Emmet web page/cheatsheet:**
1. https://docs.emmet.io/cheat-sheet/ [This is the link](https://docs.emmet.io/cheat-sheet/)

**Additional packages to ATOM that might be usefull:**
1. es6-javascript: https://atom.io/packages/es6-javascript  
2. turbo-javascript: https://atom.io/packages/turbo-javascript  

### 1. Emmet
name: emmet
**Usage:**
div.test (tab)  
.test (tab)  
h1.test (tab)  
h1#test (tab) >> <h1 id="test"></h1>  
ul (tag) >> <ul></ul>  
li (tab)  
! (tab) >> tab  
div+ul+li >> <div></div><ul></ul><li></li>  
div+p+bq >> <div></div><p></p><blockquote></blockquote>  
a (tab)  
a:link (tab)  

### 2. File icons

name: file-icons

### 3. Atom Live Server:

name: atom-live-server

Activate at: Menu > Packages > atom-live-server

**Usage:** Menu > Packages > atom-live-server > Start/Stop

### 4. todo:
name: todo

**Usage:**

//TODO: do this  
//TODO: add a new feature : >> Menu > Packages > todo  

### 5. minimap:

name: minimap  
Visual assistance


### 6. Pigments

name: pigments  
name: minimap-pigments

**Usage:** gives the color if a word: background: #F4F4F4  
**Usage:** Crtl + shift + P > look for 'pigments:find'


### 7. Linter:

name: linter  
name: linter-jshint  
name: linter-ui-default  
name: busy-signal  
**Usage**: automatic higlight errors in code  

### 8. Atom Beautify:

name: atom-beautify  
**Usage**: Menu > Packages  

### 9. Ask Stack:

name: ask-stack  
**Usage:** Ctrl + Shift + P > type the question > type language    
**usage:** Ctrl + Alt + A > type the question > type language  

### 10. highlight selected:

name: highlight-selected  
**Usage:** select the text and that's it

---

# Javascript Course:
1. [Udemy course here](https://www.udemy.com/course/javascript-basics-for-beginners/)

## Initial

### Variables:  

#### 1. use let instead of var  
`let name = 'Sergio';`  
`let firstName = 'Kurt', lastName = 'Kobain'` // valid but not best practice  
`console.log(name);`  
// noserver names  
// should be meaningful names (give a clue)  
// cannot start with a number  
// no spaces nor dashes  
// camel notation: firstName (convention to name variable)  
// js is case sensitive  
// declare one variable per line   

#### 2. to reassign use let instead of const:  
`const interestRate = 0.3` // cannot be re-assigned  
`let name = 'Kraus';` // can be reassigned

#### 3. Types of variables (Primitives or Value Types), those are:  
`let name = 'Kurt';` //string   
`let age = 30;` //number, float, integer are just numbers   
`let isApproved = true;` //boolean   
`let firstName = undefined;` //undefined is a value but also a type  
`let selectedColor = null;` //we use null when want to clear the value of a variable, the type is object  

#### 4. Dynamic  or Static languages:
Static Languages: the type of variable changes   
Dynamic languages: the type can change

#### 5. Reference types:  
**Object**  
**Array**  
**Function**  

#### 6. Objects:  

// Object literal:  
`let person = { }` // this is an object literal  

// Dot notation:  
`let person = {  
  name = 'Kurt',  
  age: 21  
  };  `  
  `person.name = 'Mark';`

// bracket notation:  
`let selection = 'name';`  
`person[selection] = 'Kraus'`


#### 7. Arrays:  
`let selectedColors = []` // initialize, empty array, it is an literal array  
`let selectedColors = ['red','blue','black']`  
// Type of variables/array can change (are dynamic)  
// dimension of array can change  
`selectedColor.lenght` //displays the number of records inside  

#### 8. Functions:  

`function greet(name) {  
  console.log(name);  
  }` // no semicolon at the end of the definition  
  // PARAMETER is part of the function definition  
  // when calling the function, the name is the ARGUMENT  
  `greet(name + ' ' + 'all good')`  
  // to concatenate: use plus sign  
  // if one of the artuments is not defined, the default value is undefined  
  // this can be better with 'template literals'  
  `console.log(square(2))` // a function inside of another function  

#### 9. Operators:

1. Arithmetic  
2. Assignment  
3. Comparison  
4. Logical  
5. Bitwise  

**Process:**
Operators/Variables -> Expressions -> Algorithms  

**Arithmetic Operators:**  
1. addition +  
2. Substraction -  
3. multiplication *  
4. division /  
5. module %  (remain of a division)  
6. potenciation **  
7. Increment:  
x++ // show the x first and then add 1  
++x //add 1 and then shows the x plus 1  
```
let x = 10;
console.log(x);
console.log(x++);
console.log(++x);
```
8. Decrement:  
--x // decrement first and then shows the value  

**Assignment Operators:**  

1. =  
2. +=  > x = x + 5  
3. *= > x = x * 5  

**Comparison Operators:**  
//Relational operators:  
1. Greater than: >  
2. Greater than or equal to: >=  
3. Less than: <  
4. Less than or equal: <==  

// Equality:  
Strict Equality (type and value):  
1. ===	// equal value and equal type  
2. !==	not equal value or not equal type  
Lose Equality (only value):  
3. ==	equal to // do not compare types   
4. !=	not equal to  

**Ternary condition operator:**  
// quick way to compare and assign  
`let points = 100;`  
`let type = points > 100 ? 'gold costumer' : 'silver customer';`  

**Logical Operators:**  
Make decisions based on multiple conditions:  

1. && and operator (let eligibleForLoan = highIncome && goodCreditScore;)  
2. || or operator (let eligibleForLoan = highIncome || goodCreditScore;)  
3. ! not operator (let ApplicationRefused = !highIncome;)  

**Logical Operators with non-booleans;**  
`false || 'Kurt' > 'Kurt'`  

Falsy:  
// undefined   
// null  
// 0  
// false   
// ''  
// NaN // not a number  

Truthy: anything that is not Falsy  
`false || 1 || 2   > 1` // this is called short-circuiting  
Other example:   
`let userColor = undefined;  `
`let defaultColor = 'blue';   `
`let currentColor = userColor || defaultColor;  `

If we have a value for userColor, we will use that, if not, we will use de defaultColor;  
With this technique, we can provide default values  

**bitwise:**  

// 1 = 00000001  
// 2 = 00000010   
`1 | 2`  
`1 & 2`  

**Operator Precedence:**  
user parenthesis    
Multiplication is first than addition  


### Control Flow

#### If Else  
```
if(condition){
  statement
}
else if(anothercondition){ --> curly here, not after the if
  statement
}
else
  statement
```

#### Switch Case  

```
let role;

switch (role){
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}
```

### Loops  
---

#### For loop  

```
for (let i = 0; i < 5; i++){
  console.log("hi",i);
  if ( i % 2 !== 0) console.log(i);
}
```

#### while  

```
let i = 0;
while(i <= 5){
  if ( i % 2 !== 0) console.log(i);
  i++;
}
```

#### Do while  

Do while are executed at least 1 time even in the condition is false, is different from while (which first evaluate a condition)
```
let i = 0;
do{
  if ( i % 2 !== 0) console.log(i);
  i++;
} while(i <= 10);
```

#### Infinite Loops

```
while(1){
  console.log("hi");
}
```  

or  

```
while(true){
  console.log("hi");
}
```
also can be used for with no increment of the control variable

#### For in  

1. Used mainly to **iterate in properties of an object**  
2. In this example, key will have the name of the property, not the property by itself  

```
const person = {
  name: 'Kraus',
  age: 21
}
for (let key in person){
  console.log(key, person[key]); //here the bracket notation should be used
}
// dot nation:
person.name
//bracket notation:
person['name']
```
another example:  

```
const colors = ['red', 'green', 'blue'];
for(let index in colors){
  console.log(index, colors[index]);
}
```
- In this case, index works as numbers.
- Another example:
```
function exampleForIn(){
  array6 = ['first', 'second', 'third', 'fourth', 'carro'];
  for (let key in array6){
    console.log(key, array6[key]);
  }
}
exampleForIn();
```
- Another Example:
```
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
```

#### For of

ideal way to **iterate over arrays**, is this method and starting ES6 (or ECMAS6):
```
const colors = ['red', 'green', 'blue'];
for( let color of colors){
  console.log(color);
}
```
- Another example:
```
function exampleForOf(){
  array7 = ['erste', 'zweite', 'drite', 'vierte', 'funfte'];
  for (let key of array7){
    console.log(key);
  }
}
exampleForOf();
```

#### Break and continue

1. continue is not recommended to be used, is a ugly way to write code
```
let i = 0;
while(i <= 10){
  if (i === 5) break;
  if (i % 2 === 0){
    i++;
    continue;
  }

  console.log(i);
  i++;
}
```

#### Max of two numbers

Write a function that return the max of 2 numbers:

```
function maxOf2Numbers(let number1, let number2){
  if (number1 < number2){
    return number2;
  }
  else{
    return number1;
  }
}
```
1. A cleaner way to write the function is:

```
function maxOf2Numbers(number1, number2){
  return (a > b) ? a : b;
}
```
2. When writing functions, test them with possible values


#### Exercise - Landscape or portrait

1. this is a poor way of writing code, is ugly:  
```
funtion isLandscape(width, height){
  return (width > height) ? true : false;
}
```

2. Nice way
```
funtion isLandscape(width, height){
  return (width > height);
}
```

#### Exercise FizzBuzz


```
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
```

#### Exercise Demerit Points

```
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
```
1. A better way to write this code:  

```
checkSpeed(130);

function checkSpeed(speed){
  const maxSpeed = 70;
  const kmPerPoint = 5;

  if (speed < maxSpeed + kmPerPoint){
    console.log("all good");
    return;
  }
    const points = Math.floor( (speed - maxSpeed) / kmPerPoint );
    if (points >= 12) console.log("License Suspended");
    else console.log('Points: ', points);
}


```

#### Exercise Even and odd Numbers

```
showNumbers(10);
// let i = 0;
function showNumbers(number){
  for (i = 0; i <= number; i++){
    const r = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, r);
  }
}
```

#### Exercise Count truthy

1. A falsy value is for example this: '' or this 0, or this null, or this undefined
2. A truthy value may be for example 'asd' or 21
```
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
```

#### Exercise String Properties

1. for in, is for objects, for of, is for arrays  
2. the movie object is a direct object  
```
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 7.8,
  director: 'b'
};
showProperties(movie);
function showProperties(object1){
  for (let x in object1){
    if (typeof object1[x] === 'string')
        console.log(x, object1[x]);
  }
}
```
3. The above code is working fine  
4. the **===** is comparing type as well, not only value  


#### Exercise Sum of Multiples 3 and 5

1. Space is a good practice between initial values and declarations, the content of the function and the return; is easier to explre the code in that way;
```
console.log(sumatoryMof3Mof5(10))

function sumatoryMof3Mof5(number){
  let county = 0;
// space here
  for (i = 0; i <= number; i++){
    if (i % 3 === 0)
      county += i;
    if (i % 5 === 0)
      county += i;
  }
// space here
    return county;
}
```
2. a better implementation could be:

```
console.log(sumatoryMof3Mof5(10))

function sumatoryMof3Mof5(number){
  let county = 0;
// space here
  for (i = 0; i <= number; i++){
    if (i % 3 === 0 || i % 5 === 0)
      county += i;
  }
// space here
    return county;
}
```
3. Lines highly related, should be together, otherwise is suggested to be separated


####  Exercise Grade

1. Simplicity is the most sofistication --LeonardoDavinci  
2. Single Responsibility Principle: each function has a unique task; is responsible for one thing
3. This is the suggested way to code: use the single responsability principle; additionally, in the if, make use of the returns for specific cases; there is no need to include 2 limits in the comparison: (if average > 0 && average <= 59) -> **this is ugly and noisy**  
```
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

```



#### Exercise Starts

1. This is an example of nested loop:
```
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
```

#### Exercise Primer Numbers

```
showPrimes(20);

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
```
1. Always pay attention to the names of the variables
2. This is another way to implement this code, by saving processing resources after the number is verified:
3. Is a good way to save computational resources
```
showPrimes2(20);

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
```

4. To implement the same but using the **single responsibility principle**, it should be like this:
```
showPrimes3(20);

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false;

    return true;
}

function showPrimes3(limit){
  for (let i = 2; i <= limit; i++)
    if (isPrime(i)) console.log('y',i);
}
```
5. Typically a nested loop means that we can take that piece of code into a different function to make it easier to understand and simpler;


### Objects
---

#### Objects Basics

1. can declare multiple variable highly related, or can put all these variable in one place
2. This place could be a object literal (using the object literal syntaxys)
3. the purpose of an object, is to group related variables but also functions highly related
4. Instead of create many functions

5. Example of a object literal syntax to create an object:   

```
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function(){
    console.log('draw womthing');
  }
};

circle.draw();
```

#### Factory functions

1. In modern JavaScript we remove the

`radius: radius`

by simply adding the key:  

`radius`

And it is the same thing (if key and value are the same), check this example:

```
function createCircle(radius){
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
```
- The way to create the object is this:
```
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```

- But the following way is also possible (using the `new` keyword):
```
circle_2 = new createCircle(2);
console.log(circle_2);
```

2. This is the first way to create objects  
3. In factory functions we user, the **Camel Notation**



#### Constructor Functions

1. Camel notation: oneTwoThreeFour (In **Factory** functions)
2. Pascal notation: OneTwoThreeFour (In **Constructor** functions)
3. this is a reference to the object that is executing this piece of code  
4. the **new** word creates an empty javascript object similar to `const x = {}`  
next, it will set **this** to the new object and finally: return the object from the declaration;

```
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
```
- The way to create the object is:
```
const circle = new Circle(1);
```

5. In Constructor functions we use the **Pascal Notation**

#### Dynamic Nature of Objects

1. cannot reset the circle to a new object, but always can change the circle object by adding or removing properties or methods
2. object cannot be re-assigned

```
const circle = {
  radius: 1
};

circle.color = 'yellow'; //adding a new property
circle.draw = function() {} // adding a new method

delete circle.color; //deleting properties
delete circle.draw; //deleting properties


```

#### Constructor Property

1. every object has a constructor property, and that references the function that was used to create that object

```
new String(); // is easier with string literals that are: '', "", ``
new Boolean(); // boolean literals are: true, false
new Number(); // number literals are: 1, 2, 3, ...
```

2. The way to access constructors is ''another.constructor'' // if the object constructor was created before

```
const another = new Circle(1);function
```

3. The constructor method references the function that was used to create that object

4. Check this:
```
let x = {};
```
is equal to this:
```
let x = new Object();
```
So, using the `new` keyword, we can also create an object like this:
```
var person = new Object();
person.firstName = "Kras";
person.lastName = "Wanderbilt";
person.age = 33;
person.eyeColor = "white";
```

####  Functions are Objects

1. Functions are objects,

```
circle.name
circle.lenght
circle.contructor

const Circle1 = new Function('radius', `this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
  `);

const circle = new Circle1(1);
```

couple of methods that are avail for functions:

The following expression:
```
Circle.call({}, 1)
```
Is exactly the same than this:
```
const circle = new Circle1(1);
```
This expression creates an empty object and pass a first argument  


If we dont use the `new` operator, then the global object `window` will be used instead, in that case, 2 expressions are equivalent:

```
Circle.call(window, 1)
const another = Circle(1);
```


3. Functions are objects

#### Value vs Reference Types

1. Under Value Types (also called primitives) we have:
- Number
- String
- Boolean
- Undefined
- null

2. Reference Types (also objects)
- Object
- Function
- Array

These are 2 independant variables
```
let x = 10;
let y = x;
```
If I change `x`, then `y` will not change

Int this expression, `y` change becuase this is for reference
```
let x = {value: 10};
let y = x;

x.value = 20
```

- Primitives (or value types) are copied by values
- Objects or Reference Types are copied by their REFERENCE

1. In this example, number is out of the scope, so it will not change the value when the function is called **it was passed by VALUE**
```
let number = 10;
function increase(number){
  number++;
}

increase(number);
console.log(number);
```

2. In this example, obj is an object, so it will change when the function is called **it was passed by REFERENCE**
- NOT 2 independant copies
```
let obj = { value: 10 };

function increase(obj){
  obj.value++;
}

increase(obj);
console.log(obj);
```

#### Enumerating properties of an Object

```
const circle = {
  radius: 1,
  draw(){
    console.log('draw');
  }
};
```
1. With this option we can iterate over all the methods or properties
```
for (let key in circle)
  console.log(key, circle[key]);
```

2. `For of` loop, can only be used with iterables (like arrays and maps) (an object is not iterable)
```
for (let key of circle)
  console.log(key);
```

3. Instead of the previous, we use the `Object.keys` to return an array, and now the for of can be used
```
for (let key of Object.keys(circle))
  console.log(key);
```
- Another Example:
```
let array6 = {
  id: 21,
  name: 'kraus',
  lastname: 'klein',
  infoAll(){
    console.log(this.id);
  }
};

function showAll2(object1){
  for( let key of Object.keys(object1) )
    console.log(key);
}

showAll2(array6);
```

- Object is a built in constructor function  

4. The `Object.entries` returns each key value pair as an **array**, also another way to access methods and properties of an object
```
for (let entry of Object.entries(circle))
  console.log(entry);
```   
Another example:    
```
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
```

5. With the `in` operator, we check if a property exist within an object
```
if ('radius' in circle) console.log('yes');
```   
- when you create an object like this (object literal syntax) that internally use the Object function like this  
```
function Object() {}
```
- when this object literal is created like the following code, it automatically calls the object Function (like the previous code/form)
```
const x = {value: 1};
```
- this is also:
```
const x = new Object();
```

- Also, all functions in JS are Objects;


#### Cloning and Object

1. The way to cop or clone an object is:

```
const circle = {
  radius: 1,
  draw(){
    console.log('draw');
  }
};
```
- this is an old way to do it
```
const another {};

  for (let key in circle)
    another[key] = circle[key];
```

- A modern way to do it is:
```
const another = Object.assign({}, circle); // {}: is an empty object; circle: is the source object
```

- The most sophisticated way to do it is, (Spread Operator):
```
const another = { ...circle }; // the **spread operator** takes all the properties and methods from an objects and put it inside of the brackets
```

##### Spread Operator

- Assign: puts all methods and properties from one or more source objects to another object (may be used to combine into a single object)
- The **Spread Operator** (...) puts all the properties and methods inside of the curly braces

##### List all properties of an object (even hiden)
- After running the `getPrototypeOf` function, expand the `constructor` function:  
```
console.log( Object.getOwnPropertyNames( array10) );
console.log( Object.getPrototypeOf( array10) );
```

- Documentation at (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects]

#### Garbage Collection  

- In another languages we have to alocate and dialocate memory (when creating an object), but not in Javasrcipt
- In Javascript we can create the object and we don't have to dealocate
- The garbarge collector is something in the JavaScript Object and dealocate the memory for object and constants that are not longer used
- The garbage collector runs in the background and happens automatically (alocate and dealocate)

#### Math

- the `Math` object is usefull for mathematical operations
- The developer.mozilla.org is the first resource to find documentation about the math library
- If ever have to deal with math calculations, you can come back here and double check the methods
- for example `Math.random()`
- another example is: `Math.round(1.9)`
- another example is: `Math.max(7, 3, 6, 1, 8)`
- another example is: `Math.min(1, 3, 5, 7, 9)`


#### String

- Strings Documentation from Mozilla: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
- Second built in object is the `String` object  
- Primitive types do not have properties and methods, only objects do  


```
const message = ' This is my 'first' message '; // this is a string primitive
// but we can use this as an object
message.indexOf('my');
message.replace('first', 'second'); // this replace the original word with the second one, returns a new string, not change the original one
message.toUpperCase(); //  returns a new string, not change the original one
message.trim(); //  returns a new string, not change the original one (removes spaces at the beggining and at the end)
message.trimLeft(); //  returns a new string, not change the original one
message.split(' '); //  returns a new string, not change the original one
```
1. in JS there is 2 kinds of strings: primitive and object

```
const another = new String('hi'); // this is an object
```

- There are some scape notation characters, like: \n for space:
- the documentation about space characters are here: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
- `\'` -> null character
- `\\` -> backslash
- `\n` -> new line
- `\t` -> tab

#### Template Literals

- with the previous string way, we can not visualize exactly how is written, to solve that, template literals are used

```
`This is my
'first' message
`
```

- another example:
```
const lastName = 'Sanc';
const date = '21/4/2020'

const zzz = `Hello
Sergio ${lastName}
This is a message example with 'examples';
created on: ${date}
`;
console.log(zzz);
```

#### Date

- In this case `Date()` is the constructor function

```
const now = new Date();
const date1 = new Date('May 11 2018 09:00')
const date2 = new Date(2018, 4, 11, 9); // the rest of the arguments are initialized as zero

new.setFullYear(2017);
new.toDateString();
new.toTimeString();
new.toISOString(); //this is the regular way to transfer dates between the client and the server (standard use in web and mobile applications)
```

#### Exercise Address Object
- Check `c.js` for codes.  

#### Exercise Factory and constructor Function
- Check `c.js` for codes.  

#### Exercise Object Equality
- Check `c.js` for codes.  

#### Exercise Blog Post Objects
- Check `c.js` for codes.  

#### Exercise constructor Functions
- Check `c.js` for codes.  

#### Exercise Price Range Objects
- Check `c.js` for codes.  

### Arrays
---


#### Introduction

- in this section, it will be all about arrays

#### Adding Elements

```
const numbers = [3, 4];
```
- to add an element at the beggining `unshift` method (modifies the original object)
```
numbers.unshift(1, 2);
```
- To add an element at the middle `splice` method
- First arg: position; sec arg: elements to delete; the rest: elements to add
```
numbers.splice(2, 0, 'a', 'b');
--
const numbers = [21, 22, 25, 45, 55];
numbers.splice(2, 0, 'a', 'b');
```
- To add an element at the end `push` method
```
numbers.push(5, 6);
```

#### Finding Elements (primitives)

- Finding elements depends if are looking for primitives or references in an array

```
const numbers = [1, 2, 3, 1, 4];

numbers.indexOf('a'); // returns -1 if the element does not exist or the position if exist

numbers.indexOf(1); // returns the index of the first number found 1

numbers.indexOf(1, 2); // returns the index but start searching at the second argument

numbers.lastIndexOf(1); // returns the last index of the found number (in case more than 1 element)

number.includes(1); // returns true if the element exist in the array, false if not;
```

#### Finding Elements (references types)

- In the previous was primitives, in this one only references

- to find elements in reference arrays, we dont use includes (like in primitives), we use find, the documentation is in here: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find]
- For Example (find), returns the object or undefined if it didn't find it:

```
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];
const course = courses.find( function(course){
  return course.name === 'c';
  } );
console.log( course );
```
- For Example (findIndex), returns the index of the first element found or -1 if not find:
```
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];
const course2 = courses.findIndex( function(course2){
  return course2.name === 'a';
  } );
console.log( course2 );
```
- Using arrow function:
```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

#### Arrow Functions

- The arrow function, uses the `=>` notation, a couple of examples as follows:
- if it is only one argument, the parenthesis can be deleted, also the curly brackets and the `return` word
- Arrow Functions Documentation at (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions]

```
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
```
- If no parameters then have to have empty parenthesis:
```
( () => {} )
```

- And if there is only one line, then may remove curly brackets
```
arrayx1.find( (element) => { element > 10 } );
```
- Example:
```
arrayx1.find( element => element > 10 );
```

#### Removing Elements

- to add elements from an array
```
const numbers = [1, 2, 3, 4]

numbers.push() // add at the end
numbers.unshift() // add at the beggining
numbers.splice() // add at the middle

```

- To remove elements:
- Remove the last element of the array and return it
```
numbers.pop()
```
- Remove the first element
```
numbers.shift()
```
- Remove something in the middle, we pass 2 (the index), and 1 (the number of elements to remove)
```
numbers.splice(2, 1)
```

#### Emptying an Array  

- To empty an array, would be 3 solutions:  

- Solution 1: (this does not work if there is multiple references)
```
let numbers = [1, 2, 3, 4];
let another = numbers;
number = [];
console.log(numbers);
```

- Solution 2:  (it is preferred)  
```
let numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);
```

- Solution 3:  
```
let numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.lenght);
console.log(numbers);
```

- Solution 4:
```
while (numbers.length > 0)
  numbers.pop();
```

#### Combining and Slicing Arrays

- The `concat` method, just return the new array
- The `slice`, use 2 arguments, starting index and ending index
- The `combined` and `sliced` are copied, because they are **primitives**, but an object will be **referenced** (not copied)
```
const first = [1, 2, 3];
const second = [5, 6, 9];

const combined = first.concat(second);
// combined will be: [1, 2, 3, 5, 6, 9];
console.log(combined);

const sliced = combined.slice(2,4);
// sliced will be: [3, 5];
```
- If the elements are primitive, they are copied by value;
- If they are reference types, they are copied by the reference
- The second argument of the slice function can be deleted, and then it will include al elements til the end

#### The Spread Operator

- the spread operator are this `...` points that means all elements in an array are included
```
const first = [1, 2, 3];
const second = [5, 6, 9];

const combined = [...first, ...second];
const combined = [...first, 'a', ...second, 'b'];

```

- To copy an array with the spread operator, we can use:

```
const copy = [...combined];
```


#### Iterating and Array

- option 1 to iterate an array:

```
const numbers = [1, 2, 3];

for (let number in numbers)
  console.log(number);
```

- option 2 to iterate an array:
- when we call the the forEach method, the function will be executed for each element in the array;
```
const numbers = [1, 2, 3];

numbers.forEach( function(number){
  console.log(number);
  } );

```


- Option 3 to iterate an array, the arrow function (with only one argument):

```
const numbers = [1, 2, 3];

numbers.forEach( number => console.log(number) );
```


- Option 4 to iterate an array, the arrow function (with only 2 arguments):

```
const numbers = [1, 2, 3];

numbers.forEach( (index, number) => console.log(number, index) );
```



#### Joining arrays

- Join is to make an array in only one piece with an specific separator, usually returns string
- one of the uses, might be while creating urls
```
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);
```

```
const message = 'This is a random message';
const parts = message.split(' ');
console.log(parts);

const joined = parts.join('-');
console.log(joined);
// result: This-is-a-random-message;
```

#### Sorting Arrays

- sorting arrays:
```
const numbers = [2, 3, 1];
numbers.sort(); // they will be sorted
numbers.reverse(); // they will be reversed
```

- Sorting arrays with Objects: you can sort it, in this way:
```
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
```


#### Testing the elements of an array

- There are 2 functions to test values in an array: `some` and `every`;
- `every` matches the given criteria for every element in the array;
- `some` at least 1 element matches the given criteria;  


- Example Function `every` (if this criteria does not match, the method `every` stop searching):
```
const numbersX1 = [2, 2, 4, 5, 34, 21, 89];
const allPositive = numbersX1.every( function(value) {
  return value > 0; // if this criteria does not match, the function stop searching
  } );

console.log(allPositive);
```
- Example function `some`:
```
const numbersX2 = [2, 2, 4, 5, 34, 21, 89];
const atLeastOnePositive = numbersX2.some( function(value) {
  return value <= 1;
  } );

console.log(atLeastOnePositive);
```

#### Filtering and Array

- In this example, filter returns only positive numbers:
```
const numbersX3 = [4, -1, 2, 3];
const filtered = numbersX3.filter( function(value){
  return value >= 0;
  } );
console.log(filtered);
```

- the previous function can be re-Writen in this way:
```
const numbersX4 = [4, -1, 9, 3];
const filtered = numbersX4.filter( value =>  value >= 0 );
console.log(filtered);
```
- In the real word application, we will use an array of objects, so for example, restaurants that are open at specific time, so we can use filter, to filter the restaurant time, and show them;

- Another example, filter, returns only words with more than 6 letters on it:

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
```


#### Mapping and Array


- The following code, can be re-written in something called "CHAINABLE"
```
const numbersX5 = [4, -1, 9, 3];

const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => ({ value: n }) ); // objects must be in parenthesis, not only curly braces

console.log(items);
```

- the result, after chaining is:  
- According to a comment, the arrow function does not include the `return` keyword, because in this case is only 1 line;
```
const numbersX5 = [4, -1, 9, 3];

const filtered = numbersX5.filter(n => n >= 0).map(n => ({ value: n }) ); // this is chaining

console.log(items);
```

- This is another example of *chaining*:
```
const numbersX5 = [4, -1, 9, 3];

const items = numbersX5
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter( obj => obj.value )
  .map( obj => obj.value );

console.log(items);
```

- To understand the `map` function:
```
const numbersX6 = [4, -1, 9, 3];
const filteredX1 = numbersX6.filter( value => value >= 2 );
const items = filteredX1.map( n => '<li>' + n + '</li>' ).join('');
console.log(items);
```
- this example can be re-written by:
```
const numbersX6 = [4, -1, 9, 3];
const filteredX1 = numbersX6.filter( value => value >= 2 ).map( n => '<li>' + n + '</li>' ).join('');
console.log(filteredX1);
```

- Also, without using the array function syntaxys, we can write:

```
const numbersX7 = [4, -1, 9, 3];
const filteredX7 = numbersX7.filter( n => n >= 2 );
const itemsX7 = filteredX7.map( n => {
  const obj = { value: n } // this line can be replaced with: **return { value: n };**
  return obj;
  });
```


#### Reducing and array  

- The reduce method reduce all the values into a single value using iterations.  
- The reduce method takes 2 arguments: function callback and the starting value of the accumulator (for this example).  

```
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce( (accumulator, currentValue) => {return accumulator + currentValue; }, 0 );

console.log(sum);
```

- Using the arrow function:  
```
const numbers = [1, -1, 2, 3];
const sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );
```

- This is possible using an iteration, but is not elegant
```
let sum = 0;
for (let n of numbers)
sum += n;
```


#### Exercise Array from Range



#### Exercise Includes


#### Exercise Except


#### Exercise moving an Element


#### Exercise Count Occurrences


#### Exercise Get Max


#### Exercise Movies




### Functions
---

#### Function Declaration vs Expressions

- This is a function declaration
```
function walk(){
  console.log('walk');
}
```

- functions are objects in Javascript
- Anonymous Function expression
- this is a function expression
```
let run = function() {
  console.log('run');
};

```

- Named Function expression
```
let run = function walk() {
  console.log('run');
};

```
- to call the function:
```
run();
```

- JS moves all the functios declarations to the top of the file: this is hoisting

#### hoisting


- This is a function declaration
- can be called before declaration (because the hoisting on JS)
```
function walk() {
  console.log('walk');
};
```

- This is a Function expression  
- will get error if call the functions before declare it
```
const run = function() {
  console.log('run');
};

```

#### Arguments  

- JS is dynamic language: for example:
- declare a variable and then change its type (that part of the dynamic lang)  
```
let x = 1;
x = 'a';
```

- In functions, the arguments are defined, lik: `a`, `b`, etc...
```
function sum(a, b){
  return a+ b;
}
```
- specifically a and b, should be passed, but JS has an interesting object called: arguments which is iterative using for of:  
- every functions has a special object called `arguments`  and can be see using the console:  
```
function sum(){
  let total = 0;
  for( let value of arguments )
    total += value;
  console.log(arguments);  
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 10))
```


####  The REST operator

- The rest operator is the 3 points before the argument, and it convers the argument, in an array
- The REST operator should be applied only to the last argument in the function, cannot be more arguments after the rest operator
```
function sum(...args){
  return args.reduce( (a, b) => a + b );
}
console.log(sum(1, 2, 3, 4, 5, 11))
```

- In this example, we have 2 arguments
```
funtion sum(discount, ...prices){
  const total = prices.reduce( (a,b) => a + b );
  return total * (1 - discount);
}

console.log( sum(0.1, 20, 30) )
```
- it is called the rest operator because we can call 0 or more parameters before the rest operator

#### Default Parameters

- we can use the || (or logical) to determinate between values:
```
function interest( principal, rate, years ){
  rate = rate || 3.5; // if rate is truthy, then will use it, if not, will use 3.5
  years = years || 5;
  return principal * rate / 100 * years;
}

console.log( 1000, undefined, 5 )
```

- a Default value can be at the definition of the parameter
```
function interest( principal, rate = 3.5, years = 5 ){
  return principal * rate / 100 * years;
}

console.log( 1000 )
```
- once a parameters has a default value, we should give the rest of the parameters a value
- a function can have a default value in an argument
```
function interest( principal, rate, years ){
  return principal * rate / 100 * years;
}

console.log( 1000, undefined, 5 ) // undefined can be used to pass the default value
```
- as a best practice, we should give the default value to the last parameter

#### Getters and Setters

```
const person = {
  firstName: 'Kraus',
  lastName: 'Wegzeug',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName());
```

- if we want to reassign, we user settters and getters, like this:
```
const person = {
  firstName: 'Kraus',
  lastName: 'Wegzeug',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Bene Llini';

console.log(person.fullName);
console.log(person.fullName()); // this would be an error, because fullName is not a function;
```



#### Try and Catch

- we can't pass a different type of value in the example, otherwise it will throw an error/exeption:
- create error handling at the beggining is called: defensive programming
- throw an exception is a common jargon
- Documentation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error]  
- the obect e, seems to be automatically created when we use: `throw new Error('Value is not a String.');`
```
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
    if(parts.lenght !== 2)
      throw new Error('Enter a first and last name');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try{
  person.fullName = '';
}
catch (e){
  console.log(e); // typically report an error is in a red label
}
```

- Handling a specific error:
```
try {
  foo.bar()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
  }
  // ... etc
}
```

#### Local vs Global Scope

- The scope of a variable determinates where that variable or constant is accessible
- the const is limited to the block in which was defined and can't access the const outside
- a `const` may be declared inside of a `if` or inside of a `for`  
- Define global variable is considered a bad practice
- In the following example: `color` can be accessed from everywhere; `color` can also be reasigned inside of a scope, and its value will be changed; `message` will not be accessible outside of the scope;   

```
const color = 'red';

function start(){
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}
```

#### Let vs Var

- `var` is not limited to the function in which is defined (can be in the window object, and accessible/re-assignable in a function for example);
- when `var` is declared, is not limited to the block in which was defined (but `let` is);  
- `let` is limited to the function in which was declared (function scoped), so can't be reassigned
- the issue with var is that, if we re-assign by mistake, it is possible, causing a lot of bugs, that's why is suggested to user `let` instead
- Starting ES6 (ES2015): `let` can be used to create variables , `const` as well => they are Block scoped.

```
function start(){
  for ( let i = 0; i < 5; i++)
    console.log(i);
}
```

- the `var` color is attached to a window object in a browser
- age is not attached (when use `var`)
- take away: avoid to use the `var` scope because is attached to a function and not block scoped
- In this example, the function is a global functions and it is attached to the window object
```
var color = 'red';
var age = 32;

function sayHi(){
  console.log('hi');
}
```

#### The this keyword

- `this` refers to the object that is executing the current function  
- Rule 1: if the function is defined inside of an object, then is a method
- Rule 2: if the function is not inside of a global object, then is a function that is part of the object: `window`

- in the next code, `this` returns the object Video
```
const video = {
  title: 'a',
  play(){
    console.log(this);
  }
};

video.stop = function(){
  console.log(this);
};

video.stop();
```

- Rule 2: `this` returns the window object in this case, because is a global function
```
function playVideo(){
  console.log(this);
}

playVideo();
```

- If we call the function using the `new ` operator, then it will create a new empty object, and `this` will be part ofthat object
```
function Video(title) { // Video use the mayus V, because is a constructor function
  this.title = title;
  console.log(this);
}

const v = new Video('b');
```
- In this case, this refers to the global object, because is inside of a callback function (so it will return the window object)
```
const video = {
 title: 'a',
 tags: ['a', 'b', 'c'],
 showTags(){
   this.tags.forEach(function(tag) {
     console.log(this, tag); // in this case, this refers to the global object, because is inside of a callback function
   });
 }
};
video.showTags();
```

- To resolve this issue, we have to pass the `this` object as a second parameter in the forEach function
```
const video = {
 title: 'xxyyzz',
 tags: ['x', 'y', 'z'],
 showTags(){
   this.tags.forEach(function(tag) {
     console.log(this, tag);
   }, this); // because we pass this paramenter here, then `this` refers to the actual object and not the global one
 }
};
video.showTags();
```


#### Changing This

- Solution 1, adding `const self = this;`, this is an old way, (approach not suggested);
```
const video1 = {
 title: 'xxyyzz',
 tags: ['x', 'y', 'z'],
 showTags(){
   const self = this;
   this.tags.forEach(function(tag) {
     console.log(self.title, tag);
   });
 }
};
video1.showTags();
```

- Solution 2: using the Bind() method; this is an old way to do it;
```
const video1 = {
 title: 'xxyyzz',
 tags: ['x', 'y', 'z'],
 showTags(){
   this.tags.forEach( function(tag) {
     console.log(this.title, tag);
   }.bind(this)); // the bind method, is used just right after the callback function
 }
};
video1.showTags();
```

- Solution 3: using the arrow function; The good thing about using the arrow function is that inherit the `this` value:
- In this case, `this` is not rebound to a new object
```
const video1 = {
 title: 'xxyyzz',
 tags: ['x', 'y', 'z'],
 showTags(){
   this.tags.forEach( tag => { // arrow f inherit `this` from the containing function
     console.log(this.title, tag);});
 }
};
video1.showTags();
```


#### Exercise Sum of Arguments


#### Exercise Area of a circle


#### Exercise Error Handling












---

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).