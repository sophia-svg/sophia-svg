let cameraZ = 0;
let boxSpacing = 200;
let hallwayLength = 50;
let hallwayWidth = 400;
let hallwayHeight = 200;
let pillarSize = 30;
let pillarHeight = hallwayHeight * 0.8;

function setup() {
  createCanvas(800, 400, WEBGL);
  noStroke();
}

function draw() {
  background(15, 13, 5);

  // Move camera forward
  camera(0, 0, cameraZ + 600, 0, 0, cameraZ - 200, 0, 1, 0);
  cameraZ -= 2; // Slowly move forward

  // Dim yellow point light near camera
  pointLight(180, 160, 40, 0, -50, cameraZ + 250); // warm yellow

  // Repeat hallway
  for (let i = 0; i < hallwayLength; i++) {
    let z = i * -boxSpacing;
    
    // Floor
    push();
    fill(30, 27, 12);
    translate(0, hallwayHeight / 2, z);
    box(hallwayWidth, 20, boxSpacing);
    pop();

    // Ceiling
    push();
    fill(20, 20, 5);
    translate(0, -hallwayHeight / 2, z);
    box(hallwayWidth, 20, boxSpacing);
    pop();

    // Left wall
    push();
    fill(58, 52, 25);
    translate(-hallwayWidth / 2, 0, z);
    box(20, hallwayHeight, boxSpacing);
    pop();

    // Right wall
    push();
    fill(58, 52, 25);
    translate(hallwayWidth / 2, 0, z);
    box(20, hallwayHeight, boxSpacing);
    pop();

    // Pillars on both sides
    if (i % 2 === 0) {
      // Left side pillar
      push();
      fill(100, 90, 30, 220);
      translate(-hallwayWidth / 2 + 30, 0, z - boxSpacing / 2);
      box(pillarSize, pillarHeight, pillarSize);
      pop();

      // Right side pillar
      push();
      fill(110, 100, 17, 220);
      translate(hallwayWidth / 2 - 30, 0, z - boxSpacing / 2);
      box(pillarSize, pillarHeight, pillarSize);
      pop();

      // Ceiling beam connecting pillars
      push();
      fill(70, 65, 35, 200);
      translate(0, -hallwayHeight / 2 + 15, z - boxSpacing / 2);
      box(hallwayWidth - 100, 15, pillarSize + 10);
      pop();
    }
  }
}
