class Background2 {
    constructor(x, y) {
        this.x = 0
        this.y = 0
     }
    draw() {
        image(game.backgroundImage2, this.x - 10, this.y - 10, width + 20, height + 20)
    }
}

