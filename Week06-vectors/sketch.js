let halley;

function setup() {
    createCanvas(innerWidth, innerHeight);
    let pos = createVector(width/2, height/2);
    halley = new Asteroid(30, pos);
}

function draw() {
    background("black"); 
    halley.move();   
    halley.show();
}