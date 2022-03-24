const choices = ["rock", "paper", "scissors"];

function game() {
  // play game
  // play five rounds
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  console.log(playerSelection);
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function playerChoice() {
  // get input from user
  let input = prompt("Type rock, paper, or scissors");
  while (input == null) {
    // to prompt user again if input is null and not break the program
    input = prompt("Type rock, paper, or scissors");
  }
  input = input.toLocaleLowerCase();
  let check = validateInput(input);
  while (check == false) {
    //  to validate user input
    input = prompt(
      "Your input is not valid! Please type rock, paper, or scissors"
    );
    while (input == null) {
      input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLocaleLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  // random input from computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(valid) {
  // to check if user input is a valid choice
  return choices.includes(valid);
}

function checkWinner(playerC, computerC) {
  if (playerC === computerC) {
    return "tie";
  } else if (
    (playerC === "rock" && computerC === "scissors") ||
    (playerC === "scissors" && computerC === "paper") ||
    (playerC === "rock" && computerC === "scissors")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

game();
