let clouds = [];
let landscapes = [];

function setup() {
  createCanvas(800, 600);
  CreateClouds();
  CreateLandscapes();
}

function CreateLandscapes(){
  landscapes.push(new Landscape(160, 120, 0.01, "Grey"));
  landscapes.push(new Landscape(200, 100, 0.007, "DarkOliveGreen"));
  landscapes.push(new Landscape(260, 80, 0.004, "DarkGreen"));
}

function CreateClouds()
{
  let x = 50;
  let y = 0;
  let size = 0;
  let speed = 0;

  while(x < width + 50){
    y = random(90, 100);
    size = random(20, 40);
    speed = random(0.08, 0.12);
    clouds.push(new Cloud(createVector(x, y), 
    speed, 230, size, 0.8, 4));
    x += random(50, 100);
  }

  x = 100;

  while(x < width + 100){
    y = random(80, 120);
    size = random(40,100);
    speed = random(0.26, 0.34);
    clouds.push(new Cloud(createVector(x, y), 
    speed, 255, 50, 0.8, 4));
    x += random(100, 200);
  }
}

function draw() {
  background("lightBlue");

  landscapes.forEach(landscape => {
    landscape.draw();
  })


  clouds.forEach(cloud => {
    cloud.move();
    cloud.draw();
  });
 
  
}