let gameArea = document.getElementById('game-area');
let timerElement = document.getElementById('timer');
let scoreElement = document.getElementById('score');

let score = 0;
let timeLeft = 60;
let gameInterval;
let splatSound = new Audio('SPLAT.mp3'); // Carrega o som

function startGame() {
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tempo: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert('Tempo esgotado! Pontuação: ' + score);
        }
    }, 1000);

    spawnFly();
}

function spawnFly() {
    let fly = document.createElement('div');
    fly.classList.add('fly');

    let size = Math.random() * 150 + 50; // Tamanho entre 20px e 50px
    fly.style.width = `${size}px`;
    fly.style.height = `${size}px`;

    let posX = Math.random() * (gameArea.clientWidth - size);
    let posY = Math.random() * (gameArea.clientHeight - size);

    fly.style.left = `${posX}px`;
    fly.style.top = `${posY}px`;

    let flip = Math.random() > 0.5 ? 'scaleX(-1)' : 'scaleX(1)';
    fly.style.transform = flip;

    fly.addEventListener('click', () => {
        score++;
        scoreElement.textContent = `Pontuação: ${score}`;
       SPLATSound.play(); // Reproduz o som
        fly.remove();
        spawnFly();
    });

    gameArea.appendChild(fly);
}

startGame();
