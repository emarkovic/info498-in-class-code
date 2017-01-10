"use strict";
// practicing building a class
// functions in typescript in classes default to being public. 
// You can set them as private tho and then you cannot call them from the outside
var Car = (function () {
    function Car(color, price) {
        if (price === void 0) { price = 10000; }
        this.color = color;
        // public variables can be viewed and changed from the outside
        this.goodbye = 'Goodbye';
        //readonly variables can only be viewed from outside
        this.why = 'Why';
        this.features = ['transmission', 'power windows', 'gps'];
        this.color = color;
        this.price = price;
    }
    // shorter syntax but does the same thing:
    // constructor(private color:string, private price:number, private features:string[]) {}
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    //you can leave off void if you want...
    Car.prototype.drive = function () {
        // using backticks let you print out variables in your strings
        console.log("the " + this.color + " car drives.");
        //same as: console.log('the ' + this.color + ' car drives');
    };
    Car.prototype.toString = function () {
        return this.color + ' ' + this.price;
    };
    Car.prototype.listFeatures = function () {
        var _this = this;
        //if this wasnt an arrow function, 'this' would be undefined
        this.features.forEach(function (feature) { return console.log('includes: ' + feature + ' for ' + _this.price); });
    };
    return Car;
}());
//attributes
//You can call this on the class instead of on an instance of a class.
Car.hello = 'Hello!';
// console.log(Car.hello);
var myCar = new Car('black', 12345);
console.log('before modification: ' + myCar.goodbye);
myCar.goodbye = 'bye bye bye';
console.log('after modification: ' + myCar.goodbye);
var myCar2 = new Car('red', 14000);
// console.log(myCar.toString());
// myCar.drive();
// myCar.listFeatures();
