img=""
status=""

function preload() {
img = loadImage("bedroom.jpg");
}

function modelLoaded() {

    objectDetector.detect(img, gotResult);
    console.log("model loaded!");
    status = true;
}

function gotResult() {

    if (error) {
        console.log(error);
    }
    console.log(result);
}

function setup() {

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDector = ml5.objectDetector('CocoSsd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting object";  
}

function draw() {

    image(img , 0, 0, 640, 420);
    fill("#FF0000");
    text("bedroom" , 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill('#FF0000');
    text("tv", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 320, 120);
}