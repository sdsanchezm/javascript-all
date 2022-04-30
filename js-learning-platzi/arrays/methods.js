// the source of this summary is:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  
// Nice summary not made by me

// *********************************************************
// *******************  Static methods *********************


Array.from();
// Creates a new Array instance from an array-like object or iterable object.

Array.isArray();
// Returns true if the argument is an array, or false otherwise.

Array.of();
// Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.


// *********************************************************
// ******************* Instance Properties *****************

Array.length
// Reflects the number of elements in an array.


// *********************************************************
// ******************* Instance methods ********************


at();
// Returns the array item at the given index. Accepts negative integers, which count back from the last item.

concat();
// Returns a new array that is the calling array joined with other array(s) and/or value(s).

copyWithin();
// Copies a sequence of array elements within an array.

entries();
// Returns a new array iterator object that contains the key/value pairs for each index in an array.

every();
// Returns true if every element in the calling array satisfies the testing function.

fill();
// Fills all the elements of an array from a start index to an end index with a static value.

filter();
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

find();
// Returns the found element in the calling array, if some element in the array satisfies the testing function, or undefined if not found.

findIndex();
// Returns the found index in the calling array, if an element in the array satisfies the testing function, or -1 if not found.

flat();
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

flatMap();
// Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.

forEach();
// Calls a function for each element in the calling array.

groupBy(); 
// Groups the elements of an array into an object according to the strings returned by a test function.

groupByToMap(); 
// Groups the elements of an array into a Map according to values returned by a test function.

includes();
// Determines whether the calling array contains a value, returning true or false as appropriate.

indexOf();
// Returns the first (least) index at which a given element can be found in the calling array.

join();
// Joins all elements of an array into a string.

keys();
// Returns a new array iterator that contains the keys for each index in the calling array.

lastIndexOf();
// Returns the last (greatest) index at which a given element can be found in the calling array, or -1 if none is found.

map();
// Returns a new array containing the results of invoking a function on every element in the calling array.

pop();
// Removes the last element from an array and returns that element.

push();
// Adds one or more elements to the end of an array, and returns the new length of the array.

reduce();
// Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.

reduceRight();
// Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.

reverse();
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

shift();
// Removes the first element from an array and returns that element.

slice();
// Extracts a section of the calling array and returns a new array.

some();
// Returns true if at least one element in the calling array satisfies the provided testing function.

sort();
// Sorts the elements of an array in place and returns the array.

splice();
// Adds and/or removes elements from an array.

toLocaleString();
// Returns a localized string representing the calling array and its elements. Overrides the Object.prototype.toLocaleString(); method.

toString();
// Returns a string representing the calling array and its elements. Overrides the Object.prototype.toString(); method.

unshift();
// Adds one or more elements to the front of an array, and returns the new length of the array.

values();
// Returns a new array iterator object that contains the values for each index in the array.


// ************************************************************************
// ************************************  Examples:
// ************************************************************************

const people = [
    {
        id: 1,
        name: 'Morty Smith',
        gender: 'male',
        eyeColor: 'black',
        mass: 70,
        height: 132,
    },
    {
        id: 2,
        name: 'Beth Smith',
        gender: 'female',
        eyeColor: 'green',
        mass: 126,
        height: 201,
    },
    {
        id: 3,
        name: 'Rick Sanchez',
        gender: 'male',
        eyeColor: 'brown',
        mass: 61,
        height: 120,
    },
    {
        id: 4,
        name: 'Jerry Smith',
        gender: 'male',
        eyeColor: 'blue',
        mass: 84,
        height: 125,
    },
    {
        id: 5,
        name: 'Summer Smith',
        gender: 'female',
        eyeColor: 'green',
        mass: 94,
        height: 158,
    },
    {
        id: 6,
        name: 'Bird Person',
        gender: 'male',
        eyeColor: 'black',
        mass: 190,
        height: 108,
    }
];

