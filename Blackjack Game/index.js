let player = {
    name: "Moloko",
    chips: 10
}
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.getElementById("sum-el");
let cards = [];
let sum = 0;
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " : " + player.chips;

function drawRandomCard() {
    let randomNum = Math.floor((Math.random() * 13) + 1);

    if (randomNum === 1) {
        return 11;
    }
    else if (randomNum > 10) {
        return 10;
    }
    else {
        return randomNum;
    }
}

function startGame() {

    isAlive = true
    let firstCard = drawRandomCard();
    let secondCard = drawRandomCard();
    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
}
let i = 0;
function renderGame() {
    
    while (i < cards.length) {
        cardsEl.textContent += cards[i] + " ";
        i++;
    }
    i = i;
    console.log(cards)
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Draw another card?";
    } else if (sum === 21) {
        message = "Congradulations, You have got the Blackjack!!!";
        hasBlackJack = true;
    } else {
        message = "Sorry, you are out.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let thirdCard = drawRandomCard();
        cards.push(thirdCard);
        sum += thirdCard;
        sumEl.textContent = "Sum: " + sum;
        console.log(cards)
        renderGame()
    } else {
        messageEl.textContent = "You have to have to START GAME!!";
    }
}