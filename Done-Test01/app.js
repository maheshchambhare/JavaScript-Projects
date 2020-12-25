const forBtn = document.getElementById("forward");
const backBtn = document.getElementById("backward");
const right = document.querySelector(".box");

var array = [topRight, topRightBottom, bottomRight, topLeft];

function topRight() {
  right.style.marginLeft = "auto";
  right.style.marginTop = "0";
  right.style.marginRight = "0";
}
function topRightBottom() {
  right.style.marginLeft = "auto";
  right.style.marginTop = "75%";
  right.style.marginRight = "0";
}
function bottomRight() {
  right.style.marginLeft = "0";
  right.style.marginTop = "75%";
  right.style.marginRight = "0";
}
function topLeft() {
  right.style.marginLeft = "0";
  right.style.marginTop = "0";
  right.style.marginRight = "auto";
}

let number = 0;

forBtn.addEventListener("click", () => {
  if (number < 4) {
    array[number]();
    number++;
  } else {
    number = 0;
  }
});

backBtn.addEventListener("click", () => {
  if (number >= 0) {
    number--;
    array[number]();
  } else {
    number = 4;
  }
});
