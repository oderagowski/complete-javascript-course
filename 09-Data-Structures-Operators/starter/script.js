'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
let openingHours = {
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
    close: 24
  },
};









const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  //Destructuring object as parameters
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}}`);
  },



  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`You want a pizza with ${mainIngredient}, ${otherIngredients}`);
  }
};




const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: "Giovanni Rossi",
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);



const dogs = ["Sookie", "Dediboing", "Chamusquina"];

const [s, d, c] = dogs;

console.log(s, d, c);

const [first, second] = restaurant.categories;

console.log(first, second);

let testDogs = [...restaurant.starterMenu];

console.log(...testDogs);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);


// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient2"),
//   prompt("Ingredient3")];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


//Objects

const newRestaurant = {
  foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);


const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays);


const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
    console.log(sum);
  } 
};

add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");




const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("Hello" && 55 && true);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open;
  if (open === undefined){
    console.log(`We are closed on ${day}`);
  }else {
      console.log(`On ${day}, we open at ${open}`);  
  
  };
}

//With optional chaining

console.log(restaurant.openingHours.mon?.open);

// Methods with optional chaining
console.log(restaurant.orderPizza?.(0, 1) ?? "Method does not exist");

// Arrays with optional chaining
const users = [
  { name: "Jonas", email: "hello@jonas.io"}
];

console.log(users[0]?.address ?? "This information is not available");

// Property Name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//Property VALUES

const values = Object.values(openingHours);
console.log(values); 
//Entire object

const entries = Object.entries(openingHours);
console.log(entries)

for (const [key,{open, close}] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}