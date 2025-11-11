function checkMood(score) {
    let mood;

    if (score > 7) {
      mood = "wonderfull !!";
    } else if (score > 4) {
      mood = "could be better";
    } else {
      mood = "not so great :(";
    }

    return mood;
  }
  function showMood() {}
    let randomScore = Math.floor(Math.random() * 10) + 1; 
    let moodResult = checkMood(randomScore);       
    if (moodResult== "wonderful !!") {
        targetElement.style.backgroundColor = "light green";
    if (moodResult== "could be better") {
        targetElement.style.backgroundColor = "green";
    if (moodResult== "not so great :(") {
        targetElement.style.backgroundColor = "green";
    }};


    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }


  $("#mood-button").click(function () {
    showMood();
  });