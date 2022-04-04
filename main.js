const game = new Game()


const width = 1200;
const heigth = 600;

function draw() {
	game.draw()
}
function setup() {
    createCanvas(width, heigth)
}

function preload() {
    game.preload()
}

