let counter = 0
class Game {
    constructor (){
        this.background = new Background()
        this.target = new Target()
        this.backgroundImage 
        this.tanksArr = []
        this.background2 = new Background2()
        this.backgroundImage2
    }
    setup() {
    }
    draw() {
        if (counter < 3) {
        this.background.draw()
        this.target.draw()
        this.tanksArr.forEach(function(tank) {
            tank.draw()
        })
        }
        else {
            this.background2.draw()
        }
        if (frameCount % 80 === 0) {
            this.tanksArr.push(new Tanks())
        }
        textSize(50)
        text(counter, width / 2 - 25, 50)
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank2.png')
        this.targetImage = loadImage('/images/target.png')
        this.backgroundImage2 = loadImage('/images/you_win2.png')
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
