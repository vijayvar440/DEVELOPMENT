let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#usre_score");
const compScorePara = document.querySelector("#comp_score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was Draw! Play Again"
    msg.style.backgroundColor = "#081b31";
};
const Showwin  = (userWin,userChoice,compChoice)=> {
     if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("You win!");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice} `
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            console.log("You lose!");
            msg.innerText = `You Lost! Your  ${compChoice} beats ${userChoice} `
            msg.style.backgroundColor = "red";
        }
    }
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        Showwin(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.currentTarget.id; // 🔥 ye important
        playGame(userChoice);
    });
});

