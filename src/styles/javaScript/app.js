const userScore = 0;
const computerScore = 0;

const playerScore = document.getElementById("user-score");
const comScore = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function win(){
    console.log('win')
}

function win(){
    console.log('win')
}

function win(){
    console.log('win')
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break;

        case "rp":
        case "ps":
        case "sr":
            lose();
            break;

        case "rr":
        case "pp":
        case "ss":
            draw();

            break;
    }
}




function main() {
    rock.addEventListener('click', () => {
        game("r")
    })

    paper.addEventListener('click', () => {
        game("p")
    })

    scissors.addEventListener('click', () => {
        game("s")
    })


}

main();