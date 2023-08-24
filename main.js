status = "";

function setup(){

canvas = createCanvas(480, 480);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}


function start() {

    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "detecting objects";
    }

    
function modelLoaded() {

    console.log("Model Loaded");
    status = "true";
}

function draw() {

image(video, 0, 0, 480, 480);

}