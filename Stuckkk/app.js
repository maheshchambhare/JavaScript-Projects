const forBtn = document.getElementById("forward");
const backBtn = document.getElementById("backward");
const right = document.querySelector(".box");

var array = [
  function topRight() {
    right.style.marginLeft = "auto";
  },
  function topRightBottom() {
    right.style.marginLeft = "auto";
    right.style.marginTop = "75%";
  },
  function bottomRight() {
    right.style.marginTop = "75%";
  },
  function topLeft() {
    right;
  },
];

let number = 0;

function numberIncr() {
  array[number];
  console.log(array[number]);
  number++;
  console.log(number);
}

forBtn.addEventListener("click", numberIncr);
