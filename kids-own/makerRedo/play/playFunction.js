function playFunction(){
    playerMove();
    playScreen();

    for(i = 0; i < _002.length; i++){
        if(dist(_002[i].x, 0, playerX, 0) < (gridSize * 2)){
            _002[i].detect();
        }

        if(_002[i].x > screenPos - gridSize || _002[i].x < screenPos + 2000 + gridSize){
            _002[i].show();
        }
    }

    playerDraw();
}