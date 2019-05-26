function preload(){
    topOfBlock = loadImage("Top of Block.png");
    bottomOfBlock = loadImage("Bottom of Block.png");
    topOfBlock2 = loadImage("Top of Block 2.png");
    bottomOfBlock2 = loadImage("Bottom of Block 2.png");
    // background0 = loadImage("Background.png");
    // duckFlying = loadImage("Duck Flying.png");
    // duckStalled = loadImage("Duck Stalled.png");
}

function newDraw(){
    background(0, 204, 204);

    playerMove();
    objLoad();
    playerDraw();
    scoreRun();
    fill(0, 200, 0);
    rect(1000, 1150, 2000, 100);

    for(i = 100; i <= 2000; i += 200){
        image(topOfBlock, i, 1150, 200, 100);
    }
}