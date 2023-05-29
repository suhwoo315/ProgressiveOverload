let phase = 2;
let scene = 0;

let tutorial1;
let stage1;

let video;
let poseNet;
let poses = [];

let tracking_num = 5;
let leftWristValues = [];
let rightWristValues = [];
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;

function preload(){
  tutorial1 = new Tutorial1();
  stage1 = new Stage1();

  leftWristValues[0] = [];
  leftWristValues[1] = [];
  rightWristValues[0] = [];
  rightWristValues[1] = [];
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video);
  poseNet.on("pose", function (results) {
    poses = results;
  });

  video.hide();
}

function draw() {
  if (phase == 2){
    if (scene == 0){ // tutorial1
      tutorial1.display();
      if (tutorial1.checkKeyboard()){
        if (tutorial1.cut < tutorial1.dialogue.length - 1) tutorial1.increase();
        else scene++;
      }
    }
    else if (scene == 1){ // stage1
      track();
      stage1.check(leftWristY, rightWristY);
      stage1.display();
    }
  }
}

// function keyPressed(){
//   console.log("pressed");
//   if (keyCode === ENTER){
//     if (phase == 2){
//       if (scene == 0){ // tutorial1
//         tutorial1.increase();
//       }
//       else if (scene == 1){ // stage1
//         //
//       }
//     }
//   }
// }

function track(){
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let leftWrist = pose.keypoints[9];
    let rightWrist = pose.keypoints[10];

    if (leftWrist.score > 0.3){
      if (leftWristValues[0].length < tracking_num) {
        leftWristValues[0].push(leftWrist.position.x);
        leftWristValues[1].push(leftWrist.position.y);
      }

      if (leftWristValues[0].length == tracking_num) {
        leftWristX = 0;
        for (let i = 0; i < tracking_num; i++) leftWristX += leftWristValues[0][i];
        leftWristX /= tracking_num;
        leftWristValues[0] = [];

        leftWristY = 0;
        for (let i = 0; i < tracking_num; i++) leftWristY += leftWristValues[1][i];
        leftWristY /= tracking_num;
        leftWristValues[1] = [];
      }
    }

    if (rightWrist.score > 0.3){
      if (rightWristValues[0].length < tracking_num) {
        rightWristValues[0].push(rightWrist.position.x);
        rightWristValues[1].push(rightWrist.position.y);
      }

      if (rightWristValues[0].length == tracking_num) {
        rightWristX = 0;
        for (let i = 0; i < tracking_num; i++) rightWristX += rightWristValues[0][i];
        rightWristX /= tracking_num;
        rightWristValues[0] = [];

        rightWristY = 0;
        for (let i = 0; i < tracking_num; i++) rightWristY += rightWristValues[1][i];
        rightWristY /= tracking_num;
        rightWristValues[1] = [];
      }
    }
  }
}