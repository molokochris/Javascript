//create four functions: add(), subtract(), divide(), multiply()
//call the correct function when the user clicks on one of the buttons
//Perform the given calculation using num1 and num2
//Render the result of the calculation in the paragraph with id=""

//E.g. if the user clicks on the "plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sum
sumEl = document.getElementById("sum-el");


function add() {
    sum = num1 + num2;
    sumEl.textContent = "Sum: " + sum;
}

function subtract() {
    sum = num1 - num2;
    sumEl.textContent = "Sum: " + sum;
}

function divide() {
    sum = num1 / num2;
    sumEl.textContent = "Sum: " + sum;
}

function multiply() {
    sum = num1 * num2;
    sumEl.textContent = "Sum: "+ sum;
}