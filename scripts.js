const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const playerPlay = () => {
  let answer = prompt(
    "Please enter either Rock, Paper, or Scissors: "
  ).toString().toLowerCase();

  if (!choices.includes(answer)) {
    alert("Invalid response. Try again.");
    playerPlay();
  }

  return answer;
};

const playRound = (playerSelection, computerSelection) => {
  let playerResult = null;
  if (playerSelection === computerSelection) {
    playerResult = "Draw";
    alert("Draw!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    playerResult = "Loss";
    alert("You Lose! Paper covers rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    playerResult = "Loss";
    alert("You Lose! Scissors cut paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    playerResult = "Loss";
    alert("You Lose! Rock smashes scissors.");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerResult = "Win";
    alert("You Win! Rock smashes scissors.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerResult = "Win";
    alert("You Win! Paper covers rock.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerResult = "Win";
    alert("You Win! Scissors cut paper.");
  }
  return playerResult;
};

let results = [];

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    results.push(playRound(playerSelection, computerSelection));
  }
  
  let wins = results.filter(x => x === "Win").length
  let losses = results.filter(x => x === "Loss").length 
  let draws = results.filter(x => x === "Draw").length 
  
  return {wins, losses, draws}
};

const {wins, losses, draws} = game();

alert(("W: " + wins + "\nL: " + losses + "\nD: " + draws))
