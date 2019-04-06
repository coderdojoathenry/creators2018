let car;
let windows = [];
let NUM_FLOORS = 7;
let NUM_COLUMNS = 8;
let sounds = [];

function preload() {
    for (let i = 0; i < NUM_FLOORS; i++) {
        sounds.push(loadSound("sounds/" + i + ".wav"));
    }
}

function setup() {
    createCanvas(800, 800);
    car = new Car();

    // Create a grid of windows
    let columnSpace = width / NUM_COLUMNS;
    for (let i = 0; i < NUM_COLUMNS; i++) {
        for (let j = 0; j < NUM_FLOORS; j++) {
            windows.push(new Window(columnSpace / 2 + columnSpace * i, 80 + j * 80, sounds[j]));
        }
    }

}

function draw() {
    background("LightSkyBlue");

    // draw building, road
    push();
    fill(50)
    rect(15, 20, width - 30, height - 100);
    fill(100)
    rect(0, height - 100, width, 150);
    pop();

    // draw car
    car.move();
    car.show();

    // draw windows
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].isActive && car.x > windows[i].x) {
            windows[i].playSound();
        }
        if (car.x == 0) {
            windows[i].hasPlayed = false;
        }
        windows[i].show();
    }
    showFadingMessage();
}

function mouseClicked() {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].touchingMouse()) {
            windows[i].isActive = !windows[i].isActive;
        }
    }
}

function showFadingMessage(){
    // show message that fades
    push();
    if(frameCount<200){
        fill(255, 255, 0, 255-frameCount*1.25);
        textSize(150);
        textAlign(CENTER);
        text("Drumtown", width/2, height/2);
        textSize(50);
        text("Click on windows to play", width/2, height/2 + 100);
        
    }
    pop();
}