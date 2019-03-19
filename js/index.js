// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet();

let person = {
    name: `Bob`,
    greet: greet
};

person.greet();



function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

let sally = { name: `Sally` };

greet.call(sally);

greet.apply(sally);



function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: `Sally` };
function greet(customerOne, customerTwo) {
    console.log(`Hi, ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, `Terry`, `George`);


greet.call(sally);

greet.apply(sally, [`Terry`, `George`]);

let sally = { name: 'Sally' };

function greet(customer) {
	console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);

newGreet('Bob');


greet('Bob');