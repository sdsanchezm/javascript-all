function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return sum(num1, num2);
}

console.log(calc(2,3,sum));

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);


