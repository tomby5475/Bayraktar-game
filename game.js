
class Game {
    constructor (){
        this.background = new Background()
        this.backgroundImage 
        this.tanksArr = []
    }

    setup() {
        // this.tanks.setup()
    }

    draw() {
        this.background.draw()
        if (frameCount % 80 === 0) {
            this.tanksArr.push(new Tanks())
        }
        this.tanksArr.forEach(function(tank) {
             tank.draw()
        })
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank2.png')
    }
}


