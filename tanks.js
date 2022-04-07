class Tanks {
    constructor() {
        this.width = 70
        this.height = 50
        this.x = 0
        this.y = random(100, 400)
    }
    hitting() {
	    const tankX = this.x + this.width / 2
	    const tankY = this.y + this.height / 2
        //let clicks = 0
	    // const targetX = mouseX + game.target.width / 2
	    // const targetY = mouseY + game.target.height / 2
        const targetX = mouseX + game.target.width
        if (dist(tankX , tankY, targetX, mouseY) > 40) {
			return false
		} else {
			return true && counter++
		}
	 }
    draw() {
        image(game.tankImage, this.x - this.width, this.y, this.width, this.height)
        if (this.x < width + this.width) {
            this.x++
        }
    }
}


