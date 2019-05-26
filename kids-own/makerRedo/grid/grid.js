class Grid{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.state = 0;

        this.hue = null;
        this.sat = null;
        this.bri = null;
    }

    main(){
        this.top = this.y - (gridSize / 2);
        this.bottom = this.y + (gridSize / 2);
        this.left = this.x - (gridSize / 2) - gridScreen;
        this.right = this.x + (gridSize / 2) - gridScreen;
        fill(255);
        rect(this.x - gridScreen, this.y, gridSize, gridSize);
        this.buttonClick();
        this.S000Setup();
        colorMode(RGB, 255);
        rect(this.x - gridScreen, this.y, gridSize - 2, gridSize - 2);
    }

    buttonClick(){
        this.past = this.current;
    
        if(mouseIsPressed){
            this.current = 1;
        } else{
            this.current = 0;
        }

        if(this.past == 1 && this.current == 0){
            this.allow = 0;
        }
    }

    S000Setup(){
        if(select == 1){
            this.S001Player();
        } else if(select == 2){
            this.S002SingleBrick();
        }

        if(this.state == 0){
            this.R000Setup();
        } else if(this.state == 1){
            this.R001Player();
        } else if(this.state == 2){
            this.R002SingleBrick();
        }
    }

    R000Setup(){
        fill(29, 160, 247);
    }

    S001Player(){
        if(this.allow == 0 && mouseIsPressed && mouseX < this.right && mouseX > this.left && mouseY < this.bottom && mouseY > this.top){
            for(j = 0; j < grids.length; j++){
                if(grids[j].state == 1){
                    grids[j].state = 0;
                }
            }
            this.state = 1;
            this.allow = 1;
        }
    }

    R001Player(){
        fill("red");
    }

    S002SingleBrick(){
        if(this.allow == 0 && mouseIsPressed && mouseX < this.right && mouseX > this.left && mouseY < this.bottom && mouseY > this.top){
            if(this.hue !== pHue || this.sat !== pSat || this.bri !== pBri || this.state !== 2){
                this.state = 2;
                this.hue = pHue;
                this.sat = pSat;
                this.bri = pBri;
                this.allow = 1;
            } else{
                this.state = 0;
                this.allow = 1;
            }
        }
    }

    R002SingleBrick(){
        colorMode(HSB, 400);
        fill(this.hue, this.sat, this.bri);
    }

}