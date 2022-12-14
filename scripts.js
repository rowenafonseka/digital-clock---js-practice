// grab DOM elements

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const session = document.getElementById("session");

// function to display time
function showTime() {
  // new Date() method gets current date and time.
  let currentTime = new Date();

  //   getHours(), etc methods will target and grab current hours, mins, etc.
  let hrs = currentTime.getHours();
  let mins = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  //   if statement for session
  if (hrs < 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "PM";
  }

  //   target innerHTML to show it on display
  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = sec;
}

// setInterval() to repeat the functions every 10 ms.
setInterval(showTime, 10);
