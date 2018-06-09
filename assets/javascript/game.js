var wordOptions = ["queen", "pinkfloyd", "ledzeppelin", "boston",];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

var ledZeppelin = new Audio("http://ledzeppelin.alexreisner.com/sound/isong.mp3");
var pinkFloyd = new Audio("C:/Users/Foster/Downloads/Pink Floyd - Another Brick In The Wall (part 2).mp3");
var boston = new Audio("C:/Users/Foster/Downloads/Boston-Smokin (1).mp3");
var queen = new Audio("C:/Users/Foster/Downloads/Queen -  Bicycle Race.mp3");
var loser = new Audio("http://www.qwizx.com/gssfx/usa/tpirhorns.wav");

var music = {
ledzeppelin: ledZeppelin,
boston: boston,
queen: queen,
pinkfloyd: pinkFloyd

}

// console.log(music)

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

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
        // console.log(selectedWord)
        // console.log(music)
        // console.log(music.selectedWord)
        music[selectedWord].play();
      
        document.getElementById("winCounter").innerHTML = winCounter;

        startGame();
    }

    else if (guessesLeft == 0) {
        lossCounter++;
        alert("You lost!");
        loser.play();

        document.getElementById("lossCounter").innerHTML = lossCounter;

        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}

