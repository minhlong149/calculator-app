// Init value

let result = (input = 0);
let currOperator;
let isFirst = true; // Start of a new equator

let floatingPoint = 0;
let useFloatPoint = false;

function resetInput() {
  screen.textContent = result = input = 0;
  currOperator = undefined;
  isFirst = true;
  floatingPoint = 0;
  useFloatPoint = false;
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
      floatingPoint = useFloatPoint ? floatingPoint + 1 : floatingPoint;
      screen.textContent = input = +num / Math.pow(10, floatingPoint);
      isFirst = false;
    } else if (String(input).length < 13) {
      floatingPoint = useFloatPoint ? floatingPoint + 1 : floatingPoint;
      if (useFloatPoint) {
        screen.textContent = input =
          +input + +num / Math.pow(10, floatingPoint);
      } else {
        screen.textContent = input = +input * 10 + +num;
      }
    }
  });
});

// Delete number key

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
  if (useFloatPoint) {
    screen.textContent = input =
      Math.floor((+input * Math.pow(10, floatingPoint)) / 10) /
      Math.pow(10, floatingPoint - 1);
    floatingPoint--;
    useFloatPoint = floatingPoint != 0;
  } else {
    screen.textContent = input = Math.floor(input / 10);
  }
});

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
  result = Number(result.toPrecision(13));
  // Handle big number
  if (String(result).length > 13) {
    screen.textContent = "ERROR";
    setTimeout(resetInput, 1000);
    console.log();
  } else screen.textContent = result;
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.id == "decimal") {
      useFloatPoint = true;
    } else {
      if (!isFirst) {
        calculate();
        input = 0;
      }
      currOperator = operator.getAttribute("id");
      floatingPoint = 0;
      useFloatPoint = false;
    }
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
