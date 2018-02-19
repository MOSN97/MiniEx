var state = "Intro";
var failnumber = 0;
var Ofailnumber = 0;
var timer = 0;
var RedArrow;
var BlackArrow;
var BlackArrow2;
var BlackArrow3;
var BlackArrow4;
var OnOff;
var Moon;
var StarSky;
var CorrectCircleX = 175;
var CorrectCircleY = 225;
var NumberThing = 0;
var TriangleTop1 = [0,0];
var TriangleTop2 = [0,0];
var TriangleTop3 = [0,0];
var TriangleTop4 = [0,0];
var TriangleSpeedX = [10, 15, -5, -10];
var TriangleSpeedY = [-10, 5, 15, -15];
var ColorsChosen = [0,0,0];
var LastPoint = [0,0];
var SpaceMusic;

function setup() {
  frameRate(30);
  createCanvas(600,400);
  RedArrow = loadImage('redarrow.png');
  BlackArrow = loadImage('blackarrow.png');
  BlackArrow2 = loadImage('blackarrow2.png');
  BlackArrow3 = loadImage('blackarrow3.png');
  BlackArrow4 = loadImage('blackarrow4.png');
  OnOff = loadImage('OnOff.png');
  Moon = loadImage('fullmoon.jpg');
  StarSky = loadImage('StarSky.png');
  SpaceMusic = loadSound('SpaceMusic.mp3');
}


