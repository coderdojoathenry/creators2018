let movers=[];
let font;
let points = [];

function preload(){
    font = loadFont("fonts/AvenirNextLTW01-Medium.ttf");
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    textFont(font);
    points = font.textToPoints("Creators", 100, height/2, 300);
    
    for(let i=0; i< points.length; i++){
        let startPosition=createVector(points[i].x, points[i].y);
        movers.push(new Mover(random(10,30), startPosition));
    }
}

function draw() {
    background("LightSkyBlue");  
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);  

    for(let i=0; i< movers.length; i++){   
        movers[i].applyBehaviours(); 
        movers[i].move();
        movers[i].checkEdges();
        movers[i].show();    
    }    
}