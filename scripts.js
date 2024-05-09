const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  const finalCalculation = Math.trunc(dividend / divider); //Rounds off the result and a variable is created for readability.
  result.innerText = finalCalculation;
});
