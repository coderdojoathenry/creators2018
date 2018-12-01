class Tank {
    constructor(pos, colour1, colour2) {
        this.pos = pos;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.angle = 0;
    }

    draw() {
        push();

        translate(this.pos);
        rotate(this.angle);

        fill(this.colour1);
        rect(0, 0, 40, 20);

        fill(this.colour2);
        rect(26, 0, 20, 5);
        ellipse(10, 0, 16, 16);

        pop();
    }

    turn(amount) {
        this.angle += amount;
    }

    drive(speed) {
        let newPos = this.pos.copy();

        let offset = createVector(1, 0);
        offset.mult(speed);
        offset.rotate(this.angle);

        newPos.add(offset);

        if (this.canMoveTo(newPos)){
            this.pos = newPos;
        }
    }

    canMoveTo(pos) {
        if (pos.x < 0 || pos.x > width ||
            pos.y < 0 || pos.y > height) {
            return false;
        }

        return true;
    }
}