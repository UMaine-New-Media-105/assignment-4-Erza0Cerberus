function setup() {
  createCanvas(400, 400);

  //changes modes of angle and circles
  angleMode(DEGREES);
  ellipseMode(CORNER);

  //no infinte loops
  noLoop();
}

function draw() {
  background("powderblue");

  //these four make 4 windmills
  drawWindmill(70, 80, 1.7, "palevioletred");
  drawWindmill(320, 80, 1.5, "gold");
  drawWindmill(200, 350, 0.7, "greenyellow");
  drawWindmill(200, 200, 2.5, "skyblue");
}

function drawWindmill(windmillX, windmillY, windmillSize, pedalColor) {
  push();
  translate(windmillX, windmillY);
  scale(windmillSize);
  for (let pedal = 0; pedal <= 7; pedal++) {
    fill(pedalColor);
    rotate(96);
    ellipse(-3, 0, 15, 50);
  }

  push();
  fill("black");
  ellipse(-5,0, 5, 100);
  pop();
  pop();
}
