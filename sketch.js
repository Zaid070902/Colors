let x, y, r, g, b, a, z, spawnX, spawnY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);

}

function draw() {
  background(0)
  rectMode(CENTER)
  blendMode(DIFFERENCE)

  spawnX = random(mouseX + 200, mouseX - 200);
  spawnY = random(mouseY + 200, mouseY - 200);
  x = random(mouseX, spawnX);
  y = random(mouseY, spawnY);

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
  ellipse(x, y, ranSize);
}

function mousePressed() {
  background(random(255), random(255), random(255))
}

