// Waits for site to load
//on click function

document.addEventListener("DOMContentLoaded", function(){
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop that is called when the browser loads
 * and when the users answer been submitted
 */
function runGame() {

    // creates random number 1-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
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

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

//function runGame() {
    
//}