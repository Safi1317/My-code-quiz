const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questionBox");
const questionTextEl = document.getElementById("questions");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const choice4 = document.querySelector(".choice4");

let questionIndex = 0;

const questions = [
  {
    question: "What is the only food that can never go bad?",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: 1,
  },
  {
    question: "Where were chocolate chip cookies invented?",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: 2,
  },
  {
    question: "Where were French fries first invented?",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: 4,
  },
  {
    question: "Where were chocolate chip cookies invented",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: 1,
  },
  {
    question:
      "Mozzarella cheese is traditionally made from the milk of what animal?",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: 3,
  },
];
startButton.addEventListener("click", startGame);
function startGame() {
  score = 0;
  startButton.classList.add("hide");
  showQuestion();
  questionClassEl.classList.remove("hide");
  getNextQuestion();
}

function showQuestion() {
  questionEl.classList.remove("hide");

  questionTextEl.textContent = questions[questionIndex].question;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];

  questionIndex++;
}

function getNextQuestion() {
  questionEl.classList.remove("hide");
  button.addEventListener("click", Answer);
  if (questionIndex < questions.length) {
    questionIndex++;
  }
}
