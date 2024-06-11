'use strict';
let currentScore = 0
let holdScore = 0
//Functions
const newGame = () => {
    currentScore = 0
    holdScore = 0
    $(".score").text(0)
    $(".current-score").text(currentScore)
    $(".player").removeClass("player--active player--winner")
    $(".player--0").addClass("player--active")
    $(".dice").hide()
}
const switchPlayer = () => {
    $(".player").toggleClass("player--active")
}
const hold = () => {
    holdScore = Number($(".player--active .score").text())
    holdScore += currentScore
    $(".player--active .score").text(holdScore)/10
    holdScore >= 100 ? $(".player--active").addClass("player--winner") : switchPlayer()
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

//Event Handling
$(document).ready(function(){
    //New game
    $(".btn--new").click(newGame)
    //Dice roll
    $(".btn--roll").click(rollDice)
    //Hold score
    $(".btn--hold").click(hold)
})