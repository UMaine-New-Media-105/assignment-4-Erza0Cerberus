function setup() {
  createCanvas(800, 400);

  //changes modes of angle and circles
  angleMode(DEGREES);
  ellipseMode(CORNER);

  //prevents infinte loops
  noLoop();
}

function draw() {
  //makes background light green color
  background("#D8FCA1");
  
  //i creates a pattern on the horizontal plane
  for (i = 0; i < 6; i++) {
    //j creates a pattern on the vertical plane
    for (j = 0; j < 3; j++) {
      
      //sets an array of colors that appear in a set order
      let colorArray = ["gold","skyblue", "palevioletred", "greenyellow", "orchid", "orangered"];
      let sizeArray = [0.6, 0.7, 0.8, 0.9, 1, 1.1]
    
      //sets an array of sizes that appear in a set order
      let nextColor = colorArray[i];
      let nextSize = sizeArray[i];
      
      drawWindmill(i * 130 + 50, j * 130 + 45, nextSize, nextColor, 9, 36);
      

      drawWindmill(i * 130 + 50, j * 130 + 115, 0.6, nextColor, 4, 90);
      

      drawWindmill(i * 130 + 120, j * 130 + 70, 0.5, nextColor, 6, 60);
      
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
  for (let pedal = 6; pedal <= pedalAmount; pedal++) {
    fill(pedalColor);
    rotate(pedalRotate);

    ellipse(-3, 0, 15, 50);

    push();
   
    pop();
  }
pop();
}
