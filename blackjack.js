let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let moneyEl = document.querySelector("#money-el")
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let money = {
    player: "Meriyan",
    chips: 145
}
moneyEl.textContent = money.player + ": $" + money.chips

function getRandomcard() {
    let Randomnumber = Math.floor(Math.random() * 13) + 1
    if (Randomnumber > 10) {
        return 10
    }
    else if (Randomnumber === 1) {
        return 11
    }
    else {
        return Randomnumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackjack = true
    }
    else {
        message = "Sry! You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newcard = getRandomcard()
        sum += newcard
        cards.push(newcard)
        // console.log(cards)
        renderGame()
    }
}



















