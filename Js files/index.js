let tictacBtn = document.getElementById("tictac");
let quizBtn = document.getElementById("quiz");
let mapsBtn = document.getElementById("maps");
let chatBtn = document.getElementById("chat");
let projectContainer = document.getElementById("project_container");
let projectWindow = document.getElementById("project_window");
let tictactoeContainer = document.getElementById("tictactoeContainer");

function menuFunction(x) {
  x.classList.toggle("change");
}
function projectShow() {
  projectContainer.style.display = "block";
  projectWindow.style.visibility = "visible";
}

function closeProjects() {
  projectContainer.style.display = "none";
  tictactoeContainer.style.display = "none";
}

//////////////////////Tic Tac Toe Game//////////////////////////////////////////
function tictac() {
  projectShow();
  tictactoeContainer.style.display = "grid";
  let player = "X";
  const gameMessage = document.querySelector(".game_message");
  let boxNo, box, boxId;
  //Give click and functions attribute to the boxes
  function clickOn() {
    document
      .querySelectorAll(".box")
      .forEach((box) => box.addEventListener("click", boxClicked));
  }
  document
    .querySelector(".tictactoe_restart")
    .addEventListener("click", restartBut);
  clickOn();
  //Set array with winning rules
  const winGames = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
  ];
  //Setup arrays to save each player progress
  let playedBoxX = [];
  let playedBox0 = [];
  function restartBut() {
    gameMessage.innerHTML = "";
    player = "X";
    gameMessage.innerHTML = `It's ${player} turn`;
    box = document.querySelectorAll(".box");
    box.forEach((box) => (box.innerHTML = ""));
    clickOn();
    playedBoxX = [];
    playedBox0 = [];
  }
  //Actions when the box gets clicked
  function boxClicked(e) {
    //Find which box is clicked
    boxNo = e.target;
    boxNo.innerText = player;
    //Get the Id of the box
    boxNo.removeEventListener("click", boxClicked);
    boxId = boxNo.getAttribute("id");
    //Find which player played and fill the array
    player === "X"
      ? playedBoxX.push(parseInt(boxId))
      : playedBox0.push(parseInt(boxId));
    gameMessage.innerHTML = `It's ${player} turn`;
    changePlayer();
    gameCheck();
  }

  function gameCheck() {
    //Break down the big array in multiple arrays and select the "true" ones
    winGames.some((elem) => {
      //Check the elements in each array if they match the elements in the other array
      if (elem.every((el) => playedBoxX.includes(el))) {
        gameMessage.innerHTML = " X Won";
        document
          .querySelectorAll(".box")
          .forEach((box) => box.removeEventListener("click", boxClicked));
      }
      if (elem.every((el) => playedBox0.includes(el))) {
        gameMessage.innerHTML = " 0 Won";
        document
          .querySelectorAll(".box")
          .forEach((box) => box.removeEventListener("click", boxClicked));
      }
      if (
        playedBoxX.length === 5 &&
        elem.every((el) => !playedBoxX.includes(el))
      ) {
        gameMessage.innerHTML = " It's a draw";
      }
    });
  }
  //console.log(playedBoxX);
  // console.log(playedBox0);

  function changePlayer() {
    player = player === "X" ? "0" : "X";
    gameMessage.innerHTML = `It's ${player} turn`;
  }
}
function quiz() {}
function maps() {}
function chat() {}
