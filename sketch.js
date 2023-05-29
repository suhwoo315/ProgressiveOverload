let stage1;

function preload(){
  stage1 = new Stage1();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  stage1.display();
}