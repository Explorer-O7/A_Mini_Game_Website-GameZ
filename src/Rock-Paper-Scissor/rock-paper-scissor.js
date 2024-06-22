const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice, computerChoice, result;

// Generate computer's choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else if (randomNumber === 3) {
    computerChoice = 'scissor';
  }
  computerChoiceDisplay.innerHTML = `<img src="./img/${computerChoice}-icon.jpg" alt="${computerChoice}">`;
}

// Evaluate result
function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw!';
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissor') ||
    (computerChoice === 'scissor' && userChoice === 'rock')
  ) {
    result = 'You Win!';
  } else {
    result = 'You Lose!';
  }
  resultDisplay.textContent = result;
}

// Add event listeners to each button
document.getElementById("rock").addEventListener("click", (event) => {
    userChoice = "rock";
    generateComputerChoice();
    userChoiceDisplay.innerHTML = `<img src="./img/${userChoice}-icon.jpg" alt="${userChoice}" />`;
    getResult();
});

document.getElementById("paper").addEventListener("click", (event) => {
    userChoice = "paper";
    userChoiceDisplay.innerHTML = `<img src="./img/${userChoice}-icon.jpg" alt="${userChoice}" />`;
    generateComputerChoice();
    getResult();
});

document.getElementById("scissor").addEventListener("click", (event) => {
    userChoice = "scissor";
    userChoiceDisplay.innerHTML = `<img src="./img/${userChoice}-icon.jpg" alt="${userChoice}" />`;
    generateComputerChoice();
    getResult();
});