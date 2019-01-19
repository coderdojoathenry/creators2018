class Player {
    constructor(x, img){
        this.x = x;
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
            height-100, 100, 100);
    }
}