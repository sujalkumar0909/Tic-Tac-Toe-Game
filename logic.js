console.log("Welcome to tic tak toe");
let mus = new Audio("tap.mp3");
let win = new Audio("victory1.mp3");
let del=new Audio("delete.mp3");
let gameover = false;

let turn = "X";
const changeturn = () => {
    return turn === "X" ? "O" : "X";
}

const checkwin = (event) => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            win.play();
            element.removeEventListener("click");
            event.preventDefault();
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            mus.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            else
            {
                event.preventDefault();
            }
        }
    })
})
reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        del.play();
        turn ="X"; 
        gameover=false;
    })
    document.querySelector(".info").innerText = "Turn for X";
})
