let player;
let playerImage;

function preload(){
    playerImage = loadImage("images/big-spaceship.png");
}

function setup() {
    createCanvas(innerWidth, innerHeight);

    player = new Player(width/2, playerImage);
}

function draw() {
    background("black");
    player.move();
    player.show();
    checkKeys();    
}

function checkKeys(){   
    if(keyCode==LEFT_ARROW){
        player.setSpeed(-5);
    }
    if(keyCode==RIGHT_ARROW){
        player.setSpeed(5);
    } 
}
