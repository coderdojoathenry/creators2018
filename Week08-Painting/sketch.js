let toolbarSize = 50;
let colours = ['black', 'white', 'red', 'blue', 'green'];
let sizes = [5, 10, 20, 40, 80, 160];
let currentColour = colours[0];
let currentSize = sizes[0];

function setup() {
    createCanvas(innerWidth, innerHeight);
    background("white");
}

function draw() {
    noStroke();
    fill(currentColour);
    if (mouseIsPressed && mouseX > toolbarSize){
        ellipse(mouseX, mouseY, currentSize, currentSize);
    }

    drawToolbar();
}

function drawToolbar(){
  let y = 0;
  stroke('grey');

  for(let i = 0; i < colours.length; i++){
    fill(colours[i]);
    rect(0, y, toolbarSize, toolbarSize);
    y = y + toolbarSize;
  }

  for(let i = 0; i < sizes.length; i++){
    fill('white');
    rect(0, y, toolbarSize, toolbarSize);

    let boxCenterX = toolbarSize / 2;
    let boxCentreY = y + toolbarSize / 2;
    let iconSize = sizes[i] / 5;
    ellipse(boxCenterX, boxCentreY, iconSize, iconSize);

    y = y + toolbarSize;
  }

}

function mouseClicked(){
    if (mouseX > toolbarSize){
        return;
    }

    let index = Math.floor(mouseY / toolbarSize);

    if (index < colours.length){
        currentColour = colours[index];
        return;
    }

    index = index - colours.length;

    if (index <  sizes.length){
        currentSize = sizes[index];
        return;
    }
}