let car;
let windows = [];

function setup() {
    createCanvas(800, 800);
    car = new Car();

    windows.push(new Window(300, 400));
}

function draw() {
    background("LightSkyBlue");    

    // draw car
    car.move();
    car.show();

    // draw window
    for(let i=0; i< windows.length; i++){
        windows[i].show();
    }
}