
function reset() {
    playerPts = 0
    computerPts = 0
}

function getComputerChoice() 
{
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(element)
{
    let input = element.getAttribute('data-sel');
    return input;

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
    let i = 0
    let playerPts = 0;
    let computerPts = 0;
    const buttons = document.querySelector('#btns').querySelectorAll('button')
    let res = document.querySelector('#result').querySelector('p')
    let playerScore = document.querySelector('#player-num')
    let computerScore = document.querySelector('#computer-num')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerChoice = getPlayerChoice(button)
            let computerChoice = getComputerChoice()
            let result = round(playerChoice, computerChoice);
            switch (result)
            {
                case -1 :
                    res.textContent = "You lost this round! " + computerChoice + " beats " + playerChoice + "."
                    computerPts++;
                    break;
                case 0 :
                    res.textContent = "Tie in this round!"
                    break;
                case 1 :
                    res.textContent = "You won this round!" + playerChoice + " beats " + computerChoice + "."
                    playerPts++;
                    break;
            }
            if (playerPts >= 5 || computerPts >= 5) {
                if (playerPts > computerPts) {
                    res.textContent = 'The player wins!'
                } else if (playerPts < computerPts) {
                    res.textContent = 'The computer wins!'
                } else {
                    res.textContent = 'Tie!'
                }
                playerPts = 0
                computerPts = 0;
            }
            playerScore.textContent = playerPts
            computerScore.textContent = computerPts
        })
    })
    /*for (let i = 0; i < 5; i++)
    {
        let playerChoice = getPlayerChoice()
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
    }*/
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

game()

