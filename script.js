const fly = document.getElementById('fly');
const gameContainer = document.querySelector('.game-container');

let score = 0;

function getRandomPosition() {
    const containerRect = gameContainer.getBoundingClientRect();
    const x = Math.floor(Math.random() * (containerRect.width - fly.offsetWidth));
    const y = Math.floor(Math.random() * (containerRect.height - fly.offsetHeight));
    return { x, y };
}

function moveFly() {
    const { x, y } = getRandomPosition();
    fly.style.left = `${x}px`;
    fly.style.top = `${y}px`;
}

fly.addEventListener('click', () => {
    score++;
    alert(`Mosca morta! Pontuação: ${score}`);
    moveFly();
});

setInterval(moveFly, 1000);

moveFly();  // Mova a mosca inicialmente
