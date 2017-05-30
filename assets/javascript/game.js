
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];




var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};



var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];

  updateGuessesLeft();
  updateGuessesSoFar();
}


updateGuessesLeft();



document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

   if (guessesLeft > 0){
        if (userGuess == letterToGuess){
            wins++;
             document.querySelector('#wins').innerHTML = "Wins: " + wins;
             alert("You're are psychic!");
            reset();
        }
    }else if(guessesLeft == 0){
             
      losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Game Over, Play Again?");
             
        reset();
    }
};