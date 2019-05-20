let angleX=0;
let terrain;
let video;
let terr;
let stars;

function preload(){
    terr = loadImage('terrain.jpg');
    video = createCapture(VIDEO);
    // knuckles = loadModel('model/knuckles.obj');
    video.hide();
}

function setup() {
    createCanvas(800, 600, WEBGL);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background('black');
    directionalLight(255, 255, 255, 0,0,-30);
    directionalLight(255, 255, 255, 0, 15, 0);    
    directionalLight(255, 255, 255, 15, 0, 0);        

    // Draw planet Krypton
    push();
    noStroke();    
    // ambientMaterial('darkred');
    texture(terr);
    translate(0,2200,-800);
    rotateY(angleX/5);    
    ellipsoid(1800, 1800, 1800);
    pop();    


    push();
    // Fly up and away spinning
    angleX = angleX + 0.5;
    noStroke();
    translate(0, 0-angleX, 200 - angleX*3);
    rotateY(angleX*5);
    rotateZ(angleX);
    rotateX(angleX*-2);    
    noStroke();
    texture(video);    
    // ambientMaterial(255,0,0);
    // plane(600, 600);
    box(600, 600, 50);
    // model(knuckles);
    pop();

}