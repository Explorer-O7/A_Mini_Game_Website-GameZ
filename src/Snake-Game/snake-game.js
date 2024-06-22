const board = document.getElementById('game-board');
    const scoreElement = document.getElementById('score');
    const gameOverElement = document.getElementById('game-over');
    const gridSize = 20;
    const snakePartSize = 18;
    const foodSize = 18;
    const snake = [{ x: 10, y: 10 }];
    let dx = 0;
    let dy = 0;
    let food = { x: 15, y: 15 };
    let score = 0;

    function drawSnake() {
        board.innerHTML = '';
        snake.forEach(part => {
            const snakePart = document.createElement('div');
            snakePart.classList.add('snake-part');
            snakePart.style.left = part.x * gridSize + 'px';
            snakePart.style.top = part.y * gridSize + 'px';
            board.appendChild(snakePart);
        });
    }

    function drawFood() {
        const foodElement = document.createElement('div');
        foodElement.id = 'food';
        foodElement.style.left = food.x * gridSize + 'px';
        foodElement.style.top = food.y * gridSize + 'px';
        board.appendChild(foodElement);
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreElement.textContent = 'Score: ' + score;
            generateFood();
        } else {
            snake.pop();
        }
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (board.offsetWidth / gridSize));
        food.y = Math.floor(Math.random() * (board.offsetHeight / gridSize));
    }

    function checkCollision() {
        const head = snake[0];
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return (
            head.x < 0 ||
            head.x >= board.offsetWidth / gridSize ||
            head.y < 0 ||
            head.y >= board.offsetHeight / gridSize
        );
    }

    function gameLoop() {
        moveSnake();
        if (checkCollision()) {
            gameOver();
            return;
        }
        drawSnake();
        drawFood();
    }

    function gameOver() {
        clearInterval(gameInterval);
        gameOverElement.style.display = 'block';
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp' && dy !== 1) {
            dx = 0;
            dy = -1;
        }
        if (event.key === 'ArrowDown' && dy !== -1) {
            dx = 0;
            dy = 1;
        }
        if (event.key === 'ArrowLeft' && dx !== 1) {
            dx = -1;
            dy = 0;
        }
        if (event.key === 'ArrowRight' && dx !== -1) {
            dx = 1;
            dy = 0;
        }
    });

    generateFood();
    const gameInterval = setInterval(gameLoop, 100);