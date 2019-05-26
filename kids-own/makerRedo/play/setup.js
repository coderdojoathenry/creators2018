let playerX = 0;
let playerY = 0;

function playSetup(){
    for(i = 0; i < grids.length; i++){
        if(grids[i].state == 1){
            playerX = grids[i].x;
            playerY = grids[i].y;
        }
    }

    xCool = 0;
    accX = 0;
    accY = 0;
    jumpAir = 1;

    if(playerX == 0 && playerY == 0){
        playerX = 0 + (gridSize / 2);
        playerY = 0 + (gridSize / 2);
    }

    _002 = [];

    for(i = 0; i < grids.length; i++){
        if(grids[i].state == 2){
            _002.push(new _002SingleBlock(grids[i].x, grids[i].y, grids[i].hue, grids[i].sat, grids[i].bri))
        }
    }
}