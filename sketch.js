/* 👇 Start writing your p5.js code here */

var rain = [];


function setup() {
  createCanvas(400, 400);
  for ( var i = 0; i < 100; i++) {
    rain [i] = new Rain;
  }
}

function draw() {
  background(220);
  for ( var i = 0; i < 100; i++) {
  rain[i].show();
  rain[i].down();
  }
}

function Rain() {
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.show = function () {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 2, 10);
  }
  this.down = function() {
    this.speed = random(5,20);
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }
}