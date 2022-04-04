

class Background {
    draw() {
        console.log('this is back');
        // image(game.backgroundImage, x1, 0, width, heigth) 
        // image(game.backgroundImage, x1 + width, 0, width, heigth)
        // let x1 = 0;
        // let x2 = width;
        // let scroll = 2;
        // x1 -= scroll;
        // x2 -= scroll;
        // if (x1 < -width) {
        //     x1 = width;
        // }
        // if (x2 < -width) {
        //     x2 = width;
        // }
        // console.log('width')
        
    }
   
}

// game.backgroundImages.forEach(function (img) {
//     img.x -= img.speed
//     image(img.src, img.x, 0, width, height)
//     image(img.src, img.x + width, 0, width, height)
//     // we need to reset the first image as soon as it left
//     // the canvas completely
//     if (img.x <= - width) {
//         img.x = 0
//     }
// })