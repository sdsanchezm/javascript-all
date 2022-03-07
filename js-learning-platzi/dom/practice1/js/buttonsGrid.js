const bt5 = document.querySelector('#btn5');
let array1 = [4, 1, 2, 3, 6, 9, 8, 7];
let temp;
bt5.addEventListener('click', (event) => {
    console.log('click ok');
    let k1 = document.querySelectorAll('.buttonClass');
    k1.item(0).innerHTML = array1[0];
    k1.item(1).innerHTML = array1[1];
    k1.item(2).innerHTML = array1[2];
    k1.item(5).innerHTML = array1[3];
    k1.item(8).innerHTML = array1[5];
    k1.item(7).innerHTML = array1[6];
    k1.item(6).innerHTML = array1[7];
    k1.item(3).innerHTML = array1[8];
    arrayShift(array1);
    console.log(array1);
    console.log(k1);
}) 

function arrayShift(arrayx){
    let temp = arrayx[arrayx.length-1];
    arrayx.splice(0,0,temp);
    arrayx.pop();
    console.log(arrayx);
    return arrayx;
}

const bt9 = document.querySelector('#btn9');
bt9.addEventListener('click', (event) => {
    let k1 = document.querySelectorAll('.buttonClass');
    k1.item(0).innerHTML = array1[0];
    arrayShift(array1);
})
