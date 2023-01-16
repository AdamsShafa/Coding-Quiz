// Computing currentQuestion, timeLeft, timeInterval and score variables
var timeLeft = 40;
var timerInterval;
var currentQuestionIndex =0;
var score =0;

// 'start quiz' function
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    
    startScreen.classList.add("hide");

    // Displaying the question screen
    var questionsScreen = document.getElementById("questions");
    questionsScreen.classList.remove("hide");

    // code to show the first question and start the timer
    startTimer();

    displayQuestions();
}
// On the 'start' button, the event listener was added to start the quiz
document.getElementById("start").addEventListener("click", startQuiz);

// Start timer function
function startTimer() {
    timerInterval = setInterval(function () {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

//   Defining outcome when a quiz taker clicks on a option button

function questionClick() {
    // Verify whether the option is correct
    if (this.value === questions[currentQuestionIndex].answer) {
        // Add to the score
        score++;
        // Sound effect for correct answers with an audio element
        var correctAudio = new Audio("./assets/sfx/correct.wav");
        // Play the correct sound
        correctAudio.play();
      } else {
        // Decrease time by...
        timeLeft -= 15;
       // Sound effect for incorrect answers with an audio element
        var inCorrectAudio = new Audio("./assets/sfx/incorrect.wav");
        // Play the incorrect sound
        inCorrectAudio.play();
      }
      // Move to next question
      currentQuestionIndex++;
    
      // Check if there are any more questions
      if (currentQuestionIndex < questions.length) {
        // Display next question
        displayQuestions();
      } else {
        // Quiz is over, show the end screen
        endQuiz();
      }
    }

    // Function to display questions

function displayQuestions() {
  // Get current question object from array
  var currentQuestionData = questions[currentQuestionIndex];

  // Update title with current question
  var title = document.getElementById("question-title");
  title.textContent = currentQuestionData.title;

  // Clear out any old question choices
  var choices = document.getElementById("choices");
  choices.innerHTML = "";

  // Loop over options
  currentQuestionData.choices.forEach(function (choice, i) {
    // Create new button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = i + 1 + ". " + choice;

    // Attach click event listener to each choice
    choiceButton.onclick = questionClick;

    // Display on the page
    choices.appendChild(choiceButton);
  });
}

// Function to determine the outcome when the quiz ends
function endQuiz() {
  // Hide questions section
  let questionsScreen = document.getElementById("questions");
  questionsScreen.classList.add("hide");

  // Display end screen
  let endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");

  // Display final score
  let finalScore = document.getElementById("final-score");
  finalScore.textContent = score;

  // Attach event listener to submit button to save high score
  document.getElementById("submit").addEventListener("click", saveHighScore);

  // Request for user initials
  let initialsInput = document.getElementById("initials");
  let initials = initialsInput.value;
}

// Function to save high score
function saveHighScore() {
  
    // Get initials and score
    let initials = document.getElementById("initials").value;
    let score = document.getElementById("final-score").textContent;

    // Save to local storage
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score });
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect to high scores page
    window.location.href = "highscores.html";
  
};