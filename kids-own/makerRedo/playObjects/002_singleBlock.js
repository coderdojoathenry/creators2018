let _002 = [];

class _002SingleBlock{
    constructor(x, y, hue, sat, bri){
        this.x = x;
        this.y = y;
        this.leftAllow = 1;
        this.rightAllow = 1;
        this.hue = hue;
        this.sat = sat;
        this.bri = bri;
    }

    show(){
        colorMode(HSB, 400);
        fill(this.hue, this.sat, this.bri);
        rect(this.x - screenPos, this.y, gridSize, gridSize);
        colorMode(RGB, 255);
    }

    detect(){
        this.top = this.y - gridSize;
        this.bottom = this.y + gridSize;
        this.left = this.x - gridSize;
        this.right = this.x + gridSize;

        if(playerY > this.top && playerY < this.top + 15 && playerX > this.left && playerX < this.right && accY <= 0){
            playerY = this.top;
            accY = 0;
            jumpAir = 0;
        }

        for(j = 0; j < _002.length; j++){
            if(_002[j].x == this.x && _002[j].y == this.y + gridSize){
                this.topAllow = 0;
                break;
            } else{
                this.topAllow = 1;
            }
        }

        if(playerY < this.bottom && playerY > this.bottom - 17 && playerX > this.left && playerX < this.right && accY >= 0 && this.topAllow == 1){
            playerY = this.bottom;
            accY = 0;
        }

        for(j = 0; j < _002.length; j++){
            if(_002[j].x == this.x - gridSize && _002[j].y == this.y){
                this.leftAllow = 0;
                break;
            } else{
                this.leftAllow = 1;
            }
        }

        for(j = 0; j < _002.length; j++){
            if(_002[j].x == this.x + gridSize && _002[j].y == this.y){
                this.rightAllow = 0;
                break;
            } else{
                this.rightAllow = 1;
            }
        }

        if(playerY == this.top && jumpAir == 0 && playerX <= this.left && playerX > this.left - 15 && this.leftAllow == 1){
            jumpAir = 1;
        }

        if(playerY == this.top && jumpAir == 0 && playerX >= this.right && playerX < this.right + 15 && this.rightAllow == 1){
            jumpAir = 1;
        }

        if(playerX > this.left && playerX < this.left + 15 && playerY > this.top && playerY < this.bottom && accX >= 0){
            playerX = this.left;
            accX = 0;
        }

        if(playerX < this.right && playerX > this.right - 15 && playerY > this.top && playerY < this.bottom && accX <= 0){
            playerX = this.right;
            accX = 0;
        }
    }
}