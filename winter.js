var snow = [];


function setup() {
  createCanvas(400, 400);
  for ( var i = 0; i < 100; i++) {
    snow [i] = new Snow;
  }
}

function draw() {
  background('black');
  for ( var i = 0; i < 100; i++) {
  snow[i].show();
  snow[i].down();
  }
}

function Snow() {
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.show = function () {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 12, 10);
  }
  this.down = function() {
    this.speed = random(3,5);
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }
}