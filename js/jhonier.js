let img;

function preload() {
img = loadImage('assets/nave.png');
img2 = loadImage('assets/pixel.png');
}

function setup() {
  createCanvas(1280, 720);

  // Draw the image.
  image(img, 500, 0,100,100);
image(img2,1000,30,100,100)
  describe(
    'A white circle on a brick wall. The circle follows the mouse as the user moves, leaving a trail.'
  );
}

function draw() {
  // Style the circle.
 // noStroke();

  // Draw the circle.
  //circle(mouseX, mouseY, 10);
}
