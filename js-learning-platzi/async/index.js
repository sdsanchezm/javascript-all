const doSomethingAsync = () => {
    return new Promise( (resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Something Async'), 3000 )
        : reject(new Error('test in Error '))
    } )
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('after');

const anotherFunction = async () => {
    try {
        const something = await doSomething();
    }
    catch (error) {
        console.error(error);
    }
}

console.log('before 2');
anotherFunction();
console.log('after 2');