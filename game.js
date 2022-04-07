let counter = 0
class Game {
    constructor (){
        this.background = new Background()
        this.target = new Target()
        this.backgroundImage 
        this.tanksArr = []
    }
    setup() {
    }
    draw() {
        this.background.draw()
        this.target.draw()
        if (frameCount % 80 === 0) {
            this.tanksArr.push(new Tanks())
        }
        this.tanksArr.forEach(function(tank) {
            tank.draw()
        })
        textSize(50)
        text(counter, width / 2 - 25, 50)
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank2.png')
        this.targetImage = loadImage('/images/target.png')
    }
    hitTank() {
        this.tanksArr = this.tanksArr.filter(tank => {
            if (tank.hitting(this.target) || tank.x < 0) {
            return false
            } else {
            return true
            }
        })
    }
}
