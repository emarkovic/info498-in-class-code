// practicing building a class
// functions in typescript in classes default to being public. 
	// You can set them as private tho and then you cannot call them from the outside
class Car {
	//attributes

	//You can call this on the class instead of on an instance of a class.
	static hello:string = 'Hello!';
	// public variables can be viewed and changed from the outside
	public goodbye:string = 'Goodbye';
	//readonly variables can only be viewed from outside
	readonly why:string = 'Why';

	private color:string;
	private price:number;
	private features:string[] = ['transmission', 'power windows', 'gps'];

	constructor(private color:string, price:number = 10000) {
		this.color = color;
		this.price = price;
	}
	// shorter syntax but does the same thing:
	// constructor(private color:string, private price:number, private features:string[]) {}


	getColor():string {
		return this.color;
	}

	getPrice():number {
		return this.price;
	}

	//you can leave off void if you want...
	drive():void {
		// using backticks let you print out variables in your strings
		console.log(`the ${this.color} car drives.`);
		//same as: console.log('the ' + this.color + ' car drives');
	}

	toString():string {
		return this.color + ' ' + this.price;
	}

	listFeatures() {
											//if this wasnt an arrow function, 'this' would be undefined
		this.features.forEach(feature => console.log('includes: ' + feature + ' for ' + this.price));
	}
}

// console.log(Car.hello);
let myCar:Car = new Car('black', 12345);

console.log('before modification: ' + myCar.goodbye);
myCar.goodbye = 'bye bye bye';
console.log('after modification: ' + myCar.goodbye);



let myCar2:Car = new Car('red', 14000);
// console.log(myCar.toString());
// myCar.drive();
// myCar.listFeatures();
