let userScore = 0;
let Computer = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector(".result");
const result = document.querySelector(".reason");
const hpoint = document.querySelector(".hpoint")
const cpoint = document.querySelector(".cpoint")

const gameDraw = (userChoice,compchoice) =>{
    console.log("game was draw");
     msg.innerText = "game was draw ";
     result.innerText = `both choose same ${compchoice}`;
     msg.style.backgroundColor = "black";
     msg.style.fontSize = "2rem" ;
     result.style.backgroundColor = "black";
     result.style.fontSize = "2rem" ;
}

const showwinner = (userWin,compchoice,userChoice) => {
    if(userWin){
        userScore++;
        hpoint.innerText = userScore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
        msg.style.fontSize = "2rem" ;
        result.innerText = `your ${compchoice} beats ${userChoice}`;
        result.style.backgroundColor = "black";
        result.style.fontSize = "2rem" ;

    } else {
        Computer++;
        cpoint.innerText = Computer ;
        console.log("you lose");
         msg.innerText = "you lose";
         msg.style.backgroundColor = "red";
        msg.style.fontSize = "2rem" ;
        result.innerText = `your ${compchoice} lose ${userChoice}`;
        result.style.backgroundColor = "black";
        result.style.fontSize = "2rem" ;
    }

}

const generateComputerchoice =  () => {
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option [randIdx];
}

const playGame = (userChoice) =>{
    console.log("choice was clicked",userChoice);
    const compchoice = generateComputerchoice();
    console.log("computer choice",compchoice)

    if(userChoice === compchoice){
        gameDraw(userChoice,compchoice);
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compchoice === "paper" ? false:true;
        } else if(userChoice === "paper") {
            userWin = compchoice === "scissor" ? false:true;
        } else {
            userWin = compchoice === "rock" ? false:true;
        }
        showwinner(userWin,userChoice,compchoice)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})