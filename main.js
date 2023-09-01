status = "";
video = "";
objects = [];



function preload() {



}

function setup() {

    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    

}

function start() {

objectDetection = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "detecting objects";
document.getElementById("input").value = object_name;

}

function modelLoaded() {

console.log("Model Loaded");
status = "true";


}

function gotResult(error, results) {

if(error) {

console.log(error);

} 

else {

console.log(results);
objects = results;

}


}

function draw() {

image(video, 0, 0, 480, 380);

if(status != "" ) {
    objectDetector.detect(video, gotResult);
    for (i=0; i < objects.length; i++ ) {

        fill("#bf3013");
        conf = floor(objects[i].confidence * 100) + "%";
        text(objects[i].label + " " + conf, objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#bf3013");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        
        if(objects[i].label == object_name) {
            
            
            document.getElementById("status").innerHTML = object_name + " found";
           
            
            }
            
       
        
        
        
        }
}


}