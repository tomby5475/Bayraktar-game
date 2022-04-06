class Target {
    constructor() {
        this.width = 80
        this.height = 80
    }
    draw() {
        noCursor();
        image(game.targetImage, mouseX - this.width / 2, mouseY - this.height / 2, this.width, this.height)
    }
}


