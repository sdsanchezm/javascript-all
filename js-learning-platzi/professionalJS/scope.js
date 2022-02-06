// Global Scope
var message = 'Hello, Platzi!';
var $ = function(message) {
  console.log('Say: ' + message);
};

// Function Scope
function printNumbers() {
  var i;
  for (i = 0; i < 10; i++) {
    function eventuallyPrintNumber(n) {
      setTimeout(function() {
        console.log(n);
      }, 100);
    }

    eventuallyPrintNumber(i);
  }
}
printNumbers();

// Block Scope
function printNumbers2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
}

printNumbers2();

// Module Scope

import MediaPlayer from './MediaPlayer.js' // aca se puede quitar el .js 
export default MediaPlayer;

// this is a different way to do it:
export const foo = 'bar'; 
// here, we should use:
import { foo } from './MediaPlayer'

