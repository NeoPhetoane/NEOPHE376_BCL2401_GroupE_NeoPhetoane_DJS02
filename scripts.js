const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Checks if the input fields are empty, and if they are, it sends out a message to fill them in.
  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  if (divider === "0") {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero not permitted", new Error().stack);//Throws error to console, so the developer and user know exactly what the issue is.
    return; //Prevents program from crashing by stopping the function from calculating with a 0 in the equation.
  }

  if (isNaN(dividend) || isNaN(divider)) { //Checks if the input is not a number.
    document.body.innerHTML = "<div>Something critical went wrong. Please reload the page</div>" //InnerHTML is used to diplay text on the page without altering the HTML
    console.error("Invalid input provided", new Error().stack);
    return;
  }

  const finalCalculation = Math.trunc(dividend / divider); //Rounds off the result and a variable is created for readability.
  result.innerText = finalCalculation;
});
