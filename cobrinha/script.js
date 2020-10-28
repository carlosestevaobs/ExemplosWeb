let canvas = document.getElementById("snake");
/* contexto redenriza o desenho */
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

let direction = "right";



/* função que desenha o canbas */
function criarBG() {
    context.fillStyle = "lightgreen";
    /* retângulo */
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    /* ponto de partida */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /* coordenadas da cobrinha */
    if (direction == "right") {
        snakeX += box;
    }

    if (direction == "left") {
        snakeX -= box;
    }

    if (direction == "up") {
        snakeY -= box;
    }
    if (direction == 'down') {
        snakeY += box;
    }
    /* retirar último elemento do array */
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakey
    }
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);