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
        [0, 1, 2, 37.5, 3.5, 0],
        [3, 4, 5, 37.5, 11.5, 0],
        [6, 7, 8, 37.5, 20, 0],
        [0, 3, 6, 29.4, 12, 90],
        [1, 4, 7, 37.4, 12, 90],
        [2, 5, 8, 45.6, 12, 90],
        [0, 4, 8, 38, 12, 45],
        [2, 4, 6, 36, 13, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            win.play();
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            element.removeEventListener("click");
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
        }
    })
})
reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        del.play();
        turn ="X"; 
        document.querySelector(".line").style.transform=`translate(0vw,0vw) rotate(0deg)`;
        gameover=false;
    })
    document.querySelector(".info").innerText = "Turn for X";
})
