let player;
let playerImage;
let bulletSound;
let enemy;
let enemyImage;
let projectiles = []; 
let leftEdge;
let rightEdge;

function preload(){
    playerImage = loadImage("images/spaceship.png");
    bulletSound = loadSound("sound/laser.mp3");
    enemyImage = loadImage("images/alien.png");
}

function setup() {
    createCanvas(innerWidth-50, innerHeight-50);
    player = new Player(width/2, playerImage);
    enemy = new Enemy(100, 1, enemyImage);

    leftEdge = new Static(0, height/2, 10, height);
    rightEdge = new Static(width, height/2, 10, height);
}

function draw() {
    background("black");
    player.move();
    player.show();

    enemy.move();
    enemy.shoot();
    enemy.show();

    manageProjectiles();
    manageColliders();

    checkKeys();    
}

function manageColliders(){
    let c = [];

    c.push(leftEdge.collider);
    c.push(rightEdge.collider);
    c.push(player.collider);
    c.push(enemy.collider);
    
    for (let i = 0; i < projectiles.length; i++){
        c.push(projectiles[i].collider);
    }

    for (let i = 0; i < c.length - 1; i++){
        for (let j = i + 1; j < c.length; j++){
            c[i].touching(c[j]);
        }
    }
}

function manageProjectiles(){
    stroke('white');
    text(projectiles.length, 10, 10);
    // Cleanup
    let active = [];
    for(let i=0; i< projectiles.length; i++){
        if (projectiles[i].active){
            active.push(projectiles[i]);
        }
    }
    projectiles = active;

    // Move and show
    for(let i=0; i< projectiles.length; i++){
        projectiles[i].move(); 
        projectiles[i].show(); 
    }
}

function keyPressed(){
    if(keyCode==UP_ARROW && player.active == true){
        projectiles.push(new Bullet(player.x, player.y));
        bulletSound.play();
    }
}

function checkKeys(){ 
    if (keyIsPressed){
        if(keyCode==LEFT_ARROW){
            player.setSpeed(-5);
        }
        if(keyCode==RIGHT_ARROW){
            player.setSpeed(5);
        } 
    }
}


