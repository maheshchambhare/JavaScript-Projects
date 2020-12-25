const btn = document.getElementById("btn");
const move = document.querySelector(".box");

const arr = [movF, movB];

function movF() {
  move.style.marginLeft = "auto";
  move.style.marginRight = "0";
}
function movB() {
  move.style.marginLeft = "0";
  move.style.marginRight = "auto";
}

var number = 0;

btn.addEventListener("click", () => {
  if (number < 2) {
    arr[number]();
    number++;
  } else {
    number = 0;
  }
});
