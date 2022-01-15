"use strict";

const getSecretNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// we could read the score from the DOM but it's always better to have that value in the script
let score = 20;
let highscore = 0;
let randomNumber = getSecretNumber(1, 21);

const changeScore = (score) => {
  if (score > 1) {
    score--;
    return score;
  } else {
    document.querySelector(".message").textContent = "YOU LOST THE GAME!";
    document.querySelector(".score").textContent = 0;
  }
};

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess) {
    displayMessage("You need to enter a number.");
  } else if (userGuess === randomNumber) {
    // Manipulating CSS styles:
    // 1. Use the style property.
    // 2. In case de CSS property has a 2 words name,
    // we need to format the name to camelCase format.
    // background-color will be backgroundColor
    // 3. The value always need to be a string.

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").textContent = userGuess;
    displayMessage("Correct Number!😎");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (userGuess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        userGuess > randomNumber
          ? "Too High. Try Again!"
          : "Too Low. Try Again!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST THE GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
  // the function is defined and passed into the event handler as an argument
  // it is the JavaScript engine that will call the function as soon as the event happens.
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = getSecretNumber(1, 20);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
});
