class Tanks {
    constructor() {
        this.width = 70
        this.height = 50
        this.x = 0
        //this.speed = 2
    }
    setup() {
        this.y = random(100, 500)
    }
    draw() {
        console.log(this.y);
        image(game.tankImage, this.x, this.y, this.width, this.height)
        if (this.x < width) {
            this.x++
        }
    }
}
