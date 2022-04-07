let counter = 0
// let counterMiss = 0
class Game {
    constructor (){
        this.background = new Background()
        this.target = new Target()
        this.backgroundImage 
        this.tanksArr = []
        this.background2 = new Background2()
        this.backgroundImage2
        //this.counterMiss = 0
    }
    setup() {
    }
    draw() {
        if (counter < 3) {
        this.background.draw()
        this.tanksArr.forEach(function(tank) {
            tank.draw()
        })
        this.target.draw()
        if (frameCount % 80 === 0) {
            this.tanksArr.push(new Tanks())
        }
        }
        else {
            this.background2.draw()
        }
        
        
        // textSize(50)
        // text(counterMiss, width / 1.5, 50)
        //console.log(this.tanksArr);

        this.tanksArr = this.tanksArr.filter(tank => {
            if (tank.x > width) {
                console.log("missed");
            return false 
            } else {
            return true
            }
        })
        
    }
    preload() {
        this.backgroundImage = loadImage('/images/field.jpg')
        this.tankImage = loadImage('/images/tank2.png')
        this.targetImage = loadImage('/images/targetRed.png')
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
