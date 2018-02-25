var timer = 0;
var currentPoint = 0;
var dotNumber = 0;
var loadingText = ["Blowing up planets", "Waiting for winter", "Powering up", "Preparing for the next kill", "Writing names", "Drinking vodka martinis", "Catching all 151 Pokémon", "Mmm... Throbber"];
var currentTheme = 0;
var currentMillis = 0;
var millisStart = 0;
var img = [0,0,0,0,0,0,0,0];
var audio = [0,0,0,0,0,0,0,0];

function preload() {
  img[0] = loadImage('Deathstar.png');
  audio[0] = loadSound('StarWarsTheme.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(10);
  img[1] = loadImage('Comet.png');
  img[2] = loadImage('DragonBall.png');
  img[3] = loadImage('BloodOrange.png');
  img[4] = loadImage('Apple.png');
  img[5] = loadImage('GunBarrel.png');
  img[6] = loadImage('Pokeball.png');
  img[7] = loadImage('Donut.png');
  audio[1] = loadSound('GoTTheme.mp3');
  audio[2] = loadSound('DBZTheme.mp3');
  audio[3] = loadSound('DexterTheme.mp3');
  audio[4] = loadSound('DeathNoteTheme.mp3');
  audio[5] = loadSound('JamesBondTheme.mp3');
  audio[6] = loadSound('PokemonTheme.mp3');
  audio[7] = loadSound('SimpsonsTheme.mp3');
  audio[currentTheme].setVolume(0.5);
  audio[currentTheme].play();
}

function draw() {
  background(10);
  textAlign(CENTER);
  textSize(8);
  fill(255);
  text('Disclaimer: I own the rights to nothing',windowWidth - 67,windowHeight - 5);
  translate(windowWidth/2, windowHeight/2);
  textSize(32);
  text(loadingText[currentTheme],0,255);
  textAlign(LEFT);
  if (dotNumber == 1) {
    text('.',textWidth(loadingText[currentTheme])/2 + 2,255);
  } else if (dotNumber == 2) {
    text('..',textWidth(loadingText[currentTheme])/2 + 2,255);
  } else  if (dotNumber == 3){
    text('...',textWidth(loadingText[currentTheme])/2 + 2,255);
  }
  imageMode(CENTER);
  for (var i = 0; i <= 7; i++) {
    tint(255,255 - currentPoint*35);
    image(img[currentTheme],115*cos(i*PI/4),115*sin(i*PI/4),75,75);
    currentPoint++;
    if (currentPoint > 7) {
      currentPoint = 0;
    }
  }
  timer++;
  currentPoint++;
  if (currentPoint > 7) {
    currentPoint = 0;
    dotNumber++;
    if (dotNumber > 3) {
      dotNumber = 0;
    }
  }
  currentMillis = millis() - millisStart;
  if (currentMillis >= 12000) {
    audio[currentTheme].stop();
    if (currentTheme >= 7) {
      currentTheme = 0;
      audio[currentTheme].setVolume(0.5);
      audio[currentTheme].play();
    } else {
      currentTheme++;
      audio[currentTheme].setVolume(0.5);
      audio[currentTheme].play();
    }
    millisStart = millis();
  }
}

function resizeWindow() {
  resizeCanvas(windowWidth,windowHeight);
}
