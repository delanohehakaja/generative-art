let x = 25;
let y = -25;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    //snow
    if (mouseIsPressed) {
        noStroke();
        fill('white');
        ellipse(50, y, 20);
        ellipse(100, y + 80, 15);
        ellipse(150, y - 50, 15);
        ellipse(250, y + 10, 20);
        ellipse(300, y + 100, 15);
        ellipse(75, y - 200, 20);
        ellipse(145, y - 280, 15);
        ellipse(200, y - 160, 15);
        ellipse(275, y - 110, 20);
        ellipse(325, y - 200, 15);
        y++;
    }

    //rain
    if (mouseX < 300) {
        noStroke();
        fill('darkgrey');
        rect(50, y, 2, 10);
        rect(100, y + 80, 2, 10);
        rect(150, y - 30, 2, 10);
        rect(200, y + 50, 2, 10);
        rect(250, y + 80, 2, 10);
        rect(300, y - 30, 2, 10);
        rect(350, y + 50, 2, 10);
        rect(75, y - 80, 2, 10);
        rect(125, y - 100, 2, 10);
        rect(175, y - 160, 2, 10);
        rect(225, y - 180, 2, 10);
        rect(275, y - 150, 2, 10);
        rect(325, y - 130, 2, 10);
        rect(375, y - 150, 2, 10);
        y++;
    }

    //loop
    if (y > height) {
        y = 0;
    }

    //summer
    if (keyIsPressed) {
        background('blue');
        fill('yellow');
        ellipse(45, 45, 80);
        fill('white');
        ellipse(x + 150, 60, 100, 50);
        ellipse(x + 200, 60, 100, 50);
        ellipse(x + 175, 40, 80, 50);
        ellipse(x + 350, 50, 100, 50);
        ellipse(x + 400, 60, 100, 50);
        x++;
    }

    if (x > width) {
        x = -400;
    }
}

function speed() {
    y.speed(2);
}
