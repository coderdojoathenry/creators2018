let movers=[];
let NUMBER_OF_MOVERS=30;

function setup() {
    createCanvas(innerWidth, innerHeight);

    for(let i=0; i< NUMBER_OF_MOVERS; i++){
        let startPosition=createVector(0, height/2);
        movers.push(new Mover(10*(i+1), startPosition));
    }

}

function draw() {
    background("LightSkyBlue");    
    let wind=createVector(3,0);
    let gravity=createVector(0,5);    

    for(let i=0; i< NUMBER_OF_MOVERS; i++){
        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);    
    
        movers[i].move();
        movers[i].checkEdges();
        movers[i].show();    
    }    

}