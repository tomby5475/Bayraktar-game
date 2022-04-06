class Tanks {
    constructor() {
        this.width = 70
        this.height = 50
        this.x = 0
        this.y = random(100, 500)
    }
    collision() {
       // console.log('collision');
        // const tankX = this.x + this.width / 2
        // const tankY = this.y + this.height / 2
        // const targetX = mouseX
        // const targetY = mouseY
        // if (dist(tankX, tankY, targetX, targetY) > 25) {
		// 	return false
		// } else {
		// 	return true
		// }
    }
    draw() {
        image(game.tankImage, this.x - this.width, this.y, this.width, this.height)
        if (this.x < width) {
            this.x++
        }
    }
}


