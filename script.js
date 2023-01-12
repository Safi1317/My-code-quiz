const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questionBox");
const initials = document.getElementById("initials");
const questionTextEl = document.getElementById("questions");
const finalscore = document.getElementById("finalscore");
const highscoreel = document.getElementById("highscore");
const Rules = document.querySelector(".Rules");
const totalscore = document.querySelector("#score-page");
const timer = document.getElementById("countdown");
const submitbutton = document.getElementById("submit");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");
const choices = document
  .getElementsByClassName("choices")[0]
  .querySelectorAll("button");
console.log(choices);

let questionIndex = 0;
let timerid;

const questions = [
  {
    question: "What is the only food that can never go bad?",
    choices: ["Oranges", "Honey", "Butter", "Lemon"],
    Answer: "Honey",
  },
  {
    question: "Where were chocolate chip cookies invented?",
    choices: ["Massachusetts", "Minneapolis", "Ghana", "France"],
    Answer: "Massachusetts",
  },
  {
    question: "Where were French fries first invented?",
    choices: ["France", "Kenya", "Green", "Belgium"],
    Answer: "Belgium",
  },
  {
    question: "What is the only fruit with seeds on the outside?",
    choices: ["Mangoes", "Kiwifruit", "Strawberries", "Gooseberry"],
    Answer: "Strawberries",
  },
  {
    question:
      "Mozzarella cheese is traditionally made from the milk of what animal?",
    choices: ["Cow", "Buffalo", "Goat", "Camel"],
    Answer: "Buffalo",
  },
];
startButton.addEventListener("click", startGame);
//  start game
function startGame() {
  startButton.classList.add("hide");
  Rules.style.display = "none";
  showQuestion();
  timerid = setInterval(quiztimer, 1000);
}
// set button name to the choices in question array
function showQuestion() {
  questionEl.classList.remove("hide");
  questionTextEl.textContent = questions[questionIndex].question;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}
choices.forEach((choicebutton) => {
  choicebutton.addEventListener("click", selectanswer);
});
// compare Answers to correct Answer
// if correct answer is selected go to next question
function selectanswer(event) {
  if (questions[questionIndex].Answer === event.target.innerText) {
    getNextQuestion();
  } else {
    timeleft -= 15;
  }
}
//  get next question from question array onclick of correct answer
function getNextQuestion() {
  questionIndex++;
  questionEl.classList.remove("hide");
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    gameover();
  }
}
// quiz timer
// if wrong answer selected minus timer by 15
var timeleft = 60;
function quiztimer() {
  timer.textContent = timeleft;
  timeleft--;
  if (timeleft <= 0) {
    timeleft = 0;
    clearInterval(timerid);
    // alert("gameover");
    gameover();
  }
}
submitbutton.addEventListener("click", userinput);
function userinput() {
  localStorage.setItem("initials", initials.value);
  let getHighScore = localStorage.getItem("score");
  document.getElementById("finalInitials").textContent = initials.value;
  highscoreel.textContent = getHighScore;
}

// quiz score
function score() {
  questionEl.setAttribute("class", "hide");
  timer.setAttribute("class", "hide");
  totalscore.removeAttribute("class");
  let finalUserScore = timeleft;
  finalscore.textContent = finalUserScore;
  let currrentHighScore = localStorage.getItem("score");
  if (finalUserScore > currrentHighScore) {
    localStorage.setItem("score", finalUserScore);
  }
  clearInterval(timerid);
  finalscore.textContent = finalUserScore + initials.value;
  highscoreel.textContent = currrentHighScore;
}

function gameover() {
  clearInterval(timerid);
  timer.innerHTML = "Finished!";
  score();
}
