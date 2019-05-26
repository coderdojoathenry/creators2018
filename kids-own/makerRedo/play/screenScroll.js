let screenPos = 0;

function playScreen(){
    if(playerX > 1000){
        screenPos = playerX - 1000;
    } else if(playerX <= 1000){
        screenPos = 0;
    }
}