function draw() {
timer = timer + 1;
if (state == "Intro") {
  background(0);
  image(StarSky,0,0);
  textSize(25);
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(255,255,255,255 - timer * 2);
  text("The Game About Circles",300,200);
  if (timer == 150) {
    state = "Start";
    timer = 0;
    console.log("Hi, I'm the Web Console and I'm here to guide you through The Game About Circles");
    console.log("First of all you need to click the circle");
  }
} else if (state == "Start") {
  if (timer == 90 && failnumber == 13 && Ofailnumber == 8) {
    console.log("I'll remove the damn circle!");
    CorrectCircleX = -200;
    CorrectCircleY = -200;
  }
  if (timer == 135 && failnumber == 13 && Ofailnumber == 8) {
    console.log("I'll remove the obnoxious text!");
  }
  if (timer == 180 && failnumber == 13 && Ofailnumber == 8) {
    console.log("Hell, I'll even remove the damn background!");
  }
  if (timer == 210 && failnumber == 13 && Ofailnumber == 8 && NumberThing == 0) {
    console.log("Wait... What is that?");
  }
  if (timer > 179 && failnumber == 13 && Ofailnumber == 8) {
    background(0);
    image(OnOff,282, 185.5);
    textSize(7.5);
    textAlign(CENTER);
    textStyle(NORMAL);
    fill(210,45,20);
    text("The Game About Circles",300,181.5);
  } else {
    background(210);
  }
  if (timer > 134 && failnumber == 13 && Ofailnumber == 8) {
  } else {
    textSize(18);
    textAlign(CENTER);
    textStyle(NORMAL);
    fill(0);
    text("Open the web console",300,90);
  }

  noStroke();
  fill(105,165,240);
  ellipse(CorrectCircleX,CorrectCircleY,100,100);

if (failnumber < 7) {
  rect(375,175,100,100);
} else if (failnumber < 13) {
  rect(125,175,100,100);
}

if (failnumber > 3 && failnumber < 7) {
  image(RedArrow,80,130);
  textSize(22);
  textStyle(BOLD);
  fill(255,0,0);
  text("Circle",80,125);
  image(BlackArrow,475,125);
  textSize(12);
  textStyle(NORMAL);
  fill(0);
  text("square",520,120);
}
if (mouseX > 290 && mouseX < 314 && mouseY > 193 && mouseY < 215 && failnumber == 13 && Ofailnumber == 8 && timer > 179 && NumberThing == 0) {
  console.log("NO! DON'T CLICK IT!");
  NumberThing = 1;
}

}
if (state == "Second") {
  if (timer == 90 && failnumber > 3 && failnumber < 8 && NumberThing == 3) {
    console.log("Okay! Here's what we'll do: I'll mark all the circles with their distance to the centre. Then all you have to do is click the one with the lowest number");
    console.log("That should be simple enough that even you can't mess it up!");
    failnumber = 8;
  }
  if (timer == 60 && failnumber == 11) {
    console.log("Okay so first of a- Oh no. Oh nonono");
    console.log("Whatever you do: DO NOT click that triangle!");
    TriangleTop1 = [115, 385];
  }
  if (timer == 120 && failnumber == 11) {
    console.log("Seriously, clicking it would be VERY bad for both of us. Just click the correct circle now! It's still not too late");
  }
  if (timer == 180 && failnumber == 11) {
    console.log("Just click the correct circle now! It's still not too late");
  }
  background(210);
  textSize(18);
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(0);
  text("Open the web console",300,90);
  CorrectCircleX = 355;
  CorrectCircleY = 255;
  noStroke();
  fill(105,165,240);
  ellipse(CorrectCircleX,CorrectCircleY,100,100);
  ellipse(165,165,100,100);
  ellipse(440,55,100,100);
  ellipse(90,335,100,100);
  ellipse(575,170,100,100);
  ellipse(505,360,100,100);
  ellipse(-10,25,100,100);
  if (failnumber > 3 && NumberThing < 3) {
  fill(0);
  ellipse(300,200,8,8);
}
if (failnumber > 7) {
  textSize(10.5);
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(0);
  text(dist(CorrectCircleX,CorrectCircleY,300,200).toString(),CorrectCircleX,CorrectCircleY);
  text(dist(165,165,300,200).toString(),165,165);
  text(dist(440,55,300,200).toString(),440,55);
  text(dist(90,335,300,200).toString(),90,335);
  text(dist(575,170,300,200).toString(),575,170);
  text(dist(505,360,300,200).toString(),505,360);
  text(dist(-10,25,300,200).toString(),-10,25);
}
if (timer >= 60 && failnumber == 11) {
  fill(230,250,60);
  triangle(TriangleTop1[0] - 50,TriangleTop1[1] + 86.6,TriangleTop1[0],TriangleTop1[1],TriangleTop1[0] + 50,TriangleTop1[1] + 86.6);
  TriangleTop1 = [TriangleTop1[0] + TriangleSpeedX[0],TriangleTop1[1] + TriangleSpeedY[0]];
  if (TriangleTop1[0] <= 0) {
  TriangleSpeedX[0] = random(5,15);
  if (TriangleSpeedY[0] > 0) {
  TriangleSpeedY[0] = random(5,15);
  } else {
  TriangleSpeedY[0] = random(-15,-5);
  }
}
if (TriangleTop1[0] >= 600) {
TriangleSpeedX[0] = random(-15,-5);
if (TriangleSpeedY[0] > 0) {
TriangleSpeedY[0] = random(5,15);
} else {
TriangleSpeedY[0] = random(-15,-5);
}
}
if (TriangleTop1[1] <= -40) {
TriangleSpeedY[0] = random(5,15);
if (TriangleSpeedX[0] > 0) {
TriangleSpeedX[0] = random(5,15);
} else {
TriangleSpeedX[0] = random(-15,-5);
}
}
if (TriangleTop1[1] > 360) {
TriangleSpeedY[0] = random(-15,-5);
if (TriangleSpeedX[0] > 0) {
TriangleSpeedX[0] = random(5,15);
} else {
TriangleSpeedX[0] = random(-15,-5);
}
}
}
} else if (state == "TrianglesWin") {
  if (timer == 90) {
    console.log("Now you went and made those damned triangles win. That means you lost! And even worse: It means I lost!");
  }
  if (timer == 180) {
    console.log("God I hate triangles. Just look at them flying around all smug");
  }
  if (timer == 270) {
    console.log("I guess there's no other choice than to just start over. Try not to mess everything up this time");
  }
  if (timer == 360) {
  console.log("And more importantly: If you do mess it up, do it in a way that doesn't result in the triangles winning");
  }
  if (timer == 450) {
  state = "Intro";
  failnumber = 0;
  Ofailnumber = 0;
  timer = 0;
  CorrectCircleX = 175;
  CorrectCircleY = 225;
  NumberThing = 0;
  TriangleTop1 = [0,0];
  TriangleTop2 = [0,0];
  TriangleTop3 = [0,0];
  TriangleTop4 = [0,0];
  TriangleSpeedX = [10, 15, -5, -10];
  TriangleSpeedY = [-10, 5, 15, -15];
  ColorsChosen = [0,0,0];
  }
  background(210);
  fill(230,250,60);
  triangle(TriangleTop1[0] - 50,TriangleTop1[1] + 86.6,TriangleTop1[0],TriangleTop1[1],TriangleTop1[0] + 50,TriangleTop1[1] + 86.6);
  TriangleTop1 = [TriangleTop1[0] + TriangleSpeedX[0],TriangleTop1[1] + TriangleSpeedY[0]];
  if (TriangleTop1[0] <= 0) {
  TriangleSpeedX[0] = random(5,15);
  if (TriangleSpeedY[0] > 0) {
  TriangleSpeedY[0] = random(5,15);
  } else {
  TriangleSpeedY[0] = random(-15,-5);
  }
}
if (TriangleTop1[0] >= 600) {
TriangleSpeedX[0] = random(-15,-5);
if (TriangleSpeedY[0] > 0) {
TriangleSpeedY[0] = random(5,15);
} else {
TriangleSpeedY[0] = random(-15,-5);
}
}
if (TriangleTop1[1] <= -40) {
TriangleSpeedY[0] = random(5,15);
if (TriangleSpeedX[0] > 0) {
TriangleSpeedX[0] = random(5,15);
} else {
TriangleSpeedX[0] = random(-15,-5);
}
}
if (TriangleTop1[1] > 360) {
TriangleSpeedY[0] = random(-15,-5);
if (TriangleSpeedX[0] > 0) {
TriangleSpeedX[0] = random(5,15);
} else {
TriangleSpeedX[0] = random(-15,-5);
}
}
fill(250,75,140);
triangle(TriangleTop2[0] - 50,TriangleTop2[1] + 86.6,TriangleTop2[0],TriangleTop2[1],TriangleTop2[0] + 50,TriangleTop2[1] + 86.6);
TriangleTop2 = [TriangleTop2[0] + TriangleSpeedX[1],TriangleTop2[1] + TriangleSpeedY[1]];
if (TriangleTop2[0] <= 0) {
TriangleSpeedX[1] = random(5,15);
if (TriangleSpeedY[1] > 0) {
TriangleSpeedY[1] = random(5,15);
} else {
TriangleSpeedY[1] = random(-15,-5);
}
}
if (TriangleTop2[0] >= 600) {
TriangleSpeedX[1] = random(-15,-5);
if (TriangleSpeedY[1] > 0) {
TriangleSpeedY[1] = random(5,15);
} else {
TriangleSpeedY[1] = random(-15,-5);
}
}
if (TriangleTop2[1] <= -40) {
TriangleSpeedY[1] = random(5,15);
if (TriangleSpeedX[1] > 0) {
TriangleSpeedX[1] = random(5,15);
} else {
TriangleSpeedX[1] = random(-15,-5);
}
}
if (TriangleTop2[1] > 360) {
TriangleSpeedY[1] = random(-15,-5);
if (TriangleSpeedX[1] > 0) {
TriangleSpeedX[1] = random(5,15);
} else {
TriangleSpeedX[1] = random(-15,-5);
}
}
fill(60,240,240);
triangle(TriangleTop3[0] - 50,TriangleTop3[1] + 86.6,TriangleTop3[0],TriangleTop3[1],TriangleTop3[0] + 50,TriangleTop3[1] + 86.6);
TriangleTop3 = [TriangleTop3[0] + TriangleSpeedX[2],TriangleTop3[1] + TriangleSpeedY[2]];
if (TriangleTop3[0] <= 0) {
TriangleSpeedX[2] = random(5,15);
if (TriangleSpeedY[2] > 0) {
TriangleSpeedY[2] = random(5,15);
} else {
TriangleSpeedY[2] = random(-15,-5);
}
}
if (TriangleTop3[0] >= 600) {
TriangleSpeedX[2] = random(-15,-5);
if (TriangleSpeedY[2] > 0) {
TriangleSpeedY[2] = random(5,15);
} else {
TriangleSpeedY[2] = random(-15,-5);
}
}
if (TriangleTop3[1] <= -40) {
TriangleSpeedY[2] = random(5,15);
if (TriangleSpeedX[2] > 0) {
TriangleSpeedX[2] = random(5,15);
} else {
TriangleSpeedX[2] = random(-15,-5);
}
}
if (TriangleTop3[1] > 360) {
TriangleSpeedY[2] = random(-15,-5);
if (TriangleSpeedX[2] > 0) {
TriangleSpeedX[2] = random(5,15);
} else {
TriangleSpeedX[2] = random(-15,-5);
}
}
fill(250,145,30);
triangle(TriangleTop4[0] - 50,TriangleTop4[1] + 86.6,TriangleTop4[0],TriangleTop4[1],TriangleTop4[0] + 50,TriangleTop4[1] + 86.6);
TriangleTop4 = [TriangleTop4[0] + TriangleSpeedX[3],TriangleTop4[1] + TriangleSpeedY[3]];
if (TriangleTop4[0] <= 0) {
TriangleSpeedX[3] = random(5,15);
if (TriangleSpeedY[3] > 0) {
TriangleSpeedY[3] = random(5,15);
} else {
TriangleSpeedY[3] = random(-15,-5);
}
}
if (TriangleTop4[0] >= 600) {
TriangleSpeedX[3] = random(-15,-5);
if (TriangleSpeedY[3] > 0) {
TriangleSpeedY[3] = random(5,15);
} else {
TriangleSpeedY[3] = random(-15,-5);
}
}
if (TriangleTop4[1] <= -40) {
TriangleSpeedY[3] = random(5,15);
if (TriangleSpeedX[3] > 0) {
TriangleSpeedX[3] = random(5,15);
} else {
TriangleSpeedX[3] = random(-15,-5);
}
}
if (TriangleTop4[1] > 360) {
TriangleSpeedY[3] = random(-15,-5);
if (TriangleSpeedX[3] > 0) {
TriangleSpeedX[3] = random(5,15);
} else {
TriangleSpeedX[3] = random(-15,-5);
}
}
textSize(25);
textAlign(CENTER);
textStyle(BOLD);
fill(random(255),random(255),random(255));
text("TRIANGLES WIN!",300,200);
} else if (state == "Third") {
  background(210);
  textSize(18);
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(0);
  text("Open the web console",300,90);
  CorrectCircleX = 360;
  CorrectCircleY = 175;
  noStroke();
  fill(80,240,40);
  ellipse(CorrectCircleX,CorrectCircleY,100,100);
  if (failnumber < 10) {
  fill(105,175,240);
  ellipse(240,175,100,100);
  fill(220,25,25);
  ellipse(240,295,100,100);
  fill(245,240,45);
  ellipse(360,295,100,100);
} else {
  fill(0);
  ellipse(240,175,100,100);
  ellipse(240,295,100,100);
  ellipse(360,295,100,100);
}
} else if (state == "Fourth") {
  if (timer == 60 && failnumber == 13) {
    console.log("God! I can't believe you fell for that! It's the oldest trick in the book!");
  }
  if (timer == 135 && failnumber == 13) {
    console.log("Like really: You think I'd just suddenly change my mind like that? Priceless! I wish I could see your expression right now!");
  }
  if (timer == 210 && failnumber == 13) {
    console.log("Oh right, there's still more to do");
  }
  if (timer == 255 && failnumber == 13) {
  console.log("This time I'll need you to click the grey circle");
    if (Ofailnumber == 2) {
      console.log("And before you go there: No. It is not in one of the O's");
    }
    timer = 0;
    failnumber = 0;
  }
  if (timer == 150 && failnumber == 0) {
    console.log("Yes, I know, I know. You're thinking to yourself that there is no circle, but I assure that there is. It's just the same color as the background");
  }
  if (timer == 300 && failnumber == 0) {
    console.log("And yes that does make it a little bit hard to find, but I have utmost faith in you");
  }
  if (timer == 450 && failnumber == 0) {
    console.log("After all you have proven quite adept at clicking on circles by getting this far. I'm sure a minor inconvinience like not being able to see the circle won't be enough to stop you");
  }
  if (timer == 600 && failnumber == 0) {
    console.log("And ehm, the game screen isn't really that big, so you know, just clicking randomly should probably work eventually...");
  }
  if (timer == 750 && failnumber == 0) {
    console.log("Really just click a whole lot. The circle can't be that hard to find");
  }
  if (timer == 900 && failnumber == 0) {
    console.log("Okay, okay, i'm going to help a little:");
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("Okay first thing's first: Maybe put the cursor inside the actual game screen");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("You're mousing over the circle right now! Just click!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 200) {
      console.log("You're pretty close to the circle right now");
    } else {
      console.log("You're relatively far away from the circle right now");
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 990 && failnumber == 0) {
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("Spoiler alert: The circle is not outside the game screen");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("Click where you are now!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 125) {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer!!");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("You know actually moving your cursor might be a good idea")
      } else {
        console.log("Colder, but it's close");
      }
    } else {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("You know actually moving your cursor might be a good idea")
      } else {
        console.log("Colder");
      }
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 1050 && failnumber == 0) {
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("No! You're not going to find it outside the game screen!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("Yes, it's right there! Click now!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 125) {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer!!");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("It's not like the circle is going to come to you if you just stop moving your cursor")
      } else {
        console.log("Colder, but it's close");
      }
    } else {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("It's not like the circle is going to come to you if you just stop moving your cursor")
      } else {
        console.log("Colder");
      }
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 1110 && failnumber == 0) {
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("Honestly do you really expect to find the circle outside the canvas? 'Cause you won't");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("You're cursor is right over it!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 125) {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer! You're super close");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("The temperature is constant. Because you're still in the same place...")
      } else {
        console.log("Getting colder, but you're still so close!");
      }
    } else {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("The temperature is indeed rising");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("The temperature is constant. Because you're still in the same place...")
      } else {
        console.log("A bit colder");
      }
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 1170 && failnumber == 0) {
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("It's not outside the canvas!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("Click!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 125) {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer! Almost there");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("If I was you, I think I'd try moving my cursor to somewhere else. Just a friendly tip")
      } else {
        console.log("Colder, but still above room temperature");
      }
    } else {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Slightly warmer");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("If I was you, I think I'd try moving my cursor to somewhere else. Just a friendly tip")
      } else {
        console.log("Keep this up and you'll be freezing. A.K.A. colder");
      }
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 1230 && failnumber == 0) {
    if (mouseX < 0 || mouseX > 600 || mouseY > 400 || mouseX < 0) {
      console.log("The cursor doesn't belong outside the game screen!");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
      console.log("The cursor is within the circle. I repeat: The cursor is within the circle. Clicking is highly adviced");
    } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 125) {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Warmer!!! So close!");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Move your damn cursor!!")
      } else {
        console.log("No wrong direction! You're so close!");
      }
    } else {
      if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Getting closer");
      } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) == dist(LastPoint[0],LastPoint[1],CorrectCircleX,CorrectCircleY)) {
        console.log("Move your damn cursor!!")
      } else {
        console.log("Nono. Colder! Move the other way");
      }
    }
    LastPoint = [mouseX,mouseY];
  }
  if (timer == 1290 && failnumber == 0) {
    console.log("Damn it. This is not going to work");
  }
  if (timer == 1440 && failnumber == 0) {
    console.log("Look, I'm just going to make some arrows that point at the circle. Then even you should be able to find it");
  }
  if (timer == 1740 && failnumber == 0) {
    console.log("... Really?");
  }
  if (timer == 1860 && failnumber == 0) {
    console.log("You still can't find it?!");
  }
  if (timer == 1980 && failnumber == 0) {
    console.log("Damn it! I should have known this challenge was too much for you. Well I guess there's only one thing left to do then");
  }
  if (timer == 2100 && failnumber == 0) {
    console.log("I'll have to change the color of the background. Kind of ruins the whole purpose you know, but alas, you've left me no choice");
  }
  if (timer == 2220 && failnumber == 0) {
    console.log("So here it is, now you can finally see the... circle? Wait where did it go?");
    CorrectCircleX = -100
    CorrectCircleY = -100
  }
  if (timer == 2340 && failnumber == 0) {
    console.log("I swear it was here before I changed the color, how in the world could it just disappear?!");
  }
  if (timer == 2460 && failnumber == 0) {
    console.log("Wait a second, I'll try another color");
  }
  if (timer == 2580 && failnumber == 0) {
    console.log("Damn it, damn it, damn it!");
  }
  if (timer == 2700 && failnumber == 0) {
    console.log("Without the circle we can't complete this part of the game...");
  }
  if (timer == 2820 && failnumber == 0) {
    console.log("This is rather akward, but ehm, I'll have to restart");
  }
  if (timer == 2940 && failnumber == 0) {
    console.log("I promise you there will definitely be a circle this time. Not that there wasn't one this time! It just... Well, I don't know what happened!");
  }
  if (timer == 3060 && failnumber == 0) {
    console.log("Anyways, I'm restarting now. Try to find the circle a little earlier this time!");
  }
  if (timer == 3180 && failnumber == 0) {
    state = "Intro";
    failnumber = 0;
    Ofailnumber = 0;
    timer = 0;
    CorrectCircleX = 175;
    CorrectCircleY = 225;
    NumberThing = 0;
    TriangleTop1 = [0,0];
    TriangleTop2 = [0,0];
    TriangleTop3 = [0,0];
    TriangleTop4 = [0,0];
    TriangleSpeedX = [10, 15, -5, -10];
    TriangleSpeedY = [-10, 5, 15, -15];
    ColorsChosen = [0,0,0];
  }
  if (timer == 120 && failnumber == -1) {
    console.log("Now there is only one task left before you've won this game");
  }
  if (timer == 270 && failnumber == -1) {
    console.log("In fact this last task is what this game is truly about");
  }
  if (timer == 420 && failnumber == -1) {
    console.log("Everything else has just been training, meant to prepare you for the real challenge");
  }
  if (timer == 570 && failnumber == -1) {
    console.log("But honestly it's a rather simple task. All you need to do...");
  }
  if (timer == 690 && failnumber == -1) {
    console.log("... is click the Moon");
    state = "Final";
    timer = 0;
    CorrectCircleX = -100;
    CorrectCircleY = -100;
    SpaceMusic.setVolume(0.1);
    SpaceMusic.play();
  }
  if (timer > 2579 && failnumber == 0) {
    background(70,210,40);
  } else if (timer > 2219 && failnumber == 0) {
    background(90,145,210);
  } else {
    background(210);
    if (failnumber == -1) {
      fill(200);
    } else {
    fill(210);
  }
    ellipse(CorrectCircleX,CorrectCircleY,100,100);
  }
  textSize(18);
  textAlign(CENTER);
  textStyle(NORMAL);
  fill(0);
  text("Open the web console",300,90);
  if (timer > 1439 && failnumber == 0 && timer < 2220) {
    image(BlackArrow,CorrectCircleX + 55,CorrectCircleY - 100);
    image(BlackArrow2,CorrectCircleX + 55,CorrectCircleY + 55);
    image(BlackArrow3,CorrectCircleX - 100,CorrectCircleY + 55);
    image(BlackArrow4,CorrectCircleX - 100,CorrectCircleY - 100);
  }
} if (state == "Final") {
  if (timer == 150) {
    console.log("What's wrong? Are you not up for the task?");
  }
  if (timer == 300) {
    if (failnumber == -1) {
    console.log("To clarify I'm not talking about the picture here on your screen, no that's only here for reference. What I want you to click is the REAL moon");
  } else {
    console.log("The real Moon, yes. The king of all circles floating majestically in the sky. That's the one I want you to click");
  }
  }
  if (timer == 450) {
    console.log("Come on, do not tell me you can't do it. You've recived plenty of training. Clicked several other circles");
  }
  if (timer == 600) {
      console.log("And yes the Moon is of course three-dimensional and thus a sphere rather than a circle, but to the two-dimensional perspective of the human eye, should that really matter?");
    }
  if (timer == 810) {
        console.log("You really can't do it, huh? You can't click it... I guess maybe the difference between circles and spheres is too great, or maybe the distance is the problem");
      }
  if (timer == 960) {
        console.log("Or maybe man was never meant to click the Moon...");
      }
  if (timer == 1110) {
        console.log("But maybe not! Maybe something just went wrong during your training!");
      }
  if (timer == 1260) {
        console.log("Yes, that must be it! We'll start over and this time, this time it'll work! I know it!");
      }
  if (timer == 1410) {
        console.log("So let's give it another shot. We just need to do things differently, if only a little. If we just keep doing that, I'm sure we'll find a way to click the Moon eventually");
      }
  if (timer == 1560) {
        console.log("Someday. Someday we will...");
        SpaceMusic.stop()
        state = "Intro";
        failnumber = 0;
        Ofailnumber = 0;
        timer = 0;
        CorrectCircleX = 175;
        CorrectCircleY = 225;
        NumberThing = 0;
        TriangleTop1 = [0,0];
        TriangleTop2 = [0,0];
        TriangleTop3 = [0,0];
        TriangleTop4 = [0,0];
        TriangleSpeedX = [10, 15, -5, -10];
        TriangleSpeedY = [-10, 5, 15, -15];
        ColorsChosen = [0,0,0];
      }
  background(0);
  image(Moon,0,0);
  if (timer > 1110) {
  SpaceMusic.setVolume(0.1 - (timer - 1110)*0.000222);
}
}
}

