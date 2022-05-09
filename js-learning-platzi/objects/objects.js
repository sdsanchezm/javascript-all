const object1 = require('./data1.json');



// Iterate an Object 
// *********************************

let k1 = function () {
	for (const item in items) {
	  console.log(item)
	}


	Object.entries(items).map(item => {
	  console.log(item)
	})

	Object.entries(items).forEach(item => {
	  console.log(item)
	})

	for (const item of Object.entries(items)) {
	  console.log(item)
	}	
}


let removeDuplicatesInArrayOfObjects1 = function(arrayOfObjects){
    const filteredArray = arrayOfObjects.reduce((accumulator, current) => {
        const validator = accumulator.find( item => item.id === current.id );
        if (!validator) {
          return accumulator.concat([current]);
        } else {
          return accumulator;
        }
      }, []);
    return filteredArray;
}

let removeDuplicatesInArrayOfObjects2 = function(arrayOfObjects){
	const seen = new Set();
	const filteredArray = arrayOfObjects.filter(item => {
	  const validateDuplicated = seen.has(item.id);
	  seen.add(item.id);
	  return !validateDuplicated;
	});
	
	return filteredArray;	
}

let randomlyReturnAnObject = function(array1){
	let result = array1.filter( (item) => {
		let x = Math.floor(Math.random()*10);
		console.log(x);
		if(x>4) return true;
		else return false;
		// return item.id >= 1;
	});
	return result;
}

let removeDuplicatesInArrayOfObjects3 = function(array1){
	const set1 = new Set();
	const result = array1.filter( (item) => {
		const validate = set1.has(item.id);
		if(!validate) {set1.add(item.id)};
		return !validate;
	});
	return result;
}

const varTest1 = removeDuplicatesInArrayOfObjects2(object1.posts);
console.log(varTest1);

const varTest2 = removeDuplicatesInArrayOfObjects2(object1.posts);
console.log(varTest2);

const varTest3 = randomlyReturnAnObject(object1.posts);
console.log(varTest3);

const varTest4 = removeDuplicatesInArrayOfObjects3(object1.posts);
console.log(varTest4);

