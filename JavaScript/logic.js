// Computing currentQuestion, timeLeft, timeInterval and score variables
var currentQuestion =0;
var timeLeft = 60;
var timeInterval;
var score =0;

// 'start quiz' function
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");

    // Displaying the question screen
    let questionsScreen = document.getElementById("questions");
    questionsScreen.classList.remove("hide");

    // code to show the first question and start the timer
    startTimer();

    displayQuestions();
}