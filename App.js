let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("st");
const scissor_div = document.getElementById("sch");
const paper_div = document.getElementById("p");
const userResult_p = document.querySelector(".userResult");
const computerResult_p = document.querySelector(".computerResult");
const winner_p = document.querySelector(".winner");


function getComputerChoice() {
    const choices = ['Schere', 'Stein', 'Papier'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    winner_p.innerHTML=("Du hast gewonnen. Gratuliere 🎇 !!!! ");
    userScore++; 
    userScore_span.innerHTML = userScore;

}

function lose() {
    winner_p.innerHTML=("Der Computer hat gewonnen. 💩");
    aiScore++;
    computerScore_span.innerHTML = aiScore;
}

function draw(){
    winner_p.innerHTML=("Untentschieden."); 
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    userResult_p.innerHTML=`Du hast ${userChoice} gewählt`;
    computerResult_p.innerHTML=`Der Computer hat ${computerChoice} gewählt`;
    setTimeout(function() {
        switch (userChoice + computerChoice){
            case "SteinSchere":
            case "PapierStein":
            case "ScherePapier":
                win();
                break;
            case "SchereStein":
            case "SteinPapier":
            case "PapierSchere":
                lose();
                break;
            case "SchereSchere":
            case "SteinStein":
            case "PapierPapier":
                draw();
                break;
        }
    }, 2000)
    winner_p.innerHTML=("");
}




function main() {
    rock_div.addEventListener('click', function() {
        // console.log("Du hast Stein gewählt.");
        game("Stein");
    })

    scissor_div.addEventListener('click', function() {
        // console.log("Du hast Schere gewählt.");
        game("Schere");
    })

    paper_div.addEventListener('click', function() {
        // console.log("Du hast Papier gewählt.");
        game("Papier");
    })
}


main();