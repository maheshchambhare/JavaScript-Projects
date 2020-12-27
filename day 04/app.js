const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

var year = 2021;

var newYear = "1 jan" + year;

function countDown() {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSec = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const minutes = Math.floor(totalSec / 60) % 60;

  const sec = Math.floor(totalSec) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

countDown();

setInterval(countDown, 1000);
