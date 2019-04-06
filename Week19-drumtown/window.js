class Window {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        push();
        strokeWeight(3);
        stroke(255);
        fill(200);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        pop();
    }
}