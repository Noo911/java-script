let moonY = 480;
let stars = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 60; i++) {
    stars.push({ x: random(width), y: random(250) });
  }
}

function draw() {
  if (moonY > 60) {
    moonY -= 1;
  }

  let light = constrain(map(moonY, 300, 60, 0, 1), 0, 1);
  
  background(lerpColor(color(5, 5, 25), color("lightblue"), light));
  
  noStroke();
  fill(255, 255, 255, 255 * (1 - light));
  for (let s of stars) {
    circle(s.x, s.y, 2);
  }
  
  for (let i = 5; i > 0; i--) {
    fill(255, 255, 220, 12);
    circle(500, moonY, 100 + i * 40);
  }

  
  fill(255, 255, 230);
  circle(500, moonY, 100);

  fill(lerpColor(color(15, 15, 30), color("#808080"), light));
  triangle(150, 400, 520, 253, 800, 400);
  stroke(1);
  triangle(-100, 400, 150, 200, 400, 400);
  stroke(1);
  triangle(200, 400, 450, 250, 800, 400);


  tree();
}

function tree(){
fill(80,30,20);
rect(200,320,20,40);
fill(20,60,5);
triangle(180,320,210,240,240,320)
}
