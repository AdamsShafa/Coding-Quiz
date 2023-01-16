// This file houses the JavaScript code for the high scores

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the high scores
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // Arrange scores in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    // Retrieve the high scores list element
    var highScoresList = document.getElementById("highscores");
  
    // Loop over scores and add to list
    for (var i = 0; i < highScores.length; i++) {
      var score = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = `${score.initials} - ${score.score}`;
      highScoresList.appendChild(li);
    }
  console.log(highScores);

    document.getElementById("clear").addEventListener("click", function () {
      // Clear high scores from local storage
      localStorage.removeItem("highScores");
  
      // Clear high scores list
      highScoresList.innerHTML = "";
    });
  });