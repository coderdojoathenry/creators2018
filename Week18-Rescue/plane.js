class Plane{
    constructor(x, y, yspeed){
        this.x = x;
        this.y = y;
        this.yspeed = yspeed;
    }

    show(){
        push();

        translate(this.x, this.y);
        rectMode(CENTER);
        fill("Yellow");
        rect(-15, 0, 30, 6);
        fill("Red");
        rect(-27, -6, 6, 6);
        rect(-15, 3, 6, 3);

        pop();
    }

    handleInput(){
        if (keyIsDown(UP_ARROW) && this.y > 10){
            this.y -= this.yspeed;
        }
        else if (keyIsDown(DOWN_ARROW) && this.y < height - 10){
            this.y += this.yspeed;
        }
    }
}