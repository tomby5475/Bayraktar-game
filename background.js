class Background {
    constructor() {
        this.speed = 2
        this.x = 0
     }
    draw() {
        clear()
        image(game.backgroundImage, this.x, 0, width, height)
        image(game.backgroundImage, this.x + width, 0, width, height)
        this.x -= this.speed
        if (this.x <= -width) {
            this.x = 0
        }
    }
}

