let quizWindow = document.getElementById("quiz_window");
let qQuestion = document.getElementById("quiz-question");
let qAnswer = document.querySelectorAll(".answer");
let butClick;
const quizCat = ["Science", "Informatics", "General", "History"];

function quiz() {
  projectContainer.style.display = "block";
  quizWindow.style.visibility = "visible";
  tictacRestart.style.visibility = "hidden";
  qQuestion.innerHTML = "Pick a Category";

  for (let i = 0; i < qAnswer.length; i++) {
    qAnswer[i].textContent = quizCat[i];
  }
  qAnswer.forEach((element) => element.addEventListener("click", pickAnswer));
  function pickAnswer(e) {
    butClick = e.target;

    if (butClick.textContent === quizCat[0]) {
      qQuestion.textContent = Science.quest1.question;
      for (let i = 0; i < qAnswer.length; i++) {
        qAnswer[i].textContent = Science.quest1.answer[i];
        console.log("first");
        qAnswer[i].addEventListener("click", goQuest2);
      }
    }

    if (butClick.textContent === quizCat[1]) {
      qQuestion.textContent = Informatics.quest1.question;

      for (let i = 0; i < qAnswer.length; i++) {
        qAnswer[i].textContent = Informatics.quest1.answer[i];
        qAnswer[i].addEventListener("click", goQuest2);
      }
    }
    function goQuest2() {
      if (qQuestion.textContent === Science.quest1.question) {
        qQuestion.textContent = Science.quest2.question;
        for (let i = 0; i < qAnswer.length; i++) {
          qAnswer[i].textContent = Science.quest2.answer[i];
          qAnswer[i].addEventListener("click", goQuest3);
          console.log("second");
        }
      }
      if (qQuestion.textContent === Informatics.quest1.question) {
        qQuestion.textContent = Informatics.quest2.question;
        for (let i = 0; i < qAnswer.length; i++) {
          qAnswer[i].textContent = Informatics.quest2.answer[i];
          qAnswer[i].addEventListener("click", goQuest3);
        }
      }
    }
    function goQuest3() {
      if (qQuestion.textContent === Science.quest2.question) {
        qQuestion.textContent = Science.quest3.question;
        for (let i = 0; i < qAnswer.length; i++) {
          qAnswer[i].textContent = Science.quest3.answer[i];
          console.log("third");
        }
      }
      if (qQuestion.textContent === Informatics.quest2.question) {
        qQuestion.textContent = Informatics.quest3.question;
        for (let i = 0; i < qAnswer.length; i++) {
          qAnswer[i].textContent = Informatics.quest3.answer[i];
        }
      }
    }
    if (
      butClick.textContent === Science.quest1.correct ||
      butClick.textContent === Science.quest2.correct ||
      butClick.textContent === Science.quest3.correct ||
      butClick.textContent === Informatics.quest1.correct ||
      butClick.textContent === Informatics.quest2.correct ||
      butClick.textContent === Informatics.quest3.correct
    ) {
      console.log("Corect");
    }
  }
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
