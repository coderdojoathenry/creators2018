let maze = [];
let cols = 30;
let rows = 30;
let threshold = 0.4;

let solid = [-0.5, -0.5,
    0.5, -0.5,
    0.5, 0.5,
   -0.5, 0.5];

let threeCorner = [-0.5, 0,
    0, -0.5,
    0.5, -0.5,
    0.5, 0.5,
   -0.5, 0.5];

let twoCorner = [-0.5, 0,
    0, -0.5,
    0.5, -0.5,
    0.5, 0,
    0, 0.5,
   -0.5, 0.5];

let half = [-0.5, 0.0,
    0.5, 0.0,
    0.5, 0.5,
   -0.5, 0.5];

let oneCorner = [-0.5, -0,
                -0.5, -0.5,
                 0, -0.5];

function setup() {
    createCanvas(792, 600);

    angleMode(DEGREES);
    let nscale = 10.0;
    let border = 2;

    for (let x = 0; x < cols; x++) {
        maze[x] = [];
        for (let y = 0; y < rows; y++) {
            if (x < border || y < border  || 
                x > cols - (border  + 1) || 
                y > rows - (border + 1)){
                    maze[x][y] = 1;
            }else{
                maze[x][y] = noise(x/nscale, y/nscale);
            }
        }
    }
}

function draw() {
    background("Grey");

    if (keyIsDown(UP_ARROW) && threshold < 1.0){
        threshold += 0.01;
    }
    else if (keyIsDown(DOWN_ARROW) && threshold > 0.0){
        threshold -= 0.01;
    }
    else if (keyIsDown(RIGHT_ARROW)){
        threshold = 0.4;
    }

    scale(24);
    stroke('white');
    strokeWeight(0.01);
    //noStroke();
    fill('black');

    for (let x = 0; x < cols - 1; x++) {
        for (let y = 0; y < rows - 1; y++) {
            let c0 = maze[x][y] > threshold ? 1 : 0;
            let c1 = maze[x + 1][y] > threshold ? 1 : 0;
            let c2 = maze[x + 1][y + 1] > threshold ? 1 : 0;
            let c3 = maze[x][y + 1] > threshold ? 1 : 0;
            drawCell(c0, c1, c2, c3, x + 0.5, y + 0.5);
        }
    }

    // for (let x = 0; x < cols; x++) {
    //     for (let y = 0; y < rows; y++) {
    //         if (maze[x][y] < threshold){
    //             fill('green');
    //         }
    //         else {
    //             fill('red');
    //         }
            
    //         ellipse(x, y, 0.1, 0.1);
    //     }
    // }


    
}

function drawCell(c0, c1, c2, c3, x, y) {
    var casenum = GetCaseNum(c0, c1, c2, c3);

    switch (casenum) {
        case 0:
            // Nothing
            break;
        case 1:
            drawShape(x, y, oneCorner, 0);
            break;
        case 2:
            drawShape(x, y, oneCorner, 90);
            break;
        case 3:
            drawShape(x, y, half, 180);
            break;
        case 4:
            drawShape(x, y, oneCorner, 180);
            break;
        case 5:
            drawShape(x, y, twoCorner, 90);
            break;
        case 6:
            drawShape(x, y, half, 270);
            break;
        case 7:
            drawShape(x, y, threeCorner, 270);
            break;
        case 8:
            drawShape(x, y, oneCorner, 270);
            break;
        case 9:
            drawShape(x, y, half, 90);
            break;
        case 10:
            drawShape(x, y, twoCorner, 0);
            break;
        case 11:
            drawShape(x, y, threeCorner, 180);
            break;
        case 12:
            drawShape(x, y, half, 0);
            break;
        case 13:
            drawShape(x, y, threeCorner, 90);
            break;
        case 14:
            drawShape(x, y, threeCorner, 0);
            break;
        case 15:
            drawShape(x, y, solid, 0);
            break;
    }
}

function GetCaseNum(c0, c1, c2, c3) {
    return c0 + (c1 * 2) + (c2 * 4) + (c3 * 8);
}

function drawShape(x, y, shape, r) {
    push();

    translate(x, y);
    rotate(r);

    beginShape();
    for (let i = 0; i < shape.length - 1; i += 2) {
        vertex(shape[i], shape[i + 1])
    }

    endShape(CLOSE);

    pop();
}

