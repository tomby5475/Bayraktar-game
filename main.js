const game = new Game()

const width = 800;
const height = 500;

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
function mouseClicked() {
    game.hitTank()
 }

