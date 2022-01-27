let result = (input = 0);
const screen = document.querySelector("#screen");

const numKeys = document.querySelectorAll(".num");
numKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (input < 10000000000000) {
      const num = key.getAttribute("id");
      screen.textContent = input = +input * 10 + +num;
    }
  });
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener(
  "click",
  () => (screen.textContent = input = Math.floor(input / 10))
);

const clean = document.querySelector("#clean");
clean.addEventListener("click", () => (screen.textContent = input = 0));