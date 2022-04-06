const game = new Game()

const width = 1000;
const height = 600;

function draw() {
	game.draw()
}

function setup() {
    createCanvas(width, height)
    game.setup()
}

function preload() {
    game.preload()
}

