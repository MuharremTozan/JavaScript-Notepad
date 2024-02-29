const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return ROCK;
  } else if (randomValue < 0.66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW) {
    message += "had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won";
  } else if (winner === RESULT_COMPUTER_WINS) {
    message += "lost";
  }
  alert(message);
  gameIsRunning = false;
});

/*
extra information
const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
Rest Operatoru sayesinde alabilecegi kadar parametreyi almasini soyledik.
Bunun yanina baska parametre almak istersek alamayiz cunku sonsuz parametre aldik zaten.
Baska bir secenekte rest operatorunden once parametre almak bu sayede ilk parametre baska bir degiskenden gelirken kalanlar rest operatorunden gelicek.
*/
/*
const subtractUp = function(){
  let sum = 0;
  for (const num of arguments) {
  sum -= num; 
  }
  return sum;
}
Buradaki arguments de sadece function keyworduyle calisiyor ve rest operatoru ile ayni ise yariyor.
Ama bu rest operatoru cikmadan onceki bir keyword oldugundan rest operatoru daha mantikli.
*/
