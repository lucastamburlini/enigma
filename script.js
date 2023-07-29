const gameScreen = document.getElementById("gameScreen");
const attemptsContainer = document.getElementById("attempts");

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

  const containerResult = document.getElementById("resultMessage");

  if (attemptsLeft > 0) {
    attemptsLeft--;
    attemptsArray.push(numberUser);
    showAttempts();

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
