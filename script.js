const generateBtn = document.getElementById("generate-BtnId");
const generetedPinDisplay = document.getElementById("generetedPin");
const matchingDisplay = document.getElementById("matchingDisplay");
const submitBtn = document.getElementById("submitBtn");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const clearBtn = document.getElementById("clearBtn");
const wrong = document.getElementById("wrong");
const correct = document.getElementById("correct");

generateBtn.addEventListener("click", function () {

  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  generetedPinDisplay.value = randomNumber;

  correct.style.display = "none";
  wrong.style.display = "none";

});

function buttonClickFunction(btnNumber) {
  btnNumber.addEventListener("click", function () {
    const pin = btnNumber.innerHTML;
    matchingDisplay.value += parseFloat(pin);
  });
}

buttonClickFunction(btn0);
buttonClickFunction(btn1);
buttonClickFunction(btn2);
buttonClickFunction(btn3);
buttonClickFunction(btn4);
buttonClickFunction(btn5);
buttonClickFunction(btn6);
buttonClickFunction(btn7);
buttonClickFunction(btn8);
buttonClickFunction(btn9);

clearBtn.addEventListener("click", function () {
  matchingDisplay.value = "";
});

submitBtn.addEventListener("click", function () {
  if (generetedPinDisplay.value == matchingDisplay.value) {
    correct.style.display = "block";
    wrong.style.display = "none";
  } else {
    wrong.style.display = "block";
    correct.style.display = "none";
  }
  matchingDisplay.value = "";
});
