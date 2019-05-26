let gridScreen = 0;
let topScreen = 0;

function gridScreenWrap(){
    if(keyIsDown(37) && gridScreen > 0){
        gridScreen = gridScreen - gridSize;
    }
    
    if(keyIsDown(39)){
        gridScreen = gridScreen + gridSize;
    }

    if(gridScreen > topScreen){
        for(i = gridSize / 2; i < 1200; i = i + gridSize){
            grids.push(new Grid(2000 - (gridSize / 2) + gridScreen, i));
        }
    
        topScreen = gridScreen;
    }
}