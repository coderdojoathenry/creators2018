class Landscape{
    constructor(height, variation, xinc, colour){
        this.height = height;
        this.variation = variation;
        this.colour = colour;
        this.xinc = xinc;
        this.points = [];

        this.GeneratePoints();
    }

    GeneratePoints(){
        let xoff = random();

        for (let x = 0; x < width; x++){
            let y = map(noise(xoff), 0, 1, this.height, this.height + this.variation);
            this.points.push(y);
            xoff += this.xinc;
        }
    }

    draw(){
        push();

        fill(this.colour);
        noStroke();
        beginShape();
        
        for (let x = 0; x < width; x++){
            vertex(x, this.points[x]);
        }

        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);

        pop();
    }
}