class Tanks {
    constructor() {
        
        this.width = 70
        this.height = 50
        this.x = 600
        this.y = 300
    }
    draw() {
        image(game.tankImage, this.x, this.y, this.width, this.height)
        console.log('draw');
    }
}
