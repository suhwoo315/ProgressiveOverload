/* 
 * 게임의 전체 flow를 관리한다
 * 게임에서 사용되는 단계를 관리한다
 * 게임의 각 단계에서 사용되는 asset을 관리한다
 * bodytracking 함수/변수를 제공한다
*/




// 게임 단계 - phase, scene, cut(각 클래스 안에서 다룸)
let phase = 0;
let scene = 0;

// phase0의 클래스 - start
let gameTitle;
let gameIntro;

// phase1의 클래스 - dumbbell curl
let map1;
let story1;
let tutorial1;
let stage1;
let clear1;

// phase2의 클래스 - reverse curl
let map2;
let story2;
let tutorial2;
let stage2;
let clear2;

// phase3의 클래스 - overhead press
let map3;
let story3;
let tutorial3;
let stage3;
let clear3;

// phase4의 클래스 - boss stage
let map4;
let story4;
let tutorial4;
let stage4;

// phase5의 클래스 - end
let gameOutro;


// asset - 전체
let ui = [];
let max = [];
let coach = [];
let bgm = [];

// asset - phase0
let gameTitle_bg = [];
let gameTitle_ui = [];
let gameIntro_bg = [];
let gameIntro_ui = [];

// asset - phase1 dumbbell curl
let map1_bg = [];
let map1_chr = [];
let story1_bg = [];
let story1_ui = [];
let stage1_bg = [];
let stage1_chr = [];
let stage1_sil = [];
let stage1_ui = [];
let clear1_bg = [];

// asset - phase2 reverse curl
let map2_bg = [];
let map2_chr = [];
let story2_bg = [];
let stage2_bg = [];
let stage2_chr = [];
let stage2_sil = [];
let stage2_ui = [];
let clear2_bg = [];

// asset - phase3 overhead press
let map3_bg = [];
let map3_chr = [];
let story3_bg = [];
let stage3_bg = [];
let stage3_chr = [];
let stage3_sil = [];
let stage3_ui = [];
let clear3_bg = [];

// asset - phase4 boss stage
let map4_bg = [];
let map4_chr = [];
let story4_bg = [];
let tutorial4_bg = [];
let tutorial4_chr_defend = [];
let tutorial4_chr_kick = [];
let tutorial4_chr_punch = [];
let tutorial4_sil = [];
let tutorial4_ui = [];
let stage4_bg = [];
let stage4_chr_boss_attack = [];
let stage4_chr_boss_default = [];
let stage4_chr_boss_defend = [];
let stage4_chr_max_default = [];
let stage4_chr_max_defend = [];
let stage4_chr_max_kick = [];
let stage4_chr_max_punch = [];
let stage4_sil = [];
let stage4_ui = [];
let clear4_bg = [];
let clear4_ui = [];


// asset - phase5 gameOutro

// asset - exit
let exit = false;


// bodytracking 관련 변수
let video;
let poseNet;
let poses = [];
let tracking_num = 10;
let leftWristValues = [];
let rightWristValues = [];
let leftShoulderValues = [];
let rightShoulderValues = [];

// 손목의 위치 변수 - 이 변수들을 사용해서 플레이어의 위치 확인
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;
let leftShoulderX = 0;
let leftShoulderY = 0;
let rightShoulderX = 0;
let rightShoulderY = 0;

// 각 운동의 위, 아래 바운더리
let dumbbellCurlUpper = 6/10;
let dumbbellCurlLower = 8/10;
let reverseCurlUpper = 6/10;
let reverseCurlLower = 8/10;
let pressUpper = 3/10;
let pressLower = 4.8/10;


