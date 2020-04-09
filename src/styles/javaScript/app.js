let userScore = 0;
let computerScore = 0;

const playerScore = document.getElementById("user-score");
const comScore = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function converToWord (letter){
    if (letter === "r" ) 
        return "Rock";
    if (letter === "p")
        return "Paper";
    if (letter === "s")
        return "Scissors"
        
}

function win(user, computer){
    userScore++;
    playerScore.innerHTML = userScore;
    comScore.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "com".fontsize(3).sup();

    result.innerHTML = `${converToWord(user)}${smallUserWord} beats  ${converToWord(computer)}${smallCompWord}. You win! `
    console.log(user);
    console.log(computer);
}

function lose(user,computer){
    computerScore++;
    playerScore.innerHTML = userScore;
    comScore.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "com".fontsize(3).sup();

    result.innerHTML = `${converToWord(user)}${smallUserWord} loses  ${converToWord(computer)}${smallCompWord}. You lost! `
    console.log(user);
    console.log(computer);
}

function draw(){
    userScore++;
    playerScore.innerHTML = userScore;
    comScore.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "com".fontsize(3).sup();

    result.innerHTML = `${converToWord(user)}${smallUserWord} beats  ${converToWord(computer)}${smallCompWord}. You win! `
    console.log(user);
    console.log(computer);
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice)//this is being reflected in win and being changed to user and computer
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);

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