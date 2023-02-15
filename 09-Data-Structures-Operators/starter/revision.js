'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received!: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//// *****103. Destructuring Arrays*****
// -- destructuring is unpacking values from an array or object into separate values
// -- breaking a complex data structure down into a smaller structure like a variable

const arr = [2, 3, 4];

const [x, y, z] = arr; //--> destructuring assignment
console.log(x, y, z); // 2, 3, 4
// original array is unaffected

// Skipping an Element
const [first, , third] = restaurant.categories;
console.log(first, third); // "Italian", "Vegetarian"

//Switching Variables
// 1. Create an array with the two variables inverted [] on the right side of =
// 2. Create an array of the two variables you want to switch [] on the left side of =
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // "Italian", "Vegetarian"

[main, secondary] = [secondary, main];
console.log(main, secondary); // "Vegetarian", "Italian"

//Function return an array and immediately destruct the results into different variables
//Receiveing 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

//Nested Array Destructuring

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // destructuring inside of destructuring, while skipping the second element in the "nested" array
console.log(i, j, k); // 2, 5, 6

// Setting default values for variables when extracting them --> usefulif you don't know the length of an array

const [p = 1, q = 1, r = 1] = [8, 9]; // with default values
console.log(p, q, r); // without default values: 8, 9, undefined
// with default values: 8, 9, 1

//--------------------------------------------------------------------------------------------//

//// *****104. Destructuring Objects*****
// use { } curly braces
// you must provide varibles names that match the property names
// order of elements does not matter

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Variable Names Different From Property Names
// propertyName: newVariableName
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting Default Values (in case the property doesn't exist)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu returns an empty array since it doesn't exist

//Mutating Variables While Destructuring Objects
let a = 111;
let b = 999;
let obj = { a: 23, b: 17, c: 14 };

// When you start a line with a {}, JavaScript expects a code block

({ a, b } = obj); // { } must be placed inside ( )
console.log(a, b); // 23, 7

//Nested Objects

const {
  fri: { open, close },
} = openingHours; //
console.log(open, close); // 11, 23

// Destructuring in a function
restaurant.orderDelivery({
  //properties in object don't have to match the order in the function's parameters
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//--------------------------------------------------------------------------------------------//

//// *****105. The Spread Operator (...)*****
// spread operator is used to expand an array into all its elements (unpacking all of the array elements at once)
// used on RIGHT side of =

//spread operator works on all iterables
// iterable: arrays, strings, maps, sets, but NOT objects

// Can be used:
// 1. whenever we would otherwise write multiple VALUES separated by commas
// 2. when we pass arguments into functions

//CANNOT be used:
// 1. template literals (`${}`)

//Difference Between Spread Operator and Destructuring
// - Spread Operator takes all of the elements from an array and doesn't create new variables
//      -- we can only use spread operator in places where we would otherwise use commas

const array = [7, 8, 9];

const newArr = [1, 2, ...array]; // ... expands the "array" into all its elements
console.log(newArr); //  [1, 2, 7, 8, 9]

// Passing Arguments Into Functions

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); //  ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// Creating Shallow Copies of Arrays
const mainMenuCopy = [...restaurant.mainMenu]; // creates a shallow copy

// Merging Two or More Arrays Together

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Using Spread Operator on a String

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

//Using Spread Operator to Pass Arguments into a Function that Accepts Multiple Arguments

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Let's make pasta! Ingredient 2? "),
//   prompt("Let's make pasta! Ingredient 3? "),
// ];

// restaurant.orderPasta(...ingredients); // "Here is your delicious pasta with Ingredient 1, Ingredient 2, and Ingredient 3"

// Objects (Since E2018)

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; //copying "restraunt" object, as well as adding additional properties ; the order does not matter
console.log(newRestaurant);

const restrauntCopy = { ...restaurant };
restrauntCopy.name = 'Ristorante Roma';
console.log(restrauntCopy.name); // Reistorante Roma
console.log(restaurant.name); // Classico Italiano

//--------------------------------------------------------------------------------------------//

// *****106. Rest Patterns and Parameters(...)*****
// used to collect multiple elements and condense (pack) them into an array
// used on LEFT side of = together destructuring
// takes the remaining (rest of) the elements and puts them into a new array
// there can only be one rest pattern and it must always be last
// used where we would write VARIABLES separated by commas

//Arrays

const [aa, bb, ...others] = [1, 2, 3, 4, 5]; // ...creates a new array with unselected elements
console.log(aa, bb, others); //1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {open: 0, close: 24}, {thu: {…}, fri: {…}}

//Passing Multiple Arguments Into Functions (Rest Parameters)
// returns arrays

const restParEx = function (...numbers) {
  console.log(numbers);
};

restParEx(2, 3); // [2, 3]
restParEx(5, 3, 7, 2); //  [5, 3, 7, 2]
restParEx(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 2, 1, 4];

//function that adds numbers
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); //  17
add(8, 2, 5, 3, 2, 1, 4); // 25

//packed back into an array using spread
const xx = [23, 5, 7];
add(...xx); // 35

//Example Using "restaurant" object

restaurant.orderPizza('pepperoni', 'mushrooms', 'onion', 'olives', 'spinach');
// pepperoni, ['mushrooms', 'onion', 'olives', 'spinach']
restaurant.orderPizza('sausage'); //sausage, []  // will return an empty array if there is only one argument

//--------------------------------------------------------------------------------------------//

// *****107. Short Circuiting (&& and ||) *****
//Logical Operators:
// Can use ANY data type
// Can return any data type
// Can perform short-circuiting (short circuit evaluation)

// || : If FIRST value is a TRUTHY value, it will immediately return the first value without evaluating the reamining operands
//       If both values are falsy, it will return the last value
// Does not work if one of the values is 0 since 0 is a falsy value

console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); // Jonas; "" is a falsy value
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // "Hello"; first truthy value

