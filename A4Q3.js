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
  for (i = 0; i < 10; i++) {
    //j creates a pattern on the vertical plane
    for (j = 0; j < 100; j++) {
      
      //sets an array of colors that are randomly chosen
      let colorArray = ["gold","skyblue", "palevioletred", "greenyellow", "orchid", "orangered"];
      let sizeArray = [0.8, 0.9, 1, 2]
      
      //sets an array of sizes that are randomly chosen
      let randomColor = random(colorArray);
      let randomSize = random(sizeArray)
      
      drawWindmill(i * 130 + 50, j * 130 + 45, randomSize, randomColor, 5, 36);
     

      drawWindmill(i * 130 + 50, j * 130 + 115, 0.6, randomColor, 5, 90);
     

      drawWindmill(i * 130 + 120, j * 130 + 70, 1, randomColor, 5, 55);
     
    }
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
