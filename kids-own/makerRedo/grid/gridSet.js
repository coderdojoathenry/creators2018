let gridSize = 50;
let grids = [];

function gridSet() {
    if (grids.length == 0) {
        for (i = gridSize / 2; i < 2000; i = i + gridSize) {
            for (j = gridSize / 2; j < 1200; j = j + gridSize) {
                grids.push(new Grid(i, j));
            }
        }
    }

    for (i = 0; i < grids.length; i++) {
        if(grids[i].x > gridScreen && grids[i].x < gridScreen + 2000){
            grids[i].main();
        }
    }
}