//Used when you don't know if a value exists
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10 --> first value is undefined since .numGuests does not exist

// && : If FIRST value is a FALSY value, it will immediately return the first value wihtout evauluation the remaining operands
//      If both values are truthy, it will return the last value

console.log('Hello' && 23 && null && 'Jonas'); // null because it is the first falsy value

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//--------------------------------------------------------------------------------------------//

// *****108. The Nullish Coalescing Operator (??) *****
// ?? : works off of the idea of nullish values instead of falsy values
// Nullish Values: null and undefined (NOT 0 or "")

restaurant.numGuests = 0;
const guestsWrong = restaurant.numGuests || 10;
console.log(guestsWrong); // returns 10 because 0 is a FALSY value

const guestsNCO = restaurant.numGuests ?? 10;
console.log(guestsNCO); // returns 0

//--------------------------------------------------------------------------------------------//

// *****109. Logical Assignment Operators*****

const rest1 = {
  name: 'Capri',
  numofGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

const rest3 = {
  name: 'Chi Chi',
  numofGuests: 0,
};

// ||= OR Logical Assignment Operator
// assigns a value to variable if that variable is currently falsy
rest1.numofGuests ||= 10;
rest2.numofGuests ||= 10; // 10 is assigned because "numofGuests" is undefined and does not exist in the rest2 object

console.log(rest1); // {name: 'Capri', numofGuests: 20}
console.log(rest2); //{name: 'La Piazza', owner: 'Giovanni Rossi', numofGuests: 10}

// ??= Nullish Logical Assignment Operator
//assigns a value to variable if that variable is currently nullish
rest1.numofGuests ??= 10;
rest3.numofGuests ??= 10;

console.log(rest1); // {name: 'Capri', numofGuests: 20}
console.log(rest3); // {name: 'Chi Chi', numofGuests: 0}

// &&= AND Logical Assignment Operator
//assigns a value to a variable if that variable is currently truthy

rest1.owner &&= '<ANONYMOUS';
rest2.owner &&= '<ANONYMOUS';

console.log(rest1);
console.log(rest2);

//--------------------------------------------------------------------------------------------//

// *****111. Looping Arrays: The for-of Loop*****
// automatically loops through an array and gives access to each element without needing a counter
// can use "continue" and "break"

const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of combinedMenu) {
  //"item" variable can be called anything
  console.log(item); //logs each element individually to the console
}

//Getting Index in for of loop

for (const item of combinedMenu.entries()) {
  console.log(item);
}
// [0, 'Focaccia']
// [1, 'Bruschetta']
// [2, 'Garlic Bread']
// [3, 'Caprese Salad']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Risotto']

//.entries() : returns an array with each element and its index number in the original array

