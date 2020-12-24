const btnMove = document.getElementById("butn");
const btnMoveB = document.getElementById("butb");
const center = document.getElementById("cent");

btnMove.addEventListener("click", () => {
  const right = document.querySelector(".box");
  right.style.borderRadius = "0";
  right.style.backgroundColor = "yellow";
  right.style.marginLeft = "auto";
  right.style.marginRight = "0";
});

btnMoveB.addEventListener("click", () => {
  const right = document.querySelector(".box");
  right.style.backgroundColor = "red";
  right.style.borderRadius = "0";
  right.style.marginLeft = "0";
  right.style.marginRight = "auto";
});

center.addEventListener("click", () => {
  const right = document.querySelector(".box");
  right.style.backgroundColor = "blue";
  right.style.borderRadius = "50%";
  right.style.marginLeft = "auto";
  right.style.marginRight = "auto";
});
