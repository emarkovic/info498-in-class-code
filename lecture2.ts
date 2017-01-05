function sayHello(name:string) {
	console.log("hello" + name);
}

sayHello("world");
// sayHello(123);

var age:number = 23;
// age = "hello";

var letters: string[] = ['a', 'b', 'c'];
// letters.push(2); //error

// tuples, they are ordered must have string followed by number.
var nameAge: [string, number] = ['Ada', 23];
nameAge.push('bob');
nameAge.push(20);
nameAge.push(20); //? i thought the order mattered
console.log(nameAge)

var student: {first:string, last:string, age:number}

student = {
	first: 'Ada',
	last: 'Wong',
	age: 23
}
				//param types			//return type
function greet(name:string, loud:boolean) : string {
	if (loud) {
		return ('hello, ' + name).toUpperCase();
	}
	return 'hello, ' + name;
}

console.log(greet('joel', true));
//error because you have to give the function as many params as defined
// console.log(greet('joel'));

//optional params have a '?'
function sayGoodbye(name?:string) : void {
	if (name) {
		console.log('bye, ' + name);
	} else {
		console.log('bye');
	}
}

sayGoodbye('Ena');
sayGoodbye();

//default parameters
function walk(animal = "dog") {
	console.log('Walk the ' + animal);
}

walk();
walk('hippo');

class square {
	private size: number;

	constructor(size: number) {
		this.size = size;
	}
}

//outputted all 5s, forloop completes before half a second and i=5
//then the timeout function catches up
for(var i=0; i<5; i++){
   // setTimeout(function() { console.log(i); }, 500);
}

//closures
//num gets passed into this function and this function remembers it
function makeNumPrinter(num) {
	// var localNum = num;
	// var printFunc = function () { console.log(localNum) }
	// return printFunc;

	return function () { console.log(num) };
}
for (var i = 0; i < 5; i++) {
	// setTimeout(makeNumPrinter(i), 500);
}

//block scoping
//always use let b/c it provides block scoping
//use const for constants
//using let in a for loop creates it own closure
for (let i = 0; i < 5; i++) {
	// we dont gotta do all that mess ^^
	setTimeout(function () { console.log(i) }, 500);
}

//arrow functions
let foo = (params:any):string => {
	return "foo " + params;
}
//same as
let foo2 = function (params:any) : string {
	return 'foo ' + params;
}
//same as
let foo3 = (params:any):string => 'foo ' + params;

//map functions
let array:number[] = [1,2,3];
array.map((num) => num+1);

//modules help with separation
//in typescript, each file is a separate module
import {message} from './my-module'
console.log(message);