class BackgroundLose {
    constructor() {
        this.x = 0
        this.y = 0
    }
    draw() {
        image(game.backgroundImageLose, this.x - 10, this.y - 10, width + 20, height + 20)
    }
}