let array1 = ['aka', 'bail', 'clock', 'deter'];
// answer: 
array1.pop();
console.log(array1.pop());

class AnimalClass {
	static belly = [];
	eat() { AnimalClass.belly.push('food'); }
}

let newAnimal = new AnimalClass();
newAnimal.eat();

console.log( AnimalClass.belly[0] );

array2 = ['a', 'x', 'y', 'z'];
array2[100] = 'pp';
console.log(array2[50]);
console.log(array2.length);

var sound = "grunt";
var bear = { sound: "roar" }

function roar(){
	console.log(this.sound);
}

console.log( roar.bind(bear) );

console.log('I')

// setTimeout( () => {
// 	console.log('Love')
// }, 0);

console.log('Javascript');

var v = 1;
var f1 = function (){
	console.log(v);
}

var f2 = function (){
	var v = 2;
	f1();
}

f2();


const x = 6%2;
const y = x ? 'One': 'Two';
console.log(y);


const a = { x: 1 };
const b = { x: 1 };

console.log(a.x === b.x);
console.log(a['x'] === b['x']);
console.log(a != b);
console.log(a === b);



let bear = {
	sound: "roar",
	roar(){
		console.log(this.sound);
	}
}

bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();


const numbers1 = [1,2,3];
const [a, b, c] = numbers;


var thing;

let func = function(str1 = 'no arg'){
	console.log(str1);
}

func(thing);
func(null);
func(undefined);



let vowels = "aeiou";

for(var i=0;i<vowels.length;i++){
	console.log(vowels[i]);
}


//let vowels = "aeiou";
vowels.shift();
console.log(vowels);



// Falsy values:
// 0, null, "", (empty string), undefined, NaN, false.

var arr = ['a', false, true, 1, 2, 3, NaN, undefined, null, 'end'];

function removeFalseyValuesFromArray() {
	var output = [];
	for(var i=0, len=arr.length; i<len; i++) {
		if(arr[i]) {
			output.push(arr[i]);
		}
	}
	return output;
}



var x = 1;
 
var f1 = function () {
    console.log(x2)   ;
}
 
var f2 = function (){
    var x = 2;
    f1();
}
 
 
f2();
console.log(x);
 
var testJSON = '{ "countries" : [' + 
	'{"country": "Ireland", "flag": "IR"},' +
	'{"country": "Germany", "flag": "DE"},' +
	'{"country": "Argentina", "flag": "AR"},]}';
 
var x1 = JSON.parse(testJSON);
 
console.log(testJSON.countries[0].flag)
 
 
 
let x = 10;
let y = 0;
 
while( x < 13 || y <= 2 ){
	x++;
	y+=2;
}
 
console.log("x=", x, " y=", y);
 
 
var cat = {name: "Athena"};
 
function swap(feline){
	feline.name = "sumadre";
	feline = { name: "SuOtraMadre" }
}
 
swap(cat);
console.log(cat.name);
 
 
let obj = {b: 1};
console.log(obj.a?.b);
 
let cosas = ['a', 'b', 'c', 'd'];
cosas.splice(0,2);
console.log(cosas);
// print c and d
 
 
const dessert = { type: 'pie' }
dessert.type = "pudding";
 
const seconds = dessert;
seconds.type = 'fruit';
 
 
 
const a = [x:1]
const b = [x:1]
 
 
var names = ['jamecho', 'obama', 'amparo'];
names.forEach( e => { console.log(e) });
names.map( e => { e + 'x'; } );
names.forEach( e => { console.log(e) });
console.log(x1);
 
names.map( (e) => { console.log(e) } )