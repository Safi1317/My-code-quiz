const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questionBox");
var initials = document.getElementById("initials");
const questionTextEl = document.getElementById("questions");
const finalscore = document.getElementById("finalscore");
const highscoreel = document.getElementById("highscore");
const Rules = document.querySelector(".Rules");
const totalscore = document.querySelector("#score-page");
const timer = document.getElementById("countdown");
const nextbutton = document.getElementById("Next");
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

var highscore = localStorage.getItem("score");
var highscoreintials = localStorage.getItem("initials");

const questions = [
  {
    question: "What is the only food that can never go bad?",
    choices: ["Honey", "oranges", "butter", "lemon"],
    Answer: "Honey",
  },
  {
    question: "Where were chocolate chip cookies invented?",
    choices: ["USA", "UK", "GHANA", "FRANCE"],
    Answer: "USA",
  },
  {
    question: "Where were French fries first invented?",
    choices: ["FRANCE", "KENYA", "GREEN", "lemon"],
    Answer: "GREEN",
  },
  {
    question: "Where were chocolate chip cookies invented",
    choices: ["BLUE", "GREEN", "YELOW", "RED"],
    Answer: "GREEN",
  },
  {
    question:
      "Mozzarella cheese is traditionally made from the milk of what animal?",
    choices: ["RED", "UK", "butter", "UK"],
    Answer: "butter",
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
//  get next question from question array onclick of correct answer

choices.forEach((choicebutton) => {
  choicebutton.addEventListener("click", selectanswer);
});
// compare Answers to correct Answer
// if correct answer is selected go to next question
// if wrong answer selected minus timer by 1
function selectanswer(event) {
  if (questions[questionIndex].Answer === event.target.innerText) {
    // comment.textContent = "Correct!";

    // // hide nextbutton
    getNextQuestion();
    // timeleft=timeleft+1;
  } else {
    // comment.textContent = "Wrong!";
    // choicebutton.append(comment);
    timeleft -= 10;
  }
}
nextbutton.addEventListener("click", getNextQuestion);
function getNextQuestion() {
  questionIndex++;
  questionEl.classList.remove("hide");
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    score();
  }
}
// quiz timer
var timeleft = 50;
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
  initials = document.getElementById("initials");
  localStorage.setItem("initials", initials.value);
}

// quiz score
function score() {
  questionEl.setAttribute("class", "hide");
  timer.setAttribute("class", "hide");
  nextbutton.setAttribute("class", "hide");
  totalscore.removeAttribute("class");
  finalscore.textContent = timeleft;
  localStorage.setItem("score", finalscore.textContent);
  clearInterval(timerid);
  finalscore;
}
function gameover() {
  clearInterval(timerid);
  timer.innerHTML = "Finished";
  score();
}
