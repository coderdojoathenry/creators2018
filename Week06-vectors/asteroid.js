class Asteroid {
    constructor(size, position) {
        this.size = size;
        this.position = position;
        this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(0.01);
        this.velocity = createVector(0,0);
    }

    move(){
        // random accel
        this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(20);
        this.position.add(this.velocity);

        // check edges
        if(this.position.x > width){
            this.position.x=0;
        }
        if(this.position.x < 0){
            this.position.x=width;
        }
        if(this.position.y > height){
            this.position.y=0;
        }
        if(this.position.y < 0){
            this.position.y=height;
        }
    }

    show() {
        fill("red");
        ellipse(this.position.x, this.position.y, 
            this.size, this.size);
    }
}    