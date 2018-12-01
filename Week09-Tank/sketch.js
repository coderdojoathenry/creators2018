let tank1;
let tank2;

function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);
    rectMode(CENTER);

    let tankPos1 = createVector(width/4, 
                               height/2);
    tank1 = new Tank(tankPos1, 'olive', 'olivedrab');

    let tankPos2 = createVector(3 * width/4, 
        height/2);
    tank2 = new Tank(tankPos2, 'green', 'darkgreen');
    tank2.angle = 180;
}

function draw() {
    background("Black");
    
    getInput();

    tank1.draw();
    tank2.draw();
}

function getInput(){
    // Tank one control
    if(keyIsDown(LEFT_ARROW)){
        tank1.turn(-1);
    }
    else if(keyIsDown(RIGHT_ARROW)){
        tank1.turn(1);
    }

    if(keyIsDown(UP_ARROW)){
        tank1.drive(1);
    }
    else if(keyIsDown(DOWN_ARROW)){
        tank1.drive(-1);
    }

    // Tank two control
    if (keyIsPressed && key == 'a'){
        tank2.turn(-1);
    }
    else if (keyIsPressed && key == 'd'){
        tank2.turn(-1);
    }

    if (keyIsPressed && key == 'w'){
        tank2.drive(1);
    }
    else if (keyIsPressed && key == 's'){
        tank2.drive(-1);
    }

}