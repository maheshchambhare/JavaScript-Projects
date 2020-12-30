let quizList = [
  {
    question: "JavaScript is a ___ -side programming language.",
    a: "Client",
    b: "Server",
    c: "Both",
    d: "None",
    currect: "c",
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    a: "alertBox(“Hello DataFlair!”);",
    b: "alert(Hello DataFlair!);",
    c: "msgAlert(“Hello DataFlair!”);",
    d: " alert(“Hello DataFlair!”);",
    currect: "d",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    a: "min(x,y);",
    b: "Math.min(x,y);",
    c: "Math.min(xy);",
    d: "min(xy);",
    currect: "b",
  },
  {
    question:
      'Which are the correct "if" statements to execute certain code if “x” is equal to 2?',
    a: "if(x 2)",
    b: "if(x = 2)",
    c: "if(x == 2)",
    d: "if(x != 2 )",
    currect: "c",
  },
];

const quiz = document.getElementById("quiz");
const ansEle = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselect();
  question.innerText = quizList[currentQuiz].question;
  a_text.innerText = quizList[currentQuiz].a;
  b_text.innerText = quizList[currentQuiz].b;
  c_text.innerText = quizList[currentQuiz].c;
  d_text.innerText = quizList[currentQuiz].d;
}
loadQuiz();

function getSelected() {
  let answer = undefined;

  ansEle.forEach((ansEle) => {
    if (ansEle.checked) {
      answer = ansEle.id;
    }
  });
  return answer;
}

function deselect() {
  ansEle.forEach((ansEle) => {
    ansEle.checked = false;
  });
}

btn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizList[currentQuiz].currect) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizList.length) {
      loadQuiz();
    } else {
      quiz.innerHTML =
        "<h2>You answered correctly  " +
        score +
        "/" +
        quizList.length +
        " questions.</h2>";
    }
  }

  anime({
    targets: quiz,
    keyframes: [
      {
        rotate: 100,
        opacity: 1,
        duration: 50,
        easing: "easeOutExpo",
      },
      { rotate: -100, opacity: 0, duration: 100, easing: "easeOutExpo" },
      { rotate: 0, opacity: 1, duration: 50, easing: "easeOutExpo" },
    ],
  });
});

anime({
  targets: ".heading",
  keyframes: [
    {
      rotate: 30,
      opacity: 1,
      duration: 200,
      easing: "easeOutExpo",
    },
    { rotate: 0, opacity: 0.8, duration: 100, easing: "easeOutExpo" },
    { rotate: -30, opacity: 1, duration: 200, easing: "easeOutExpo" },
    { rotate: 0, opacity: 0.8, duration: 100, easing: "easeOutExpo" },
  ],
  loop: true,
});
