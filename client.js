let result = document.getElementById("result");
let inputField = document.getElementById("number");
let notify = document.getElementById("notify");
let num;

async function getNumFromServer() {
  let response = await fetch("/getNum");
  num = await response.json();
}

getNumFromServer();

inputField.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkNum(num, inputField.value);
  }
});

function checkNum(num, inputNum) {
  result.style.color = "red";
  if (num == inputNum) {
    result.style.color = "green";
    result.innerText = "Congrats!! you guessed The Number!!!";
    afterWin();
  } else if (num > inputNum) {
    result.innerText = "Guess Higher";
  } else {
    result.innerText = "Guess Lower";
  }
  inputField.value = "";
}
 function afterWin(){
  getNumFromServer();
  notify.innerText = "  new number has been generated!!!";
  setTimeout(() => {
    notify.innerText = "";
  }, 3000);

 }