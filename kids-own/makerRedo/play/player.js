let xCool = 0;
let accX = 0;
let accY = 0;
let jumpAir = 1;

function playerDraw(){
    fill("red");
    rect(playerX - screenPos, playerY, gridSize, gridSize);
}

function playerMove(){
    if (keyIsDown(39) && !keyIsDown(37)){
        xCool = 0;
        if (accX < 10){
            accX = accX + 1;
        }
    } else if(keyIsDown(37) && !keyIsDown(39)){
        xCool = 0;
        if (accX > -10){
            accX = accX - 1;
        }
    } else {
        if (xCool < 3){
            xCool = xCool + 1;
        } else {
            if (accX > 0){
                accX = accX - 0.5;
            } else if (accX < 0){
                accX = accX + 0.5;
            }
        }
    }

    playerX = playerX + accX;
    
    if (playerX < gridSize / 2){
        playerX = gridSize / 2;
        accX = 0;
    }

    if (keyIsDown(38)){
        if (jumpAir == 0){
            accY = 15.5;
            jumpAir = 1;
        }
    }
    
    if (jumpAir == 1){
        if (accY > -10){
            accY = accY - 0.5;
        }
    }
    
    playerY = playerY - accY;

    if(playerY > 1200 + (gridSize / 2)){
        gameMode = 0;
    }
}