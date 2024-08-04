let x, y, r, g, b, a, z, spawnX, spawnY;

let lastTime = 0;
let lastTime2 = 0;
let interval = 1500;
let interval2 = 3000;

let ranX;
let ranY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  ranX = random(width);
  ranY = random(height);

}

function draw() {
  background(0)
  rectMode(CENTER)
  blendMode(DIFFERENCE)

  let currentTime = millis();
  if (currentTime - lastTime >= interval) {
    ranX = random(width);
    ranY = random(height);
    lastTime = currentTime;
  }
  let currentTime2 = millis();
  if (currentTime2 - lastTime2 >= interval2) {
    background(random(255), random(255), random(255))
    lastTime2 = currentTime2;
  }


  spawnX = random(ranX + 200, ranX - 200);
  spawnY = random(ranY + 200, ranY - 200);
  x = random(ranX, spawnX);
  y = random(ranY, spawnY);

  ranX = x;
  ranY = y;

  z = random(200);
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(200, 255)
  let ranSize = random(10, 200);
  if (ranSize > 197) {
    ranSize += 300;
  }

  ellipseMode(CENTER)
  noStroke()
  fill(r, g, b)
  ellipse(ranX, ranY, ranSize);
}

function mousePressed() {
}

