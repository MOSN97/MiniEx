function setup() {
  createCanvas(400, 440);
}

var ColorRed = 255;
var ColorGreen = 255;
var ColorBlue = 255;
var ColorOpacity = 255;
var SpeedX = 0;
var SpeedY = 0;
var SquareX = 175;
var SquareY = 175;



function draw() {
  stroke(75);
  fill(75);
  rect(0,0,400,25);
  rect(0,0,25,400);
  rect(375,0,25,400);
  rect(0,375,400,25);
  stroke(0);
  fill(255);
  rect(165,410,70,25);
  textSize(18)
  stroke(0, 102, 153);
  fill(0, 102, 153);
  text('CLEAR', 170, 430);
  SquareX = SquareX + SpeedX;
  SquareY = SquareY + SpeedY;
  stroke(0);
  fill(ColorRed,ColorGreen,ColorBlue,ColorOpacity);
  rect(SquareX, SquareY, 50, 50);
  if (SquareX < 27) {
    SquareX = 26.9;
    SpeedX = (-0.9)*SpeedX;
    SpeedY = 0.9*SpeedY;
    ColorRed = (SquareY - 26)*0.85;
  }
  if (SquareX > 323) {
    SquareX = 323.1;
    SpeedX = (-0.9)*SpeedX;
    SpeedY = 0.9*SpeedY;
    ColorBlue = 255 - (SquareY - 26)*0.85;
  }
  if (SquareY < 27) {
    SquareY = 26.9;
    SpeedY = (-0.9)*SpeedY;
    SpeedX = 0.9*SpeedX;
    ColorOpacity = (SquareX - 26)*0.85;
  }
  if (SquareY > 323) {
    SquareY = 323.1;
    SpeedY = (-0.9)*SpeedY;
    SpeedX = 0.9*SpeedX;
    ColorGreen = 255 - (SquareX - 26)*0.85;
  }
}
function mousePressed() {
  if (mouseX < SquareX + 50) {
    if (mouseX > SquareX) {
      if (mouseY < SquareY + 50) {
        if (mouseY > SquareY) {
          SpeedX = ((SquareX + 25) - mouseX) * 0.2;
          SpeedY = ((SquareY + 25) - mouseY) * 0.2;
  }
  }
  }
}
  if (mouseX < 235) {
    if (mouseX > 165) {
      if (mouseY < 435) {
        if (mouseY > 410) {
          clear();
        }
      }
      }
      }
}
