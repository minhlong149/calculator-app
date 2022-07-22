// Init value

let result = (input = 0);
let currOperator;
let isFirst = true; // Start of a new equator

function resetInput() {
  screen.textContent = result = input = 0;
  currOperator = undefined;
  isFirst = true;
}

// Click the screen to copy value

const screen = document.querySelector("#screen");
screen.addEventListener("click", () => navigator.clipboard.writeText(input));

// Input from keyboard

const numKeys = document.querySelectorAll(".num");
numKeys.forEach((key) => {
  key.addEventListener("click", () => {
    const num = key.getAttribute("id");
    if (isFirst) {
      screen.textContent = input = +num;
      isFirst = false;
    } else if (String(input).length < 13) {
      screen.textContent = input = +input * 10 + +num;
    }
  });
});

// Delete number key

const backspace = document.querySelector("#backspace");
backspace.addEventListener(
  "click",
  () => (screen.textContent = input = Math.floor(input / 10))
);

const clean = document.querySelector("#clean");
clean.addEventListener("click", resetInput);

// Calculate

function calculate() {
  if (currOperator != undefined) {
    if (currOperator == "add") result = +result + +input;
    else if (currOperator == "sub") result = +result - +input;
    else if (currOperator == "mul") result = +result * +input;
    else if (currOperator == "div") result = +result / +input;
  } else result = input;
  isFirst = true;

  // Handle big number
  if (String(result).length > 13) {
    screen.textContent = "ERROR";
    setTimeout(resetInput, 1000);
  } else screen.textContent = result;
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (!isFirst) {
      calculate();
      input = 0;
    }
    currOperator = operator.getAttribute("id");
  });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  if (!isFirst) {
    calculate();
    input = result;
    currOperator = undefined;
  }
});

// Toggle theme

const toggleButtons = document.querySelectorAll(".choice-ball");
toggleButtons.forEach((currentButton) => {
  currentButton.addEventListener("click", () => {
    // Toggle all other button active off
    toggleButtons.forEach((button) => {
      button.classList.remove("active");
    });
    // Toggle curr btn
    currentButton.classList.add("active");
    // Set theme base off btn id
    // console.log(currentButton.id);
    document.body.className = currentButton.id;
  });
});

// const toggleButtons = document.querySelectorAll(".choice-ball");
// toggleButtons.forEach((currentButton) => {
//   key.addEventListener("click", () => {
// currentButton;});
//           console.log(currentButton);
// });
