const gameScreen = document.getElementById("gameScreen");

let secretNumber;

function start() {
  buttonStart.removeEventListener("click", start);

  document.getElementById("welcomeScreen").style.display = "none";
  gameScreen.style.display = "flex";

  secretNumber = Math.floor(Math.random() * 100 + 1);
  console.log(secretNumber);
}

function adivinar() {
  const numberUser = parseInt(document.getElementById("numberUser").value, 10);
  console.log(numberUser);

  const containerResult = document.getElementById("resultMessage");

  setTimeout(() => {
    if (secretNumber === numberUser) {
      containerResult.innerHTML = "Ganaste";
      document.getElementById("containerSecretNumber").innerHTML = secretNumber;
    } else if (secretNumber !== numberUser) {
      containerResult.innerHTML = "Intenta de nuevo";
    } else if (secretNumber > numberUser) {
      containerResult.innerHTML = "Intenta de nuevo";
    }
  }, 1000);
}

document.getElementById("buttonTry").addEventListener("click", adivinar);

window.onload = function () {
  document.getElementById("buttonStart").addEventListener("click", start);
};
