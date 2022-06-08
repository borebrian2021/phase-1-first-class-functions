const chai = require("chai");
const spies = require("chai-spies");


chai.use(spies);

function receivesAFunction(callback) {

    return callback()
}
function namedFunction(v) {

    return console.log("Test")
}


receivesAFunction(namedFunction)


function returnsANamedFunction(){
   
     function b() {
        return console.log('');
    }
return b
}
returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function(){
        console.log("ksjhjs")
    }
}
returnsAnAnonymousFunction()