class Enemy{
    constructor(y, speed, img){
      this.x = -100;
      this.y = y;
      this.speed = speed;
      this.img = img;
    }

    move(){
      this.x = this.x + this.speed;
      if (this.x > width + 100){
          this.x = -100;
      }
    }

    show(){
        imageMode(CENTER);
        image(this.img, this.x, 
            this.y, 100, 100);
    }
}