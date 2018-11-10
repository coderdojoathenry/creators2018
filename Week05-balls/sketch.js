let ballX;
let ballY;
let ballSize;
let ballXSpeed=5;
let ballYSpeed=1;

function setup() {
    createCanvas(innerWidth, innerHeight);
    ballX = width/2;
    ballY = height/2;
    ballSize=100;

}

function draw() {
    background("LightSkyBlue");

    // move the ball
    ballX = ballX + ballXSpeed;
    ballY = ballY + ballYSpeed;

    // if the ball is near edge, bounce
    if ((ballX+(ballSize/2) > width) || (ballX-(ballSize/2)<0)) {
        ballXSpeed = ballXSpeed*-1;
    }
    if ((ballY+(ballSize/2) > height) || (ballY-(ballSize/2)<0)) {
        ballYSpeed = ballYSpeed*-1;
    }    

    // Draw first ball
    fill(mouseX, mouseY, 100, 100);
    ellipse(ballX, ballY, ballSize, ballSize);
  
}

function mousePressed(){
    console.log("You clicked me!");
    ballXSpeed = random(-5,5);
    ballYSpeed = random(-5,5);
    ballX = mouseX;
    ballY = mouseY;
}