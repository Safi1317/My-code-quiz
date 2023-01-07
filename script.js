//  function selectedAnswer(){}
// function getNextQuestion() {}
// function score(){}
const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questionBox");

startButton.addEventListener("click", startGame);
function startGame() {
  score = 0;

  console.log("started");
  startButton.classList.add("hide");
  console.log("question1");
  //   questions.map((questions, index) => {});
  //   questionClassEl.classList.remove("hide");
  //   getNextQuestion();
  console.log("questions");
}

// Sets interval in variable
const timeEl = getElementById("countdown");
let seconds = 10;
let quiztimer = setInterval(function () {
  if (secondsLeft <= 0) {
    timeEl.textContent = secondsLeft + " seconds left till end of game.";
    // Stops execution of action at set interval
    showQuestion();
    // clearInterval(quiztimer);
  }
  // Calls function to create and append image
  else {
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(quiztimer);
      // Calls function to create and append image
      alert(gameover);
    }
  }
}, 1000);

function showQuestion(question) {
  questionEl.innerText = question.question;
}
const questions = [
  {
    question: "What is the only food that can never go bad?",
    choices: [Honey, oranges, butter, lemon],
    Answer: 1,
  },
  {
    question: "Where were chocolate chip cookies invented?",
    choices: [Honey, oranges, butter, lemon],
    Answer: 2,
  },
  {
    question: "Where were French fries first invented?",
    choices: [Honey, oranges, butter, lemon],
    Answer: 4,
  },
  {
    question: "Where were chocolate chip cookies invented",
    choices: [Honey, oranges, butter, lemon],
    Answer: 1,
  },
  {
    question:
      "Mozzarella cheese is traditionally made from the milk of what animal?",
    choices: [Honey, oranges, butter, lemon],
    Answer: 3,
  },
];
