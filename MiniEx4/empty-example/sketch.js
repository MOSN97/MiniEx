var redHeight = 5;
var timer = 0;
var button;
var gameState = 'Off';
var cookieNumber = 0;
var imgCookie;
var cookieX = [];
var cookieY = [];
var imgBrownie;
var brownieScore = 800;
var brownieX;
var brownieY;
var score = 0;
var highScore = 0;

function setup() {
createCanvas(500,500);
frameRate(60);
button = createButton('Start');
imgCookie = loadImage("cookie.png")
imgBrownie = loadImage("Brownie.png")
button.position(225, 215);
button.size(50);
button.mousePressed(startGame);
}

function startGame() {
  gameState = 'On';
  button.remove();
  cookieX[cookieNumber] = mouseX;
  cookieY[cookieNumber] = mouseY;
  cookieNumber++;
  brownieX = random(36, 464);
  brownieY = random(36, 404);
}

function gameOver() {
  gameState = 'GameOver';
  timer = 0;
  cookieNumber = 0;
  cookieX = [];
  cookieY = [];
  brownieScore = 1000;
}

function draw() {
background(10);
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
text("Avoid cookies and red walls. Click brownies.", 250, 475);
text("You get more points the faster you click them.", 250, 490);
fill(255,66,66);
noStroke();
rect(0,0,10,440);
rect(0,0,500,10);
rect(490,0,10,440);
rect(0,430,500,10);
fill(255);
textAlign(LEFT);
textSize(11);
text("Score: " + score.toString(), 15, 407);
text("High Score: " + highScore.toString(), 15, 422);

imageMode(CENTER);
if (gameState == 'On') {
  image(imgBrownie, brownieX, brownieY);
  for (var i = 0; i < cookieNumber - 1; i++) {
    image(imgCookie, cookieX[i], cookieY[i]);
  }
if (brownieScore > 500) {
  brownieScore--;
}
} else if (gameState == 'GameOver') {
  textAlign(CENTER);
  textSize(32);
  fill(255,66,66);
  text("GAME OVER", 250, 210);
  textSize(32);
  fill(255);
  textSize(20);
  text("Score: " + score.toString(), 250, 240);
  if (score == highScore && score > 0) {
    fill(255,255,66);
    textSize(14);
    text("New High Score!", 250, 265);
  }
  timer = timer + 1;
  if (timer == 120) {
    gameState = 'Off';
    score = 0;
    button = createButton('Start');
    button.position(225, 215);
    button.size(50);
    button.mousePressed(startGame);
  }
}
}

function mouseMoved() {
  if (gameState == 'On') {
  if (dist(cookieX[cookieNumber-1],cookieY[cookieNumber-1],mouseX,mouseY) > 20) {
    cookieX[cookieNumber] = mouseX;
    cookieY[cookieNumber] = mouseY;
    cookieNumber++;
  }
  for (var i = 0; i < cookieNumber - 1; i++) {
    if (dist(cookieX[i],cookieY[i],mouseX,mouseY) < 15) {
      gameOver();
    }
  }
  if (mouseX < 11 || mouseX > 489 || mouseY < 11 || mouseY > 429) {
    gameOver();
  }
}
}

function mousePressed() {
if (dist(brownieX,brownieY,mouseX,mouseY) < 25) {
  score = score + brownieScore;
  if (highScore < score) {
    highScore = score;
  }
  brownieScore = 1000;
  brownieX = random(36, 464);
  brownieY = random(36, 404);
  for (var i = 0; i <= cookieNumber; i++) {
    if (dist(brownieX,brownieY,cookieX[i],cookieY[i]) < 35) {
      cookieX[i] = -100;
      cookieY[i] = -100;
    }
}
}
}
