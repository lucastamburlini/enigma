const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const attemptsContainer = document.getElementById("attempts");
const containerClue = document.getElementById("clueMessage");

let secretNumber;
let attemptsLeft = 5;
let attemptsArray = [];

function start() {
  startButton.removeEventListener("click", start);
  attemptsLeft = 5;
  attemptsArray = [];

  document.getElementById("welcomeScreen").style.display = "none";
  gameScreen.style.display = "flex";

  secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
}

function startAgain() {
  document.getElementById("buttonTry").disabled = false;

  attemptsLeft = 5;
  attemptsArray = [];

  document.getElementById("previousAttempts").innerHTML = "";
  document.getElementById("numberUser").value = "";
  document.getElementById("resultScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "flex";
  document.getElementById("Message").innerHTML = "Vamos de nuevo";
  document.getElementById("clueMessage").innerHTML =
    "Tienes 5 intentos de nuevo";
  attemptsContainer.innerHTML = attemptsLeft;
  start();
}

function adivinar() {
  const numberUser = parseInt(document.getElementById("numberUser").value, 10);
  console.log(numberUser);

  if (isNaN(numberUser) || numberUser < 1 || numberUser > 100) {
    containerClue.innerHTML = "Ingresa un número válido entre 1 y 100.";
    return;
  }

  if (attemptsLeft > 0) {
    attemptsLeft--;
    attemptsArray.push(numberUser);
    showAttempts();

    const message = document.getElementById("Message");
    const containerResult = document.getElementById("resultMessage");
    const containerSecretNumber = document.getElementById("secretNumber");

    setTimeout(() => {
      if (secretNumber === numberUser) {
        containerResult.innerHTML = "¡Ganaste!";
        containerSecretNumber.innerHTML = "El número era el " + secretNumber;
        gameScreen.style.display = "none";
        resultScreen.style.display = "flex";
      } else if (attemptsLeft === 0) {
        containerResult.innerHTML = "Perdiste...";
        containerSecretNumber.innerHTML =
          "El número secreto era el " + secretNumber;
        gameScreen.style.display = "none";
        resultScreen.style.display = "flex";
      } else {
        message.innerHTML = "Intenta de nuevo";
      }

      if (attemptsLeft > 2) {
        if (secretNumber >= 1 && secretNumber <= 20) {
          containerClue.innerHTML = "El número secreto está entre el 1 y el 20";
        } else if (secretNumber >= 21 && secretNumber <= 40) {
          containerClue.innerHTML =
            "El número secreto está entre el 21 y el 40";
        } else if (secretNumber >= 41 && secretNumber <= 60) {
          containerClue.innerHTML =
            "El número secreto está entre el 41 y el 60";
        } else if (secretNumber >= 61 && secretNumber <= 80) {
          containerClue.innerHTML =
            "El número secreto está entre el 61 y el 80";
        } else if (secretNumber >= 81 && secretNumber <= 100) {
          containerClue.innerHTML =
            "El número secreto está entre el 81 y el 100";
        }
      } else if (attemptsLeft <= 2) {
        if (secretNumber % 2 === 0) {
          containerClue.innerHTML = "El número secreto es par";
        } else {
          containerClue.innerHTML = "El número secreto es impar";
        }
      }
    }, 1000);
  }

  if (attemptsLeft === 0) {
    buttonTry.disabled = true;
  }
}

function showAttempts() {
  attemptsContainer.innerHTML = attemptsLeft;

  document.getElementById("previousAttempts").innerHTML = "";

  for (const attempt of attemptsArray) {
    const span = document.createElement("span");
    span.textContent = `${attempt}`;
    previousAttempts.appendChild(span);
  }
}

document.getElementById("buttonTry").addEventListener("click", adivinar);
window.onload = function () {
  document.getElementById("startButton").addEventListener("click", start);
  document
    .getElementById("tryAgainButton")
    .addEventListener("click", startAgain);
};
