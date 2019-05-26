let paletteGrids = [];
let paletteActive = 0;

let hueGrids = [];

function palette(){
    if(paletteActive == 0){
        paletteFirst();
    }

    paletteShow();
}

function paletteFirst(){
    for(i = 2050; i <= 2450; i += 16){
        for(j = 400; j <= 800; j += 16){
            paletteGrids.push(new PaletteGrid(i, j, i - 2050, 400 - (j - 400)));
        }
    }

    for(i = 400; i <= 800; i += 16){
        hueGrids.push(new HueGrid(i, i - 400));
    }

    paletteGrids[0].selected = 1;
    hueGrids[0].selected = 1;

    paletteActive = 1;
}

function paletteShow(){
    for(i = 0; i < hueGrids.length; i++){
        hueGrids[i].show();
        hueGrids[i].detect();
    }

    for(i = 0; i < paletteGrids.length; i++){
        paletteGrids[i].show();
        paletteGrids[i].detect();
    }

    for(i = 0; i < paletteGrids.length; i++){
        if(paletteGrids[i].selected == 1){
            colorMode(RGB, 255);
            fill(255);
            ellipse(paletteGrids[i].x, paletteGrids[i].y, 20, 20);
            fill(0);
            ellipse(paletteGrids[i].x, paletteGrids[i].y, 10, 10);
            colorMode(HSB, 400);
            
        }
    }

    for(i = 0; i < hueGrids.length; i++){
        if(hueGrids[i].selected == 1){
            colorMode(RGB, 255);
            fill(255);
            rect(2510, hueGrids[i].y, 90, 16);
            colorMode(HSB, 400);
            
        }
    }
}