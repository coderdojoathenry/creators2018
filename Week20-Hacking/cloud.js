class Cloud{
    constructor(loc, speed, colour, width, ratio, clip){
        this.loc = loc;
        this.speed = speed;
        this.colour = colour;
        this.width = width;
        this.ratio = ratio;
        this.clip = clip;
        this.nume = 240;
        this.el = [];

        this.generate();
    }

    generate(){
        for (let i = 0; i < this.nume; i++)
        {
            let r = random();
            let theta = 2 * PI * random();
            let size = random() * this.width / 2;
            
            let x = r * Math.cos(theta);
            let y = r * Math.sin(theta);
            let height = this.width * this.ratio;

            x *= this.width;
            y *= height;

            if (y > this.clip)
              y = this.clip;

            this.el.push([x, y, size]);
        } 
    }

    move(){
        this.loc.x += this.speed;
        if(this.loc.x > width + this.width){
          this.loc.x = -this.width;
        }
    }

    draw(){
        push();

        noStroke();
       
        for (let i = 0; i < this.nume; i++)
        {
            let c = this.el[i];

            // Drop shadow
            fill(this.colour - 15);
            ellipse(this.loc.x + c[0] - 4, this.loc.y + c[1] + 4, c[2]);
    
            // Main cloud part
            fill(this.colour);
            ellipse(this.loc.x + c[0], this.loc.y + c[1], c[2]);
        }

        pop();
    }
}