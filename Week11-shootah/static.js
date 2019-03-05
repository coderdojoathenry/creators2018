class Static {
    constructor(x, y, width ,height){
        this.x = x;
        this.y = y;
        this.collider = new Collider(this, "Static",
                                     width, height);
    }

    hit(other){
        console.log("I was hit by " + other.desc);
    }
}