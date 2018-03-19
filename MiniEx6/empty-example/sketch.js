var circleRadius;

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  background(255);
  background((minute() * hour() * Math.sqrt(day()))  % 256,(minute() * hour() * Math.pow(month(), 2))  % 256, (minute() * year() / hour())  % 256, (year() * minute() / hour() * month() / day())  % 256);
}

function draw() {
    background(255);
    background((minute() * hour() * Math.sqrt(day()))  % 256,(minute() * hour() * Math.pow(month(), 2))  % 256, (minute() * year() / hour())  % 256, (year() * minute() / hour() * month() / day())  % 256);
  stroke(10);
  if ((windowHeight - 4) / 12 * 0.9 < (windowWidth - 4) / 20 * 0.9) {
    circleRadius = (windowHeight - 4) / 12 * 0.9;
  } else {
     circleRadius = (windowWidth - 4) / 20 * 0.9;
   }
  translate((windowWidth -4) / 20, (windowHeight - 4) / 12);
  for (i = 1; i <= second(); i++) {
  beginShape();
  if (i % 2 == 0) {
    fill((i*Math.abs(minute() - hour()))  % 256, (i*(minute() + day())) % 256, (Math.pow(i, Math.sqrt(month()))*minute()) % 256);
    vertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
  for (n = 1; n < floor(10 + i / 6); n++) {
   vertex(circleRadius*cos(1.5*PI + n*PI*Math.pow(i, year()/1000) * minute()), circleRadius*sin(1.5*PI + n*PI*Math.pow(i, year()/1000) * minute()));
}
vertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
} else {
  fill((i*Math.abs(minute() - hour()))  % 256, (i*(minute() + day())) % 256, (Math.pow(i, Math.sqrt(month()))*minute()) % 256);
  curveVertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
  curveVertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
  for (n = 1; n < floor(10 + i / 6); n++) {
   curveVertex(circleRadius*cos(1.5*PI + n*PI*Math.pow(i, year()/1000) * minute()), circleRadius*sin(1.5*PI + n*PI*Math.pow(i, year()/1000) * minute()));
}
curveVertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
curveVertex(circleRadius*cos(1.5*PI), circleRadius*sin(1.5*PI));
}
  endShape();
  if (i % 10 == 0 && i != 0) {
  translate((windowWidth -4)  / 10 * -10, (windowHeight - 4) / 6);
  }
  translate((windowWidth -4) / 10, 0);
}
}


function resizeWindow() {
  resizeCanvas(windowWidth - 4,windowHeight - 4);
}
