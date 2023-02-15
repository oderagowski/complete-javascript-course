'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////





//// *****142. Simple Array Methods***** ////
// ~ = mutates original array
// .slice(indexToStartExtracting, endParameter) : can extract any part of an array without changing the original array --> returns a new array; can create a shallow copy of an array

// ~ .splice() : deletes elements from an array; changes the original array

//~ .reverse() : reverses the elements of an array; changes the original array

// array1.concat(array2) : concatenates arrays --> returns new arrays (similar to [..array1, ...aray2] -- spread operator)

// .join : joins the elements of an array into a string



let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE Method

console.log(arr.slice(2)) // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// SPLICE Method

// console.log(arr.splice(2)); // ['c', 'd', 'e'] (returns what is taken out of the original array)

// removes the last element of an array
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']



// REVERSE Method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()) // ['f', 'g', 'h', 'i', 'j']

// CONCAT Method
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

// JOIN method
console.log(letters.join(' - '))




////////////////////////////////////////////////////////////////////////

//// *****143. The New at Method***** ////

const arr1 = [23, 11, 64];
console.log(arr1[0]);
console.log(arr1.at(0));

// getting the last array element
console.log(arr1[arr.length - 1]);
console.log(arr1.slice(-1)[0]);
console.log(arr1.at(-1));

// also works on strings
console.log('jonas'.at(-1)) // s







////////////////////////////////////////////////////////////////////////

//// *****144. Looping Arrays: forEach***** ////

// forEach() is a higher-order function that requires a callback function
// loops over an array and will execute the callback function with each iteration
// = As the forEach() method calls the callback function in each iteration it will pass in the current element in the array as an argument

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  }  else {
      console.log(`You withdrew ${Math.abs(movement)}`)
    }
  
}

console.log("---FOREACH---")

// forEach method

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})







////////////////////////////////////////////////////////////////////////

//// *****145. forEach with Maps and Sets***** ////









////////////////////////////////////////////////////////////////////////

//// *****146. PROJECT: "Bankist" App***** ////









////////////////////////////////////////////////////////////////////////

//// *****147. Creating DOM Elements***** ////









////////////////////////////////////////////////////////////////////////

//// *****149. Data Transformations: map, filter, reduce***** ////









////////////////////////////////////////////////////////////////////////

//// *****150. The map Method***** ////









////////////////////////////////////////////////////////////////////////

//// *****151. Computing Usernames***** ////









////////////////////////////////////////////////////////////////////////

//// *****152. The filter Method***** ////









////////////////////////////////////////////////////////////////////////

//// *****153. The reduce Method***** ////









////////////////////////////////////////////////////////////////////////

//// *****155. The Magic of Chaining Methods***** ////









////////////////////////////////////////////////////////////////////////

//// *****157. The find Method***** ////









////////////////////////////////////////////////////////////////////////

//// *****158. Implementing Login***** ////









////////////////////////////////////////////////////////////////////////

//// *****159. Implementing Transfers***** ////









////////////////////////////////////////////////////////////////////////

//// *****160. The findIndex Method***** ////









////////////////////////////////////////////////////////////////////////

//// *****161. some and every***** ////









////////////////////////////////////////////////////////////////////////

//// *****162. flat and flatMap***** ////









////////////////////////////////////////////////////////////////////////

//// *****163. Sorting Arrays***** ////









////////////////////////////////////////////////////////////////////////

//// *****164. More Ways of Creating and Filling Arrays***** ////









////////////////////////////////////////////////////////////////////////

//// *****165. Summary: Which Array Method to Use?***** ////









////////////////////////////////////////////////////////////////////////

//// *****166. Array Methods Practice***** ////









////////////////////////////////////////////////////////////////////////
