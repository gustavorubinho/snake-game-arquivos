// Define HTML elements
const board = document.getElementById('game-board');

//Definir variáveis do jogo
let snake = [{ x: 10, y: 10 }];

//desenhar o mapa, comida e cobra
function draw() {
    board.innerHTML = '';
    drawSnake();
}

//Desenhar a cobra
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
  });
}

// Criar a cobra ou comida/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}