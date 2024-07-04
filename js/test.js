const output = document.getElementById("output");
const numberButtons = document.querySelectorAll(".numbers button");
const operationButtons = document.querySelectorAll(".operations button");
const clearButton = document.querySelector(".clear");

let firstValue = "";
let secondValue = "";
let operator = "";
let currentDisplay = "0";

// Функция для обновления отображения состояния
function updateDisplay() {
  output.textContent = currentDisplay;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operator) {
      // если не +-
      firstValue += button.textContent;
      currentDisplay = firstValue;
    } else {
      // Иначе добавляем ко второму числу
      secondValue += button.textContent;
      currentDisplay = `${firstValue}${operator}${secondValue}`;
    }
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "+" || button.textContent === "-") {
      if (!firstValue) return;
      operator = button.textContent;
      currentDisplay = `${firstValue}${operator}`;
    } else if (button.textContent === "=") {
      if (operator && firstValue && secondValue) {
        let result;
        if (operator === "+") {
          result = parseFloat(firstValue) + parseFloat(secondValue);
        } else if (operator === "-") {
          result = parseFloat(firstValue) - parseFloat(secondValue);
        }
        currentDisplay = `${firstValue}${operator}${secondValue}=${result}`;
        firstValue = result.toString();
        secondValue = "";
        operator = "";
      }
    }
    updateDisplay();
  });
});

clearButton.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  currentDisplay = "0";
  updateDisplay();
});
