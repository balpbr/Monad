const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
let paddleX = paddle.offsetLeft;
let ballX = ball.offsetLeft;
let ballY = ball.offsetTop;
let ballSpeedX = 2;
let ballSpeedY = 2;

document.addEventListener('mousemove', (e) => {
    let gameContainerRect = document.querySelector('.game-container').getBoundingClientRect();
    paddleX = e.clientX - gameContainerRect.left - paddle.offsetWidth / 2;
    if (paddleX < 0) paddleX = 0;
    if (paddleX > gameContainerRect.width - paddle.offsetWidth) paddleX = gameContainerRect.width - paddle.offsetWidth;
    paddle.style.left = `${paddleX}px`;
});

function gameLoop() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX <= 0 || ballX >= document.querySelector('.game-container').offsetWidth - ball.offsetWidth) {
        ballSpeedX *= -1;
    }

    if (ballY <= 0) {
        ballSpeedY *= -1;
    }

    if (ballY >= document.querySelector('.game-container').offsetHeight - ball.offsetHeight) {
        let paddleRect = paddle.getBoundingClientRect();
        let ballRect = ball.getBoundingClientRect();
        if (ballRect.left >= paddleRect.left && ballRect.right <= paddleRect.right) {
            ballSpeedY *= -1;
        } else {
            alert("Game Over");
            ballY = 0;
            ballX = Math.random() * document.querySelector('.game-container').offsetWidth;
        }
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    requestAnimationFrame(gameLoop);
}

gameLoop();