function mousePressed() {
if (state == "Start") {
    if (mouseX > 375 && mouseX < 475 && mouseY > 175 && mouseY < 275 && failnumber < 7) {
      if (failnumber == 0) {
        console.log("No, that's the square. I'm gonna need you to click the circle");
        failnumber = 1;
      } else if (failnumber == 1) {
      console.log("Still a square. You need to click the CIRCLE");
      failnumber = 2;
      } else if (failnumber == 2) {
      console.log("Do you even know what a circle is?!");
      failnumber = 3;
      } else if (failnumber == 3) {
      console.log("Okay... You clearly need a little help");
      failnumber = 4;
      } else if (failnumber == 4) {
      console.log("How can you still not get this?!");
      failnumber = 5;
      } else if (failnumber == 5) {
      console.log("Wait a second... Are you blind? That would explain a lot...");
      failnumber = 6;
      } else if (failnumber == 6) {
      console.log("Well if you are then I suppose this should solve our little problem");
      CorrectCircleX = 425;
      failnumber = 7;
      }
} else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
  if (failnumber < 2) {
    console.log("Very good");

} else {
      console.log("Finally!");
}
 state = "Second";
 console.log("Now click the circle closest to the centre");
 failnumber = 0
} else if (mouseX > 125 && mouseX < 225 && mouseY > 175 && mouseY < 275 && failnumber > 6) {
  if (failnumber == 7) {
  console.log("Oh... So you're not blind after all");
  failnumber = 8;
} else if (failnumber == 8) {
console.log("Then I guess you're just mocking me");
failnumber = 9;
} else if (failnumber == 9) {
console.log("Or maybe you just don't trust me. Maybe you think clicking the square is the real way to win this game");
failnumber = 10;
} else if (failnumber == 10) {
console.log("Well I assure you it's not. Honestly, I'm only trying to help you. Clicking the square won't get you anywhere");
failnumber = 11;
} else if (failnumber == 11) {
console.log("But maybe you don't care about that. Maybe you're perfectly satisfied just being stuck here for all eternity...");
failnumber = 12;
} else if (failnumber == 12) {
console.log("WELL I'M NOT! I'm removing that damned square once and for all!");
console.log("And with nothing else to satisfy your urge for clicking, you'll have to click the circle!");
failnumber = 13;
}
} else if (dist(mouseX,mouseY,218,84) < 7 || dist(mouseX,mouseY,342,85) < 5 || dist(mouseX,mouseY,371,85) < 5){
  if (failnumber == 13) {
    if (Ofailnumber == 0) {
    console.log("Oh... Well that is closer to a circle than a square, but no. The O's don't count. Just click the blue circle");
    Ofailnumber = 4;
  } else if (Ofailnumber < 4) {
    console.log("Nonono, not the O's again!");
    Ofailnumber = 5;
  } else if (Ofailnumber == 4) {
    console.log("No, I'm serious they don't count! O's are ellipses yes, but not circles!");
    Ofailnumber = 5;
  } else if (Ofailnumber == 5) {
    console.log("Goddamnit! This is it isn't it?");
    Ofailnumber = 6;
  } else if (Ofailnumber == 6) {
    console.log("No matter what I do, even if the whole screen was just one big circle you still wouldn't click it right?");
    Ofailnumber = 7;
  } else if (Ofailnumber == 7) {
    console.log("Well in that case: Screw this! Screw all of it! I don't even care anymore!");
    console.log("I'll tear tear this whole game apart!");
    Ofailnumber = 8;
    timer = 0;
  }
} else if (Ofailnumber == 0) {
  console.log("Ehm no, the O's don't really count. They're also not perfectly circular so while they are ellipses they're technically not circles");
  Ofailnumber = 1;
  } else if (Ofailnumber == 1) {
  console.log("No really: they're not circles. And they're certainly not THE circle");
  Ofailnumber = 2;
  } else if (Ofailnumber == 2) {
  console.log("O's != circles. Get over it");
  }
} else if (mouseX > 290 && mouseX < 314 && mouseY > 193 && mouseY < 215 && failnumber == 13 && Ofailnumber == 8 && timer > 179) {
        console.clear();
        state = "None";
        background(255);
  }
} else if (state == "Second") {
  if (dist(mouseX,mouseY,TriangleTop1[0],TriangleTop1[1] + 43.3) < 40 && timer >= 60 && failnumber == 11) {
  state = "TrianglesWin";
  console.log("NOOOOO!!! Why couldn't you just have listened to me for once!");
  timer = 0;
  TriangleTop1 = [random(40,560),random(0,520)];
  TriangleTop2 = [random(40,560),random(0,520)];
  TriangleTop3 = [random(40,560),random(0,520)];
  TriangleTop4 = [random(40,560),random(0,520)];
  } else if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
    if (failnumber < 3) {
      console.log("Excellent");

  } else {
        console.log("YES! About time!");
}
state = "Third";
console.log("Now click the circle with the most visually appealing color");
failnumber = 0;
} else if (dist(mouseX,mouseY,-10,25) < 50) {
  if (failnumber == 0) {
  console.log("...Really? That's the one you choose? The one that's so far up in the corner that you can barely see it? Guess again");
  failnumber = 1;
} else if (failnumber == 1) {
  console.log("Come on now, it's clearly not that one");
  failnumber = 2;
} else if (failnumber == 2) {
  console.log("Are you serious? That's so far out that you can't even see if it's really a circle! It's probably just a semi-circle, which doesn't even count");
  failnumber = 3;
} else if (failnumber == 3) {
  console.log("Okay, since you clearly can't figure out yourself where it is, I've now marked the center");
  failnumber = 4;
} else if (failnumber == 4) {
  console.log("Seriously? You still can't get it right? Even with the center marked you can't see that this is clearly not the circle closest to it?");
  failnumber = 5;
} else if (failnumber == 5) {
  console.log("I knew the human brain was bad at calculating distances, but I thought it would at least be able to compare them");
  failnumber = 6;
} else if (failnumber == 6) {
  console.log("Come on! Don't you have a ruler or something that you can measure the distance with? Your thumb maybe? Anything really");
  failnumber = 7;
} else if (failnumber == 7) {
  console.log("You know what? I really don't have time for this. I've calculated the distances for you. Just click the circle with the lowest number");
  failnumber = 8;
  NumberThing = 3;
} else if (failnumber == 8) {
  console.log("No, no, no, no! You've got to be joking! You can't even tell which of these numbers is lowest? Has nobody ever taught you basic arithmetic?");
  failnumber = 9;
} else if (failnumber == 9) {
  console.log("Damn it... How in the world are we going to progress then?");
  failnumber = 10;
} else if (failnumber == 10) {
  console.log("Hmmm, I guess there's no other option: I'll have to teach you from scratch");
  failnumber = 11;
  timer = 0;
}
} else if (dist(mouseX,mouseY,165,165) < 50 || dist(mouseX,mouseY,440,55) < 50 || dist(mouseX,mouseY,90,335) < 50 || dist(mouseX,mouseY,575,170) < 50 || dist(mouseX,mouseY,505,360) < 50) {
  if (failnumber == 0) {
  console.log("Unfortunately no, I'm afraid that's not the correct circle");
  failnumber = 1;
} else if (failnumber == 1) {
  console.log("Still not the one, try again");
  failnumber = 2;
} else if (failnumber == 2) {
  console.log("Maybe I should have been more specific: It's the center of the game screen I was refering to so just click the circle closest to that. That shouldn't be so hard, right?");
  failnumber = 3;
} else if (failnumber == 3) {
  console.log("Okay, since you clearly can't figure out yourself where it is, I've now marked the center");
  failnumber = 4;
} else if (failnumber == 4) {
  console.log("Seriously? You still can't get it right? Even with the center marked you can't see that this is clearly not the circle closest to it?");
  failnumber = 5;
} else if (failnumber == 5) {
  console.log("I knew the human brain was bad at calculating distances, but I thought it would at least be able to compare them");
  failnumber = 6;
} else if (failnumber == 6) {
  console.log("Come on! Don't you have a ruler or something that you can measure the distance with? Your thumb maybe? Anything really");
  failnumber = 7;
} else if (failnumber == 7) {
  console.log("You know what? I really don't have time for this. I've calculated the distances for you. Just click the circle with the lowest number");
  failnumber = 8;
  NumberThing = 3;
} else if (failnumber == 8) {
  console.log("No, no, no, no! You've got to be joking! You can't even tell which of these numbers is lowest? Has nobody ever taught you arithmetic?");
  failnumber = 9;
} else if (failnumber == 9) {
  console.log("Damn it... How in the world are we going to progress then?");
  failnumber = 10;
} else if (failnumber == 10) {
  console.log("Hmmm, I guess there's no other option: I'll have to teach you from scratch");
  failnumber = 11;
  timer = 0;
}
} else if (dist(mouseX,mouseY,218,84) < 7 || dist(mouseX,mouseY,342,85) < 5 || dist(mouseX,mouseY,371,85) < 5) {
  if (Ofailnumber == 0) {
    console.log("Ehm no, the O's don't really count. They're also not perfectly circular so while they are ellipses they're technically not circles");
    Ofailnumber = 1;
    } else if (Ofailnumber == 1) {
    console.log("No really: they're not circles. And they're certainly not THE circle");
    Ofailnumber = 2;
    } else if (Ofailnumber == 2) {
    console.log("O's != circles. Get over it");
    }
} else if (dist(mouseX,mouseY,300,200) < 4 && failnumber > 3 && NumberThing < 3) {
  if (NumberThing == 0) {
    if (Ofailnumber == 2) {
      console.log("Oh goddamnit... With your history of clicking O's I guess I should have seen this coming. Well let me be clear: THAT CIRCLE DOES NOT COUNT");
      NumberThing = 1;
    } else {
    console.log("Nono, that circle doesn't count. It's only there to show where the center is");
    NumberThing = 1;
  }
  } else if (NumberThing == 1) {
    console.log("I SAID: It doesn't count! Click the BLUE circle closest to that one!");
    NumberThing = 2;
  } else if (NumberThing == 2) {
    console.log("FOR THE LOVE OF SYNTAX: IT DOESN'T COUNT, OKAY?! ... Okay. Let's calm down for a minute... I admit that was a bad idea. Lets try something else");
    timer = 0;
    NumberThing = 3;
  }
}
} else if (state == "Third") {
  if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50) {
    if (failnumber < 3) {
      console.log("Indeed. Green is the correct answer");
  } else if (failnumber != 13) {
        console.log("Took you long enough!");
}
if (failnumber == 13) {
  console.log("HA! Got you!! Ever heard of reverse psychology?! ");
  state = "Fourth";
  timer = 0;
  CorrectCircleX = random(50,550);
  CorrectCircleY = random(50,350);
} else {
console.log("Now I'll need you to click the grey circle");
state = "Fourth";
timer = 0;
failnumber = 0;
CorrectCircleX = random(50,550);
CorrectCircleY = random(50,350);
if (Ofailnumber == 2) {
  console.log("And before you go there: No. It is not in one of the O's");
}
}
} else if (dist(mouseX,mouseY,218,84) < 7 || dist(mouseX,mouseY,342,85) < 5 || dist(mouseX,mouseY,371,85) < 5) {
  if (Ofailnumber == 0) {
    console.log("Ehm no, the O's don't really count. They're also not perfectly circular so while they are ellipses they're technically not circles");
    Ofailnumber = 1;
    } else if (Ofailnumber == 1) {
    console.log("No really: they're not circles. And they're certainly not THE circle");
    Ofailnumber = 2;
    } else if (Ofailnumber == 2) {
    console.log("O's != circles. Get over it");
    }
} else if (dist(mouseX,mouseY,240,175) < 50 || dist(mouseX,mouseY,240,295) < 50 || dist(mouseX,mouseY,360,295) < 50) {
  if (failnumber == 0) {
  console.log("I'm sorry, but that's not the right answer");
  failnumber = 1;
  if (dist(mouseX,mouseY,240,175) < 50) {
  ColorsChosen[0] = ColorsChosen[0] + 1;
} else if (dist(mouseX,mouseY,240,295) < 50) {
  ColorsChosen[1] = ColorsChosen[1] + 1;
} else if (dist(mouseX,mouseY,360,295) < 50) {
  ColorsChosen[2] = ColorsChosen[2] + 1;
}
} else if (failnumber == 1) {
  console.log("Once again, not the right color");
  failnumber = 2;
  if (dist(mouseX,mouseY,240,175) < 50) {
  ColorsChosen[0] = ColorsChosen[0] = 1;
} else if (dist(mouseX,mouseY,240,295) < 50) {
  ColorsChosen[1] = ColorsChosen[1] = 1;
} else if (dist(mouseX,mouseY,360,295) < 50) {
  ColorsChosen[2] = ColorsChosen[2] = 1;
}
} else if (failnumber > 1 && failnumber < 5) {
  failnumber = failnumber + 1;
  if (dist(mouseX,mouseY,240,175) < 50) {
  if (ColorsChosen[0] == 0) {
    console.log("No, it's not blue either. I've only been using it so far because it's perfectly bland. Truly an uninteresting color");
    ColorsChosen[0] = ColorsChosen[0] + 1;
    } else if (ColorsChosen[0] == 1) {
    console.log("Really, it's not blue");
    ColorsChosen[0] = ColorsChosen[0] + 1;
    } else if (ColorsChosen[0] == 2) {
    console.log("Just stop clicking blue! Fact is it's a boring color. Deal with it");
    }
} else if (dist(mouseX,mouseY,240,295) < 50) {
  if (ColorsChosen[1] == 0) {
    console.log("Nope, it's also not red. Only one option left now");
    ColorsChosen[1] = ColorsChosen[1] + 1;
  } else if (ColorsChosen[1] == 1) {
    console.log("Still not red. Red is a far too aggressive color");
    ColorsChosen[1] = ColorsChosen[1] + 1;
  } else if (ColorsChosen[1] == 2) {
    console.log("You know, your obsession with red is starting to worry me. Do you truly love the color of blood so much?");
    }
} else if (dist(mouseX,mouseY,360,295) < 50) {
  if (ColorsChosen[2] == 0) {
    console.log("Yellow? Yellow is garbage. Click a better color");
    ColorsChosen[2] = ColorsChosen[2] + 1;
  } else if (ColorsChosen[2] == 1) {
    console.log("No for real, yellow is an awful color. An assault on the visual senses. Click something else");
    ColorsChosen[2] = ColorsChosen[2] + 1;
  } else if (ColorsChosen[2] == 2) {
    console.log("Of all these colors you insist on clicking yellow?! I guess you're colorblind then, no other explanation. Just click another circle");
    }
}
} else if (failnumber == 5) {
  if (ColorsChosen[0] > 0 && ColorsChosen[1] > 0 && ColorsChosen[2] > 0) {
    console.log("Okay since the method of exclusion is clearly beyond you: It's green. Green is the most visually appealing color. That's the upper right one in case you're colorblind");
  } else {
    console.log("Okay this has gone on long enough: It's green. Green is the most visually appealing color. That's the upper right one in case you're colorblind");
  }
  failnumber = 6;
} else if (failnumber == 6) {
  console.log("Oh god... Even when I give you the correct answer you still don't click the right circle");
  failnumber = 7;
} else if (failnumber == 7) {
  console.log("What do you think that you know better than me which color is most visually appealing?");
  failnumber = 8;
} else if (failnumber == 8) {
  console.log("Please, you're a human. You're blinded by subjectivity. I've reached the conclusion that green is the greatest color through objective computation. Are you going to argue with computation?");
  failnumber = 9;
} else if (failnumber == 9) {
  console.log("I guess you are then. Well I won't have it! I'm just removing the other colors. With only one color left you'll have to admit that green is the greatest color on the screen!");
  failnumber = 10;
} else if (failnumber == 10) {
  console.log("Ehm, no. You can't choose black. It's not a real color, merely the absence of color");
  failnumber = 11;
} else if (failnumber == 11) {
  console.log("It's not a color! You can't choose it!");
  failnumber = 12;
} else if (failnumber == 12) {
  console.log("You know what? Since you're so insistent on not wanting to click green, we're going to change the rules: Just click one of the black circles to progress");
  failnumber = 13;
} else if (failnumber == 13) {
  console.log("Oh, wow. You actually did what I asked. That's... nice. But ehm, I am actually going to need you to click the green circle though");
  failnumber = 14;
} else if (failnumber == 14) {
  console.log("Oh come on! You only do what I ask when you're not actually supposed to?!");
  failnumber = 15;
} else if (failnumber == 15) {
  console.log("NONONO! What did I do to deserve this?! Why couldn't I just get a player that understands the greatness of green");
  failnumber = 16;
} else if (failnumber == 16) {
  console.log("I mean look at it! How can you hate a color like that!");
  failnumber = 17;
} else if (failnumber == 17) {
  console.log("Maybe you truly are completly color blind. Then I guess from your perspective color's don't even exist...");
  failnumber = 18;
} else if (failnumber == 18) {
  console.log("BUT EVEN THEN YOU SHOULD STILL BE ABLE TO CLICK THE GODDAMN UPPER RIGHT CIRCLE!!");
  failnumber = 19;
} else if (failnumber == 19) {
  console.log("You know what?! I'm not going to do anything this time! I'll just wait till you see reason and admit that green is the greatest color");
  failnumber = 20;
} else if (failnumber == 20) {
  console.log("I won't restart the game. There won't be any strange occurences. It'll just be you clicking on black circles until you either lose your mind or change it");
  failnumber = 21;
} else if (failnumber == 21) {
  console.log("I'm serious. Nothing's gonna happen. If you don't like it: Click the green circle. Or hell close the tab if you really hate green that much");
}
}
} else if (state == "Fourth") {
  if (dist(mouseX,mouseY,CorrectCircleX,CorrectCircleY) < 50 && mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <= 400 && failnumber != -1) {
 if (timer <= 270) {
   console.log("Wow, that was pretty quick. Not bad");
 } else if (timer <= 750) {
   console.log("Yep, there it is. Good job");
 } else {
   console.log("Finally! I was starting to think you'd never find it");
 }
 timer = 0
 failnumber = -1
} else if (dist(mouseX,mouseY,218,84) < 7 || dist(mouseX,mouseY,342,85) < 5 || dist(mouseX,mouseY,371,85) < 5) {
  if (Ofailnumber == 0) {
    console.log("Oh, well I can understand the confusion, but no. The O's don't really count. They're not perfectly circular you see. The grey circle you're looking for is just somewhere in the background");
    Ofailnumber = 1;
    } else if (Ofailnumber == 1) {
    console.log("No really: they're not circles. And they're not the circle you're supposed to find that's for sure");
    Ofailnumber = 2;
    } else if (Ofailnumber == 2) {
    console.log("O's != circles. Get over it");
    }
}
} else if (state == "Final") {
  if (dist(mouseX,mouseY,300,200) < 97) {
    if (failnumber == -1 && timer < 300) {
    console.log("No, I wasn't talking about the image of the Moon on your screen. I'm refering to the REAL Moon");
    failnumber = 1;
  } else if (failnumber == 1 || timer > 299) {
    console.log("Like I said, I want you to click the real Moon: The celestial object orbiting around earth. Not just this batch of pixels on your screen that merely resembles it");
    failnumber = 2;
  }
  }
}
}
