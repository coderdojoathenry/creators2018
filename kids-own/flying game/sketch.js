function centerCanvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized(){
    centerCanvas();
}

function setup(){
    noStroke();
    cnv = createCanvas(2000, 1200);
    centerCanvas();
    rectMode(CENTER);
    frameRate(60);
    imageMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    newDraw();
}