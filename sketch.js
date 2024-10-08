/* 
 * 게임의 전체 flow를 관리한다
 * 게임에서 사용되는 단계를 관리한다
 * 게임의 각 단계에서 사용되는 asset을 관리한다
 * bodytracking 함수/변수를 제공한다 yes
*/




// 게임 단계 - phase, scene, cut(각 클래스 안에서 다룸)
let phase = 0;
let scene = 0;

// phase0의 클래스 - start
let gameTitle;
let tutorial0;
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
let boss = [];
let ua  = [];
let bgm = [];
let snd = [];

// asset - phase0
let gameTitle_bg = [];
let gameTitle_ui = [];
let gameTitle_snd = [];
let gameIntro_bg = [];
let gameIntro_ui = [];
let gameIntro_snd = [];
let tutorial0_ui = [];
let tutorial0_snd = [];

// asset - phase1 dumbbell curl
let map1_bg = [];
let map1_chr = [];
let map1_snd = [];
let story1_bg = [];
let story1_snd = [];
let story1_ui = [];
let tutorial1_ui = [];
let tutorial1_sil = [];
let tutorial1_snd = [];
let stage1_bg = [];
let stage1_chr = [];
let stage1_sil = [];
let stage1_snd = [];
let stage1_ui = [];
let clear1_bg = [];
let clear1_ui = [];

// asset - phase2 reverse curl
let map2_bg = [];
let map2_chr = [];
let map2_snd = [];
let story2_bg = [];
let story2_snd = [];
let story2_ui = [];
let stage2_bg = [];
let stage2_chr = [];
let stage2_sil = [];
let stage2_snd = [];
let stage2_ui = [];
let clear2_bg = [];
let tutorial2_ui = [];
let tutorial2_sil = [];
let tutorial2_snd = [];

// asset - phase3 overhead press
let map3_bg = [];
let map3_chr = [];
let map3_snd = [];
let story3_bg = [];
let story3_snd = [];
let story3_ui = []
let stage3_bg = [];
let stage3_chr = [];
let stage3_sil = [];
let stage3_snd = [];
let stage3_ui = [];
let clear3_bg = [];
let tutorial3_ui = [];
let tutorial3_sil = [];
let tutorial3_snd = [];

// asset - phase4 boss stage
let map4_bg = [];
let map4_chr = [];
let map4_snd = [];
let story4_bg = [];
let story4_snd = [];
let story4_ui = [];
let tutorial4_bg = [];
let tutorial4_chr = [];
let tutorial4_sil = [];
let tutorial4_snd = [];
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
let stage4_snd = [];
let stage4_ui = [];
let clear4_bg = [];
let clear4_ui = [];


// asset - phase5 gameOutro
let gameOutro_bg = [];
let gameOutro_snd = [];
let gameOutro_ui = [];
let gameOutro_credit = [];

// asset - exit
let exit = false;


// bodytracking 관련 변수
let video;
let poseNet;
let poses = [];
let tracking_num = 15;
let leftWristValues = [];
let rightWristValues = [];
let leftShoulderValues = [];
let rightShoulderValues = [];
let leftElbowValues = [];
let rightElbowValues = []

// 손목의 위치 변수 - 이 변수들을 사용해서 플레이어의 위치 확인
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;
let leftShoulderX = 0;
let leftShoulderY = 0;
let rightShoulderX = 0;
let rightShoulderY = 0;
let leftElbowX = 0;
let leftElbowY = 0;
let rightElbowX = 0;
let rightElbowY = 0;

// 각 운동의 위, 아래 바운더리
let dumbbellCurlUpper = 5.3/10;
let dumbbellCurlLower = 7/10;
let sideUpper = 5.8/10;
let sideLower = 6.2/10;
let pressUpper = 4.3/10;
let pressLower = 5.4/10;

// 시간
let savedTime = 0;
let autoNextTime = 4000;
let autoNextTimeShield = 700;
let autoNextTimeLock = 1500;
let timerSpeed = 0.7;


