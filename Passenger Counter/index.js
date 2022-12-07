//This is a taxi passenger counter
//We initialize count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0, countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    
    countEl.textContent = count;
}

//1. Create a function, save(), which logs out the count when it's called
let saveEl = document.getElementById("save-el");
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}
