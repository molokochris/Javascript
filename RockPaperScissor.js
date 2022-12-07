let hands = ["rock", "paper", "scissor"]

function randomItem() {
    return Math.floor(Math.random() * 3);
}

console.log(hands[randomItem()]);
console.log(randomItem())