/* 
 * 게임의 전체 flow를 관리한다
 * 게임에서 사용되는 단계를 관리한다
 * 게임의 각 단계에서 사용되는 asset을 관리한다
 * bodytracking 함수/변수를 제공한다
*/





// 게임 단계 - phase, scene, cut(각 클래스 안에서 다룸)
let phase = 1;
let scene = 0;

// phase0의 클래스 생성 - start
let gameTitle;
let gameIntro;

// phase1의 클래스 생성 - dumbbell curl
let map1;
let story1;
let tutorial1;
let stage1;

// phase2의 클래스 생성 - reverse curl
let map2;
let story2;
let tutorial2;
let stage2;

// phase3의 클래스 생성 - overhead press
let map3;
let story3;
let tutorial3;
let stage3;

// phase4의 클래스 생성 - boss stage
let map4;
let story4;
let tutorial4;
let stage4;

// phase의 클래스 생성 - end
let gameOutro;





// 각 단계에 필요한 asset
//





// bodytracking 관련 변수
let video;
let poseNet;
let poses = [];
let tracking_num = 5;
let leftWristValues = [];
let rightWristValues = [];

// 손목의 위치 변수 - 이 변수들을 사용해서 플레이어의 위치 확인
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;





// 각 단계의 클래스 및 변수 초기화
function preload(){
  tutorial1 = new Tutorial1();
  stage1 = new Stage1();

  leftWristValues[0] = [];
  leftWristValues[1] = [];
  rightWristValues[0] = [];
  rightWristValues[1] = [];
}

// 기본 설정
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

// phase, scene, cut에 따서 실행해야 하는 함수를 부른다
function draw() {
  switch(phase){
    case 0:
    case 1:
      if (scene == 0){ // tutorial1
        tutorial1.display();
      }
      else if (scene == 1){ // stage1
        track();
        stage1.check(leftWristY, rightWristY);
        stage1.display();
      }
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    default:
  }
}

// ENTER 키를 누를 때, 다음 단계로 넘어간다
function keyPressed(){
  if (keyCode === ENTER){
    switch(phase){
      case 0:
      case 1:
        if (scene == 0){ // tutorial1
          if (tutorial1.getCut() < tutorial1.getMaxCut()){
            tutorial1.increaseCut();
          }
          else {
            scene++;
          }
        }
        else if (scene == 1){ // stage1
          //
        }
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      default:
    }
  }
}

// bodytracking - 손목의 위치 변수에 플레이어의 현재 위치를 저장한다
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