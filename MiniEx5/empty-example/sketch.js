var button;
var gameState = 'Off';
var stage = 0;
var circleSpeed = 4;
var topStage = 0;
var timer = 0;
var circleNumber = 1;
var circles = [];
var circleCounter = 1;
var complimentNumber;
var genericCompliments = ["Super!", "Good work!", "Marvelous!", "Wow!", "Keep it up!", "Right on!", "Suberb!", "You've got the hang of it!", "Not bad", "You're learning fast", "Nice going", "Nothing can stop you now", "Keep up the good work", "You made it look easy", "You've got that down", "You must have been practicing", "Way to go"];

class Circle {
  constructor() {
    this.showNumber = true;
    this.number = circleNumber;
    circleNumber++;
    this.velocity = createVector(random(-circleSpeed, circleSpeed), random(-circleSpeed, circleSpeed));
    this.position = createVector(random(10, 490), random(10, 430));
  }
  move() {
   this.position.x = this.position.x + this.velocity.x;
   this.position.y = this.position.y + this.velocity.y;
   if (frameCount % 60 == 0) {
      this.velocity.x = random(-circleSpeed, circleSpeed, -circleSpeed, circleSpeed);
      this.velocity.y = random(-circleSpeed, circleSpeed, -circleSpeed, circleSpeed);
}
   if (this.position.x > 490 && this.velocity.x > 0) {
      this.velocity.x = this.velocity.x*-1;
} else if (this.position.x < 10 && this.velocity.x < 0) {
      this.velocity.x = this.velocity.x*-1;
}
   if (this.position.y > 430 && this.velocity.y > 0) {
      this.velocity.y = this.velocity.y*-1;
} else if (this.position.y < 10 && this.velocity.y < 0) {
      this.velocity.y = this.velocity.y*-1;
}
}
  show() {
    stroke(10);
    fill(105,165,240);
    ellipse(this.position.x, this.position.y, 40);
    if (this.showNumber) {
      noStroke();
      fill(10);
      textAlign(CENTER);
      textSize(16);
      text(this.number.toString(), this.position.x, this.position.y + 5);
    }
  }
}

function setup() {
createCanvas(500,500);
frameRate(60);
button = createButton('Start');
button.position(225, 215);
button.size(50);
button.mousePressed(startGame);
for (i = 0; i < 3; i++) {
  circles[i] = new Circle;
}
}

function startGame() {
  button.remove();
  stage++;
  circleCounter = 1;
  gameState = 'Moving';
  for (i = 0; i < circles.length; i++) {
    circles[i].showNumber = false;
  }
}

function gameOver() {
  gameState = 'GameOver';
  timer = 0;
  for (i = 0; i < circles.length; i++) {
  circles[i].showNumber = true;
}
}

function draw() {
background(240);
fill(200);
stroke(10);
rect(0,440,499,59);
fill(66,66,255);
noStroke();
textAlign(CENTER);
textSize(16);
text("Instuctions:", 250, 460);
textSize(12);
fill(10);
text("When you click start the numbers disappear and the circles start moving around.", 250, 475);
text("When they stop moving click them in the correct order to progress to the next stage.", 250, 490);
fill(10);
textAlign(LEFT);
textSize(11);
text("Current stage: " + stage.toString(), 5, 417);
if (stage > topStage) {
  text("Highest stage reached: " + stage.toString(), 5, 432);
} else {
  text("Highest stage reached: " + topStage.toString(), 5, 432);
}
if (gameState == "Moving") {
  if (timer == 240) {
    gameState = "ClickEm";
    timer = 0;
  } else {
    timer++;
  }
} else if (gameState == "Pause") {
  textAlign(CENTER);
  noStroke()
  fill(10);
  textSize(18);
  text(genericCompliments[complimentNumber], 250, 200);
}
for (i = 0; i < circles.length; i++) {
  if (gameState == "Moving") {
    circles[i].move();
  }
  circles[i].show();
}
if (gameState == "GameOver") {
noStroke()
textAlign(CENTER);
textSize(32);
fill(255,66,66);
text("GAME OVER", 250, 210);
textSize(32);
fill(10);
textSize(20);
text("Stage: " + stage.toString(), 250, 240);
if (stage > topStage) {
  fill(66, 200, 66);
  textSize(14);
  text("New High Score!", 250, 265);
}
timer++;
if (timer == 120) {
  gameState = 'Off';
  if (stage > topStage) {
   topStage = stage;
  }
  stage = 0;
  circleNumber = 1;
  circleSpeed = 5;
  for (i = 0; i < circles.length; i++) {
    circles[i].remove;
  }
  circles = [];
  for (i = 0; i < 3; i++) {
    circles[i] = new Circle;
  }
  button = createButton('Start');
  button.position(225, 215);
  button.size(50);
  button.mousePressed(startGame);
  timer = 0;
}
}
}

function mousePressed() {
  if (gameState == "ClickEm") {
    for (i = 0; i < circles.length; i++) {
      if (dist(circles[i].position.x, circles[i].position.y, mouseX, mouseY) < 20) {
        if (circles[i].number == circleCounter) {
          circles[i].showNumber = true;
          circleCounter++;
        if (circleCounter == circleNumber) {
            complimentNumber = floor(random(genericCompliments.length));
            gameState = 'Pause';
            button = createButton('Start');
            button.position(225, 215);
            button.size(50);
            button.mousePressed(startGame);
          if (stage % 2 == 0) {
            circles[circleNumber - 1] = new Circle;
          } else {
            circleSpeed = circleSpeed + 0.8
          }
          }
        } else {
          gameOver();
        }
      }

    }
  }
}
