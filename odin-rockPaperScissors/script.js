game();

// start with the game() function
function game() {

    // welcome message to user
    confirm(`Welcome to Rock, Paper, Scissors!`);

    // variables to record wins and rounds
    let rounds = 0;
    let playerWins = 0;
    let computerWins = 0;
    let winner;

    runGame();

    function runGame() {
        while (playerWins < 3 && computerWins < 3) {
            
            let computerSelection = getComputerChoice();

            let playerSelection = getPlayerSelection();

            playRound(playerSelection, computerSelection);

            console.log(`player: ${playerSelection}, comp: ${computerSelection} \np-wins: ${playerWins}, c-wins: ${computerWins}`);
        }
        console.log(winner = returnWinner(playerWins, computerWins));
    }
    
    while (confirm(`Would you like to play again?`)) {
        rounds = playerWins = computerWins = 0;
        winner = 'No one';
        runGame();
    }   
    
    function getComputerChoice() {
        let num = Math.ceil(Math.random()*3);
        switch (num) {
            case 1:
                return 'rock';
            case 2:
                return 'paper';
            case 3:
                return 'scissors';
        }
    }

    // function: gets valid user input
    function getPlayerSelection() {

        let playerInput = prompt('What is your selection: Rock, Paper, Scissors?').toLowerCase();
        
        // check if input is valid, if not, keep prompting user to enter valid input
        let playerInputValidity = false;
        while (playerInputValidity == false) {
            playerInputValidity = checkPlayerSelection(playerInput);
            if (!playerInputValidity) {
                playerInput = prompt('Please enter a valid selection: Rock, Paper, Scissors').toLowerCase();
            }
        }

        // once there's a valid input, return that input as the playerSelection
        return playerInput;
    }

    // function: checks if user input is valid
    function checkPlayerSelection(playerInput) {
        let checker = (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors');
        return checker;
    }
    
    console.log(`Computer selection: ${computerSelection}`)
    console.log(`Player selection: ${playerSelection}`);

    // determine winner
    playRound(playerSelection, computerSelection);
    function playRound(playerSelection, computerSelection) {
        // your code here!
        if (playerSelection === computerSelection) {
            playerSelection = alert(`It's a tie!`);
            // do not add 1 to the 'count', because it's a tie
        } else if (
            // winning combos
            (playerSelection === 'rock' && computerSelection === 'scissors')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection == 'paper')
            )
        {
            playerWins +=1;
            alert(`You win!`);
        } else {
            computerWins +=1;
            alert('You lose!');
        }
    }    

    function returnWinner(playerWins, computerWins) {
        if (playerWins > computerWins) {
            return `Player`
        } else {
            return `Computer`
        }
    }
}
        // set of rules that govern who wins
            // return winner
        // inform the user who the winner is