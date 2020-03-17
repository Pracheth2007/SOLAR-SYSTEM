var sun1;



function setup() {
  createCanvas(800,400);
  
  sun1 = new sun(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  sun1.display();
}