class Player {
    constructor(x, img){
        this.x = x;
        this.y = height -50;
        this.img = img;
        this.speed =0;
    }

    setSpeed(speed){
        this.speed=speed;
    }

    move(){
        this.x+=this.speed;
    }

    show(){
        imageMode(CENTER);
        image(this.img, this.x, 
            this.y, 100, 100);
    }
}