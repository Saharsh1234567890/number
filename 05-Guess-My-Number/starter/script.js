"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ No Number!");
  } else if (guess > 20) {
    displayMessage("⛔️ Above 20!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🔥 You lost the game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("...Start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(255, 145, 0)";
  document.querySelector(".number").style.width = "15rem";
});