// 각 단계의 클래스 생성
// asset 불러오기
// 변수 초기화
function preload(){

  //phase0
  gameTitle = new GameTitle(); 
  gameIntro = new GameIntro();
  //phase1
  map1 = new Map1();
  story1 = new Story1();
  tutorial1 = new Tutorial1();
  stage1 = new Stage1();
  clear1 = new Clear1();
  //phase2
  //phase3
  //phase4
  stage4 = new Stage4();
  //phase5



  //sketch
  //bgm
  for(let i=0; i<1; i++){
    bgm[i] = loadImage('assets/sketch/bgm/' + i + '.png');
  }

  //boss v
  for(let i=0; i<1; i++){
    coach[i] = loadImage('assets/sketch/boss/' + i + '.png');
  }

  //coach v
  for(let i=0; i<3; i++){
    coach[i] = loadImage('assets/sketch/coach/' + i + '.png');
  }

  //max v
  for(let i=0; i<8; i++){
    max[i] = loadImage('assets/sketch/max/' + i + '.png');
  }

  //ua v
  for(let i=0; i<1; i++){
    coach[i] = loadImage('assets/sketch/ua/' + i + '.png');
  }

  //ui v
  for(let i=0; i<8; i++){
    ui[i] = loadImage('assets/sketch/ui/' + i + '.png');
  }
  

  //phase0
  //gameTitle
  for(let i=0; i<1; i++){
    gameTitle_bg[i] = loadImage('assets/phase0/gameTitle/bg/' + i + '.png');
  }
  
  //gameIntro v
  for(let i=0; i<4; i++){
    gameIntro_bg[i] = loadImage('assets/phase0/gameIntro/bg/' + i + '.png');
  } 
  for(let i=0; i<1; i++){
    gameIntro_ui[i] = loadImage('assets/phase0/gameIntro/ui/' + i + '.png');
  } 
  
  //phase1
  //map1
  for(let i=0; i<1; i++){
    map1_bg[i] = loadImage('assets/phase1/map1/bg/' + i + '.png');
  }

  for(let i=0; i<2; i++){
    map1_chr[i] = loadImage('assets/phase1/map1/chr/' + i + '.png');
  }
  
  //story1 v
  for(let i=0; i<1; i++){
    story1_bg[i] = loadImage('assets/phase1/story1/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    story1_ui[i] = loadImage('assets/phase1/story1/ui/' + i + '.png');
  }

  //stage1
  for(let i=0; i<6; i++){
    stage1_chr[i] = loadImage('assets/phase1/stage1/chr/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    stage1_ui[i] = loadImage('assets/phase1/stage1/ui/' + i + '.png'); //********
  }
  for(let i=0; i<1; i++){
    stage1_bg[i] = loadImage('assets/phase1/stage1/bg/' + i + '.png');
  }

  for(let i=0; i<3; i++){
    stage1_sil[i] = loadImage('assets/phase1/stage1/sil/' + i + '.png');
  } //v

  // clear1
  for(let i=0; i<2; i++){
    clear1_bg[i] = loadImage('assets/phase1/clear1/bg/' + i + '.png');
  }

  // stage4
  for(let i=0; i<3; i++){
    stage4_bg[i] = loadImage('assets/phase4/stage4/bg/' + i + '.png');
  }
  // for(let i=0; i<1; i++){
  //   stage4_chr_max_default[i] = loadImage('assets/phase4/stage4/chr/max/default' + i + '.png'); // 1
  // }
  for(let i=0; i<2; i++){
    stage4_chr_max_punch[i] = loadImage('assets/phase4/stage4/chr/max/punch/' + i + '.png'); // 2
  }
  for(let i=0; i<2; i++){
    stage4_chr_max_kick = loadImage('assets/phase4/stage4/chr/max/kick/' + i + '.png'); // 2
  }
  for(let i=0; i<1; i++){
    stage4_chr_max_defend[i] = loadImage('assets/phase4/stage4/chr/max/defend/' + i + '.png'); // 2
  }
  for(let i=0; i<1; i++){
    stage4_chr_boss_default[i] = loadImage('assets/phase4/stage4/chr/boss/default/' + i + '.png'); // 1
  }
  // for(let i=0; i<2; i++){
  //   stage4_chr_boss_attack[i] = loadImage('assets/phase4/stage4/chr/boss/attack' + i + '.png'); // 2
  // }
  // for(let i=0; i<2; i++){
  //   stage4_chr_boss_defend[i] = loadImage('assets/phase4/stage4/chr/boss/defend' + i + '.png'); // 2
  // }
  for(let i=0; i<16; i++){
    stage4_ui[i] = loadImage('assets/phase4/stage4/ui/' + i + '.png');
  }
  for(let i=0; i<9; i++){
    stage4_sil[i] = loadImage('assets/phase4/stage4/sil/' + i + '.png');
  }


  leftWristValues[0] = [];
  leftWristValues[1] = [];
  rightWristValues[0] = [];
  rightWristValues[1] = [];
  leftShoulderValues[0] = [];
  leftShoulderValues[1] = [];
  rightShoulderValues[0] = [];
  rightShoulderValues[1] = [];
}

// 기본 설정
function setup() {
  // createCanvas(windowWidth, windowHeight);
  let canvasWidth = 1920*0.7;
  let canvasHeight = 1080*0.7;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
  canvas.style('display', 'block');
  canvas.style('margin', 'auto');
  // createCanvas(1920* 0.7, 1080 * 0.7); //width 1044, height 756

  video = createCapture(VIDEO);
  video.size(width, height);
  poseNet = ml5.poseNet(video);
  poseNet.on("pose", function (results) {
    poses = results;
  });
  video.hide();

  myFont = loadFont('assets/sketch/font/neodgm.ttf'); //폰트 불러오기
  textFont(myFont);
  noCursor(); //마우스커서 없애기
  angleMode(DEGREES); //3초 타이머 관련
}





// phase, scene, cut에 따서 실행해야 하는 함수를 부른다
function draw() {
  //console.log("phase " + phase);
  //console.log("scene " + scene);
  switch(phase){
    case 0: //phase0 : gameTitle~gameIntro
      if(scene == 0){
        gameTitle.display();
        
      } 
      else if (scene == 1){
        gameIntro.display();
        
      }
      break;

    case 1: //phase1 : map1~clear1
      if (scene == 0){ // map1
        map1.move();
        map1.display();
      }
      else if (scene == 1){ // story1
        story1.display();
      }
      else if (scene == 2){ //tutorial1
        tutorial1.display();
        /*
        if (tutorial1.getCut() == 2){
          trackShoulders();
          if (tutorial1.checkSilhouette()) tutorial1.increaseCut();
        }
        
        else */ if (tutorial1.getCut() == 5){ //7
          trackWrists();
          if (tutorial1.checkCount()){
            tutorial1.increaseCut();
            tutorial1.increaseCut();
            tutorial1.increaseCut();
          }
        }
      }
      else if (scene == 3){ //stage1
        trackWrists();
        stage1.display();
        stage1.check(dumbbellCurlUpper, dumbbellCurlLower);
      }
      else if (scene == 4){ //clear1
        clear1.display();
      }
      break;
    
    case 2: //phase2
    case 3: //phase3
    case 4: //phase4
      if(stage4.countMax > 0 && stage4.countBoss > 0){
        if(stage4.gaming == true){
        stage4.arcLength += 1;
        stage4.displayGame();
      }
      else if(stage4.gaming == false){
        if (stage4.check2sec() == true){
          stage4.gauge();
          stage4.displayResult();
        }
        else if(stage4.check2sec() == false){
          stage4.changeGame();
          savedtime = millis();
        }
      }
    }
    else {
      // 나중에 채우기, 맥스 피가 0이 되거나 보스 피가 0이 됐을 때
    }
    case 5: //phase5
    default:
  }
  //exit
  if(phase == 1 || phase == 2 || phase == 3 || phase == 4 || scene == 1){
    image(ui[0], width / 2 - 20, height / 2 + 10 ,  width, height); 
  } 
  
  if(exit == true){
    imageMode(CENTER);
    image(ui[1], width / 2, height / 2, width, height);
    image(ui[2], width / 2, height / 2, width, height);
    image(ui[3], width / 2, height / 2, width, height);
  }
  //mouse cursor
  imageMode(CORNER);
  image(ui[7], mouseX, mouseY, ui[7].width / 2, ui[7].height / 2);
  imageMode(CENTER);
  
}

// SPACEBAR 키를 누를 때, 다음 단계로 넘어간다
function keyPressed(){
  if (keyCode === 32){
    switch(phase){
      case 0:
        if (scene == 0){ //gameTitle
          scene++;
          
        }
        else if (scene == 1 && gameIntro.cut < gameIntro.maxcut){ //gameIntro
          gameIntro.cut++; //배경이 바뀜
          
        }
        else if (scene == 1 && gameIntro.cut == gameIntro.maxcut){
            phase++;
            scene = 0;
            
        }
      break;

      case 1:
        if(scene == 0){ //map1
          map1.moveOn = true;
        }
        else if (scene == 1 && story1.cut < story1.maxcut){ //story1
            story1.cut++;
        }
        else if(scene == 1 && story1.cut == story1.maxcut){
            scene++;
        }
        else if (scene == 2){ //tutorial1
          if (tutorial1.getCut() < tutorial1.getMaxCut()){
            //if (tutorial1.getCut() != 2 && tutorial1.getCut() != 7){
            if (tutorial1.getCut() != 5){
              tutorial1.increaseCut();
            }
          }
          else {
            scene++;
          }
        }
        else if (scene == 3){ //stage1
          if (stage1.cut < stage1.maxCut) stage1.cut++;
          else scene++;
        }
        else if (scene == 4){ //clear1
          if (clear1.cut < clear1.maxCut) clear1.cut++;
          else {
            phase = 4;
            scene = 0;
          }
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



function mouseClicked() {
  switch(phase){
    case 0:
      if (scene == 0 && gameTitle.credit == false){ // gameTitle
        if (mouseX >= width / 2 - 200 &&
            mouseX <= width / 2 + 200 && 
            mouseY >= height / 2 + 50 - 60 &&
            mouseY <= height / 2 + 50 + 60){ //start
          scene++;
        }
        else if (mouseX >= width / 2 - 80 &&
                mouseX <= width / 2 + 80 && 
                mouseY >= height / 2 + 200 - 60 &&
                mouseY <= height / 2 + 200 + 60){ //credit
          gameTitle.credit = !gameTitle.credit;
        }
      }
      else if (scene == 0 && gameTitle.credit == true){
        gameTitle.credit = !gameTitle.credit;
      }
    break;
      
  }
  
  // rect(width - 70, 63, 90, 90); exit box size
  if(mouseX >= width - 70 - 45 &&
     mouseX <= width - 70 + 45 &&
     mouseY >= 63 - 45 &&
     mouseY <= 64 + 45){
      exit = true;
  }
  // rect(width / 2 - 120, height / 2 + 65, 220, 50); yes box size
  // rect(width / 2 + 135, height / 2 + 65, 220, 50); no box size
  // rect(width / 2 + 251, height / 2 - 88, 24, 24); x box size
  if(exit == true){
    if(mouseX >= width / 2 - 120 - 110 &&
       mouseX <= width / 2 - 120 + 110 &&
       mouseY >= height / 2 + 65 - 25 &&
       mouseY <= height / 2 + 65 + 25){
        phase = 0;
        scene = 0;
        //turn every cut to 0
        gameIntro.cut = 0;

        //phase1
        map1.cut = 0;
        map1.moveOn = false;
        story1.cut = 0;
        tutorial1.cut = 0;
        tutorial1.count = 3;
        stage1.cut = 0;
        stage1.count = 5;
        clear1.cut = 0;
        stage4.countBoss = 0;
        stage4.countMax = 0;

        // // phase2의 클래스 - reverse curl
        // let map2;
        // let story2;
        // let tutorial2;
        // let stage2;
        // let clear2;

        // // phase3의 클래스 - overhead press
        // let map3;
        // let story3;
        // let tutorial3;
        // let stage3;
        // let clear3;

        // // phase4의 클래스 - boss stage
        // let map4;
        // let story4;
        // let tutorial4;
        // let stage4;

        // // phase5의 클래스 - end
        // let gameOutro;
        exit = false;
    }
    else if(mouseX >= width / 2 + 135 - 110 &&
       mouseX <= width / 2 + 135 + 110 &&
       mouseY >= height / 2 + 65 - 25 &&
       mouseY <= height / 2 + 65 + 25){
        exit = false;
    }
    else if(mouseX >= width / 2 + 251 - 22 &&
       mouseX <= width / 2 + 251 + 22 &&
       mouseY >= height / 2 - 88 - 12 &&
       mouseY <= height / 2 - 88 + 12){
        exit = false;
    }
    
    
  }
     
}




// bodytracking - 손목의 위치 변수에 플레이어의 현재 위치를 저장한다
function trackWrists(){
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

// bodytracking - 손목의 위치 변수에 플레이어의 현재 위치를 저장한다
function trackShoulders(){
  //console.log(leftShoulderX + " " + leftShoulderY + " " + rightShoulderX + " " + rightShoulderY);

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let leftShoulder = pose.keypoints[5];
    let rightShoulder = pose.keypoints[6];

    if (leftShoulder.score > 0.3){
      if (leftShoulderValues[0].length < tracking_num) {
        leftShoulderValues[0].push(leftShoulder.position.x);
        leftShoulderValues[1].push(leftShoulder.position.y);
      }

      if (leftShoulderValues[0].length == tracking_num) {
        leftShoulderX = 0;
        for (let i = 0; i < tracking_num; i++) leftShoulderX += leftShoulderValues[0][i];
        leftShoulderX /= tracking_num;
        leftShoulderValues[0] = [];

        leftShoulderY = 0;
        for (let i = 0; i < tracking_num; i++) leftShoulderY += leftShoulderValues[1][i];
        leftShoulderY /= tracking_num;
        leftShoulderValues[1] = [];
      }
    }

    if (rightShoulder.score > 0.3){
      if (rightShoulderValues[0].length < tracking_num) {
        rightShoulderValues[0].push(rightShoulder.position.x);
        rightShoulderValues[1].push(rightShoulder.position.y);
      }

      if (rightShoulderValues[0].length == tracking_num) {
        rightShoulderX = 0;
        for (let i = 0; i < tracking_num; i++) rightShoulderX += rightShoulderValues[0][i];
        rightShoulderX /= tracking_num;
        rightShoulderValues[0] = [];

        rightShoulderY = 0;
        for (let i = 0; i < tracking_num; i++) rightShoulderY += rightShoulderValues[1][i];
        rightShoulderY /= tracking_num;
        rightShoulderValues[1] = [];
      }
    }
  }
}