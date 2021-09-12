const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const playerPlay = () => {
  let answer = prompt(
    "Please enter either Rock, Paper, or Scissors: "
  ).toString();

  if (!choices.includes(answer)) {
    alert("Invalid response. Try again.");
    playerPlay();
  }

  return answer;
};

let playerSelection = playerPlay();

let computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
  let playerResult = null;
    if (playerSelection === computerSelection) {
        playerResult = "Draw";
        alert("Draw!")
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    playerResult = "Loss";
    alert("You Lose! Paper covers Rock.");
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    playerResult = "Loss";
    alert("You Lose! Scissors cut paper.");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    playerResult = "Loss";
    alert("You Lose! Rock smashes scissors.");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerResult = "Win";
    alert("You Win! Rock smashes Scissors.");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerResult = "Win";
    alert("You Win! Paper covers rock.");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerResult = "Win";
    alert("You Win! Scissors cut paper.");
  }
  return playerResult
};

let results = []

for (let i=0; i < 5; i++) {
 results.push(playRound(playerSelection,computerSelection))
}

console.log(results)
