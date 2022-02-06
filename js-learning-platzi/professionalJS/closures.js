// this is called IIFE (Immediately Invoked Function Expression) 
(function() {
  let color = 'green';

  function printColor() {
    console.log(color);
  }

  printColor();
})();


// Functions that return functions 
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function() {
    console.log(colorMessage);
  };
}

// let greenColorPrinter = makeColorPrinter('green');
// console.log(greenColorPrinter());

// private variables:

function makeCounter(n) {
  let count = n;

  return {
    increase: function() {
      count = count + 1;
    },
    decrease: function() {
      count = count - 1;
    },
    getCount: function() {
      return count;
    },
  };
}

let counter = makeCounter(10);

console.log('The count is:', counter.getCount());
counter.increase();
console.log('The count is:', counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The count is:', counter.getCount());

counter.count = 0;
console.log('The count is:', counter.getCount());