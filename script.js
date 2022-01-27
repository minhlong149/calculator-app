let result = (input = 0);
let currOperator;
let isFirst = true;

// Input number key

const screen = document.querySelector("#screen");
screen.addEventListener("click", () => navigator.clipboard.writeText(result));

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

function resetInput() {
  screen.textContent = input = 0;
  currOperator = undefined;
  isFirst = true;
}

const clean = document.querySelector("#clean");
clean.addEventListener("click", resetInput);

function calculate() {
  if (currOperator != undefined) {
    if (currOperator == "add") result = +result + +input;
    else if (currOperator == "sub") result = +result - +input;
    else if (currOperator == "mul") result = +result * +input;
    else if (currOperator == "div") result = +result / +input;
  } else result = input;
  isFirst = true;
  if (String(result).length > 13) {
    screen.textContent = "ERROR";
    setTimeout(resetInput, 1000);
  } else screen.textContent = result;
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculate();
    input = 0;
    currOperator = operator.getAttribute("id");
  });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  calculate();
  input = result;
  currOperator = undefined;
});
