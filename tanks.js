class Tanks {
    constructor() {
        this.width = 70
        this.height = 50
        this.x = 0
        this.y = random(100, 500)
    }
    draw() {
        image(game.tankImage, this.x - this.width, this.y, this.width, this.height)
        if (this.x < width) {
            this.x++
        }
    }
}


