let player;
let playerImage;
let bulletSound;
let bullets = []; 

function preload(){
    playerImage = loadImage("images/spaceship.png");
    bulletSound = loadSound("sound/laser.mp3");
}

function setup() {
    createCanvas(innerWidth-50, innerHeight-50);
    player = new Player(width/2, playerImage);
}

function draw() {
    background("black");
    player.move();
    player.show();

    for(let i=0; i< bullets.length; i++){
        bullets[i].move(); 
        bullets[i].show(); 
    }
    checkKeys();    
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        bullets.push(new Bullet(player.x, player.y));
        bulletSound.play();
    }
}

function checkKeys(){   
    if(keyCode==LEFT_ARROW){
        player.setSpeed(-5);
    }
    if(keyCode==RIGHT_ARROW){
        player.setSpeed(5);
    } 
}


