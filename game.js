
class Game {
    constructor (){
        this.background = new Background()
        this.backgroundImage
    }
    draw() {
        background(this.backgroundImage)
    }
    preload() {
        this.backgroundImage = loadImage('/images/vecteezy_geometric-mosaic-pixel-abstract-pattern-blue-white_4412939.jpg')
    }
}


