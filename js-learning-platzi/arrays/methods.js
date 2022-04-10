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

