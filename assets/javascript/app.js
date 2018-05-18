




// VARIABLES
// ==========================================================================
// the timer 

var count = 31;




var counter = setInterval(timer, 1000);

function timer() {
    count=count-1;
    if (count <= -1)
    {
        clearInterval(counter);
        // function timeUp() {

        //     // in the element with an id of time-left add an h2 saying Time's Up!
        //     // console log done
        //     console.log("done");
        //     $("#time-left").append("<h2>Time's Up!</h2>");
        //     console.log("time is up");
    return;
    }

document.getElementById("timer").innerHTML=count + " seconds left";

}








// The array of questions for our quiz game.
var questions = [
  { q: "Alessandro will feel compelled to give me more than a c-", a: "t" },
  { q: "Daniel learned his lesson about playing with his fidget toy under the desk", a: "f" },
  { q: "This is  the first time Paul has somewhat completed a homework", a: "t" },
  { q: "The answer to Life, the Universe and Everything is 42.", a: "t" },
  { q: "If I could turn Siri up to 11 - Should I?", a: "t" }
];

// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;

// FUNCTIONS
// ==============================================================================

// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  if (questionIndex <= (questions.length - 1)) {
    document.querySelector("#question").innerHTML = questions[questionIndex].q;
  }
  // If there aren't, render the end game screen.
  else {
    document.querySelector("#question").innerHTML = "Game Over!";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
  }
}

// Function that updates the score...
function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
renderQuestion();
updateScore();

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

  // If there are no more questions, stop the function.
  if (questionIndex === questions.length) {
    return;
  }

  // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  var userInput = event.key.toLowerCase();

  // Only run this code if "t" or "f" were pressed.
  if (userInput === "t" || userInput === "f") {

    // If they guess the correct answer, increase and update score, alert them they got it right.
    if (userInput === questions[questionIndex].a) {
    //   alert("Correct!");
    $("#imageDiv").html("<img src='assets/images/smiling.png' />");
      score++;
      updateScore();
    }
    // If wrong, alert them they are wrong.
    else {
        
        $("#imageDiv").html("<img src='assets/images/pile-of-poo.png' />");
    
    }

    // Increment the questionIndex variable and call the renderQuestion function.
    questionIndex++;
    renderQuestion();

  }

};

