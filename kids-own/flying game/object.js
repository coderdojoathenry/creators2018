let objs = [];

class Obj{
    constructor(x, img1, img2, img3, img4){
        this.x = x;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.y = Math.round(random(200, 900));
        this.topCenter = (this.y - 150) / 2;
        this.bottomCenter = ((this.y + 150) + 1100) / 2;
        this.topSize = this.y - 150;
        this.bottomSize = 1100 - (this.y + 150);
        this.left = this.x - 100 - playerHalf;
        this.right = this.x + 100 + playerHalf;
        this.top = this.topCenter + (this.topSize / 2) + playerHalf;
        this.bottom = this.bottomCenter - (this.bottomSize / 2) - playerHalf;
    }

    draw(){
        fill(0, 150, 0);
        rect(this.x - screenPos, this.topCenter, 200, this.topSize);
        rect(this.x - screenPos, this.bottomCenter, 200, this.bottomSize);

        this.start = this.y + 200;
        image(this.img1, this.x - screenPos, this.start, 200, 100);
        this.start += 100;

        while(this.start <= 1200){
            image(this.img2, this.x - screenPos, this.start, 200, 100);
            this.start += 100;
        }

        this.start = this.y - 200;
        image(this.img3, this.x - screenPos, this.start, 200, 100);
        this.start -= 100;

        while(this.start >= -100){
            image(this.img4, this.x - screenPos, this.start, 200, 100);
            this.start -= 100;
        }
    }

    detect(){
        if(playerX > this.left && playerX < this.right && playerY < this.top){
            reset = 1;
        } else if(playerX > this.left && playerX < this.right && playerY > this.bottom){
            reset = 1;
        }

        if(playerX == this.x){
            score = score + 1;
        }
    }
}