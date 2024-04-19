noseX = 0;
noseY = 0;

difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(450,450);
    canvas.position(590,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function draw() {
    background('#ffb6c1');
    document.getElementById("text_sides").innerHTML = "Width and Height of text will be = " + difference + "px";
    fill('#800080');
    stroke('#800080');
    text("Grace",noseX,noseY);
    textSize(difference);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
}
