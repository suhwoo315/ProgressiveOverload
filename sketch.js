let phase = 0;
let stage1;

let video;
let poseNet;
let poses = [];

let num = 10;
let x_values = [];
let y_values = [];
let x_mean = 0;
let y_mean = 0;

function preload(){
  stage1 = new Stage1();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);

  // poseNet = ml5.poseNet(video, modelReady);
  poseNet = ml5.poseNet(video);
  poseNet.on("pose", function (results) {
    poses = results;
  });

  video.hide();
}

function draw() {
  background(100);
  track();
}

// function modelReady() {
//   select("#status").html("Model Loaded");
// }

function track(){
  let result = [];

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (j == 10) { // 
        if (keypoint.score > 0.3) {
          if (x_values.length < num) {
            x_values.push(keypoint.position.x);
            y_values.push(keypoint.position.y);
          }

          if (x_values.length == num) {
            x_mean = 0;
            for (let i = 0; i < num; i++) x_mean += x_values[i];
            x_mean /= num;
            x_values = [];

            y_mean = 0;
            for (let i = 0; i < num; i++) y_mean += y_values[i];
            y_mean /= num;
            y_values = [];
          }
        }
      }
    }
  }

  return result;
}