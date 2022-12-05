noseX=0;
noseY=0;
difference = 0;
rightWristX=0;
leftWristX=0;
function setup () {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet is Initialized!');
}
function draw(){
    background('#6C912C2');
    document.getElementById("font_size").innerHTML = "Font Size Of the text Will Be="+ difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50,400);
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
