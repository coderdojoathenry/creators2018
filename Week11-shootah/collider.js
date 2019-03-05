class Collider {
    constructor(connected, desc, width, height){
        this.connected = connected;
        this.desc = desc;
        this.width = width;
        this.height = height;
    }

    extents(){
        return {
            l: this.connected.x - this.width / 2,
            r: this.connected.x + this.width / 2,
            b: this.connected.y + this.height / 2,
            t: this.connected.y - this.height / 2
        };
    }

    touching(other){
        let a = this.extents();
        let b = other.extents();

        // Left of us
        if (b.l < a.l && b.r < a.l) return false;
        // Right of us
        if (b.l > a.r && b.r > a.r) return false;
        // Above  us
        if (b.t < a.t && b.b < a.t) return false;
        // Below  us
        if (b.t > a.b && b.b > a.b) return false;

        this.connected.hit(other);
        other.connected.hit(this);
        
        // Touching
        return true;
    }
}