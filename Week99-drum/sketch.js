let car;
let windows = [];
let numberOfColumns = 8;

let layer1Sound;
let layer2Sound;
let layer3Sound;
let layer4Sound;
let layer5Sound;

function preload(){
    layer1Sound = loadSound("sounds/cowbell-large-open.wav");
    layer2Sound = loadSound("sounds/afuche.wav");
    layer3Sound = loadSound("sounds/conga-open-1.wav");
    layer4Sound = loadSound("sounds/drum-snare-brush-tap.wav");
    layer5Sound = loadSound("sounds/cymbal-hihat-foot-2.wav");                
    layer6Sound = loadSound("sounds/cymbal-ride-bell-short.wav");        
}

function setup() {
    createCanvas(800, 800);
    car = new Car();

    let columnSpace = width/numberOfColumns;

    // layer 1
    for(i=0; i< numberOfColumns; i++){
        windows.push(new Window(columnSpace/2 + i*columnSpace, 80, layer1Sound));
        windows.push(new Window(columnSpace/2 + i*columnSpace, 160, layer2Sound));
        windows.push(new Window(columnSpace/2 + i*columnSpace, 240, layer3Sound));
        windows.push(new Window(columnSpace/2 + i*columnSpace, 320, layer4Sound));
        windows.push(new Window(columnSpace/2 + i*columnSpace, 400, layer5Sound));                                
        windows.push(new Window(columnSpace/2 + i*columnSpace, 480, layer6Sound));         
    }

}

function draw() {
    background("LightSkyBlue");    
    // draw building + road
    push();
    fill(50)
    rect(15,20, width-30, height-100);
    fill(100) 
    rect(0,height-100, width, 150);    
    pop();

    car.show();
    car.move();

    // Show the windows
    for(let i =0; i<windows.length; i++){

        if(windows[i].active && !windows[i].hasPlayed && windows[i].x < car.x){        
            windows[i].play();
        }
        if(car.x>=width){
            windows[i].hasPlayed=false;
        }

        windows[i].show();
    }
}

function mouseClicked(){
    for(let i =0; i<windows.length; i++){
        if(windows[i].touchingMouse()){
            windows[i].toggleActive();
        }
    }    
}