//*********************MAP*********************
console.log(`********************MAP*********************`);
//1. Get array of all names
const map1 = people.map( (item) => (item.name) );
console.log(map1);
//2. Get array of all heights
const map2 = people.map( item => item.height );
console.log(map2);
//3. Get array of objects with just name and height properties
const map3 = people.map( item => ({ name: item.name, height: item.height }) );
console.log(map3);
//4. Get array of all first names
const map4 = people.map( item => item.name.split(' ')[0] );
console.log(map4);

//*********************REDUCE*********************
console.log(`*********************REDUCE*********************`);
//1. Get total mass of all people
const reduce1 = people.reduce( (accum, current) => (accum + current.mass), 0);
console.log(reduce1);
//2. Get total height of all people
const reduce2 = people.reduce( (accum, current) => (accum + current.height), 0);
console.log(reduce2);
//3. Get total number of people by eye color
const reduce3 = people.reduce( (accum, current) => {
    if(accum[current.eyeColor]){
        accum[current.eyeColor]++;
    }else{
        accum[current.eyeColor] = 1;
    }
    return accum;
    
}, {});
console.log(reduce3);
//4. Get total number of people in all the character names
const reduce4 = people.reduce( (accum, current) => {
    return accum + current.name.length;
}, 0);
console.log(reduce4);

//*********************SORT*********************
console.log(`*********************SORT*********************`);
//1. Sort by mass
const sort1 = people.sort( (a, b) => {
    if(a.mass > b.mass) return 1;
    if(a.mass < b.mass) return -1;
    return 0;
} );
console.log(sort1);
//2. Sort by height
const sort2 = people.sort( (a, b) => { 
    if (a.height > b.height){ return 1 };
    if (a.height < b.height){ return -1 };
    return 0;
} );
console.log(sort2);
//3. Sort by name
const sort3 = people.sort( (a, b) => { 
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
console.log(sort3);
//4. Sort by gender
const sort4 = people.sort( (a, b) => {
    if(a.gender < b.gender) return -1;
    if(a.gender > b.gender) return 1;
    return 0;
});
console.log(sort4);

//*********************FILTER*********************
console.log(`*********************FILTER*********************`);
//1. Get people with mass greater than 98
const filter1 = people.filter( (item) => {
    return item.mass > 98;
});
console.log(filter1);
//2. Get people with height less than 150
const filter2 = people.filter( (item) => {
    return item.height < 150;
});
console.log(filter2);
//3. Get all male people
const filter3 = people.filter( (item) => item.gender === 'male' );
console.log(filter3);
//4. Get all female people
const filter4 = people.filter( (item) => {
    return item.gender === 'female';
});
console.log(filter4);

//*********************EVERY*********************
console.log(`*********************EVERY*********************`);
//1. Does every character have blue eyes?
//const every1 = people.filter( (item) => item.eyeColor === 'blue' ).every( (item) => item.eyeColor === 'blue' );
const every1 = people.every( (item) => item.eyeColor === 'blue' );
console.log(every1);
//2. Does every character have mass more than 60?
const every2 = people.every( (item) => item.mass > 60 );
console.log(every2);
//3. Is every character shorter than 202?
const every3 = people.every( (item) => {
    return item.height < 202;
});
console.log(every3);
//4. Is every character male?
const every4 = people.every( (item) => {
    return item.gender === 'male';
});
console.log(every4);

//*********************SOME*********************
console.log(`*********************SOME*********************`);
//1. Is there at least one male character?
const some1 = people.some( (item) => item.gender === 'male' );
console.log(some1);
//2. Is there at least one character with blue eyes?
const some2 = people.some( (item) => { item.eyeColor === 'blue' });
console.log(some2);
//3. Is there at least one character taller than 210?
const some3 = people.some( (item) => { 
    return item.height > 210 
});
console.log(some3);
//4. Is there at least one character that has mass less than 70?
const some4 = people.some( (item) => { return item.mass < 70; } );
console.log(some4);



