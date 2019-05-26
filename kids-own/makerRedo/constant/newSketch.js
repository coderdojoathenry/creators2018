let gameMode = 0;

function newDraw(){
    modeChange();

    if(gameMode == 0){
        background(29, 160, 247);
        gridScreenWrap();
        gridSet();
    } else if(gameMode == 1){
        background(29, 160, 247);
        playFunction();
    }

    panelDraw();
}