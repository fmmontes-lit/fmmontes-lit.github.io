var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// Display the result in an element with id="current-time"
document.getElementById("current-time").innerHTML =
  // ("0" + hours).slice(-2) +
  // ":" +
  ("0" + minutes).slice(-2) + ":" + ("0" + seconds);

// Call the function every second
setInterval(function () {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();

  document.getElementById("current-time").innerHTML =
    // ("0" + hours).slice(-2) +
    // ":" +
    ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}, 1000);
