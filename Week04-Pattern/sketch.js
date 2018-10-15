let pattern = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

function setup() {
    createCanvas(400, 400);
    background("LightSkyBlue");

}

function draw() {
    let size = 50;

    let x = size / 2;
    let y = size / 2;

    fill("Blue");

    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {

            if (pattern[j][i] == 1){
                fill("red");
            }
            else{
                fill("white");
            }

            ellipse(x, y, size, size);
            x = x + size;
        }
        x = size / 2;
        y = y + size;
    }
}