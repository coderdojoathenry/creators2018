let fadeFrames = 200;

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);
}

function draw(){
    drawPicture();
    loadPixels();

    let fadeAmount = 1.0;
    if (frameCount < fadeFrames){
        fadeAmount = frameCount / fadeFrames;
    }

    fade(fadeAmount);
    invert();
    vignette(100);

    updatePixels();
}

function fade(amount){
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            let c = getPixel(i, j);
            let cnew = [c[0] * amount,
                        c[1] * amount,
                        c[2] * amount];

            setPixel(i, j, cnew);
        }
    }
}

function invert(){
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            let c = getPixel(i, j);
            let cnew = [255 - c[0],
                        255 - c[1],
                        255 - c[2]];

            setPixel(i, j, cnew);
        }
    }
}

function vignette(amount){
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            let minDist = Math.min(i, width - i, j, height - j);
            let fade = 1.0;
            if (minDist < amount){
                fade = minDist / amount;
            }
            let c = getPixel(i, j);
            let cnew = [c[0] * fade,
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
    let loc = 4 * ((y * width) + x);

    return [pixels[loc + 0],
            pixels[loc + 1],
            pixels[loc + 2]];
}

function setPixel(x, y, c){
    let loc = 4 * ((y * width) + x);

    pixels[loc + 0] = c[0];
    pixels[loc + 1] = c[1];
    pixels[loc + 2] = c[2];
}