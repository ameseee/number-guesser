//ASSIGN VARIABLES
var userInput = document.getElementById('user-input');

var guessButton = document.getElementById('guess-btn');

var feedback = document.getElementById('feedback-text');

var numDisplayed = document.getElementById('pink-number');

var lastGuessText = document.getElementById('last-guess-text');

var reset = document.getElementById('reset');

var clearBtn = document.getElementById('clear-btn');

var randomNum;

window.onload = function () {
  generateRandomNum();
};

//when guess-btn is clicked, displayInputInPink should be executed
guessButton.addEventListener('click', displayInputInPink);
guessButton.addEventListener('click', clearInputField);

//when reset is clicked, clickReset will execute
reset.addEventListener('click', clickReset);

//when clear is clicked, clickClearBtn will execute
clearBtn.addEventListener('click', clickClearBtn);

//when user presses a key and lets it up, buttonOn will execute
userInput.addEventListener('keyup', buttonOn);

//once user submits a guess, reset button is enabled
guessButton.addEventListener('click', enableResetButton);

function generateRandomNum() {
  randomNum = Math.floor(Math.random() * 100 + 1);
  console.log(randomNum);
}

//this func should take what user typed in, userInput, and display that number in pink <p>
function displayInputInPink() {
  //take userInput and store in var userNum
  var userNum = parseInt(userInput.value);
  console.log(userNum);
  printPinkNum(userNum);
  compare(userNum, randomNum);
  outOfRange(userNum);
}

//get input text to replace # in p
function printPinkNum(userNum) {
  numDisplayed.innerHTML = userNum;
}

//compare the input to my generated #
function compare(userNum, randomNum) {
  if (userNum === randomNum) {
    feedback.innerHTML = 'BOOM!';
  } else if (userNum < randomNum) {
    feedback.innerHTML = 'too low';
  } else if (userNum > randomNum) {
    feedback.innerHTML = 'too high!';
  } else {
    lastGuessText.innerHTML = '';
    feedback.innerHTML = '...you must enter a number!';
    numDisplayed.innerHTML = 'oopsies...';
  }
}

//alert if number is out of range
function outOfRange(userNum) {
  if (userNum > 100 || userNum < 1) {
    lastGuessText.innerHTML = '';
    feedback.innerHTML = 'The range is 1-100';
    numDisplayed.innerHTML = ': (';
  } else if (userNum >= 1 && userNum <= 100) {
    lastGuessText.innerHTML = 'Your last guess was:';
  }
}

//clears input once number is printed in big pink-number
// the clear button now has no purpose! but this makes more sense for ux...
function clearInputField() {
  userInput.value = ' ';
}

//make reset button work - clear back to zero state
function clickReset() {
  window.location.reload();
}

//make clear button work - clear out user text and pink number
function clickClearBtn() {
  numDisplayed.innerHTML = ' ';
}

//make all buttons be disabled in zero state, keyup event listener fires it
//conditional - dont just remove the attribute, toggle it by checking length of value of input field

function buttonOn() {
  if (userInput.length !== 0) {
    document.getElementById('guess-btn').removeAttribute('disabled');
    document.getElementById('clear-btn').removeAttribute('disabled');
  }
}

function enableResetButton() {
  document.getElementById('reset').removeAttribute('disabled');
}

//don't turn pink when hover when disabled!!!
