// console.log(UserChoice)


function getHumanChoice(){
UserChoice = prompt("enter  your choice rock(r) paper(p) os scissors(s)");
return UserChoice
}

function getComputerChoice(){
random = Math.floor(Math.random() * 3);
choices = "rps"
let computerChoice = choices.charAt(random)
return computerChoice
}

computerScore = 0;
humanScore = 0;
draws=0;
let h;
let c;

function playRound(h, c) {
     h = getHumanChoice();
     c = getComputerChoice();
    if(h===c){
        console.log("draw");
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
        draws++;
    }
    else if(h==="r" && c==="p"){
        console.log("computer chose "+c+" you lost");
        computerScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }
      else if(h==="p" && c==="s"){
        console.log("computer chose "+c+" you lost");
        computerScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }

      else if(h==="p" && c===""){
        console.log("computer chose "+c+" you lost");
        computerScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }

    else if(h==="p" && c==="r"){
        console.log("computer chose "+c+" you Won");
        humanScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }

    else if(h==="r" && c==="s"){
        console.log("computer chose "+c+" you won");
        humanScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }

    else if(h==="s" && c==="p"){
        console.log("computer chose "+c+" you won");
        humanScore++;
        console.log(humanScore+" (user):"+ computerScore+" (computer)  "+ draws+ "(draws)" );
    }

    else{
        console.log(h,c,humanScore,computerScore)
    }
}



for(let i=0; i<5; i++){
playRound(h, c);
}