difference = 0;
rightWristX = 0;
lefttWristX = 0;


function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#FF0000');

    textSize(difference);
    fill('#000000');
    text('Change my size.', 230, 230);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results) 
{

    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX "+ rightWristX + " difference = " + difference);
    }
}
