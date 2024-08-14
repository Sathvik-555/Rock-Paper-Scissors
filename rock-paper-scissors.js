<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>


    <div id = "results"></div>
    

    <script>
        let humanScore = 0;
        let computerScore = 0;
        const maxScore = 5;

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

        function playRound(humanChoice){

            if(humanScore>= maxScore || computerScore>= maxScore){
                return;
            }
            const resultDiv = document.querySelector('#results');
            const computerChoice = getComputerChoice();

            if (humanChoice==computerChoice){
                resultDiv.textContent = "It's a Draw!";
            }

            else if(humanChoice=="rock" && computerChoice=="paper"){
                resultDiv.textContent = "You lose!Paper beats rock";
                computerScore++;
            }

            else if(humanChoice=="rock"&& computerChoice=="scissors"){
                resultDiv.textContent = "You win!Rock beats scissors";
                humanScore++;
            }

            else if(humanChoice=="scissors" && computerChoice=="rock"){
                resultDiv.textContent = "You lose!Rock beats scissors";
                computerScore++;
            }

            else if(humanChoice=="scissors" && computerChoice=="paper"){
                resultDiv.textContent = "You win!Scissors beats paper";
                humanScore++;
            }

            else if(humanChoice=="paper" && computerChoice=="rock"){
                resultDiv.textContent = "You win!Paper beats rock";
                humanScore++;
            }

            else{
                resultDiv.textContent = "You lose!Scissors beats paper";
                computerScore++;
            }

            resultDiv.textContent += `\nHuman: ${humanScore} - Computer: ${computerScore}`;
        }

        const rockbtn = document.querySelector('#rock');
        rockbtn.addEventListener("click", () =>{
            playRound("rock")
        });

        const paperbtn = document.querySelector('#paper');
        paperbtn.addEventListener("click", () =>{
            playRound("paper")
        });

        const scissorsbtn = document.querySelector('#scissors');
        scissorsbtn.addEventListener("click", () =>{
            playRound("scissors")
        });    
    </script>
</body>
</html>
