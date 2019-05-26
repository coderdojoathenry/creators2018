let saveWriteNum = "";

function saveWrite(){
    saveWriteNum = "";
    for(i = 0; i < grids.length; i++){
        saveWriteNum += grids[i].x + " ";
        saveWriteNum += grids[i].y + " ";
        saveWriteNum += grids[i].state + " ";
        saveWriteNum += grids[i].hue + " ";
        saveWriteNum += grids[i].sat + " ";
        saveWriteNum += grids[i].bri + " ";
    }
    console.log(saveWriteNum);
}

let saveReadArray = [];

function saveRead(saveReadNum){
    grids = [];
    saveReadArray = saveReadNum.split(" ");
    for(i = 0; i < saveReadArray.length; i += 6){
        grids.push(new Grid(saveReadArray[i], saveReadArray[i + 1]))
        grids[i / 6].state = saveReadArray[i + 2];
        grids[i / 6].hue = saveReadArray[i + 3];
        grids[i / 6].sat = saveReadArray[i + 4];
        grids[i / 6].bri= saveReadArray[i + 5];
    }
    topScreen = saveReadArray[saveReadArray.length - 1].x;
    select = 1;
    savReadArray = [];
}