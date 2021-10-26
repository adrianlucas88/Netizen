let quizWindow = document.getElementById("quiz_window");
let qQuestion = document.getElementById("quiz-question");
let qAnswer = document.querySelectorAll(".answer");
let qImage = document.getElementById("sparkle");
let butClick, userPoints;
const quizCat = ["Science", "Informatics", "General", "History"];

function quiz() {
  projectContainer.style.display = "block";
  quizWindow.style.visibility = "visible";
  tictacRestart.style.visibility = "hidden";
  qImage.style.height = "0";
  qQuestion.innerHTML = "Pick a Category";
  qAnswer.forEach((element) => (element.style.display = "inline-flex"));
  userPoints = 0;
  showAnswers(quizCat);
}
function showAnswers(source) {
  for (let i = 0; i < qAnswer.length; i++) {
    qAnswer[i].innerHTML = source[i];
    qAnswer[i].addEventListener("click", pickAnswer);
  }
}
function pickAnswer(event) {
  butClick = event.target.innerHTML;
  if (butClick === quizCat[0]) {
    qQuestion.textContent = Science.quest1.question;
    showAnswers(Science.quest1.answer);
    console.log("first");
  }

  if (butClick === quizCat[1]) {
    qQuestion.textContent = Informatics.quest1.question;
    showAnswers(Informatics.quest1.answer);
  }
  if (
    butClick === Science.quest1.correct ||
    butClick === Science.quest2.correct ||
    butClick === Science.quest3.correct ||
    butClick === Informatics.quest1.correct ||
    butClick === Informatics.quest2.correct ||
    butClick === Informatics.quest3.correct
  ) {
    userPoints = userPoints + 1;
  }
}
function goQuest2() {
  if (qQuestion.textContent === Science.quest1.question) {
    qQuestion.textContent = Science.quest2.question;
    showAnswers(Science.quest2.answer);
  }

  if (qQuestion.textContent === Informatics.quest1.question) {
    qQuestion.textContent = Informatics.quest2.question;
    showAnswers(Informatics.quest2.answer);
  }
}
function goQuest3() {
  if (qQuestion.textContent === Science.quest2.question) {
    qQuestion.textContent = Science.quest3.question;
    showAnswers(Science.quest3.answer);
  }
  if (qQuestion.textContent === Informatics.quest2.question) {
    qQuestion.textContent = Informatics.quest3.question;
    showAnswers(Informatics.quest3.answer);
  }
}

function endScreen() {
  qQuestion.innerHTML = `Your Score is: ${userPoints}/3`;
  qAnswer.forEach((element) => (element.style.display = "none"));
  qImage.style.height = "15rem";

  console.log("end");
}

const Science = {
  quest1: {
    question: "What color is cobalt?",
    answer: ["Green", "Blue", "Yellow", "Red"],
    correct: "Blue",
  },
  quest2: {
    question: "What is the lightest existing metal?",
    answer: ["Copper", "Aluminium", "Iron", "Titanium"],
    correct: "Aluminium",
  },
  quest3: {
    question: "Which planet is nearest the sun?",
    answer: ["Mercury", "Terra", "Pluto", "Saturn"],
    correct: "Mercury",
  },
};
const Informatics = {
  quest1: {
    question: "In what year was Google launched on the web?",
    answer: ["2001", "1995", "2002", "1998"],
    correct: "1998",
  },
  quest2: {
    question: "Which unit is an indication for the sound quality of MP3?",
    answer: ["Gbps", "Mbps", "Kbps", "Kg"],
    correct: "Kbps",
  },
  quest3: {
    question: "What is the country top-level domain of Belgium?",
    answer: [".com", ".info", ".tech", ".be"],
    correct: ".be",
  },
};
const General = {
  quest1: {
    question: "In which European city can you find the home of Anne Frank?",
    answer: ["Berlin", "Paris", "London", "Amsterdam"],
    correct: "Amsterdam",
  },
  quest2: {
    question: "According to the Bible, who was the first murderer?",
    answer: ["Abel", "Joshua", "Cain", "Adam"],
    correct: "Cain",
  },
  quest3: {
    question: "Which South American country is named after Venice?",
    answer: ["Mexico", "Venezuela", "Peru", "Ecuador"],
    correct: "Venezuela",
  },
};
const History = {
  quest1: {
    question: "How many children did Queen Victoria have?",
    answer: ["6", "3", "7", "5"],
    correct: "6",
  },
  quest2: {
    question:
      "Xerxes ruled a great empire around the fifth century BC. Which empire?",
    answer: ["Mongol", "Persian", "Roman", "Otoman"],
    correct: "Persian",
  },
  quest3: {
    question: "In wich year did the World War II end?",
    answer: ["1930", "1940", "1950", "1945"],
    correct: "1945",
  },
};
