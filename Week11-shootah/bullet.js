class Bullet {
    constructor(x, y){
        this.x = x;
        this.y = y;        
        this.speed = 10;
    }

    move(){
        this.y = this.y - this.speed;
    }

    show(){
        push();
        fill("yellow");
        ellipse(this.x, this.y, 10, 10);
        pop();
    }
}