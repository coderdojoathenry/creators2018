class Car {
    constructor(){
        this.x=0;
        this.y=height-30;
        this.speed=5;
        
        this.carList= ["🚗", "🚚", "🚛", "🚕", "🚜"];
        this.symbol = random(this.carList);
    }

    move(){
        this.x = this.x+ this.speed;
        if(this.x > width){
            this.x=0;
            this.symbol = random(this.carList);             
        }
    }

    show(){
        push();
        textAlign(CENTER);
        textSize(80);
        scale(-1,1);
        text(this.symbol, this.x*-1, this.y);
        pop();
    }
}