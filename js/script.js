const resultBox = document.querySelector('.playResult');
const tieBox = document.querySelector('.tieNumber');
const winsBox = document.querySelector('.winNumber');
const loseBox = document.querySelector('.lossNumber');
const totalBox = document.querySelector('.totalNumber');
const matchBox = document.querySelector('.matchNumber');
let tieCount = 0;
let winCount = 0;
let lossCount = 0;
let totalCount = 0;

function computerPlay () {
    let selections = ["ROCK", "PAPER", "SCISSORS"]
    let PCguess = selections[Math.floor(Math.random() * selections.length)];
    return PCguess;
}

const rockBtn = document.querySelector('#rock');

rockBtn.addEventListener('click', () => {
  let result = roundPlay("ROCK", computerPlay());
  if (result.includes("tie")) {
      tieCount += 1;
      tieBox.textContent = tieCount;
      totalCount += 1;
      totalBox.textContent = totalCount;
      resultBox.textContent= result;
  } else if (result.includes("beats")) {
     winCount += 1;
     winsBox.textContent = winCount;
     resultBox.textContent= result;
     totalCount += 1;
      totalBox.textContent = totalCount;
  } else if (result.includes("loses")) {
      lossCount += 1;
      loseBox.textContent = lossCount;
      resultBox.textContent= result;
      totalCount += 1;
      totalBox.textContent = totalCount;
  }
  matchPlay();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
  let result = roundPlay("PAPER", computerPlay());
  if (result.includes("tie")) {
        tieCount += 1;
        tieBox.textContent = tieCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  } else if (result.includes("beats")) {
        winCount += 1;
        winsBox.textContent = winCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  } else if (result.includes("loses")) {
        lossCount += 1;
        loseBox.textContent = lossCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  }
  matchPlay();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
  let result = roundPlay("SCISSORS", computerPlay());
  if (result.includes("tie")) {
        tieCount += 1;
        tieBox.textContent = tieCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  } else if (result.includes("beats")) {
        winCount += 1;
        winsBox.textContent = winCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  } else if (result.includes("loses")) {
        lossCount += 1;
        loseBox.textContent = lossCount;
        resultBox.textContent= result;
        totalCount += 1;
      totalBox.textContent = totalCount;
  }
  matchPlay();
});


function matchPlay() {
if (totalCount === 10) {
  if (winCount < lossCount) {
    matchBox.textContent = "You lose this time";
    gameReset ();
  } else if (winCount > lossCount) {
    matchBox.textContent = "Congratulations! You win the match!";
    gameReset ();
  } else  {
    matchBox.textContent = "Tie game, try again next time!";
    gameReset ();
}
}
}

function gameReset () {
 winCount = 0;
 winsBox.textContent = winCount;
 lossCount = 0;
 loseBox.textContent = lossCount;
 tieCount = 0;
 tieBox.textContent = tieCount;
 totalCount = 0;
 totalBox.textContent = totalCount;
}


function roundPlay (playerselect, pcselect) {
  if (playerselect === pcselect) {
    let result = "The game was a tie.";
    return result;
  } else if (playerselect === "ROCK" && pcselect === "SCISSORS") {
      let result = "Player's Rock beats Computer's Scissors!";
        return result;
  } else if (playerselect === "ROCK" && pcselect === "PAPER") {
      let result = "Player's Rock loses to Computer's Paper!";
       return result;
  } else if (playerselect === "PAPER" && pcselect === "SCISSORS") {
      let result = "Player's Paper loses to Computer's Scissors!";
      return result;
  } else if (playerselect === "PAPER" && pcselect === "ROCK") {
     let result = "Player's Paper beats Computer's Rock!";
       return result;
  } else if (playerselect === "SCISSORS" && pcselect === "ROCK") {
      let result = "Player's Scissors loses to Computer's Rock!";
        return result;
  } else if (playerselect === "SCISSORS" && pcselect === "PAPER") {
      let result = "Player's Scissors beats Computer's Paper!";
        return result;
  } else {
      let result = "Error must select rock, paper or scissors!";
        return result;
  }   
}
