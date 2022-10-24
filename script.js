function getComputerChoice() 
{
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice()
{
    let input = prompt("Pick rock , paper or scissors.");
    input = input.toLowerCase();
    if (input !== "rock" && input !== "paper" && input !== "scissors")
    {
        alert('Wrong choice.');
    } else 
    {
        return input;
    }
}

function round(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
//        return "Tie!"
        return 0
    } else if 
    (playerSelection === 'rock' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock') 
    {
 //       return "You lose! " + computerSelection + " beats " + playerSelection + "."
        return -1
    } else 
    {
 //       return "You win! " + playerSelection + " beats " + computerSelection + "."
        return 1
    }
}

function game ()
{
    let playerPts = 0;
    let computerPts = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
      let result = round(playerChoice, computerChoice);
      switch (result)
      {
        case -1 :
            console.log("You lost round " + (i+1) + "! " + computerChoice + " beats " + playerChoice + ".");
            computerPts++;
            break;
        case 0 :
            console.log("Tie in round " + (i+1) + "!");
            break;
        case 1 :
            console.log("You won round " + (i+1) + "! " + playerChoice + " beats " + computerChoice + ".");
            playerPts++;
            break;
      }
    }
    if (playerPts === computerPts)
    {
        return ("Tie! \nPlayer points = " + playerPts + ".\nComputer points = " + computerPts + ".");
    }
    else if (playerPts > computerPts)
    {
        return ("You won! \nPlayer points = " + playerPts + ".\nComputer points = " + computerPts + ".")
    }
    else
    {
        return ("You lost! \nPlayer points = " + playerPts + ".\nComputer points = " + computerPts + ".")
    }
}

console.log(game())

