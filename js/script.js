console.log("I'm loaded into guessnumber ...")

// make a function for out() ... just a shorthand for console.log() ...
function out(any) { console.log(any)}
out("ready to guess")

// Select message class in html and make a const variable ...
const lblMessage = document.querySelector(".message");
out(lblMessage);

// Select number class in html and make a const variable ...
const lblNumber = document.querySelector(".number");
out(lblNumber);

// Select score class in html and make a const variable ...
const lblScore = document.querySelector(".score");
out(lblScore);

// Select guess class in html and make a const variable ...
const inpGuess = document.querySelector(".guess");
out(inpGuess);

// Select guess class in highscore and make a const variable ...
const lblHighScore = document.querySelector(".highscore");
out(lblHighScore);

// Set global highscore ...
let highScore = lblHighScore.textContent;

// make a function to check a number against another ...
function checkNumber(btn) {
    out("Check number")
    // Grab input value from inpGuess as let variable guess ...
    let guess = inpGuess.value; // inpGuess is set in line 20 above ... '.value' is the user input ...
    out("Guess= " + guess)
    // if else statement / logic to do the check from user input against number to guess and if it is within the range of 0 and 20 ...
    if (guess > 20) {
        lblMessage.textContent = "Only guess numbers between 0 and 20!";
        subtract();
    } else if (guess < 0) {
        lblMessage.textContent = "Only guess numbers between 0 and 20!";
        subtract();
    }
    else if (guess > secretNumber) {
        lblMessage.textContent = "Value is to high"
        subtract();
    } else if (guess < secretNumber) {
        lblMessage.textContent = "Value is to low"
        subtract();
    } else {
        lblMessage.textContent = "You guessed the number 🍟"
        youWin();
    }
}


// function to subtract from score ...
function subtract() {
    let newScore = lblScore.textContent -= 1;
    if (newScore < 0 ) {
        // you loose ...
    } else {
        out(newScore);
    }
}

// Set new high score or check if a win is better than others ...
function youWin(){
    // check if highscore is beaten and update if so ...
    let score = lblScore.textContent;
    if (score > highScore) {
        highScore = lblScore.textContent;
        lblHighScore.textContent = score;
    }

    // Play sound ...

    let btnCheck = document.querySelector(".check")
    btnCheck.disabled = true;
    btnCheck.style.backgroundColor = "black";

    let btnAgain = document.querySelector(".again")
    btnAgain.disabled = false;
    btnAgain.style.backgroundColor = "white";
    lblNumber.textContent = null;

}

function startGame() {
    secretNumber = getSecretNumber();
    lblScore.textContent = 20;
    lblMessage.textContent = "Start guessing again ...";

    let btnCheck = document.querySelector(".check")
    btnCheck.disabled = false;
    btnCheck.style.backgroundColor = "white";

    let btnAgain = document.querySelector(".again")
    btnAgain.disabled = true;
    btnAgain.style.backgroundColor = "black";
}

// function to set the number to guess with random logic and between 0 and 20 (Math.trunc(...) ) ...
let secretNumber = 10;
function getSecretNumber(btn) {
    out("start secret")
    secretNumber = Math.trunc(Math.random()*20) + 1;
    out("Secret number =" + secretNumber)
}

// set variable for check class (html button) ...
const pbCheck = document.querySelector(".check")

// eventlistener for checkNumber function to run on click ...
pbCheck.addEventListener('click', checkNumber)

// set variable for again class (html button) ...
const pbAgain = document.querySelector(".again")

// eventlistener for again to run startgame function on click ...
pbAgain.addEventListener("click", startGame)