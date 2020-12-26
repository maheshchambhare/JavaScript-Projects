const obj = document.querySelector(".box");

const btn = document.getElementById("btn");
const btnB = document.getElementById("btnB");

btn.addEventListener("click", () => {
  anime({
    targets: obj,
    keyframes: [
      { translateX: 1315 },
      { translateY: 580 },
      { translateX: 0 },
      { translateY: 0 },
    ],
    easing: "easeOutExpo",
    duration: 1500,
  });
});

btnB.addEventListener("click", () => {
  anime({
    targets: obj,
    keyframes: [
      { translateY: 580 },
      { translateX: 1315 },
      { translateY: 0 },
      { translateX: 0 },
    ],
    easing: "easeOutExpo",
    duration: 1500,
  });
});
