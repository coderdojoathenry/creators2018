let select = 0;

let pHue = 0;
let pSat = 0;
let pBri = 400;

function panelDraw(){
    fill(0);
    rect(2300, 600, 600, 1200);

    if(gameMode == 0){

        // Player
        if(select == 1){
            fill(205, 160, 20);
            rect(2100, 100, 110, 110);
        }
        fill("red");
        rect(2100, 100, 100, 100);
        if(mouseIsPressed && mouseX > 2050 && mouseX < 2150 && mouseY > 50 && mouseY < 150){
            select = 1;
        }

        // Single Brick

        if(select == 2){
            fill(205, 160, 20);
            rect(2250, 100, 110, 110);
            push();
            colorMode(HSB, 400);
            palette();
            
        }

        for(i = 0; i < hueGrids.length; i++){
            if(hueGrids[i].selected == 1){
                pHue = hueGrids[i].hue;
                break;
            } else{
                pHue = 0;
            }
        }

        for(i = 0; i < paletteGrids.length; i++){
            if(paletteGrids[i].selected == 1){
                pSat = paletteGrids[i].sat;
                pBri = paletteGrids[i].bri;
                break;
            } else{
                pSat = 0;
                pBri = 400;
            }
        }

        colorMode(HSB, 400);
        fill(pHue, pSat, pBri);
        rect(2250, 100, 100, 100);
        colorMode(RGB, 255);

        if(mouseIsPressed && mouseX > 2200 && mouseX < 2300 && mouseY > 50 && mouseY < 150){
            select = 2;
        }

        // Delete All
        fill("gray");
        rect(2100, 1100, 100, 100);
        rect(2100, 1040, 120, 20);
        rect(2080, 1020, 10, 30);
        rect(2120, 1020, 10, 30);
        rect(2100, 1010, 40, 10);
        fill(0);
        rect(2100, 1050, 120, 2);
        rect(2060, 1100, 2, 100);
        rect(2070, 1100, 2, 100);
        rect(2080, 1100, 2, 100);
        rect(2090, 1100, 2, 100);
        rect(2100, 1100, 2, 100);
        rect(2110, 1100, 2, 100);
        rect(2120, 1100, 2, 100);
        rect(2130, 1100, 2, 100);
        rect(2140, 1100, 2, 100);
        if(mouseIsPressed && mouseX > 2040 && mouseX < 2160 && mouseY < 1150 && mouseY > 1005){
            for(i = 0; i < grids.length; i++){
                grids[i].state = 0;
            }
        }

    }

}