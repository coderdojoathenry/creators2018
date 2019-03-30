let ground;
let plane;
let cargo = [];
let speed = 0.01;
let crashed = false;
let score = 0;

function setup() {
    createCanvas(800, 600);
    
    plane = new Plane(50, 30, 2);
    ground = new Ground(0.005, 100, height - 100);
}

function draw() {
    background("LightSkyBlue");
  
    ground.move();
    ground.show();

    if (crashed == false){
        plane.handleInput();
        crashed = ground.isBelowGround(plane.x, plane.y);
        plane.show();
    }
    else {
        speed = 0;
    }

    handleCargo();

    text('Score: ' + score, width - 100, 50);
}

function handleCargo(){
    if (random(100) < 1){
        cargo.push(new Cargo(width,
                             ground.points[width - 1], 
                             ground.xinc));
    }

    var active = [];
    for (let i = 0; i < cargo.length; i++){
        if (cargo[i].active == true){
            if (cargo[i].isNear(plane.x, plane.y)){
                cargo[i].active = false;
                score++;
                speed += 0.001;
            }
            cargo[i].move();
            cargo[i].show();
            active.push(cargo[i]);
        }
    }
    cargo = active;
}