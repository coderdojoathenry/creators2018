class Window {
    constructor(x, y, sound) {
        this.x = x;
        this.y = y;
        this.sound = sound;
        this.isActive = false;
        this.hasPlayed = false;
        this.strokeWeight=3;
    }

    touchingMouse() {
        if (mouseX < this.x - 25
            || mouseX > this.x + 25) {
            return (false);
        }
        if (mouseY < this.y - 25
            || mouseY > this.y + 25) {
            return (false);
        }
        return (true);
    }

    playSound() {
        if (this.hasPlayed == false) {
            this.hasPlayed = true;
            this.sound.play();
            this.strokeWeight=15;
        }
    }

    show() {
        push();

        // stroke weight does the pulse
        strokeWeight(this.strokeWeight);
        if(this.strokeWeight>3) { this.strokeWeight--; }
        stroke(255);
        if (this.isActive) {
            fill("yellow");
        } else {
            fill(200);
        }
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        pop();
    }
}