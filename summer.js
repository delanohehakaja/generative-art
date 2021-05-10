var cloud1 = 50;
var cloud2 = 100;
var cloud3 = 100;

function setup() {
  createCanvas(400,400);
}

function draw () {
  background('blue');
  
  fill('yellow');
  ellipse(300,100,100,100);
  makeCloud(cloud1-50, cloud2 +20, cloud3);
  makeCloud(cloud1 + 100, cloud2 + 100, cloud3 + 100);
  makeCloud(cloud1 +200, cloud2 -20, cloud3);
  cloud1+=0.1;
}

function makeCloud(cloud1, cloud2, cloud3) {
  fill(250)
  noStroke();
  ellipse(cloud1, cloud2, 80, 50);
  ellipse(cloud1 + 20, cloud2 + 20, 80, 50);
  ellipse(cloud1 - 20, cloud2 + 20, 80, 50);
}