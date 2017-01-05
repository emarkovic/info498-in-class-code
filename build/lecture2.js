"use strict";
function sayHello(name) {
    console.log("hello" + name);
}
sayHello("world");
// sayHello(123);
var age = 23;
// age = "hello";
var letters = ['a', 'b', 'c'];
// letters.push(2); //error
// tuples, they are ordered must have string followed by number.
var nameAge = ['Ada', 23];
nameAge.push('bob');
nameAge.push(20);
nameAge.push(20); //? i thought the order mattered
console.log(nameAge);
var student;
student = {
    first: 'Ada',
    last: 'Wong',
    age: 23
};
//param types			//return type
function greet(name, loud) {
    if (loud) {
        return ('hello, ' + name).toUpperCase();
    }
    return 'hello, ' + name;
}
console.log(greet('joel', true));
//error because you have to give the function as many params as defined
// console.log(greet('joel'));
//optional params have a '?'
function sayGoodbye(name) {
    if (name) {
        console.log('bye, ' + name);
    }
    else {
        console.log('bye');
    }
}
sayGoodbye('Ena');
sayGoodbye();
//default parameters
function walk(animal) {
    if (animal === void 0) { animal = "dog"; }
    console.log('Walk the ' + animal);
}
walk();
walk('hippo');
var square = (function () {
    function square(size) {
        this.size = size;
    }
    return square;
}());
//outputted all 5s, forloop completes before half a second and i=5
//then the timeout function catches up
for (var i = 0; i < 5; i++) {
}
//closures
//num gets passed into this function and this function remembers it
function makeNumPrinter(num) {
    // var localNum = num;
    // var printFunc = function () { console.log(localNum) }
    // return printFunc;
    return function () { console.log(num); };
}
for (var i = 0; i < 5; i++) {
}
var _loop_1 = function (i_1) {
    // we dont gotta do all that mess ^^
    setTimeout(function () { console.log(i_1); }, 500);
};
//block scoping
//always use let b/c it provides block scoping
//use const for constants
//using let in a for loop creates it own closure
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
//arrow functions
var foo = function (params) {
    return "foo " + params;
};
//same as
var foo2 = function (params) {
    return 'foo ' + params;
};
//same as
var foo3 = function (params) { return 'foo ' + params; };
//map functions
var array = [1, 2, 3];
array.map(function (num) { return num + 1; });
//modules help with separation
//in typescript, each file is a separate module
var my_module_1 = require("./my-module");
console.log(my_module_1.message);
