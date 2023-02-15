// *****112. Enhanced Object Literals*****

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: { //!!!(3)
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: { //!!3!!
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced Object Literals
  //(1) -- Variables and Object Properties
  // Using a variable name as a property inside an object
  // If you change the name of the variable outside of the object, you also have to change the name of the object inside the object

  //(2) -- Methods
  // No longer have to create a property and then set it to a function expression
  //Instead there is no need for : function

  //(3)
  //Can compute(calculate) property names instead of having to write them out manually and literally
  // Before ES6, you were only able to compute values

  // SEE ABOVE

  //!!!(1)!!!
  // This is just the variable from outside of the object, but all of the properties are now part of the restaurant object
  openingHours,

  //!!!(2)!!!
  //This is a method (the ": function" is not required)
  order(starterIndex, mainIndex) {
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

