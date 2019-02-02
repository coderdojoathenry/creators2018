class Bullet {
    constructor(x, y){
        this.x = x;
        this.y = y;        
        this.speed = 10;
        this.active = true;
    }

    move(){
        this.y = this.y - this.speed;
        if (this.y < 0){
            this.active = false;
        }
    }

    show(){
        push();
        fill("yellow");
        ellipse(this.x, this.y, 10, 10);
        pop();
    }
}