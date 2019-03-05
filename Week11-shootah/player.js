class Player {
    constructor(x, img){
        this.x = x;
        this.y = height -50;
        this.img = img;
        this.speed =0;
        this.collider = new Collider(this, "player", 100, 100);
    }

    setSpeed(speed){
        this.speed=speed;
    }

    move(){
        this.x += this.speed;
        this.speed = this.speed * 0.97;
    }

    show(){
        imageMode(CENTER);
        image(this.img, this.x, 
            this.y, 100, 100);
    }

    hit(other){
        if (other.desc == 'Static'){
          console.log("The player hit the edge");
          let distX = this.x - other.connected.x;
          let sepX = (this.collider.width + other.width)/2;

          if (distX > 0){
            // Left
            this.x = other.connected.x + sepX;
          }
          else{
            // Right
            this.x = other.connected.x - sepX;
          }
        }

        
    }
}