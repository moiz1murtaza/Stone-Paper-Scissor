let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win");
        userScore ++;
        userscorepara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose");
        compScore ++;
        compscorepara.innerText = compScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

//genrate randone choice
const genCompchoice = ()=> {
    const option = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];}
//draw game    
const drawgame = ()=> {
console.log("It is a draw");
msg.innerText = "Game was draw! Try again.";
msg.style.backgroundColor = "yellow";
msg.style.color = "black";}
//choice and game logic
const playgame =(userchoice) => {
 console.log("Your choice is",userchoice);
 const compchoice= genCompchoice();
 console.log("Pc choice", compchoice);




if(userchoice == compchoice){
    //Draw game
    drawgame();

}else{
    let userWin= true;
    if(userchoice === "rock"){
        userWin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper") {
        userWin = compchoice === "scissors" ? false: true;

    }else{
        userWin =compchoice === "rock" ? false: true;
    }
    showWinner (userWin);


}


}





    //user choice    
choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id").toLowerCase();
    playgame(userchoice);
})})


