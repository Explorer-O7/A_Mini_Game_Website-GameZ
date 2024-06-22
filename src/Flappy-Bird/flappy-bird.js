const bird = document.getElementById('bird');
    const gameContainer = document.getElementById('game-container');
    const scoreElement = document.getElementById('score');
    let gravity = 0.8;
    let velocity = 0;
    let jump = -15;
    let birdTop = 250;
    let gameActive = true;
    let score = 0;

    function flap() {
        if (!gameActive) return;
        velocity += jump;
    }

    function gameLoop() {
        velocity += gravity;
        birdTop += velocity;
        bird.style.top = birdTop + 'px';
        if (birdTop <= 0 || birdTop >= gameContainer.clientHeight - 40) {
            endGame();
            return;
        }
        let pipes = document.querySelectorAll('.pipe');
        pipes.forEach(pipe => {
            let pipeLeft = parseInt(pipe.style.left);
            if (pipeLeft < -60) {
                pipe.remove();
                score++;
                scoreElement.textContent = score;
            }
            if (pipeLeft < 100 && pipeLeft > 20 && birdTop < 200) {
                endGame();
            }
            pipe.style.left = pipeLeft - 2 + 'px';
        });
        if (score % 100 === 0 && score !== 0) {
            gravity += 0.2; // Increase gravity to make the game harder
        }
    }

    function endGame() {
        gameActive = false;
        clearInterval(gameInterval);
        alert('Game over! Your score: ' + score);
    }

    document.addEventListener('keydown', flap);
    document.addEventListener('click', flap);

    const gameInterval = setInterval(gameLoop, 30);

    function generatePipes() {
        if (!gameActive) return;
        const pipeGap = 200;
        const pipePosition = Math.random() * 400;
        const topPipeHeight = Math.random() * 200;
        const bottomPipeHeight = 400 - topPipeHeight - pipeGap;
        const topPipe = document.createElement('div');
        const bottomPipe = document.createElement('div');
        topPipe.classList.add('pipe', 'top-pipe');
        bottomPipe.classList.add('pipe', 'bottom-pipe');
        topPipe.style.left = pipePosition + 'px';
        bottomPipe.style.left = pipePosition + 'px';
        topPipe.style.height = topPipeHeight + 'px';
        bottomPipe.style.height = bottomPipeHeight + 'px';
        gameContainer.appendChild(topPipe);
        gameContainer.appendChild(bottomPipe);
    }

    setInterval(generatePipes, 2000);