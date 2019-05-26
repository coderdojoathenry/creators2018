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
    cnv = createCanvas(2600, 1200);
    centerCanvas();
    rectMode(CENTER);
    frameRate(60);
}

function draw(){
    newDraw();
}