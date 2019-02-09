class Bullet {
    constructor(x, y){
        this.x = x;
        this.y = y;        
        this.speed = 10;
        this.active = true;
        this.collider = new Collider(this, "bullet", 10, 10);
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

    hit(desc){
        console.log("I was hit by " + desc);
        this.active=false;
    }
}