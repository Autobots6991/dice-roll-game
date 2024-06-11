'use strict';
//Selecting Element
const score0 = $("#score--0").text()
const score1 = $("#score--1").text()
const diceEl = $(".dice")
let currentScore = 0

//Functions
const newGame = () => {
    currentScore = 0
    $(".score").text(0)
    $(".current-score").text(currentScore)
    $(".dice").hide()
}
const switchPlayer = () => {
    $(".player").toggleClass("player--active")
}
const hold = () => {
    $(".player--active .score").text(currentScore)/10
    switchPlayer()
    currentScore = 0
}
const rollDice = () => {
    let Roll = Math.trunc(Math.random() * 6 + 1)
    $(".dice").show()
    $(".dice").attr("src",`dice-${Roll}.png`)
        //Check dice roll 1
        if (Roll !== 1) {
        //Add current score
            currentScore += Roll
            $(".player--active .current-score").text(currentScore)
            }
        //If rolled 1 > reset current score and switch player
            else {
                currentScore = 0
                $(".current-score").text(currentScore)
                switchPlayer()
                }
}

$(document).ready(function(){
    //New game
    $(".btn--new").click(newGame)
    //Dice roll
    $(".btn--roll").click(rollDice)
    //Hold score
    $(".btn--hold").click(hold)
})