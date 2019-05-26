let modeAllow = 0;
let modeNew = 0;
let modeOld = 0;

function modeChange(){
    modeOld = modeNew;

    if(keyIsDown(32)){
        modeNew = 1
    } else{
        modeNew = 0;
    }

    if(modeOld == 1 && modeNew == 0){
        modeAllow = 1;
    }

    if(keyIsDown(32) && modeAllow == 1){
        gameMode = 1 - gameMode;

        if(gameMode == 1){
            playSetup();
        }

        modeAllow = 0;
    }
}