for (const [i, el] of combinedMenu.entries()) {
  //i returns iterator number; el returns element name
  console.log(`${i + 1}: ${el} `);
}
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

//--------------------------------------------------------------------------------------------//

// *****112. Enhanced Object Literals*****

//NOTES FOR THIS LECTURE ARE IN "untitled-1.js"

//--------------------------------------------------------------------------------------------//

// *****113. Optional Chaining (?.)*****
// If a certain property doesn't exist, "undefined" is returned immediately
// The property on the right of the "?." will be read only if the property on the LEFT exists(not null or undefined)/ Otherwise it will return undefined

//WITHOUT Optional Chaining
console.log(restaurant.openingHours.mon); // returns undefined

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open); //with optional chaining

//Multiple Optional Chaining
console.log(restaurant.openingHours?.mon?.open);

// Example

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of daysOfWeek) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
//Checks to see if a method exists before callling it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//" ['Focaccia', 'Pasta']"

console.log(restaurant.close?.(0, 1) ?? 'Method does not exist');
// "Method does not exist"

// Arrays
//Used to check if an array is empty

const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

//getting the name of the first element
console.log(users[0]?.name ?? 'User array empty');

//--------------------------------------------------------------------------------------------//

// *****114.Looping Objects: Object Keys, Values, and Entries*****

// Looping Over Object's Property Names(Keys)

const properties = Object.keys(openingHours);
console.log(properties);

// Finding out how many days the restaurant is open
let openStr = `We are open on ${properties.length} days: `;
console.log(openStr);
// "We are open on 3 days"

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat,
//

// Looping Over Object's Values

const values = Object.values(openingHours);
console.log(values);

// Looping Over Both

const entries = Object.entries(openingHours);
console.log(entries);
// 0: [0: 'thu', 1: {open: 12, close: 22}]
// 1: [0: 'fri', 1: {open: 11, close: 23}]
// 2: [0: 'sat', 1: {open: 0, close: 24}]

for (const [key, { open, close }] of entries) {
  //property names get destructured
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

//  ----------------------------------------------------------------------------------------------//

// *****116.Sets*****
// ES6 introduce 2 new data structures: sets and maps
// collection of unique values
// sets can hold mixed data types
// like arrays, there are not key-value pairs
// sets are iterables
// order of the elements in the set is irrelevent
// sets DO NOT have indexes; cannot get values out of a set
// usually sets are used to see if something exists inside the set
// main use it to remove duplicate values from arrays

// new Set(iterable) : creates a new Set; any iterable can go in the parentheses
// set.size : returns the number of elments in a Set
// set.has() : returns true if the value exists
// set.add() : adds a new element to the Set
// set.delete(): removes an element from the Set

// Sets with an Array
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //  Set(3) {'Pasta', 'Pizza', 'Risotto'}

// Sets with a String
const newNameSet = new Set('Jonas');
console.log(newNameSet); // Set(5) {'J', 'o', 'n', 'a', 's'}

// Getting the Size of a Set (how many items are in a set)
console.log(ordersSet.size); // 3

//Checking If a Certain Element Is in a Set  set.has()
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Raviolli')); // false

//Adding New Elements to a Set
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// Deleting Elements From a Set
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

// Looping Over a Set

for (const order of ordersSet) {
  console.log(order);
}

// Example -- converting a set to an array

// starting array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// converting set into array using spread operator
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']

// Deleting All Elements of the Set
ordersSet.clear();
console.log(ordersSet); //Set(0) {size: 0}

// how many unique letters in a string
console.log(new Set('jonasschmedtmann').size); // 11

//--------------------------------------------------------------------------------------------//

// *****117.Maps: Fundamentals*****
// maps: data structure used to map values to keys
// Unlike in objects(where keys are always strings), keys in maps can have any data type
// newMap() : creates a new Map
// map.set() : sets the value for a key in a Map
// map.get() : gets the value for a key in a Map
// map.delete() : removes a Map element specified by a key
// map.clear() : removes all elements from a Map


// adding to a map  .set()
const restMap = new Map();
restMap.set('name', 'Classico Italian'); //.set() returns updated map
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Lisbon, Portugal');
console.log(restMap); //Map(3) {'name' => 'Classico Italian', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

//reading data from a map  .get()
// pass in the name of the key
console.log(restMap.get('name')); // Classico Italian
console.log(restMap.get(true)); // "We are open :D"

const time = 21;
restMap.get(time > restMap.get('open') && time < restMap.get('close'));



// Checking If a Map Contains Certain Keys  .has()

console.log(restMap.has("categories"));

// Deleting Elements from Maps  .delete()

restMap.delete(2) // deletes based off of the key (2 => Lisbon, Portugal)


// Getting the Size of a Map    .size()
console.log(restMap.size);  // 7



// Using Arrays/Objects as Map Keys

console.log("Adding Array to Set")
restMap.set([1, 2], "test");
console.log(restMap); 

console.log(restMap.get([1, 2])); // undefined because the key [1,2] is different from this [1,2] in memory

// If you want to get the value of the key with the array [1, 2], you have to make an array
const arrrrrrr = [1, 2];
restMap.set(arrrrrrr, 'test');
console.log(restMap.get(arrrrrrr));


restMap.set(document.querySelector("h1"), "Heading");
console.log(restMap);

// Removing all Elements from the Map   .clear()
console.log("Erasing Map")
restMap.clear();
console.log(restMap); // Map(0) {size: 0}



//--------------------------------------------------------------------------------------------//

// *****118.Maps: Iteration*****

// populating a map without using .set()

// array of arrays: first position is key, second position is value
const question = new Map([
  ["question", "What is the best programming langauge in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Ty Again!"]
]);

//Convert object to maps

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

// Iterating Through a Map

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}  //Answer 1: C
  // Answer 2: Java
  // Answer 3: Javascript


