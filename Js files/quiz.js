let quizWindow = document.getElementById("quiz_window");
let qQuestion = document.getElementById("quiz-question");
let qBtnNext = document.getElementsByClassName("quiz__btn-next");
let qAnswer = document.getElementsByClassName("answer");

function quiz() {
  projectContainer.style.display = "block";
  quizWindow.style.visibility = "visible";
  tictacRestart.style.visibility = "hidden";
  // qBtnNext.addEventListener("click", nextQ);
  // function nextQ() {}
  console.log(quizCat);
  for (let i = 0; i < qAnswer.length; i++) {
    qAnswer[i].innerHTML = quizCat[i];
  }
}

const quizCat = ["Science", "Informatics", "General", "History"];

const Science = {
  quest1: {
    question: "How What color is cobalt?",
    answer1: "Green",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "Red",
    correct: "Blue",
  },
  quest2: {
    question: "What is the lightest existing metal?",
    answer: "Copper",
    answer: "Iron",
    answer: "Aluminium",
    answer: "	Silver",
    correct: "Aluminium",
  },
  quest3: {
    question: "Which planet is nearest the sun?",
    answer: "Mercury",
    answer: "Terra",
    answer: "Pluto",
    answer: "Saturn",
    correct: "Mercury",
  },
};
const Informatics = {
  quest1: {
    question: "In what year was Google launched on the web?",
    answer1: "1995",
    answer2: "2000",
    answer3: "2001",
    answer4: "1998",
    correct: "1998",
  },
  quest2: {
    question: "Which unit is an indication for the sound quality of MP3?",
    answer: "Gbps",
    answer: "Mbps",
    answer: "Kbps",
    answer: "Kg",
    correct: "Kbps",
  },
  quest3: {
    question: "What is the country top-level domain of Belgium?",
    answer: ".com",
    answer: ".info",
    answer: ".tech",
    answer: ".be",
    correct: ".be",
  },
};
