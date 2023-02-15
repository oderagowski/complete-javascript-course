'use strict';


//// *****128. Default Parameters*****
// default parameters: parameter = defaultValue

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    // ES5 Default Parameters
    // numPassengers = numPassengers || 1;
    // price = price || 1;
    /* When using default parameters, you cannot skip an argument (Ex: 1, , 100). Instead you should set the one you want to skip to undefined (Ex: 1, undefined, 100) if you want to leave it at its default */
    
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123")




//--------------------------------------------------------------------------------------------\\


//// *****129. How Passing Arguments Works: Value vs. Reference*****
// When we pass a reference to a function, what is copied is just the reference to the object copied in the memory heap //
// Passing a primitive type in the function is the same as creating a copy  outside of the function
// When pass an object to a function, whatever happens to the copy will also happen to the original
// passing by value:
// passing by reference: passing a reference to a value instead of passing the value itself; works even with primitives; JavaScript does not have passing by reference
// We can pass in a reference. However that reference is still a value -- a value that contains the memory address. We pass a reference but do not pass by a reference

const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name

    // if (passenger.passport === 24739479284) {
    //     alert("Checked in")
    // } else {
    //     alert("Wrong passport!")
    // }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as
const flightNum = flight;
const passenger = jonas;


// issues when functions interact with the same objects
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random()* 10000000000000000)
}

newPassport(jonas);
checkIn(flight, jonas);
//--------------------------------------------------------------------------------------------\\


//// *****130. First-Class and Higher-Order Functions*****
/* First-Class Functions: 
- JavaScript treats functions as first-class citizens
- This means that functions are simply values (since objects are just values)
- Functions are just another "type" of object
- Because functions are values, we can store functions in variables or properties
- We can also pass functions as arguments to OTHER functions
- We can also return functions FROM functions
- We can also call methods on functions
- First-class functions allow us to write and use higher-order functions
*/

/* Higher-Order Functions:
(1) - A function that receives another function as an argument, that returns a new function, or both
- This is only possible because of first-class functions 
- (Ex: addEventListener() is a higher-order function because it receives a function as an argument)
- callback function: a function that is passed into a higher-order function as an argument; the callback function will be called later by the higher-order function

(2) - Function that returns new function

First-Class Functions vs Higher-Order Functions
- first-class functions are just a feature that a program language either has or doesn't have
- It just means all functions are values
- It's just a concept, not in practice 

- higher-order functions: in practice
- possible because the language supports first-class functions
*/



//--------------------------------------------------------------------------------------------\\



//// *****131. Functions Accepting Callback Functions*****
/* Why Are Callback Functions Commonly Used in JS?
- They make it easier to split up code into reusable and interconnected parts
- They allows us to create abstraction
- Abstraction: hiding the details of code implementation because we don't really care about that details, which allows us to think about problems at a higher, more abstract level of details

- higher-level functions operate at a higher level of abstraction, leaving  the lower-level details to the low-level functions (callback functions)

*/

// takes in a string and returns a string without any spaces
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

// Higher-order function
// fn is the callback function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  
  console.log(`Transformed string: ${fn(str)}`);
  

  console.log(`Transformed by: ${fn.name}`); // functions can also have properties
  
}

// only the function value is being passed as an argument. We are not calling the function
transformer("JavaScript is the best!", upperFirstWord)

// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);

// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// JS uses callbacks all the time
// const high5 = function () {
//     console.log('👋');
// }

// document.body.addEventListener("click", high5);

// ["Jonas", "Marth", "Adam"].forEach(high5);


//--------------------------------------------------------------------------------------------\\



//// *****132. Functions Returning Functions*****


// This function is possible due to closures
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`)
    }
}

// greeterHey is now a function since the greet() function is being stored in it
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// arrow function returing a function
const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);



//--------------------------------------------------------------------------------------------\\


//// *****133. The call and apply Methods*****
// this keyword depends on how the function is called
// this keyword points to the lufthansa object itself
/* call()
- first argument is what you want the this keyword to point to
- the rest of the arguments are arguments of the original function
- call method calls a function with the this keyword set to the first argument
- allows us to manually and explicitly set the this keyword to whatever we want to call
*/
/* apply()
- similar to call method except apply() does not receive a list of arguments after the this keyword
- takes an array instead, and passes the elements into the function
- not used much in modern JavaScript
- use call() and ...spread instead

*/


const lufthansa = {
    airline: "Lufthansa",
    iataCode: ":LH",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
        );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },

};

lufthansa.book(239, "Jonas Schmedtman");
lufthansa.book(635, "John Smith");
console.log(lufthansa)

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

// is a regular function, not a method (this keyword points to undefined)
const book = lufthansa.book;

// does NOT work
// book(23, "Sarah Williams");

// Call method
// this keyword points to eurowings
book.call(eurowings, 23, "Sarah Williams")
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');

//apply() method; not used that much in modern JavaScript
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// use call() and spread operator instead

book.call(swiss, ...flightData);






//--------------------------------------------------------------------------------------------\\


//// *****134. The bind Method*****
/* bind(): allows us to manually set the this keyword for any function call
- does not immediately call the function
- instead it returns a new function where the this keyword is bound
- partial application: a part of the argument of the original function is already set
*/

// Bind Method
// returns a new function where the this keyword is always set to eurowings

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);


bookEW(23, "Steven Williams");

// number is pre-set in the bind method
// when calling this function, the only argument to pass is the 'name' parameter
// this is partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");


// Using objects together with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this); // this keyword is the button element
    
    this.planes++
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application : pre-setting parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);









//--------------------------------------------------------------------------------------------\\


//// *****136. Immeditaely Invoked Function Expressions (IIFE) *****
// a function that is only executed once and never executed again
/* How to Write an IIFE
- Write the function() expression without assigning it to any variable
- Wrap the entire function in parentheses
- Call it with two parentheses immediately following the closing parenthesis

// important for data encapsulation



*/

(function () {
    console.log('This will run once and never run again')
})();

// IIFE Arrow Function

(() => console.log('This will ALSO never run again'))();




//--------------------------------------------------------------------------------------------\\



//// *****137. Closures*****
// closures are not explicit (created manually); they simply happen automatically in certain situations

// closures make a function remember all of the variables that existed at the function's "birthplace"

// a function always has access to the variable environment of the execution context in which it was created, even after that execution context is gone

// closure: variable environment attached to the function, exactly as it was at the time and place the function was created


// secureBooking returns function that will increase the passengerCount and display the passengerCount each time it is called

// any function always has access to the variable environment of the execution context in which the function was created

// thanks to the closure, a function never loses connection to the variables that existed at the function's birth place

// closures have priority over the scope chain

/* Closures Summary
- A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone

- A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time

- A closure makes sure that a function doesn't lose connection to variables that existed at the function's birth place

- A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created

- We do not have the manually create closures. This is a JavaScript feature that happens automatically. We can't even access closed-over variables. A closure is NOT a tangible JavaScript object

// console.dir(function) -- [[Scopes]] to view variable environment
-- [[ ]] mean it's an internal property that can't be accessed in code

*/


// the execution context of the booker() function is the secureBooking() funciton
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();

booker();
booker();
booker();




//--------------------------------------------------------------------------------------------\\



//// *****138. More Closure Examples*****
// You don't need to return a function from another function to create a closure


// Example 1

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}

g();
f(); // 46

// Re-assigning f function
h();
f(); // 1554

// Example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () { 
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will starting boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3)





//--------------------------------------------------------------------------------------------\\

