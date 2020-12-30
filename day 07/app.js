// const question = document.getElementById("question").value;
// const optionA = document.getElementById("optionA").value;
// const optionB = document.getElementById("optionB").value;
// const optionC = document.getElementById("optionC").value;
// const optionD = document.getElementById("optionD").value;
// const solution = document.getElementById("solution").value;
// console.log(question, optionA, optionB, optionC, optionD, solution);
const objects = [];
function addObj() {
  const obj = {
    question: document.getElementById("question-input").value,
    a: document.getElementById("optionA").value,
    b: document.getElementById("optionB").value,
    c: document.getElementById("optionC").value,
    d: document.getElementById("solution").value,
    currect: document.getElementById("solution").value,
  };
  objects.append(obj);
  console.log(objects);
}
document.getElementById("btn01").addEventListener("click", addObj);
// console.log(objects);
