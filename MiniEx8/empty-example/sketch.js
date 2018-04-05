var sunTexture;
var planetTextures = [];
var xpos = [0, 0, 0, 0, 0, 0];
var ypos = [0, 0, 0, 0, 0, 0];
var zpos = [0, 0, 0, 0, 0, 0];
var year;
var month;
var slider;
var checkbox;
var data;
var loading = false;
var pg;
var pg2;
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var counter = 0;

function preload() {
	loadJSON("http://www.astro-phys.com/api/de406/states?date=1900-1-1&bodies=mercury,venus,earth,mars,jupiter,uranus,neptune&unit=au", gotData, "jsonp");
}

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4, WEBGL);
	slider = createSlider(22800, 24600, 2000);
	slider.position(windowWidth*0.01, windowHeight*0.95);
	slider.style('width', (width*0.96).toString() + 'px');
	checkbox = createCheckbox();
	checkbox.position(0.23*windowWidth, 0.933*windowHeight);
	checkbox.checked(true);
	var val = slider.value();
	var year = floor(val / 12);
	var month = val % 12 + 1;
	sunTexture = createGraphics(5, 5);
	sunTexture.background(240, 160, 50);
	for (i = 0; i < 5; i++) {
	planetTextures[i] = createGraphics(5, 5);
	}
	planetTextures[0].background(200);
	planetTextures[1].background(255, 240, 200);
	planetTextures[2].background(20, 0, 215);
	planetTextures[3].background(200, 85, 50);
	planetTextures[4].background(230, 180, 110);
	pg = createGraphics(200, 200);
	pg.textSize(14);
	pg2 = createGraphics(200, 200);
	pg2.textSize(14);
}

function draw() {
  background(10);
	var val = slider.value();
	var year = floor(val / 12);
	var month = val % 12 + 1;
	push();
	pg.background(10);
	pg.fill(255);
	pg.text('Year: ' + year.toString() + ' --- ' + 'Month: ' + monthName[month-1], 0, 100);
	texture(pg);
	translate(-0.4*windowWidth, 0.45*windowHeight);
	plane(200, 200);
	pop();
	push();
	pg2.background(10);
	pg2.fill(255);
	pg2.text('Rotation:', 0, 100);
	texture(pg2);
	translate(-0.25*windowWidth, 0.45*windowHeight);
	plane(200, 200);
	pop();
	rotateY(counter * 0.01);
	if (checkbox.checked()) {
	counter++;
	}
	if (loading == false) {
	loadJSON("http://www.astro-phys.com/api/de406/states?date=" + year.toString() + "-" + month.toString() + "-1&bodies=mercury,venus,earth,mars,jupiter,uranus,neptune&unit=au", gotData, "jsonp");
	loading = true;
	}
	push();
	texture(sunTexture);
  sphere(15);
	pop();
	for (i = 0; i < 5; i++) {
	push();
	translate(xpos[i], ypos[i], zpos[i]);
	texture(planetTextures[i]);
	if (i == 4) {
	sphere(5);
} else {
	sphere(2);
}
	pop();
}

}

function gotData(data) {
	var planets = [data.results.mercury[0], data.results.venus[0], data.results.earth[0], data.results.mars[0], data.results.jupiter[0]];
	for (i = 0; i < 5; i++) {
		xpos[i] = 75*planets[i][0];
		ypos[i] = 75*planets[i][1];
		zpos[i] = 75*planets[i][2];
	}
	loading = false;

}

function resizeWindow() {
  resizeCanvas(windowWidth - 4,windowHeight - 4, WEBGL);
}
