class PaletteGrid{
    constructor(x, y, sat, bri){
        this.x = x;
        this.y = y;
        this.sat = sat;
        this.bri = bri;
        this.selected = 0;
    }

    show(){
        for(j = 0; j < hueGrids.length; j++){
            if(hueGrids[j].selected == 1){
                fill(hueGrids[j].hue, this.sat, this.bri);
                break;
            } else{
                fill(0, this.sat, this.bri);
            }
        }

        rect(this.x, this.y, 16, 16);
    }

    detect(){
        this.left = this.x - 8;
        this.right = this.x + 8;
        this.top = this.y - 8;
        this.bottom = this.y + 8;

        if(mouseIsPressed && mouseX > this.left && mouseX < this.right && mouseY > this.top && mouseY < this.bottom){
            for(j = 0; j < paletteGrids.length; j++){
                paletteGrids[j].selected = 0;
            }
            this.selected = 1;
        }
    }
}