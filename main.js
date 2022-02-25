rightWristScore=0;
status_of_song2="";

leftWristScore=0;
status_of_song1="";

rightWristx=0;
rightWristy=0;
leftWristx=0;
leftWristy=0
song1="";
song2="";
function setup(){
canvas=createCanvas(600,500)
canvas.center()

video=createCapture(VIDEO)
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('poseNet',gotResult)
}
function modelLoaded(){
    console.log("model loaded!");
}
function draw(){
    image(video,0,0,600,500)
    fill("red");
    stroke("red");
    song1.isPlaying();
    song2.isPlaying();

    if(leftWristScore>0.2){
    circle(leftWristx,leftWristy,20)
    song1.stop()
    if(song1==false){
        song1.play()
        document.getElementById("song").innerHTML="Song Playing:- savage love"
    }
    }
    if(rightWristScore>0.2){
        circle(rightWristx,rightWristy,20)
        song1.stop()
        if(song2==false){
            song2.play()
            document.getElementById("song").innerHTML="Song Playing:- Faded"
        }
    }

}
function preload(){
    song1=loadSound("song1.mp3")
    song2=loadSound("song2.mp3")
}
function gotResult(result){
    if(result.length>0){
    rightWristx=result[0].pose.rightWrist.x;
    rightWristy=result[0].pose.rightWrist.y;
    leftWristx=result[0].pose.rightWrist.x;
    leftWristy=result[0].pose.rightWrist.y;
    result[0].pose.keypoints[9].score
    result[0].pose.keypoints[10].score
    }
}