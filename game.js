
class Game {
    constructor (){
        this.background = new Background()
        this.backgroundImage 
        this.tanks = []
    }
    draw() {
        this.background.draw()
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank.png')
    }
}