// 각 단계의 클래스 생성
// asset 불러오기
// 변수 초기화
function preload(){

  //phase0
  gameTitle = new GameTitle();
  tutorial0 = new Tutorial0();
  gameIntro = new GameIntro();
  //phase1
  map1 = new Map1();
  story1 = new Story1();
  tutorial1 = new Tutorial1();
  stage1 = new Stage1();
  clear1 = new Clear1();
  //phase2
  map2 = new Map2();
  story2 = new Story2();
  tutorial2 = new Tutorial2();
  stage2 = new Stage2();
  clear2 = new Clear2();
  //phase3
  map3 = new Map3();
  story3 = new Story3();
  tutorial3 = new Tutorial3();
  stage3 = new Stage3();
  clear3 = new Clear3();
  //phase4
  map4 = new Map4();
  story4 = new Story4();
  tutorial4 = new Tutorial4();
  stage4 = new Stage4();
  //phase5
  gameOutro = new GameOutro();



  //sketch
  //bgm
  for(let i=0; i<1; i++){
    bgm[i] = loadImage('assets/sketch/bgm/' + i + '.png');
  }

  //boss v
  for(let i=0; i<1; i++){
    boss[i] = loadImage('assets/sketch/boss/' + i + '.png');
  }

  //coach v
  for(let i=0; i<4; i++){
    coach[i] = loadImage('assets/sketch/coach/' + i + '.png');
  }

  //max v
  for(let i=0; i<9; i++){
    max[i] = loadImage('assets/sketch/max/' + i + '.png');
  }

  //sound v
  for(let i=0; i<4; i++){
    snd[i] = loadSound('assets/sketch/snd/' + i + '.mp3');
  }

  //ua v
  for(let i=0; i<1; i++){
    ua[i] = loadImage('assets/sketch/ua/' + i + '.png');
  }

  //ui v
  for(let i=0; i<9; i++){
    ui[i] = loadImage('assets/sketch/ui/' + i + '.png');
  }
  

  //phase0
  //gameTitle
  for(let i=0; i<2; i++){
    gameTitle_bg[i] = loadImage('assets/phase0/gameTitle/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    gameTitle_snd[i] = loadSound('assets/phase0/gameTitle/snd/' + i + '.mp3');
  }

  //gameIntro v
  for(let i=0; i<5; i++){
    gameIntro_bg[i] = loadImage('assets/phase0/gameIntro/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    gameIntro_snd[i] = loadSound('assets/phase0/gameIntro/snd/' + i + '.mp3');
  }  
  for(let i=0; i<1; i++){
    gameIntro_ui[i] = loadImage('assets/phase0/gameIntro/ui/' + i + '.png');
  } 

  //tutorial 0
  for(let i=0; i<1; i++){
    tutorial0_ui[i] = loadImage('assets/phase0/tutorial0/ui/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    tutorial0_snd[i] = loadSound('assets/phase0/tutorial0/snd/' + i + '.mp3');
  }
  
  //phase1
  //map1
  for(let i=0; i<2; i++){
    map1_bg[i] = loadImage('assets/phase1/map1/bg/' + i + '.png');
  }
  for(let i=0; i<0; i++){
    map1_snd[i] = loadSound('assets/phase1/map1/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    map1_chr[i] = loadImage('assets/phase1/map1/chr/' + i + '.png');
  }
  
  //story1 v
  for(let i=0; i<1; i++){
    story1_bg[i] = loadImage('assets/phase1/story1/bg/' + i + '.png');
  }
  for(let i=0; i<0; i++){
    story1_snd[i] = loadSound('assets/phase1/story1/snd/' + i + '.mp3');
  }
  for(let i=0; i<2; i++){
    story1_ui[i] = loadImage('assets/phase1/story1/ui/' + i + '.png');
  }

  //tutorial 1
  for(let i=0; i<1; i++){
    tutorial1_ui[i] = loadImage('assets/phase1/tutorial1/ui/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    tutorial1_sil[i] = loadImage('assets/phase1/tutorial1/sil/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    tutorial1_snd[i] = loadSound('assets/phase1/tutorial1/snd/' + i + '.mp3');
  }

  //stage1
  for(let i=0; i<7; i++){
    stage1_chr[i] = loadImage('assets/phase1/stage1/chr/' + i + '.png');
  }
  for(let i=0; i<13; i++){
    stage1_ui[i] = loadImage('assets/phase1/stage1/ui/' + i + '.png'); //********
  }
  for(let i=0; i<6; i++){
    stage1_bg[i] = loadImage('assets/phase1/stage1/bg/' + i + '.png');
  }
  for(let i=0; i<4; i++){
    stage1_snd[i] = loadSound('assets/phase1/stage1/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    stage1_sil[i] = loadImage('assets/phase1/stage1/sil/' + i + '.png');
  }

  // clear1
  for(let i=0; i<1; i++){
    clear1_bg[i] = loadImage('assets/phase1/clear1/bg/' + i + '.png');
  }

  for(let i=0; i<1; i++){
    clear1_ui[i] = loadImage('assets/phase1/clear1/ui/' + i + '.png');
  }

  //phase2
  //map2
  for(let i=0; i<2; i++){
    map2_bg[i] = loadImage('assets/phase2/map2/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   map2_snd[i] = loadSound('assets/phase1/map1/snd/' + i + '.mp3');
  // }
  for(let i=0; i<3; i++){
    map2_chr[i] = loadImage('assets/phase2/map2/chr/' + i + '.png');
  }
  
  //story2 v
  for(let i=0; i<1; i++){
    story2_bg[i] = loadImage('assets/phase2/story2/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   story2_snd[i] = loadSound('assets/phase2/story2/snd/' + i + '.mp3');
  // }
  for(let i=0; i<2; i++){
    story2_ui[i] = loadImage('assets/phase2/story2/ui/' + i + '.png');
  }

  //tutorial2
  for(let i=0; i<1; i++){
    tutorial2_ui[i] = loadImage('assets/phase2/tutorial2/ui/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    tutorial2_sil[i] = loadImage('assets/phase2/tutorial2/sil/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    tutorial2_snd[i] = loadSound('assets/phase2/tutorial2/snd/' + i + '.mp3');
  }  

  //stage2
  for(let i=0; i<6; i++){
    stage2_chr[i] = loadImage('assets/phase2/stage2/chr/' + i + '.png');
  }
  for(let i=0; i<13; i++){
    stage2_ui[i] = loadImage('assets/phase2/stage2/ui/' + i + '.png');
  }
  for(let i=0; i<6; i++){ //6
    stage2_bg[i] = loadImage('assets/phase2/stage2/bg/' + i + '.png');
  }
  for(let i=0; i<3; i++){
    stage2_snd[i] = loadSound('assets/phase2/stage2/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    stage2_sil[i] = loadImage('assets/phase2/stage2/sil/' + i + '.png');
  }

  // clear2
  for(let i=0; i<2; i++){
    clear2_bg[i] = loadImage('assets/phase2/clear2/bg/' + i + '.png');
  }

  //phase3

  //map3
  for(let i=0; i<2; i++){
    map3_bg[i] = loadImage('assets/phase3/map3/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   map3_snd[i] = loadSound('assets/phase3/map3/snd/' + i + '.mp3');
  // }
  for(let i=0; i<3; i++){
    map3_chr[i] = loadImage('assets/phase3/map3/chr/' + i + '.png');
  }

  //story3
  for(let i=0; i<1; i++){
    story3_bg[i] = loadImage('assets/phase3/story3/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   story3_snd[i] = loadSound('assets/phase3/story3/snd/' + i + '.mp3');
  // }
  for(let i=0; i<2; i++){
    story3_ui[i] = loadImage('assets/phase3/story3/ui/' + i + '.png');
  }

  //tutorial3
  for(let i=0; i<1; i++){
    tutorial3_ui[i] = loadImage('assets/phase3/tutorial3/ui/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    tutorial3_sil[i] = loadImage('assets/phase3/tutorial3/sil/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    tutorial3_snd[i] = loadSound('assets/phase3/tutorial3/snd/' + i + '.mp3');
  }  

  //stage3
  for(let i=0; i<19; i++){
    stage3_chr[i] = loadImage('assets/phase3/stage3/chr/' + i + '.png');
  }
  for(let i=0; i<13; i++){
    stage3_ui[i] = loadImage('assets/phase3/stage3/ui/' + i + '.png');
  }
  for(let i=0; i<8; i++){
    stage3_bg[i] = loadImage('assets/phase3/stage3/bg/' + i + '.png');
  }
  for(let i=0; i<3; i++){
    stage3_snd[i] = loadSound('assets/phase3/stage3/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    stage3_sil[i] = loadImage('assets/phase3/stage3/sil/' + i + '.png');
  }

  // clear3
  for(let i=0; i<1; i++){
    clear3_bg[i] = loadImage('assets/phase3/clear3/bg/' + i + '.png');
  }

  //phase4
  // map4
  for(let i=0; i<4; i++){
    map4_bg[i] = loadImage('assets/phase4/map4/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    map4_snd[i] = loadSound('assets/phase4/map4/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    map4_chr[i] = loadImage('assets/phase4/map4/chr/' + i + '.png');
  }

  //story4
  for(let i=0; i<2; i++){
    story4_bg[i] = loadImage('assets/phase4/story4/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    story4_snd[i] = loadSound('assets/phase4/story4/snd/' + i + '.mp3');
  }
  for(let i=0; i<2; i++){
    story4_ui[i] = loadImage('assets/phase4/story4/ui/' + i + '.png');
  }

  // tutorial4
  for(let i=0; i<2; i++){
    tutorial4_bg[i] = loadImage('assets/phase4/tutorial4/bg/' + i + '.png');
  }
  for(let i=0; i<5; i++){
    tutorial4_chr[i] = loadImage('assets/phase4/tutorial4/chr/' + i + '.png');
  }
  for(let i=0; i<18; i++){
    tutorial4_sil[i] = loadImage('assets/phase4/tutorial4/sil/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    tutorial4_snd[i] = loadSound('assets/phase4/tutorial4/snd/' + i + '.mp3');
  }
  for(let i=0; i<6; i++){
    tutorial4_ui[i] = loadImage('assets/phase4/tutorial4/ui/' + i + '.png');
  }

  // stage4
  for(let i=0; i<1; i++){
    stage4_bg[i] = loadImage('assets/phase4/stage4/bg/' + i + '.png');
  }
  for(let i=0; i<1; i++){
    stage4_chr_max_default[i] = loadImage('assets/phase4/stage4/chr/max/default/' + i + '.png'); // 1
  }
  for(let i=0; i<2; i++){
    stage4_chr_max_punch[i] = loadImage('assets/phase4/stage4/chr/max/punch/' + i + '.png'); // 2
  }
  for(let i=0; i<2; i++){
    stage4_chr_max_kick[i] = loadImage('assets/phase4/stage4/chr/max/kick/' + i + '.png'); // 2
  }
  for(let i=0; i<1; i++){
    stage4_chr_max_defend[i] = loadImage('assets/phase4/stage4/chr/max/defend/' + i + '.png'); // 2
  }
  for(let i=0; i<1; i++){
    stage4_chr_boss_default[i] = loadImage('assets/phase4/stage4/chr/boss/default/' + i + '.png'); // 1
  }
  for(let i=0; i<2; i++){
    stage4_chr_boss_attack[i] = loadImage('assets/phase4/stage4/chr/boss/attack/' + i + '.png'); // 2
  }
  for(let i=0; i<4; i++){
    stage4_chr_boss_defend[i] = loadImage('assets/phase4/stage4/chr/boss/defend/' + i + '.png'); // 2
  }
  for(let i=0; i<17; i++){
    stage4_ui[i] = loadImage('assets/phase4/stage4/ui/' + i + '.png');
  }
  for(let i=0; i<9; i++){
    stage4_sil[i] = loadImage('assets/phase4/stage4/sil/' + i + '.png');
  }
  for(let i=0; i<10; i++){
    stage4_snd[i] = loadSound('assets/phase4/stage4/snd/' + i + '.mp3');
  }
  //phase 5
  //gameOutro
  for(let i=0; i<7; i++){
    gameOutro_bg[i] = loadImage('assets/phase5/gameOutro/bg/' + i + '.png');
  }
  for(let i=0; i<5; i++){
    gameOutro_snd[i] = loadSound('assets/phase5/gameOutro/snd/' + i + '.mp3');
  }  
  for(let i=0; i<7; i++){
    gameOutro_ui[i] = loadImage('assets/phase5/gameOutro/ui/' + i + '.png');
  } 
  for(let i=0; i<1; i++){
    gameOutro_credit[i] = loadImage('assets/phase5/gameOutro/credit/' + i + '.png');
  }

  leftWristValues[0] = [];
  leftWristValues[1] = [];
  rightWristValues[0] = [];
  rightWristValues[1] = [];
  leftShoulderValues[0] = [];
  leftShoulderValues[1] = [];
  rightShoulderValues[0] = [];
  rightShoulderValues[1] = [];
  leftElbowValues[0] = [];
  leftElbowValues[1] = [];
  rightElbowValues[0] = [];
  rightElbowValues[1] = [];
}

// 기본 설정
function setup() {
  createCanvas(windowWidth, windowWidth * 9 / 16);

  video = createCapture(VIDEO);
  video.size(width, height);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", function (results) {
    poses = results;
  });
  video.hide();

  // 포즈넷 테스트
  function modelReady() {
    console.log("PoseNet 모델이 로드되었습니다.");
}

  myFont = loadFont('assets/sketch/font/neodgm.ttf'); //폰트 불러오기
  textFont(myFont);
  noCursor(); //마우스커서 없애기
  angleMode(DEGREES); //3초 타이머 관련
}





// phase, scene, cut에 따서 실행해야 하는 함수를 부른다
function draw() {
  switch(phase){
    case 0: //phase0
      if(scene == 0) gameTitle.display(); // gameTitle
      else if (scene == 1) {
        tutorial0.display();
        playOnce(tutorial0_snd[0]);
       } // tutorial0
      else if (scene == 2) {
        tutorial0_snd[0].stop();
        gameIntro.display();
       } // gameIntro
      break;

    case 1: //phase1
      if (scene == 0){ // map1
        map1.move();
        map1.display();
      }
      else if (scene == 1){ // story1
        story1.display();
        //sound
        snd[0].setVolume(1.5);
        playOnce(snd[0]);        
      }
      else if (scene == 2){ //tutorial1
        snd[0].stop();
        playOnce(tutorial1_snd[0]);
        tutorial1.display();
        if (tutorial1.getCut() == 7){
          trackWrists();
          tutorial1.checkPass(dumbbellCurlUpper, dumbbellCurlLower);
          if (tutorial1.lowerPass) tutorial1.increaseCut();
        }
        else if (tutorial1.getCut() == 8){
          trackWrists();
          tutorial1.checkPass(dumbbellCurlUpper, dumbbellCurlLower);
          if (tutorial1.upperPass){
            tutorial1.increaseCut();
            tutorial1.lowerPass = false;
            tutorial1.upperPass = false;
          }
        }
        else if (tutorial1.getCut() == 9){
          trackWrists();
          tutorial1.checkPass(dumbbellCurlUpper, dumbbellCurlLower);
          if (tutorial1.lowerPass && tutorial1.upperPass) tutorial1.increaseCut();
        }
        else {
          if (millis() - savedTime > autoNextTime){
            if (tutorial1.getCut() < tutorial1.getMaxCut()){
              tutorial1.increaseCut();
              savedTime = millis();
            }
            else {
              scene++;
            }
          }
        }
      }
      else if (scene == 3){ //stage1
        tutorial1_snd[0].stop();
        stage1_snd[0].setVolume(2);
        playOnce(stage1_snd[0]); 
        trackWrists();
        stage1.display();
        stage1.check(dumbbellCurlUpper, dumbbellCurlLower);
        //stage1.sound();
        if (stage1.count == 0 && !stage1.clear){
          savedTime = millis();
          stage1.clear = true;
        }
        if (stage1.clear){
          if (millis() - savedTime > autoNextTime){
            if (stage1.getCut() < stage1.getMaxCut()){
              stage1.increaseCut();
              savedTime = millis();
            }
            else scene++;
          }
        }
      }
      else if (scene == 4){ //clear1
        //sound
        snd[0].setVolume(1.5);
        playOnce(snd[0]); 
        clear1.display();
      }
      break;
    
    case 2: //phase2
      if(scene == 0){ //map2
        snd[0].stop();
        map2.move();
        map2.display();
      }
      else if(scene == 1){ //story2
        snd[0].setVolume(1.5);
        playOnce(snd[0]); 
        story2.display();
      }
      else if(scene == 2){ // tutorial2
        snd[0].stop();
        playOnce(tutorial2_snd[0]);
        tutorial2.display();
        if (tutorial2.getCut() == 6){
          trackElbows();
          tutorial2.checkPass(sideUpper, sideLower);
          if (tutorial2.lowerPass) tutorial2.increaseCut();
        }
        else if (tutorial2.getCut() == 7){
          trackElbows();
          tutorial2.checkPass(sideUpper, sideLower);
          if (tutorial2.upperPass){
            tutorial2.increaseCut();
            tutorial2.lowerPass = false;
            tutorial2.upperPass = false;
          }
        }
        else if (tutorial2.getCut() == 8){
          trackElbows();
          tutorial2.checkPass(sideUpper, sideLower);
          if (tutorial2.lowerPass && tutorial2.upperPass) tutorial2.increaseCut();
        }
        else {
          if (millis() - savedTime > autoNextTime){
            if (tutorial2.getCut() < tutorial2.getMaxCut()){
              tutorial2.increaseCut();
              savedTime = millis();
            }
            else {
              scene++;
            }
          }
        }
      }
      else if(scene == 3){ // stage2
        tutorial2_snd[0].stop();
        stage2_snd[0].setVolume(1.6);
        playOnce(stage2_snd[0]);
        trackElbows();
        stage2.display();
        stage2.check(sideUpper, sideLower);
        //stage2.sound();
        if (stage2.count == 0 && !stage2.clear){
          savedTime = millis();
          stage2.clear = true;
        }
        if (stage2.clear){
          if (millis() - savedTime > autoNextTime){
            if (stage2.getCut() < stage2.getMaxCut()){
              stage2.increaseCut();
              savedTime = millis();
            }
            else scene++;
          }
        }
      }
      else if(scene == 4){ //clear2
        //sound
        snd[0].setVolume(1.5);
        playOnce(snd[0]);         
        clear2.display();
      }
      break;

    case 3: //phase3
    if(scene == 0){ //map3
      snd[0].stop();      
      map3.move();
      map3.display();
    }
    else if(scene == 1){ //story3
      story3.display();
      snd[0].setVolume(1.5);
      playOnce(snd[0]);        
    }
    else if(scene == 2){ // tutorial3
      tutorial3.display();
      snd[0].stop();
      playOnce(tutorial3_snd[0]);      
      if (tutorial3.getCut() == 6){
        trackElbows();
        tutorial3.checkPass(pressUpper, pressLower);
        if (tutorial3.lowerPass) tutorial3.increaseCut();
      }
      else if (tutorial3.getCut() == 7){
        trackElbows();
        tutorial3.checkPass(pressUpper, pressLower);
        if (tutorial3.upperPass){
          tutorial3.increaseCut();
          tutorial3.lowerPass = false;
          tutorial3.upperPass = false;
        }
      }
      else if (tutorial3.getCut() == 8){
        trackElbows();
        tutorial3.checkPass(pressUpper, pressLower);
        if (tutorial3.lowerPass && tutorial3.upperPass) tutorial3.increaseCut();
      }
      else {
        if (millis() - savedTime > autoNextTime){
          if (tutorial3.getCut() < tutorial3.getMaxCut()){
            tutorial3.increaseCut();
            savedTime = millis();
          }
          else {
            scene++;
          }
        }
      }
    }
    else if(scene == 3){ // stage3
      tutorial3_snd[0].stop();
      stage3_snd[0].setVolume(1.6);
      playOnce(stage3_snd[0]);
      trackElbows();
      stage3.display();
      stage3.check(pressUpper, pressLower);
      //stage3.sound();
      if (stage3.count == 0 && !stage3.clear){
        savedTime = millis();
        stage3.clear = true;
      }
      if (stage3.clear){
        if (stage3.getCut() < 2){
          if (millis() - savedTime > autoNextTimeShield){
            stage3.increaseCut();
            savedTime = millis();
          }
        }
        else {
          if (millis() - savedTime > autoNextTime){
            if (stage3.getCut() < stage3.getMaxCut()){
              stage3.increaseCut();
              savedTime = millis();
            }
            else scene++;
          }
        }
      }
    }
    else if(scene == 4){ //clear3
      //sound
      snd[0].setVolume(1.5);
      playOnce(snd[0]);       
      clear3.display();
    }
    break;

    case 4: //phase4
      if(scene == 0){ // map4
        if (!map4.timerStarted){
          savedTime = millis();
          map4.timerStarted = true;
        }
        if (map4.cut < map4.maxcut){
          if (millis() - savedTime > autoNextTimeLock){
            map4.cut++;
            savedTime = millis();
          }
        }
        map4.move();
        map4.display();
        snd[0].stop();
      }
      else if (scene == 1){ // story4
        story4.display();
      }
      else if (scene == 2){ // tutorial4
        story4_snd[0].stop();
        tutorial4_snd[0].setVolume(0.5);
        playOnce(tutorial4_snd[0]);
        tutorial4.display();
        if (tutorial4.getCut() == 6) tutorial4.arcLength += timerSpeed;
        if (tutorial4.getCut() > 7){
          if (millis() - savedTime > autoNextTime){
            if (tutorial4.getCut() < tutorial4.getMaxCut()){
              tutorial4.increaseCut();
              savedTime = millis();
            }
            else {
              scene++;
            }
          }
        }
      }
      else if (scene == 3){ // stage4
        tutorial4_snd[0].stop();
        playOnce(stage4_snd[0]);
        if(stage4.countMax > 0 && stage4.countBoss > 0){
          if(stage4.gaming == true){
            if (stage4.seq[stage4.index] == "A") trackWrists();
            else trackElbows();
            stage4.play();
            stage4.displayGame();
            stage4.arcLength += timerSpeed;
          }
          else if(stage4.gaming == false){
            if (stage4.check2sec() == true){
              stage4.displayGame();
              stage4.arcLength = 299.5;
            }
            else if(stage4.check2sec() == false){
              stage4.changeGame();
              savedtime = millis();
            }
          }
        }
        else {
          if (stage4.countMax > 0) gameOutro.success = true;
          gameOutro.cut = 0;
          phase++;
          scene = 0;
        }
      }
      break;

    case 5: //phase5
      stage4_snd[0].stop();
      gameOutro.display();
      if (gameOutro.cut < 2){
        if (millis() - savedTime > autoNextTime){
          gameOutro.cut++;
          savedTime = millis();
        }
      }
      break;
  }

  //exit
  if(phase == 1 || phase == 2 || phase == 3 || phase == 4 || scene >= 1){
    imageMode(CENTER);
    image(ui[0], width / 2, height / 2,  width, height); 
  } 
  if(exit == true){
    imageMode(CENTER);
    image(ui[1], width / 2, height / 2, width, height);
    if(mouseIsPressed){
      if(mouseX >= width / 2 - width / 150 - width / 6 &&
        mouseX <= width / 2 - width / 150 - width / 6 + width / 6 &&
        mouseY >= height / 2 + height / 19 &&
        mouseY <= height / 2 + height / 19 + height / 15){
        image(ui[2], width / 2 - width / 100, height / 2 + height / 120, width * 0.9, height * 0.9);
        image(ui[3], width / 2, height / 2, width, height);
      }
      else if(mouseX >= width / 2 + width / 60 &&
              mouseX <= width / 2 + width / 60 + width / 6 &&
              mouseY >= height / 2 + height / 19 &&
              mouseY <= height / 2 + height / 19 + height / 15){
        image(ui[2], width / 2, height / 2, width, height);
        image(ui[3], width / 2 + width / 100, height / 2 + height / 120, width * 0.9, height * 0.9);
      }
      else {
        image(ui[2], width / 2, height / 2, width, height);
        image(ui[3], width / 2, height / 2, width, height);
      }
    }
    else {
      image(ui[2], width / 2, height / 2, width, height);
      image(ui[3], width / 2, height / 2, width, height);
    }
  }

  //mouse cursor
  imageMode(CORNER);
  image(ui[8], mouseX, mouseY, ui[8].width / 2, ui[8].height / 2);
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
        else if (scene == 1){ //tutorial0
          if (tutorial0.getCut() < tutorial0.getMaxCut()) tutorial0.increaseCut();
          else scene++;
        }
        else if (scene == 2){ //gameIntro
          if (gameIntro.cut < gameIntro.maxcut) gameIntro.cut++; //배경이 바뀜
          else {
            phase++;
            scene = 0;
            
          }
        }
      break;

      case 1:
        if(scene == 0){ //map1
          if(map1.moveOn == false) map1.moveOn = true;
          else scene++;
        }
        else if (scene == 1){ //story1
          if (story1.cut < story1.maxcut) story1.cut++;
          else {
            scene++;
            savedTime = millis();
          }
        }
        else if (scene == 4){ //clear1
          if (clear1.getCut() >= 0){
            if (clear1.cut < clear1.maxCut) clear1.cut++;
            else {
              phase++;
              scene = 0;
            }
          }
        }
      break;

      case 2:
        if(scene == 0){ //map2
          if(map2.moveOn == false) map2.moveOn = true;
          else scene++;
        }
        else if(scene == 1){ //story2
          if(story2.cut < story2.maxcut) story2.cut++;
          else scene++;
        }
        else if(scene == 4){ //clear2
          if (clear2.cut < clear2.maxCut) clear2.cut++;
          else {
            phase++;
            scene = 0;
          }
        }
      break;

      case 3:
        if(scene == 0){ //map3
          if(map3.moveOn == false) map3.moveOn = true;
          else scene++;
        }
        else if(scene == 1){ //story3
          if(story3.cut < story3.maxcut) story3.cut++;
          else scene++;
        }
        else if(scene == 4){ //clear3
          if (clear3.cut < clear3.maxCut) clear3.cut++;
          else {
            phase++;
            scene = 0;
          }
        }
      break;

      case 4:
        if(scene == 0){ //map4
          if(map4.cut == 2){
            if(map4.moveOn == false) map4.moveOn = true;
            else scene++;
          }
          
        }
        else if(scene == 1){ //story4
          if(story4.cut < story4.maxcut) story4.cut++;
          else scene++;
        }
        else if (scene == 2){ //tutorial4
          if (tutorial4.getCut() == 7) savedTime = millis();
          if (tutorial4.getCut() < 8) tutorial4.increaseCut();
        }
        else if (scene == 3 && !stage4.gameStarted){ //stage4
          stage4.gameStarted = true;
          stage4.gaming = true;
          savedTime = millis();
        }
        break;

      case 5:
        if(scene == 0){ //outro
          if(gameOutro.cut < gameOutro.maxCut && gameOutro.cut > 1) gameOutro.cut++;
          else {
            if (gameOutro.cut >= gameOutro.maxCut) location.reload();
          }
        }
        break;
    }
  }
}



function mouseClicked() {
  if(phase !=0 || scene >= 1 ){
    if(mouseX >= width * 12 / 13 &&
      mouseX <= width * 12 / 13 + width / 20 &&
      mouseY >= height / 18 &&
      mouseY <= height / 18 + height / 12){
       exit = true;
    }
  }
  if(exit == true){
    if(mouseX >= width / 2 - width / 150 - width / 6 &&
       mouseX <= width / 2 - width / 150 - width / 6 + width / 6 &&
       mouseY >= height / 2 + height / 19 &&
       mouseY <= height / 2 + height / 19 + height / 15){
        location.reload(); // 페이지 새로고침
    }
    else if(mouseX >= width / 2 + width / 60 &&
       mouseX <= width / 2 + width / 60 + width / 6 &&
       mouseY >= height / 2 + height / 19 &&
       mouseY <= height / 2 + height / 19 + height / 15){
        exit = false;
    }
    else if(mouseX >= width / 2 + width / 100 + width / 6 &&
       mouseX <= width / 2 + width / 100 + width / 6 + width / 50 &&
       mouseY >= height / 2 - height / 7.5 &&
       mouseY <= height / 2 - height / 7.5 + width / 50){
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

// bodytracking - 팔꿈치의 위치 변수에 플레이어의 현재 위치를 저장한다
function trackElbows(){
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let leftElbow = pose.keypoints[7];
    let rightElbow = pose.keypoints[8];

    if (leftElbow.score > 0.3){
      if (leftElbowValues[0].length < tracking_num) {
        leftElbowValues[0].push(leftElbow.position.x);
        leftElbowValues[1].push(leftElbow.position.y);
      }

      if (leftElbowValues[0].length == tracking_num) {
        leftElbowX = 0;
        for (let i = 0; i < tracking_num; i++) leftElbowX += leftElbowValues[0][i];
        leftElbowX /= tracking_num;
        leftElbowValues[0] = [];

        leftElbowY = 0;
        for (let i = 0; i < tracking_num; i++) leftElbowY += leftElbowValues[1][i];
        leftElbowY /= tracking_num;
        leftElbowValues[1] = [];
      }
    }

    if (rightElbow.score > 0.3){
      if (rightElbowValues[0].length < tracking_num) {
        rightElbowValues[0].push(rightElbow.position.x);
        rightElbowValues[1].push(rightElbow.position.y);
      }

      if (rightElbowValues[0].length == tracking_num) {
        rightElbowX = 0;
        for (let i = 0; i < tracking_num; i++) rightElbowX += rightElbowValues[0][i];
        rightElbowX /= tracking_num;
        rightElbowValues[0] = [];

        rightElbowY = 0;
        for (let i = 0; i < tracking_num; i++) rightElbowY += rightElbowValues[1][i];
        rightElbowY /= tracking_num;
        rightElbowValues[1] = [];
      }
    }
  }
}




function playOnce(track){
  if (!track.isPlaying()) track.play();
}