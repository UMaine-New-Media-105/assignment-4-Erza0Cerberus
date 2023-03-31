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

  for (i = 0; i < 7; i++) {
    //j creates a pattern on the vertical plane
    for (j = 0; j < 3; j++) {
      drawWindmill(i * 130 + 50, j * 130 + 45, 0.8, "palevioletred", 7, 36);

      drawWindmill(i * 130 + 50, j * 130 + 115, 1, "gold", 7, 90);

      drawWindmill(i * 130 + 120, j * 130 + 70, 1, "skyblue", 7, 60);
    }
  }

  function drawWindmill(
    windmillX,
    windmillY,
    windmillSize,
    pedalColor,
    pedalAmount,
    pedalRotate
  ) {
    push();
    translate(windmillX, windmillY);
    scale(windmillSize);
    for (let pedal = 0; pedal <= pedalAmount; pedal++) {
      fill(pedalColor);
      rotate(pedalRotate);
      {
        ellipse(-3, 0, 15, 50);

        push();
        fill("black");
        ellipse(-5, 0, 5, 100);
        pop();
      }
    }
  }
}
