const yearElement = document.getElementById("years");
const monthElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const box1 = document.querySelector(".form1");
const box2 = document.querySelector(".form2");

const calc = document.querySelector(".btn");

calc.addEventListener("click", () => {
  const oneDay = 24 * 60 * 60 * 1000;

  const dateOfBirth = new Date(document.getElementById("date-of-birth").value);
  const currentDate = new Date();
  const totalSec = Math.round((currentDate - dateOfBirth) / 1000);
  const minute = Math.round(totalSec / 60);
  const hours = Math.round(totalSec / 3600);

  const days = Math.round(Math.abs((currentDate - dateOfBirth) / oneDay));
  const months = Math.floor(days / 30);
  const year = Math.floor(days / 365);

  yearElement.innerHTML = year;
  monthElement.innerHTML = months;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minute;
  secondsElement.innerHTML = totalSec;

  anime({
    targets: box1,
    translateX: -500,
    opacity: 0,
    rotate: 90,
    easing: "easeOutExpo",
  });
  anime({
    targets: box2,
    translateX: 0,
    opacity: 1,
    easing: "easeOutExpo",
  });
});

document.getElementById("back").addEventListener("click", () => {
  anime({
    targets: box1,
    translateX: 0,
    rotate: 0,
    opacity: 1,
    easing: "easeOutExpo",
  });
  anime({
    targets: box2,
    translateX: 500,
    opacity: 0,
    easing: "easeOutExpo",
  });
});
