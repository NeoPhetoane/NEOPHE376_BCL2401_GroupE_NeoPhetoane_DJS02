const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Checks if the input fields are empty, and if they are, it sends out a message to fill them in.
  if (!dividend || !divider) { 
    result.innerHTML = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  const finalCalculation = Math.trunc(dividend / divider); //Rounds off the result and a variable is created for readability.
  result.innerText = finalCalculation;
});
