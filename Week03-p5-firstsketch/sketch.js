function setup(){
    createCanvas(500, 500);    
    background(0); 
}

function draw(){

    fill(255);

    strokeWeight(5);
    stroke('red');    
    rect(100, 200, 100, 100);

    fill('orange');
    stroke(255);    
    ellipse(150, 150, 80, 150); 

    strokeWeight(10);
    point(140, 120);
    point(170, 120); 
    
    fill(0);
    strokeWeight(2);
    rect(135, 160, 40, 10);
    
}