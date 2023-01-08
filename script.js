const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questionBox");
const questionTextEl = document.getElementById("questions");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");

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
  console.log("start game");
  startButton.classList.add("hide");
  showQuestion();
  // questionClassEl.classList.remove("hide");
  // getNextQuestion();
}
// set button name to the choices in question array
function showQuestion() {
  questionEl.classList.remove("hide");

  questionTextEl.textContent = questions[questionIndex].question;
  console.log("4");
  console.log("choice1" + questions[questionIndex].choices[0]);
  choice1.innerHTML = questions[questionIndex].choices[0];
  console.log(questions[questionIndex].choices[0]);
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];

  questionIndex++;
}
//  get next question from question array onclick of correct answer
function getNextQuestion() {
  questionEl.classList.remove("hide");
  button.addEventListener("click", Answer);
  if (questionIndex < questions.length) {
    questionIndex++;
    showQuestion([questionIndex]);
  }
}

// Sets interval in variable
// const timeEl = getElementById("countdown");
// let seconds = 10;
// let quiztimer = setInterval(function () {
//   if (secondsLeft <= 0) {
//     timeEl.textContent = secondsLeft + " seconds left till end of game.";
//     // Stops execution of action at set interval
//     showQuestion();
//     // clearInterval(quiztimer);
//   }
//   // Calls function to create and append image
//   else {
//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(quiztimer);
//       // Calls function to create and append image
//       alert(gameover);
//     }
//   }
// }, 1000);

//  add a my initials and my score saver
//add a game over function
