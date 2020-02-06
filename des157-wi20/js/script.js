function setup(){
    var myCanvas = createCanvas(1100, 250);
    frameRate(8);
    noStroke();
    background(225, 225, 225);
    myCanvas.parent(mySketch);
}

function draw(){
    if(mouseIsPressed){
        fill(225);
    }
    else {
        fill(random(225),random(225),random(225), random(225));
    }
    var circSize = random(200);
    ellipse(mouseX, mouseY, circSize, circSize);
}