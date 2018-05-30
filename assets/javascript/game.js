// Global Variables
//==============================================
// Arrays and variables for holding data

var wordOptions = ["queen", "pinkfloyd", "ledzeppelin", "boston"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

// Functions
//==============================================

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate the correct number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect each round 
    document.getElementById("wordGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCounter + " | Loss Count: " + lossCounter + " | Guesses Left: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = winCounter;

        startGame();
    }

    else if (guessesLeft == 0) {
        lossCounter++;
        alert("You lost!");

        document.getElementById("lossCounter").innerHTML = lossCounter;

        startGame();
    }
}

// Main Process
//==============================================
startGame();

// Register key clicks 
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


    console.log(letterGuessed);
}