// const answer = Number(prompt("Your answer"));

// console.log(question.get(question.get("correct") === answer))

//Convert Map to Array
console.log(...question);

console.log([...question.keys()])
console.log([...question.values()]);



//--------------------------------------------------------------------------------------------//

// *****119.Summary: Which Data Structure to Use?*****

/* 3 Sources of Data
1. From the program itself: data written directly in source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3. From external sources: Data feteched for example from web API[Application Programming Interface] (e.g. recipe objects) --> APIs used to get web data from other applications


If you have a simple list of values: --> values without any descriptions
          Arrays of Sets

If you have key/value pairs: --> keys allow us to decribe values
          Objects or maps

- Data from Web APIs usually come in a data format called JSON (which can easily be converted into JavaScript objects)

Other Built-In Data Structures:
  -WeakMap
  -WeakSet

Non-Built In:
  - Stacks
  - Queues
  - Linked lists
  - Trees
  - Hash tables
*/

// Arrays vs. Sets and Objects vs. Maps

//ARRAYS

const tasksArray = ["Code", "Eat", "Code"]; //['Code', 'Eat', 'Code']

/* 
- use when you need ordered lists of values (might contain duplicates)
- use when you need to manipualte data

*/

//SETS

const tasksSet = new Set(["Code", "Eat", "Code"]); // {'Code', 'Eat'}

/* 
- use when you need to work with unique values
- use when high-performance is really important
- use to remove duplicates from arrays

*/
//          //          //          //          //          //          //          //
//OBJECTS

const taskObject = {
  task: "code",
  date: "today",
  repeat: "true"
}; // {task: 'code', date: 'today', repeat: 'true'}

/* 
- More "traditional" key/value store ("abused" objects)
- easier to write and acces avalue with . and []
- use when you need to include functions (methods)
- use when working with JSON (can convert to map)

*/

//MAPS

const taskMap = new Map( [
  ["task", "code"],
  ["date", "today"],
  [false, "Start Coding"],
]); // {'task' => 'code', 'date' => 'today', false => 'Start Coding'}


/* 
- better performance
- keys can have any data type
- easy to iterate
- easy to compute size
- use when you simply need to map key to values
- use when you need keys that are not strings

*/






//--------------------------------------------------------------------------------------------//

// *****121.Working with Strings - Part 1*****

// boxing: Whenever we call a method on a string, JavaScript automatically converts the string primitive to a string object with the same content. Then it's on that object that the methods are called --> basically puts the string in a box which is an object. Then when the operation is done, the object is converted back into a string

const airline = "TAP Air Portugal";
const plane = "A320";


// Getting character of a string at a certain position
console.log(plane[0]); //"A"
console.log("B737"[0]); // "B"

// Length property of strings
console.log(airline.length); //16
console.log("B737".length); //4

