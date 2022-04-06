class Tanks {
    constructor() {
        this.width = 70
        this.height = 50
        this.x = 0
        this.y = random(100, 500)
    }
    hitting() {
	    // const tankX = this.x + this.width / 2
	    // const tankY = this.y + this.height / 2
	    // const targetX = mouseX + targetInfo.width / 2
	    // const targetY = mouseY + targetInfo.height / 2
        if (dist(this.x, this.y, mouseX, mouseY) < 30) {
			return false
		} else {
			return true
		}
	 }
    draw() {
        image(game.tankImage, this.x - this.width, this.y, this.width, this.height)
        if (this.x < width + this.width) {
            this.x++
        }
    }
}


