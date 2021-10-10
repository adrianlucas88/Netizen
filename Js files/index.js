let tictacBtn = document.getElementById("tictac");
let quizBtn = document.getElementById("quiz");
let projectContainer = document.getElementById("project_container");

function menuFunction(x) {
  x.classList.toggle("change");
}

function closeProjects() {
  projectContainer.style.display = "none";
  tictactoeContainer.style.display = "none";
  quizWindow.style.visibility = "hidden";
}
