const { resolve } = require("path/posix");

const somethingWillHappen = () => {
    return new Promise((result, reject) => {
        if(true){
            resolve('Hey');
        } else{
            reject('whooops!');
        }
    });
}