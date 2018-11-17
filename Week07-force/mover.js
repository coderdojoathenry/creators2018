class Mover{
    constructor(size, position){
        this.size=size;
        this.mass=this.size;
        this.position=position;
        this.acceleration=createVector(0,0);
        this.velocity=createVector(0,0);
    }

    move(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show(){
        fill(0, 255, 0, 50);
        ellipse(this.position.x, this.position.y, 
            this.size, this.size);
    }

    applyForce(force){
        let accelToAdd=force.copy().div(this.mass);
        this.acceleration.add(accelToAdd);
    }

    checkEdges(){
        if(this.position.x>width){
            this.velocity.x=this.velocity.x*-1;
            this.position.x=width;
        }
        if(this.position.x<0){
            this.velocity.x=this.velocity.x*-1;
            this.position.x=0;
        }        
        if(this.position.y<0){
            this.velocity.y=this.velocity.y*-1;
            this.position.y=0;
        }                
        if(this.position.y>height){
            this.velocity.y=this.velocity.y*-1;
            this.position.y=height;
        }                        
    }
}