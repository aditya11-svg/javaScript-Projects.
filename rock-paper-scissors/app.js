let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#userScore");
const compScoreCount = document.querySelector("#compScore");


const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];

};

const drawGame = () =>{
    msg.innerText = "The game was draw. Play again";
    msg.style.backgroundColor = "#081b31";

    

};

const showWinner = (userwin, userChoice, compChoice) =>{
    if (userwin){
        userScore++;
        userScoreCount.innerText= userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreCount.innerText = compScore ;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if (userChoice === compChoice){
        drawGame();
    }else {
        let userwin = true;
        if (userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true ;

        }else {
            userwin = compChoice === "rock " ? false : true ;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);

    })
    
});