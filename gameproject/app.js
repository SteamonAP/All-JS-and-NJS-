let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};
const drawGame = () =>{
    
    msg.innerText = "Its a tie,the Game was Draw. Try Again!";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        
        msg.innerText = `CONGO! You have Won!,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `Oops,Computer Won bruh...${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log(`The user chose = ${userChoice} `);
    const compChoice = genCompChoice();
    console.log(`The computer chose =  ${compChoice} `);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
}); 