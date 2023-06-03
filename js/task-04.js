let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterElement = document.querySelector("#value");

decrementButton.addEventListener("click", () => {
  counterValue--;
  counterElement.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterElement.textContent = counterValue;
});
