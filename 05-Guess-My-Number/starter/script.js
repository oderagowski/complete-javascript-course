'use strict';



const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

const changeBackground = function (color) {
    document.querySelector("body").style.backgroundColor = color;
}

const loser = () => {
    displayMessage('You lose!');
    document.querySelector('.score').textContent = 0;
    changeBackground('#FF0000');

}



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    //when there is no input

    if (!guess) {
        displayMessage("No number!");
 
    }
    
    // when the player wins
        else if (guess === secretNumber) {
        displayMessage("Correct number!");

        // document.querySelector('body').style.backgroundColor = '#60b347';

        changeBackground('#60b347');

        document.querySelector(".number").style.width = "30rem";

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
        
        
        
    // else if (guess !== secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = guess > secretNumber ? "Too high" : "Too low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game!";
    //         document.querySelector(".score").textContent = 0;

    //     }


    //     }
    
    //when the player guesses a higher num
        else if (guess > secretNumber) {
        if (score > 1) {
             displayMessage("Too high!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            loser();
        }
       
    }
    
    //when player guesses lower num
    
    else if (guess < secretNumber) {
        if (score > 1) {
          displayMessage("Too low!");
          score--;
          document.querySelector('.score').textContent = score;
        } else {
            loser();
        }    
    
    
    
    
    }
});


document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    
    const secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
})
