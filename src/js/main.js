import '../scss/style.scss';

const [btnPaper, btnScissors, btnRock] = document.querySelectorAll('#btn-choice');
const userScore = document.querySelector('#you-score');
const compScore = document.querySelector('#bot-score');
const botImg = document.querySelector('#bot-choice');

let youScore = 0;
let botScore = 0;

const results = {
    'rock': { winsAgainst: 'scissors', losesAgainst: 'paper' },
    'paper': { winsAgainst: 'rock', losesAgainst: 'scissors' },
    'scissors': { winsAgainst: 'paper', losesAgainst: 'rock' }
};

function getRandomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(userChoice, botChoice) {
    if (userChoice === botChoice) {
        return 'tie';
    } else if (results[userChoice].winsAgainst === botChoice) {
        return 'user';
    } else {
        return 'bot';
    }
}

function playRPS(player) {
    const userChoice = player;
    const botChoice = getRandomChoice(Object.keys(results));
    botImg.src = `/public/imges/${botChoice}.png`;

    if (!results.hasOwnProperty(userChoice)) {
        console.log("Invalid choice. Please choose again.");
        return;
    }

    const winner = checkWinner(userChoice, botChoice);

    if (winner === 'user') {
        youScore += 1;
    } else if (winner === 'bot') {
        botScore += 1;
    }

    userScore.textContent = youScore;
    compScore.textContent = botScore;

    setTimeout(() => {
        botImg.src = "/public/imges/bot.png";
    }, 1000);
}

btnScissors.addEventListener('click', () => playRPS("scissors"));
btnPaper.addEventListener('click', () => playRPS("paper"));
btnRock.addEventListener('click', () => playRPS("rock"));