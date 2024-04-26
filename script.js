let boxes = document.querySelectorAll(".box");
let resetbt = document.querySelector("#rb");
let newGameBtn = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 5],
    [3, 4, 5],
    [6, 7, 8],


];

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO == true) {
            box.innerText = "X";
            box.style.color = "blue";
            turnO = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkwinpattern();
    });
});

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}



const showWinner = (winner) => {
    msg.innerText = `Congatulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();

}

const checkwinpattern = () => {
    for (let pattern of winPatterns) {
        let pos1 = (boxes[pattern[0]].innerText);
        let pos2 = (boxes[pattern[1]].innerText);
        let pos3 = (boxes[pattern[2]].innerText);

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbt.addEventListener("click", resetGame);

