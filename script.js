const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let square = {
    x: 50,
    y: 50,
    size: 20,
    color: 'red'
};

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);
}

function moveSquare(e) {
    switch (e.key) {
        case 'ArrowUp':
            square.y -= 5;
            break;
        case 'ArrowDown':
            square.y += 5;
            break;
        case 'ArrowLeft':
            square.x -= 5;
            break;
        case 'ArrowRight':
            square.x += 5;
            break;
    }
    drawSquare();
}

window.addEventListener('keydown', moveSquare);
drawSquare();
