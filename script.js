var numberGuess = document.querySelector('.user-input');
var clearBtn = document.querySelector('.clear-btn');
var resetBtn = document.querySelector('.reset-btn');
var guessBtn = document.querySelector('.guess-btn');
var inputDisplay = document.querySelector(".their-guess");
var inputField = document.querySelector('.user-input');
var randomNumber = Math.floor(Math.random() * 101 + 1);
var userMessage = document.querySelector('.user-message');

console.log("hi")

window.onload = function(){
  disableButtons();
  generateNewRando();
};

numberGuess.addEventListener("keydown", function(){
  enableButtons();
})

guessBtn.addEventListener("click", function(){
  showGuessOnScreen();
  compareNumbers();
});

if (numberGuess===""){
  disableButtons();
};

clearBtn.addEventListener("click", function(){
  clearField();
});

resetBtn.addEventListener("click", function(){
  location.reload();
});

function generateNewRando (){
  return randomNumber
  console.log(randomNumber)
};

function showGuessOnScreen(){
  var display = inputField.value;
  console.log(display);
  inputDisplay.innerText = display;
};

function compareNumbers(){
  var newNum = parseInt(numberGuess.value);
  console.log(newNum);
  console.log(randomNumber);

  if (randomNumber === newNum){
    userMessage.innerText="BOOM!!!!";
  } else if(newNum > 100 || newNum <1){
      userMessage.innerText="Please guess a number between 1 and 100";
  } else if(randomNumber > newNum){
      userMessage.innerText="That is too low";
  } else if(randomNumber < newNum){
      userMessage.innerText="That is too high";
  } else {
      displayError();
  }
};

function clearField (){
  var clear= "";
  inputDisplay.innerText = clear;
  inputField.value = clear;
};

function disableButtons(){
  clearBtn.disabled = true;
  guessBtn.disabled = true;
  resetBtn.disabled = true;
};

function displayError(){
  userMessage.innerText="Please guess a number between 1 and 100";
};

function enableButtons(){
  clearBtn.disabled = false;
  guessBtn.disabled = false;
  resetBtn.disabled = false;
};
