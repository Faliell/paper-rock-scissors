let playerPoint = 0;
let cpuPoint = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  }
  if (randomNumber === 1) {
    return "paper";
  }
  if (randomNumber === 2) {
    return "scissors";
  }
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      cpuPoint++;
      return "You lose, Paper beats Rock";
    } else {
      playerPoint++;
      return "You win, Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerPoint++;
      return "You win, Paper beats Rock";
    } else {
      cpuPoint++;
      return "You lose, Scissors beats Paper";
    }
  } else if (playerSelection === "sissors") {
    if (computerSelection === "paper") {
      playerPoint++;
      return "You win, Scissors beats Paper";
    } else {
      cpuPoint++;
      return "You lose, Rock beats Scissors";
    }
  } else {
    return "Error Typo";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window
      .prompt("Rock, Scissors or Paper?")
      .toLowerCase();
    const computerSelection = computerPlay();

    console.log(
      `${singleRound(
        playerSelection,
        computerSelection
      )} \nplayer:${playerPoint} \nCPU: ${cpuPoint}`
    );
  }
  if (playerPoint === cpuPoint) {
    console.log("Draw");
  } else if (playerPoint > cpuPoint) {
    console.log("You Win the Game!");
  } else {
    console.log("You Lose the Game!");
  }
}

game();
