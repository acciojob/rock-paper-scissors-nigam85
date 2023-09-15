const gameNumberInput = document.getElementById("game-number");
const playButton = document.getElementById("play-game");
const options = document.querySelectorAll(".option");
const computerChooseText = document.getElementById("computer-choose");
const roundResultText = document.getElementById("round-result");
const roundsLeftText = document.getElementById("rounds-left");
const userPointsText = document.getElementById("user-points");
const computerPointsText = document.getElementById("computer-points");
const gameResultText = document.getElementById("game-result");

let gameNumber;
let roundsLeft;
let userPoints = 0;
let computerPoints = 0;

playButton.addEventListener("click", startGame);

function startGame() {
  gameNumber = parseInt(gameNumberInput.value);
  roundsLeft = gameNumber;
  userPoints = 0;
  computerPoints = 0;
  roundsLeftText.textContent = gameNumber;

  // Show game container
  document.querySelector(".game-container").style.display = "block";

  playButton.disabled = true;

  options.forEach((option) => {
    option.addEventListener("click", () => playRound(option.textContent));
  });
}

function playRound(userChoice) {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Display computer's choice
  computerChooseText.textContent = computerChoice;

  // Determine the winner of the round
  if (userChoice === computerChoice) {
    roundResultText.textContent = "TIE";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    roundResultText.textContent = "WON";
    userPoints++;
  } else {
    roundResultText.textContent = "LOSE";
    computerPoints++;
  }

  // Update user and computer points
  userPointsText.textContent = userPoints;
  computerPointsText.textContent = computerPoints;

  roundsLeft--;
  roundsLeftText.textContent = roundsLeft;

  if (roundsLeft === 0) {
    endGame();
  }
}

function endGame() {
  playButton.disabled = false;
  document.querySelector(".game-container").style.display = "none";

  if (userPoints > computerPoints) {
    gameResultText.textContent = "WON";
  } else if (userPoints < computerPoints) {
    gameResultText.textContent = "LOSE";
  } else {
    gameResultText.textContent = "TIE";
  }
}
