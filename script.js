const gameScreen = document.getElementById("gameScreen");
const attemptsContainer = document.getElementById("attempts");
const containerClue = document.getElementById("clueMessage");

let secretNumber;
let attemptsLeft = 5;
let attemptsArray = [];

function start() {
  buttonStart.removeEventListener("click", start);
  attemptsLeft = 5;
  attemptsArray = [];

  document.getElementById("welcomeScreen").style.display = "none";
  gameScreen.style.display = "flex";

  secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
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

    const containerResult = document.getElementById("resultMessage");

    setTimeout(() => {
      if (secretNumber === numberUser) {
        containerResult.innerHTML = "Ganaste";
        document.getElementById("containerSecretNumber").innerHTML =
          secretNumber;
      } else if (attemptsLeft === 0) {
        containerResult.innerHTML =
          "Perdiste. El número secreto era " + secretNumber;
        document.getElementById("containerSecretNumber").innerHTML =
          secretNumber;
      } else {
        containerResult.innerHTML = "Intenta de nuevo";
      }

      if (secretNumber >= 1 && secretNumber <= 20) {
        containerClue.innerHTML = "El número secreto está entre el 1 y el 20";
      } else if (secretNumber >= 21 && secretNumber <= 40) {
        containerClue.innerHTML = "El número secreto está entre el 21 y el 40";
      } else if (secretNumber >= 41 && secretNumber <= 60) {
        containerClue.innerHTML = "El número secreto está entre el 41 y el 60";
      } else if (secretNumber >= 61 && secretNumber <= 80) {
        containerClue.innerHTML = "El número secreto está entre el 61 y el 80";
      } else if (secretNumber >= 81 && secretNumber <= 100) {
        containerClue.innerHTML = "El número secreto está entre el 81 y el 100";
      }
    }, 1000);
  }

  if (attemptsLeft === 0) {
    buttonTry.disabled = true;
  }
}

function showAttempts() {
  let attemptsText = attemptsLeft + "<br>";
  attemptsText += "Intentos anteriores: " + attemptsArray.join(", ");
  attemptsContainer.innerHTML = attemptsText;
}

document.getElementById("buttonTry").addEventListener("click", adivinar);

window.onload = function () {
  document.getElementById("buttonStart").addEventListener("click", start);
};
