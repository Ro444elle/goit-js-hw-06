const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
});
