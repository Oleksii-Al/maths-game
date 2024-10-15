//Wait for the the DOm to be loaded before runninbg the game
//Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type")=== "submit") {
                alert("You clicked submit");
            }
            else {
                let gameType = this.getAttribute("data-type");

                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //creates two random number
let num1 = Math.ceil(Math.random() * 25);
let num2 = Math.ceil(Math.random() * 25);
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}