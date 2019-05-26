class HueGrid{
    constructor(y, hue){
        this.y = y;
        this.hue = hue;
        this.selected = 0;
    }

    show(){
        fill(this.hue, 400, 400);
        rect(2510, this.y, 80, 16);
    }

    detect(){
        this.top = this.y - 8;
        this.bottom = this.y + 8;

        if(mouseIsPressed && mouseX > 2470 && mouseX < 2550 && mouseY > this.top && mouseY < this.bottom){
            for(j = 0; j < hueGrids.length; j++){
                hueGrids[j].selected = 0;
            }
            this.selected = 1;
        }
    }
}