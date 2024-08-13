<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let humanScore = 0;
        let computerScore = 0;
        function getComputerChoice(){
            if (Math.random()<0.33){
                return "rock";
            }
            else if(Math.random()>0.33 && Math.random()<0.66){
                return "paper";
            }
            else{
                return "scissors";
            }
        }
        

        function getHumanChoice(){
            let choice = prompt("Enter Rock, Paper or Scissors");
            return choice.toLowerCase();
        }

        function playRound(humanChoice,computerChoice){
            if (humanChoice==computerChoice){
                prompt("It's a draw!");
            }

            else if(humanChoice=="rock" && computerChoice=="paper"){
                prompt("You lose!Paper beats rock");
                computerScore++;
            }

            else if(humanChoice=="rock"&& computerChoice=="scissors"){
                prompt("You win!Rock beats scissors");
                humanScore++;
            }

            else if(humanChoice=="scissors" && computerChoice=="rock"){
                prompt("You lose!Rock beats scissors");
                computerScore++;
            }

            else if(humanChoice=="scissors" && computerChoice=="paper"){
                prompt("You win!Scissors beats paper");
                humanScore++;
            }

            else if(humanChoice=="paper" && computerChoice=="rock"){
                prompt("You win!Paper beats rock");
                humanScore++;
            }

            else{
                prompt("You lose!Scissors beats paper");
                computerScore++;
            }
        }

        function playGame(){
            for(i =0; i<5; i++){
                let humanChoice = getHumanChoice();
                let computerChoice = getComputerChoice();
                console.log(humanChoice);
                console.log(computerChoice);

                playRound(humanChoice,computerChoice);
            }
        }

        playGame();
    </script>
</body>
</html>
