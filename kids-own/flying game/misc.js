let loadCap = 10;
let reset = 0;

function objLoad(){
    if(screenPos == loadCap){
        objs.push(new Obj(loadCap + 2500, topOfBlock, bottomOfBlock, topOfBlock2, bottomOfBlock2));
        loadCap += 1000;
    }

    if(objs[0].x < screenPos - 300){
        objs.shift();
    }

    for(i = 0; i < objs.length; i++){
        objs[i].detect();
        objs[i].draw();
    }

    if(reset == 1){
        objs = [];
        playerX = 500;
        playerY = 600;
        acc = 0;
        playerSize = 50;
        playerHalf = playerSize / 2;
        screenPos = 0;
        loadCap = 10;
        score = 0;
        sizeCap = 300;
        reset = 0;
    }
}

let score = 0;
let highScore = 0;

function scoreRun(){
    if(score > highScore){
        highScore = score;
    }

    fill(0);
    textSize(80);
    textAlign(CENTER);
    text("Score: " + score, 1000, 100);
    text("Highscore: " + highScore, 1000, 200);
}