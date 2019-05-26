let playerX = 500;
let playerY = 600;
let acc = 0;
let playerSize = 50;
let playerHalf = playerSize / 2;
let screenPos = 0;
let sizeCap = 300;

function playerDraw(){
    fill("red");
    rect(playerX - screenPos, playerY, playerSize, playerSize);
}

function playerMove(){
    if(screenPos == sizeCap){
        playerSize = playerSize + 1;
        playerHalf = playerSize / 2;
        sizeCap = sizeCap + 300;
    }

    playerX += 10;
    screenPos = playerX - 500;

    if(keyIsDown(32) && acc > -20){
        acc -= 1;
    } else if(acc < 20){
        acc += 1;
    }

    playerY += acc;

    if(playerY > 1100 - playerHalf){
        playerY = 1100 - playerHalf;
        acc = 0;
    } else if(playerY < playerHalf){
        playerY = playerHalf;
        acc = 0;
    }
}