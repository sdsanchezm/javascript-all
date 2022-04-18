// WORKING 
let factorial = function (n){
	if(n < 1){
		return 1;
	}
	return n * factorial(n - 1);
}

// NOT WORKING 
let fibonacci = function(n){
	//pass
}

console.log( factorial(5) );

// NOT WORKING
let printForward = function(n){
	if(n == 1){
		return 1;
	}
	let x = 1;
	console.log( printForward(x) )
	
}

// working
let printBackwards = function(n){
	// let x = 1;
	if(n <= 1){
		return 1;
	}
	console.log(n);
	return printBackwards(n - 1);
}

// working
let sum_recursively = function(n){
	// let x = 1;
	if(n <= 1){
		return 1;
	}
	return n + sum_recursively(n - 1);
}

// Working
let sum_array_recursively = function(array5){
	let begin = 0;
	let end = array5.length - 1;
	if(array5.length == 1){
		return 1;
	}
	let removedItem = array5.pop();
	return sum_array_recursively(array5) + removedItem;
}

// working 
let palindrome_recursively = function(array1){
	let begin = 0;
	let end = array1.length-1;
	if(array1.length == 1){
		return 1
	}
	if(array1[begin] == array1[end]){
		array1.pop();
		array1.shift();
		return palindrome_recursively(array1);
	}
	else{
		return 0;
	}
}

let letterVerification_recursively = function(s){

	// let flag = 1;
	// let s = string1.split(1);
	// console.log(s, s.length);
	if(s.length == 1){
		return s[0];
	} else if (s.length > 1) {
		for(let i = 1; i < s.length; i++){
			if(s[0] == s[i])
				break;

			if(i == s.length-1)
				return s[0];
		}
		let xx = s.slice(1);
		console.log(xx);
		letterVerification_recursively( xx );
	} else {
		return 0;
	}
}

// NOT Working
let reversingArray_recursively = function(){
	// pass
}

console.log( printForward(4) );
console.log ( printBackwards(5) );
console.log( sum_recursively(6) );

array2 = [1, 3, 5, 7, 5, 3, 1];
const word1 = 'aapple';

console.log( palindrome_recursively(array2) );
console.log( sum_array_recursively( [1,2,3,4,5,6]) );
console.log( letterVerification_recursively(word1) );



// You will be given an array of integers,
// write a recursive solution to print it in reverse order.
// Input: 5 69 87 45 21 47 Output: 43 22 45 87 69
 


