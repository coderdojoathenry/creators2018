class Bomb {
    constructor(x, y){
        this.x = x;
        this.y = y;        
        this.speed = -5;
        this.active = true;
        this.collider = new Collider(this, "bomb", 10, 10);
    }

    move(){
        this.y = this.y - this.speed;
        if (this.y > height){
            this.active = false;
        }
    }

    show(){
        push();
        fill("red");
        ellipse(this.x, this.y, 10, 10);
        pop();
    }

    hit(other){
        if (other.desc == 'enemy'){
            return;
        }
        console.log("I was hit by " + other.desc);
        this.active=false;
    }
}