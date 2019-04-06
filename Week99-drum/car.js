class Car {
    constructor() {
        this.x=0;
        this.y=height-40;
        this.carList = ["🚗","🚓", "🚌", "🚕"];
        this.car = random(this.carList);
    }

    move(){
        this.x = this.x+5;
        if(this.x>width){
            this.x=0;
            this.car = random(this.carList);            
        }
    }

    show(){
        push();
        textAlign(CENTER);
        textSize(100);
        text(this.car, this.x, this.y);
        pop();
    }
}