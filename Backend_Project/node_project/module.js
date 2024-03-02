const test = "Harsh";

function hello(name){
    console.log(`Hello ${name}`);
}

hello('Harsh');

module.exports.test = test;
module.exports.hello = hello;