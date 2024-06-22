// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let noOfAttempts = 0

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById('userGuess').value);
  noOfAttempts++;
  document.querySelector('#attempts').innerHTML = noOfAttempts;
  // Get the message element
  const message = document.getElementById('message');

  // Check if the user's guess is correct, too high, or too low
  if (userGuess === randomNumber) {
    noOfAttempts = 0;
    message.style.color = 'green';
    message.textContent = 'Congratulations! You guessed the correct number!';
  } else if (userGuess < randomNumber) {
    message.style.color = 'red';
    message.textContent = 'Guess greater number... Try again!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Guess lesser number... Try again.';
  }
}