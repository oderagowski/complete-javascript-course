/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

// Coding Challenge #1
// // Challenge 1

// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// // console.log(players1);
// // console.log(players2);

// const [players1, players2] = game.players;
// console.log(players1, players2)

// // Challenge 2

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);


// // Challenge 3

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //Challenge 4

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// //Challenge 5

// // let { team1, x: draw, team2 } = game.odds;
// // console.log(team1);
// // console.log(draw);
// // console.log(team2);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);


// //Challenge 6 ***

// function printGoals(...playerNames) {
//     console.log(...playerNames);
//     console.log(`${playerNames.length} goals were scored`);
// }

// printGoals(...game.scored);


// //Challenge 7 ***

// console.log(team1 || team2);


//Coding Challenge #2

// Challenge 1


/* console.log("Challenge 1");

for (let [goal, players] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${players}`);
}

// Challenge 2

console.log("Challenge 2");
console.log(game.odds);

const values = Object.values(game.odds);

let average = 0;
for (const value of values) {
  console.log(value);
  average += value;
}

const averageOdd = average / (values.length);
console.log(averageOdd);


// Challenge 3
console.log("Challenge 3");
console.log(game.odds);

console.log(`Odd of victory ${game.team1}: ${values[0]}`);
console.log(`Odd of draw: ${values[1]}`);
console.log(`Odd of victory ${game.team2}: ${values[2]}`);


for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/


const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "⚑ Substitution"],
  [47, "⚽ GOAL"],
  [61, "⚑ Substitution"],
  [64, "🟡 Yellow card"],
  [69, "🚩 Red card"],
  [70, "⚑ Substitution"],
  [72, "⚑ Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟡 Yellow card"],
]);



// const gameSet = newSet([gameEvents]);

// let newarray = []


// for (let value of gameEvents.values()) {
//   newarray.push(value);
// }

// let newSet = new Set([newarray]);
// console.log(newSet);

// Challenge #1
console.log("Challenge 1: ??????")

const events = [...new Set(gameEvents.values())];
console.log(events);


// Challenge #2

gameEvents.delete(64);
console.log(gameEvents);

//Challenge #4

for (let [time, event] of gameEvents) {
  if (time <= 45) {
    console.log(`[FIRST HALF] ${time}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${time}: ${event}`);
  }
  };