// Position of a certain character
console.log(airline.indexOf("r")); //6

// Last position of a certain chracter
console.log(airline.lastIndexOf('r')); // 10

//Extracting part of a string --> substring: part of a string
// .slice does not change strings
console.log(airline.slice(4)); //"Air Portugal"
console.log(airline.slice(4, 7)); //"Air" --> end parameters is not included in final string

//Extracting part of a string without knowing the whole string
console.log(airline.slice(0, airline.indexOf(" "))); // "TAP"
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // "Portugal"

// Start extracting from the end of the string
console.log(airline.slice(-2)); // "al"
console.log(airline.slice(1, -1)); // starting at position, cutting off the last character

const checkMiddleSet = function (seat) { 
  const s = seat.slice(-1);
  if (s === "B" || s == "E") {
    console.log('You got the middle seat');      
    } else console.log('You got lucky!');
    

}

// B and E are middle seats

checkMiddleSet("11B");
checkMiddleSet("23C");
checkMiddleSet('13E');



//--------------------------------------------------------------------------------------------//

// *****122.Working with Strings - Part 2*****

// Changing the case of a string

console.log(airline.toLowerCase()); 'tap air portugal';
console.log(airline.toUpperCase()); 'TAP AIR PORTUGAL';

// Fix capitalization in name

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io"

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing part of a string

const priceGB = '288,97£';
const priceUS = priceGB.replace('£',"$").replace(",", "."); // (string to replace, string that will replace the first one )
console.log(priceUS); // 288.97$

const announcement = "All passengers come to boarding door 23. Boarding door 23."
console.log(announcement.replace("door", "gate")); // replaces first occurrence
console.log(announcement.replaceAll('door', 'gate')); // replaces all occurrences

// regular expressions
console.log(announcement.replace(/door/g, 'gate'));


// Methods That Return Booleans
// .includes(), . startsWith(), .endsWith()

const pplane = "Airbus A320neo"
console.log(pplane.includes("A320")); // true
console.log(pplane.includes('Boeing')); // false

console.log(pplane.startsWith('A'));

if (pplane.startsWith("Airbus") && pplane.endsWith("neo")) {
  console.log("Part of the NewAirbus Family ");

}

// Practice exercise
// it's important to always convert user input strings to lowercase

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board!")
  } else {
    console.log("Welcome aboard!")
  }
}
checkBaggage("I have a laptop, some food, and a packet knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection")







//--------------------------------------------------------------------------------------------//

// *****123.Working with Strings - Part 3*****


// Split and Join
// .split() : allows us to split a string into multiple parts based on a divider string
// .join() : returns a new string by concatenating all of the elements in an array, separated by a specified separator
// returns an array

console.log("a+very+nice+string".split("+"));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ")

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(" ");

// capitalizing name function

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
}

// same as above method
const alternativeCapitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  
  for (const n of names) {
    namesUpper.push(n.replace(n[0].n[0].toUpperCase()));
  }
}

capitalizeName("jessica ann smith davis");
capitalizeName('jonas schmedtmann');

// padding a string: adding a certain amount of characters to a string until the string has the desired length
//.padStart() : 
//.padEnd() : 

const message1 = "Go to gate 23!";
console.log(message1.padStart(25, "+")); //(desired length of string after padding, character to pad string with)


// Real-world example

const maskCreditCard = function (number) {
  const str = number + ""; // quick way to convert a number to a string without using String()
  const lastFourCharacters = str.slice(-4);
  return lastFourCharacters.padStart(str.length, "*");
}

console.log(maskCreditCard(433784638646473784));
console.log(maskCreditCard('1616513132135165165165654321'));


// Repeat
//.repeat() : allows us to repeat a certain string multiple times

const message2 = "Bad weather... All Departures Delayed..."
console.log(message2.repeat(50));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`)
}
planesInLine(5);
planesInLine(3);
planesInLine(12);





// Data needed for a later exercise
const flights =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25
  + _Arrival; bru0943384722; fao93766109; 11: 45
  + _Delayed_Arrival; hel7439299980; fao93766109; 12: 05
    + _Departure; fao93766109; lis2323639855; 12: 30;"""`

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith}${type.replaceAll("_", " ")} ${from} ${to} (${time.replace(":", "h")})`;
  console.log(output);
}