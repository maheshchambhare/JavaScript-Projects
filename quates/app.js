const quate = [
  {
    quate:
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    name: "- Nelson Mandela",
  },
  {
    quate: '"The way to get started is to quit talking and begin doing." ',
    name: "- Walt Disney",
  },
  {
    quate:
      '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking." ',
    name: "- Steve Jobs",
  },
  {
    quate:
      '"If life were predictable it would cease to be life, and be without flavor."',
    name: "- Eleanor Roosevelt",
  },
  {
    quate:
      '"If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough."',
    name: "- Oprah Winfrey",
  },
  {
    quate:
      '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success." ',
    name: "- James Cameron",
  },
  {
    quate: '"Life is what happens when you are busy making other plans."',
    name: "- John Lennon",
  },
];

const cont = document.querySelector(".container");
const quates = document.getElementById("quate");
const by = document.getElementById("by");
const next = document.getElementById("btn");

let currentQuate = 0;

function loadContent() {
  quates.innerHTML = quate[currentQuate].quate;
  by.innerHTML = quate[currentQuate].name;
}

loadContent();

next.addEventListener("click", () => {
  currentQuate++;
  if (currentQuate < quate.length) {
    loadContent();
  } else {
    currentQuate = 0;
    loadContent();
  }
  anime({
    targets: cont,
    keyframes: [
      {
        translateX: 70,
        opacity: 0.5,
        duration: 10,
        easing: "easeOutExpo",
      },
      { translateX: 0, opacity: 1, duration: 100, easing: "easeOutExpo" },
    ],
  });
});
