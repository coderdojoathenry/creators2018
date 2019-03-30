class Ground {
    constructor(xinc, ymin, ymax){
        this.xinc = xinc;
        this.ymin = ymin;
        this.ymax = ymax;
        this.points = [];
        this.xstart = 0.0;
    }

    generatePoints(){
        this.points = [];

        let xoff = this.xstart;
        for (let x = 0; x < width; x++){
            this.points[x] = map(noise(xoff), 0, 1, this.ymin, this.ymax);
            xoff += this.xinc;
        }
    }

    move(){
        this.xstart += speed;
    }

    show(){
        this.generatePoints();

        fill('green');
        beginShape();
        for (let x = 0; x < width; x++){
            vertex(x, this.points[x]);
        }
        vertex(width, height);
        vertex(0, height);

        endShape(CLOSE);
    }

    isBelowGround(x, y){
        return this.points[x] < y;
    }
}