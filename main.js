let intentos = 1;
let maxIntentos = 3;

function calculateCourse() {
    var days = document.getElementById("days").value;
    var type = document.getElementById("type").value;
    var level = document.getElementById("level").value;
    var result = document.getElementById("result");

  
    if (days == "1" && type == "virtual" && level == "beginner") {
        result.innerHTML = "";
        var image = document.createElement("img");
        image.src = "im.png";
        result.appendChild(image);
    } else if (days == "2" && type == "virtual" && level == "beginner") {
        result.innerHTML = "";
        var image = document.createElement("img");
        image.src = "im2.png";
        result.appendChild(image);
    } else if (days == "1" && type == "face-to-face" && level == "beginner") {
        result.innerHTML = "";
        var image = document.createElement("img");
        image.src = "im3.png";
        result.appendChild(image);
    } else if (days == "2" && type == "face-to-face" && level == "beginner") {
      result.innerHTML = "In the works";
    } else if (days == "1" && type == "virtual" && level == "intermediate") {
      result.innerHTML = "In the works";
    } else if (days == "2" && type == "virtual" && level == "intermediate") {
      result.innerHTML = "In the works";
    } else if (days == "1" && type == "face-to-face" && level == "intermediate") {
      result.innerHTML = "In the works";
    } else if (days == "2" && type == "face-to-face" && level == "intermediate") {
      result.innerHTML = "In the works";
    } else {
      result.innerHTML = "Invalid selection";
    }
  }

  function userMotive() {
    var enteredMotive = document.getElementById('personalMotive').value;
    console.log(enteredMotive);

    if (intentos < 3) {
        document.getElementById('personal').innerHTML = "What an interesting reason!";
        console.log("Attempt #" + intentos);
    } else {
        document.getElementById('personal').innerHTML = "Thank you, that should do it!";
        console.log("Attempt limit reached");
    }

    intentos++;
}


  