const playerName = prompt("Input name: ");
const username = document.getElementById("player");
username.textContent = playerName;

let totalScorePC = 0, totalScorePlayer = 0;

const drawCardButton = document.getElementById("draw_card");
drawCardButton.addEventListener("click", generateRandomCard);

const stopGameButton = document.getElementById("stop_game");
stopGameButton.addEventListener("click", stop_game);
function generateRandomCard() {
    const suits = ['C', 'D', 'H', 'S'];
    const cards = [
        { img: "imgs/AC.svg", worth: 1 },
        { img: "imgs/AD.svg", worth: 1 },
        { img: "imgs/AH.svg", worth: 1 },
        { img: "imgs/AS.svg", worth: 1 },
        { img: "imgs/2C.svg", worth: 2 },
        { img: "imgs/2D.svg", worth: 2 },
        { img: "imgs/2H.svg", worth: 2 },
        { img: "imgs/2S.svg", worth: 2 },
        { img: "imgs/3C.svg", worth: 3 },
        { img: "imgs/3D.svg", worth: 3 },
        { img: "imgs/3H.svg", worth: 3 },
        { img: "imgs/3S.svg", worth: 3 },
        { img: "imgs/4C.svg", worth: 4 },
        { img: "imgs/4D.svg", worth: 4 },
        { img: "imgs/4H.svg", worth: 4 },
        { img: "imgs/4S.svg", worth: 4 },
        { img: "imgs/5C.svg", worth: 5 },
        { img: "imgs/5D.svg", worth: 5 },
        { img: "imgs/5H.svg", worth: 5 },
        { img: "imgs/5S.svg", worth: 5 },
        { img: "imgs/6C.svg", worth: 6 },
        { img: "imgs/6D.svg", worth: 6 },
        { img: "imgs/6H.svg", worth: 6 },
        { img: "imgs/6S.svg", worth: 6 },
        { img: "imgs/7C.svg", worth: 7 },
        { img: "imgs/7D.svg", worth: 7 },
        { img: "imgs/7H.svg", worth: 7 },
        { img: "imgs/7S.svg", worth: 7 },
        { img: "imgs/8C.svg", worth: 8 },
        { img: "imgs/8D.svg", worth: 8 },
        { img: "imgs/8H.svg", worth: 8 },
        { img: "imgs/8S.svg", worth: 8 },
        { img: "imgs/9C.svg", worth: 9 },
        { img: "imgs/9D.svg", worth: 9 },
        { img: "imgs/9H.svg", worth: 9 },
        { img: "imgs/9S.svg", worth: 9 },
        { img: "imgs/JC.svg", worth: 10 },
        { img: "imgs/JD.svg", worth: 10 },
        { img: "imgs/JH.svg", worth: 10 },
        { img: "imgs/JS.svg", worth: 10 },
        { img: "imgs/KC.svg", worth: 10 },
        { img: "imgs/KD.svg", worth: 10 },
        { img: "imgs/KH.svg", worth: 10 },
        { img: "imgs/KS.svg", worth: 10 },
        { img: "imgs/QC.svg", worth: 10 },
        { img: "imgs/QD.svg", worth: 10 },
        { img: "imgs/QH.svg", worth: 10 },
        { img: "imgs/QS.svg", worth: 10 },
        { img: "imgs/TC.svg", worth: 10 },
        { img: "imgs/TD.svg", worth: 10 },
        { img: "imgs/TH.svg", worth: 10 },
        { img: "imgs/TS.svg", worth: 10 }
    ];
    
    const randomCardPC = cards[Math.floor(Math.random() * cards.length)];
    const randomCardPlayer = cards[Math.floor(Math.random() * cards.length)];
    const cardPC = document.getElementById("pc_card"); 
    const cardPlayer = document.getElementById("player_card");
    cardPC.src = randomCardPC.img;
    cardPlayer.src = randomCardPlayer.img;

    const scorePC = document.getElementById("pc_score"); 
    const scorePlayer = document.getElementById("player_score");
    totalScorePC += randomCardPC.worth;
    totalScorePlayer += randomCardPlayer.worth;
    scorePC.textContent = "Score: " + totalScorePC;
    scorePlayer.textContent = "Score: " + totalScorePlayer;

    if (totalScorePC >= 21 || totalScorePlayer >= 21) {
        stop_game();
    }
}

function stop_game() {
    if (totalScorePC > 21 && totalScorePlayer > 21) alert("DRAW");
    const validScorePC = totalScorePC <= 21 ? totalScorePC : -Infinity;
    const validScorePlayer = totalScorePlayer <= 21 ? totalScorePlayer : -Infinity;
    if (Math.abs(21 - validScorePC) < Math.abs(21 - validScorePlayer)) alert("Dealer WON");
    else if (Math.abs(21 - validScorePC) > Math.abs(21 - validScorePlayer)) alert(`${username.textContent} WON`);
    else alert("DRAW");
}
