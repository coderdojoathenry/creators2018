class Mover{
    constructor(size, home){
        this.size=size;
        this.mass=this.size;
        this.position=createVector(random(width),random(height));
        this.home = home;
        this.acceleration=createVector(0,0);
        this.velocity=createVector(0,0);
        this.isAfraid = false;
        this.maxSpeed = 5;
    }

    move(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    applyBehaviours(){
        this.flee();
        this.goHome();
    }

    goHome(){
        // i want to go home
        let desired = p5.Vector.sub(this.home, this.position);
        desired = desired.limit(this.maxSpeed);
        let steering = p5.Vector.sub(desired, this.velocity);
        this.applyForce(steering);
    }

    flee(){
        // i am scared of the mouse
        let mousePosition = createVector(mouseX, mouseY);
        let desired = p5.Vector.sub(this.position, mousePosition);
        let dist = desired.mag();
        if(dist < 100){
            desired = desired.limit(this.maxSpeed);
            let steering = p5.Vector.sub(desired, this.velocity);
            this.applyForce(steering.mult(10));
            this.isAfraid=true;
        } else {
            this.isAfraid = false;
        }
    }

    show(){
        if(this.isAfraid){
            fill(255, 0, 0, 50);            
        } else {
            fill(0, 255, 0, 50);
        }

        ellipse(this.position.x, this.position.y, 
            this.size, this.size);
    }

    applyForce(force){
        let accelToAdd=force.copy().div(this.mass);
        this.acceleration.add(accelToAdd);
    }

    checkEdges(){
        if(this.position.x>width){
            this.position.x=width;
        }
        if(this.position.x<0){
            this.position.x=0;
        }        
        if(this.position.y<0){
            this.position.y=0;
        }                
        if(this.position.y>height){
            this.position.y=height;
        }                        
    }
}