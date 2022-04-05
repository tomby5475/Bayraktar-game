const game = new Game()

const width = 1000;
const heigth = 600;

function draw() {
	game.draw()
}

function setup() {
    createCanvas(width, heigth)
    game.setup()
}

function preload() {
    game.preload()
}

