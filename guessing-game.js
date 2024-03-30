function guessingGame() {
  // Inner function (closure) has access to 'count', 'isOver' and 'randomNum' long after outer function has been executed and returned so can keep running 'guess' function as long as you want and you'll still have access to those variables.

  // initialize count and isOver
  let count = 0;
  let isOver = false;
  // create a random number once a game to compare the guesses against (occurs when new 'game' instance is created below)
  let randomNum = Math.floor(Math.random() * 100); // creates a random number between 0 and 99

  // inner function
  return function guess(num) {
    // increment 'count' every time execute 'guess' function (everytime make a new guess)
    count++;
    // if guess the same correct number after already won (after isOver was assigned to 'true'), return this message
    if (isOver) {
      return "The game is over, you already won!";
    }
    // if the number guessed equals the randomNum, assign isOver to true and return this message
    if (num === randomNum) {
      isOver = true;
      return "You win! You found " + randomNum + " in " + count + " guesses.";
    }
    // if number guessed is greater than randomNum, return this message and try again
    if (num > randomNum) {
      return num + " is too high!";
    }
    // if number guessed is less than randomNum, return this message and try again
    if (num < randomNum) {
      return num + " is too low!";
    }
  };
}

// create a new 'game' instance by calling guessingGame() and assigning the returned 'guess' inner function from guessingGame() to the variable 'game'. 'game' can then be used to guess the random number
let game = guessingGame();

module.exports = { guessingGame };
