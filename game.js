
class Game {
    constructor (){
        this.background = new Background()
        this.backgroundImage 
        this.tanks = new Tanks()
    }
    draw() {
        this.background.draw()
        this.tanks.draw()
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank2.png')
    }
}


