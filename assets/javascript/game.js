
// Creates an array that lists out all of the options (A - Z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses remaining. wins and losses at 0, guesses at 10.
var wins = 0;
var losses = 0;
var guesses = 10;
var letters = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remText = document.getElementById("guesses-text");
var lettersText = document.getElementById("letters-picked");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key the user pressed.
    var userGuess = event.key;
    letters.push(userGuess);
    


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    // This logic determines the outcome of the game (win/loss/guesses remaining), and increases/decreases the appropriate number
    if ((userGuess === computerGuess)) {
        wins++; guesses = 10;
        alert("WHOA! YOU GOT IT");
        resetwin();
    }
     else {
        losses++; guesses--; 
       }  
    // resets game; wins and losses stay, letters guessed cleared, guesses back to 10
    if (guesses === 0) {
        alert("GAME OVER. YOU ARE NOT PSYCHIC. I WAS THINKING : " + computerGuess.toUpperCase());
        reset();

    }

    // Display the user and computer guesses, and wins/losses/etc.
    userChoiceText.textContent = "YOU CHOSE: " + userGuess.toUpperCase();
    winsText.textContent = "WINS: " + wins;
    lossesText.textContent = "LOSSES: " + losses;
    remText.textContent = "GUESSES REMAINING: " + guesses;
    lettersText.textContent = "LETTERS CHOSEN: " + letters;

    // reset function?
    function reset() {
        if (guesses === 0) {
            guesses = 10; letters = [];
        }
    }
    function resetwin() {
        if ((userGuess === computerGuess)) {
            guesses = 10; letters = [];
        }
    }

};


