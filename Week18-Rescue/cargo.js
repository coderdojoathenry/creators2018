class Cargo{
    constructor(x, y, xinc){
        this.x = x;
        this.y = y;
        this.xinc = xinc;
        this.active = true;
    }

    move(){
        this.x -= speed / this.xinc;
        if (this.x < 0){
            this.active = false;
        }
    }

    show(){
        push();

        translate(this.x, this.y);
        rectMode(CENTER);
        fill('Orange');
        rect(0, -10, 20, 20);
        pop();
    }

    isNear(x, y){
        return (Math.abs(this.x - x) < 30 &&
                Math.abs(this.y - y) < 30);
    }
}