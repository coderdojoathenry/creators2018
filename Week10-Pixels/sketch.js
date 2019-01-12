var fadeFrames = 200;

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);
}

function draw(){
    drawPicture();
    loadPixels();

    var fadeAmount = 1.0;
    if (frameCount < fadeFrames){
        fadeAmount = frameCount / fadeFrames;
    }

    fade(fadeAmount);
    invert();
    vignette(100);

    updatePixels();
}

function fade(amount){
    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            var c = getPixel(i, j);
            var cnew = [c[0] * amount,
                        c[1] * amount,
                        c[2] * amount];

            setPixel(i, j, cnew);
        }
    }
}

function invert(){
    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            var c = getPixel(i, j);
            var cnew = [255 - c[0],
                        255 - c[1],
                        255 - c[2]];

            setPixel(i, j, cnew);
        }
    }
}

function vignette(amount){
    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            var minDist = Math.min(i, width - i, j, height - j);
            var fade = 1.0;
            if (minDist < amount){
                fade = minDist / amount;
            }
            var c = getPixel(i, j);
            var cnew = [c[0] * fade,
                        c[1] * fade,
                        c[2] * fade];

            setPixel(i, j, cnew);
        }
    }
}

function drawPicture() {
    background('skyblue');

    fill('green');
    rect(0, height - 100, width, 100);

    fill('yellow');
    ellipse(200, 200, 100, 100);
}

function getPixel(x, y){
    var loc = 4 * ((y * width) + x);

    return [pixels[loc + 0],
            pixels[loc + 1],
            pixels[loc + 2]];
}

function setPixel(x, y, c){
    var loc = 4 * ((y * width) + x);

    pixels[loc + 0] = c[0];
    pixels[loc + 1] = c[1];
    pixels[loc + 2] = c[2];
}