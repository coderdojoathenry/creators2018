class Enemy{
    constructor(y, speed, img){
      this.x = -100;
      this.y = y;
      this.speed = speed;
      this.img = img;
      this.collider = new Collider(this, "enemy", 100, 100);
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

    hit(other){
        console.log("I was hit by " + other.desc);
    }
}