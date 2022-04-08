let counter = 0

class Game {
    constructor (){
        this.background = new Background()
        this.target = new Target()
        this.backgroundImage 
        this.tanksArr = []
        this.background2 = new Background2()
        this.backgroundImage2
        this.misscount = 0
        this.backgroundLose = new BackgroundLose()
        this.backgroundImageLose
    }
    setup() {
    }
    draw() {
        if (counter < 20) {
        this.background.draw()
        }
        if (this.misscount <= 10) {
            this.tanksArr.forEach(function(tank) {
                tank.draw()
            })
            this.target.draw()
        if (frameCount % 50 === 0) {
            this.tanksArr.push(new Tanks())
            }
        }
        
        if (counter >= 20) {
            this.background2.draw()
        }
        if (this.misscount > 10) {
            this.backgroundLose.draw()
        }
        textSize(50)
        text(counter, width / 3, 50)
        text(this.misscount, width / 1.5, 50)
        this.tanksArr = this.tanksArr.filter(tank => {
            if (tank.x > width + tank.width) {
                console.log(this.misscount);
                this.misscount++
            return false 
            } else {
            return true 
            }
        })    
    }
    preload() {
        this.backgroundImage = loadImage('images/field.jpg')
        this.tankImage = loadImage('images/tank2.png')
        this.targetImage = loadImage('images/target3.png')
        this.backgroundImage2 = loadImage('images/you_win2.png')
        this.backgroundImageLose = loadImage('images/game-over.png')
    }
    hitTank() {
        this.tanksArr = this.tanksArr.filter(tank => {
            if (tank.hitting(this.target)) {
            return false
            } else {
            return true
            }
        })
    }
}
