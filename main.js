img="";
status="";
objects="";

function preload() {
img = loadImage("bedroom.jpg");
}

function modelLoaded() {

    objectDetector.detect(img, gotResult);
    console.log("model loaded!");
    status = true;
}

function gotResult(error,results) {

    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('CocoSsd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting object";  
}

function draw() {

    image(img , 0, 0, 640, 420);
    
    if(status != "") {

        for (i = 0; i < objects.length; i++) 
        {
            document.getElementById("status").innerHTML = "Status : Object Dectected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 20, objects[i].y + 20);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}