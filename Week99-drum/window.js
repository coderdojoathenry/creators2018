class Window {
    constructor(x, y, sound){
        this.x = x;
        this.y = y;
        this.size = 50;
        this.active = false;
        this.hasPlayed = false;
        this.sound = sound;
        this.strokeWeight=3;
    }

    touchingMouse(){
        let touching = true;
        if(mouseX < this.x-this.size/2 || mouseX > this.x+this.size/2){
            touching = false;
        } 
        if(mouseY < this.y-this.size/2 || mouseY > this.y+this.size/2){
            touching = false;
        }         
        return touching;
    }

    toggleActive(){
        this.active = !this.active;
    }

    play(){
        this.sound.play();
        this.hasPlayed = true;
        this.strokeWeight=15;        
    }

    show(){
        if(this.strokeWeight>3) {
            this.strokeWeight--;
        }

        push();
        strokeWeight(this.strokeWeight);
        stroke("white");
        if(this.active){
            fill("yellow")
        } else {
            fill(150)
        }
        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
        pop();
    }
}