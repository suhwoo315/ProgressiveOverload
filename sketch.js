/* 
 * 게임의 전체 flow를 관리한다
 * 게임에서 사용되는 단계를 관리한다
 * 게임의 각 단계에서 사용되는 asset을 관리한다
 * bodytracking 함수/변수를 제공한다
*/




// 게임 단계 - phase, scene, cut(각 클래스 안에서 다룸)
let phase = 1;
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

// asset - phase1 dumbbell curl
let map1_bg = [];
let map1_chr = [];
let map1_snd = [];
let story1_bg = [];
let story1_snd = [];
let story1_ui = [];
let tutorial1_ui = [];
let tutorial1_sil = [];
let stage1_bg = [];
let stage1_chr = [];
let stage1_sil = [];
let stage1_snd = [];
let stage1_ui = [];
let clear1_bg = [];

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

// asset - phase4 boss stage
let map4_bg = [];
let map4_chr = [];
let map4_snd = [];
let story4_bg = [];
let story4_snd = [];
let story4_ui = [];
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
let stage4_snd = [];
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
let dumbbellCurlUpper = 6.2/10;
let dumbbellCurlLower = 7.5/10;
let reverseCurlUpper = 6.2/10;
let reverseCurlLower = 7.5/10;
let pressUpper = 3/10;
let pressLower = 4.5/10;

// 시간
let savedTime = 0;
let autoNextTime = 5000;


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
  // gameOutro = new gameOutro();



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
  for(let i=0; i<3; i++){
    coach[i] = loadImage('assets/sketch/coach/' + i + '.png');
  }

  //max v
  for(let i=0; i<8; i++){
    max[i] = loadImage('assets/sketch/max/' + i + '.png');
  }

  //sound v
  for(let i=0; i<3; i++){
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
  for(let i=0; i<1; i++){
    gameTitle_bg[i] = loadImage('assets/phase0/gameTitle/bg/' + i + '.png');
  }
  for(let i=0; i<0; i++){
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
  for(let i=0; i<3; i++){
    tutorial1_ui[i] = loadImage('assets/phase1/tutorial1/ui/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    tutorial1_sil[i] = loadImage('assets/phase1/tutorial1/sil/' + i + '.png');
  }

  //stage1
  for(let i=0; i<6; i++){
    stage1_chr[i] = loadImage('assets/phase1/stage1/chr/' + i + '.png');
  }
  for(let i=0; i<22; i++){
    stage1_ui[i] = loadImage('assets/phase1/stage1/ui/' + i + '.png'); //********
  }
  for(let i=0; i<1; i++){
    stage1_bg[i] = loadImage('assets/phase1/stage1/bg/' + i + '.png');
  }
  for(let i=0; i<2; i++){
    stage1_snd[i] = loadSound('assets/phase1/stage1/snd/' + i + '.mp3');
  }
  for(let i=0; i<3; i++){
    stage1_sil[i] = loadImage('assets/phase1/stage1/sil/' + i + '.png');
  }

  // clear1
  for(let i=0; i<2; i++){
    clear1_bg[i] = loadImage('assets/phase1/clear1/bg/' + i + '.png');
  }

  //phase2
  //map2
  for(let i=0; i<1; i++){
    map2_bg[i] = loadImage('assets/phase2/map2/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   map2_snd[i] = loadSound('assets/phase1/map1/snd/' + i + '.mp3');
  // }
  for(let i=0; i<1; i++){
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
  for(let i=0; i<3; i++){
    tutorial2_ui[i] = loadImage('assets/phase2/tutorial2/ui/' + i + '.png');
  }
  for(let i=0; i<12; i++){
    tutorial2_sil[i] = loadImage('assets/phase2/tutorial2/sil/' + i + '.png');
  }

  // //stage2
  // for(let i=0; i<6; i++){
  //   stage2_chr[i] = loadImage('assets/phase2/stage2/chr/' + i + '.png');
  // }
  // for(let i=0; i<22; i++){
  //   stage2_ui[i] = loadImage('assets/phase2/stage2/ui/' + i + '.png'); //********
  // }
  // for(let i=0; i<1; i++){
  //   stage2_bg[i] = loadImage('assets/phase2/stage2/bg/' + i + '.png');
  // }
  // for(let i=0; i<2; i++){
  //   stage2_snd[i] = loadSound('assets/phase2/stage2/snd/' + i + '.mp3');
  // }
  // for(let i=0; i<3; i++){
  //   stage2_sil[i] = loadImage('assets/phase2/stage2/sil/' + i + '.png');
  // }

  // clear2
  for(let i=0; i<1; i++){
    clear2_bg[i] = loadImage('assets/phase2/clear2/bg/' + i + '.png');
  }

  //phase3

  //map3
  for(let i=0; i<1; i++){
    map3_bg[i] = loadImage('assets/phase3/map3/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   map3_snd[i] = loadSound('assets/phase3/map3/snd/' + i + '.mp3');
  // }
  for(let i=0; i<1; i++){
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
  // for(let i=0; i<3; i++){
  //   tutorial3_ui[i] = loadImage('assets/phase3/tutorial3/ui/' + i + '.png');
  // }
  // for(let i=0; i<12; i++){
  //   tutorial3_sil[i] = loadImage('assets/phase3/tutorial3/sil/' + i + '.png');
  // }

  //stage3
  // for(let i=0; i<6; i++){
  //   stage3_chr[i] = loadImage('assets/phase3/stage3/chr/' + i + '.png');
  // }
  // for(let i=0; i<22; i++){
  //   stage3_ui[i] = loadImage('assets/phase3/stage3/ui/' + i + '.png'); //********
  // }
  // for(let i=0; i<1; i++){
  //   stage3_bg[i] = loadImage('assets/phase3/stage3/bg/' + i + '.png');
  // }
  // for(let i=0; i<2; i++){
  //   stage3_snd[i] = loadSound('assets/phase3/stage3/snd/' + i + '.mp3');
  // }
  // for(let i=0; i<3; i++){
  //   stage3_sil[i] = loadImage('assets/phase3/stage3/sil/' + i + '.png');
  // }

  // clear3
  for(let i=0; i<1; i++){
    clear3_bg[i] = loadImage('assets/phase3/clear3/bg/' + i + '.png');
  }

  //phase4
  // map4
  for(let i=0; i<1; i++){
    map4_bg[i] = loadImage('assets/phase4/map4/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   map4_snd[i] = loadSound('assets/phase4/map4/snd/' + i + '.mp3');
  // }
  for(let i=0; i<1; i++){
    map4_chr[i] = loadImage('assets/phase4/map4/chr/' + i + '.png');
  }

  //story4
  for(let i=0; i<2; i++){
    story4_bg[i] = loadImage('assets/phase4/story4/bg/' + i + '.png');
  }
  // for(let i=0; i<0; i++){
  //   story4_snd[i] = loadSound('assets/phase4/story4/snd/' + i + '.mp3');
  // }
  for(let i=0; i<1; i++){
    story4_ui[i] = loadImage('assets/phase4/story4/ui/' + i + '.png');
  }

  // //tutorial4
  // for(let i=0; i<3; i++){
  //   tutorial4_ui[i] = loadImage('assets/phase4/tutorial4/ui/' + i + '.png');
  // }
  // for(let i=0; i<12; i++){
  //   tutorial4_sil[i] = loadImage('assets/phase4/tutorial4/sil/' + i + '.png');
  // }

  // stage4
  for(let i=0; i<1; i++){
    stage4_bg[i] = loadImage('assets/phase4/stage4/bg/' + i + '.png');
  }
  // for(let i=0; i<1; i++){
  //   stage4_chr[i] = loadImage('assets/phase4/stage4/chr/' + i + '.png');
  // }


  for(let i=0; i<3; i++){
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
  for(let i=0; i<2; i++){
    stage4_chr_max_defend[i] = loadImage('assets/phase4/stage4/chr/max/defend/' + i + '.png'); // 2
  }
  for(let i=0; i<1; i++){
    stage4_chr_boss_default[i] = loadImage('assets/phase4/stage4/chr/boss/default/' + i + '.png'); // 1
  }
  for(let i=0; i<1; i++){
    stage4_chr_boss_attack[i] = loadImage('assets/phase4/stage4/chr/boss/attack/' + i + '.png'); // 2
  }
  for(let i=0; i<2; i++){
    stage4_chr_boss_defend[i] = loadImage('assets/phase4/stage4/chr/boss/defend/' + i + '.png'); // 2
  }
  for(let i=0; i<16; i++){
    stage4_ui[i] = loadImage('assets/phase4/stage4/ui/' + i + '.png');
  }
  for(let i=0; i<9; i++){
    stage4_sil[i] = loadImage('assets/phase4/stage4/sil/' + i + '.png');
  }
  for(let i=0; i<10; i++){
    stage4_snd[i] = loadSound('assets/phase4/stage4/snd/' + i + '.mp3');
  }

  //gameOutro


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
  // let canvasWidth = windowWidth
  // let canvasHeight = windowWidth * 9 / 16;
  //let canvas = createCanvas(canvasWidth, canvasHeight);
  createCanvas(windowWidth, windowWidth * 9 / 16);
  // canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
  // canvas.style('display', 'block');
  // canvas.style('margin', 'auto');
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
  console.log("phase " + phase);
  console.log("scene " + scene);
  
  switch(phase){
    case 0: //phase0
      if(scene == 0){ // gameTitle
        gameTitle.display();
      } 
      else if (scene == 1){ // tutorial0
        tutorial0.display();
      }
      else if (scene == 2){ // gameIntro
        gameIntro.display();
      }
      break;

    case 1: //phase1
      if (scene == 0){ // map1
        map1.move();
        map1.display();
      }
      else if (scene == 1){ // story1
        story1.display();
      }
      else if (scene == 2){ //tutorial1
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
        trackWrists();
        stage1.display();
        stage1.check(dumbbellCurlUpper, dumbbellCurlLower);
        //stage1.sound();
        if (stage1.count <= 0){
          if (millis() - savedTime > autoNextTime){
            if (stage1.getCut() < stage1.getMaxCut()) stage1.increaseCut();
            else scene++;
          }
        }
      }
      else if (scene == 4){ //clear1
        clear1.display();
      }
      break;
    
    case 2: //phase2
      if(scene == 0){ //map2
        map2.display();
      }
      else if(scene == 1){ //story2
        story2.display();
      }
      else if(scene == 2){ // tutorial2
        tutorial2.display();
        if (tutorial2.getCut() == 6){
          trackWrists();
          tutorial2.checkPass(reverseCurlUpper, reverseCurlLower);
          if (tutorial2.lowerPass) tutorial2.increaseCut();
        }
        else if (tutorial2.getCut() == 7){
          trackWrists();
          tutorial2.checkPass(reverseCurlUpper, reverseCurlLower);
          if (tutorial2.upperPass){
            tutorial2.increaseCut();
            tutorial2.lowerPass = false;
            tutorial2.upperPass = false;
          }
        }
        else if (tutorial2.getCut() == 8){
          trackWrists();
          tutorial2.checkPass(reverseCurlUpper, reverseCurlLower);
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
        trackWrists();
        stage2.display();
        stage2.check(reverseCurlUpper, reverseCurlLower);
        //stage2.sound();
        if (stage2.count <= 0){
          if (millis() - savedTime > autoNextTime){
            if (stage2.getCut() < stage2.getMaxCut()) stage2.increaseCut();
            else scene++;
          }
        }
      }
      else if(scene == 4){ //clear2
        clear2.display();
      }
      break;

    case 3: //phase3
    if(scene == 0){ //map3
      map3.display();
    }
    else if(scene == 1){ //story3
      story3.display();
    }
    else if(scene == 2){ // tutorial3
      tutorial3.display();
      if (tutorial3.getCut() == 6){
        trackWrists();
        tutorial3.checkPass(pressUpper, pressLower);
        if (tutorial3.lowerPass) tutorial3.increaseCut();
      }
      else if (tutorial3.getCut() == 7){
        trackWrists();
        tutorial3.checkPass(pressUpper, pressLower);
        if (tutorial3.upperPass){
          tutorial3.increaseCut();
          tutorial3.lowerPass = false;
          tutorial3.upperPass = false;
        }
      }
      else if (tutorial3.getCut() == 8){
        trackWrists();
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
      trackWrists();
      stage3.display();
      stage3.check(pressUpper, pressLower);
      //stage3.sound();
      if (stage3.count <= 0){
        if (millis() - savedTime > autoNextTime){
          if (stage3.getCut() < stage3.getMaxCut()) stage3.increaseCut();
          else scene++;
        }
      }
    }
    else if(scene == 4){ //clear3
      clear3.display();
    }
    break;

    case 4: //phase4
      if(scene == 0){ // map4
        // map4.move();
        map4.display();
      }
      else if (scene == 1){ // story4
        story4.display();
      }
      else if (scene == 2){ // tutorial4
        tutorial4.display();
      }
      else if (scene == 3){ // stage4
        if(stage4.countMax > 0 && stage4.countBoss > 0){
          if(stage4.gaming == true){
            trackWrists();
            stage4.play();
            stage4.displayGame();
            stage4.arcLength += 0.7;
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
          phase++;
          scene = 0;
        }
      }
      break;

    case 5: //phase5
      gameOutro.display();
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
          if(map1.moveOn == false){
            map1.moveOn = true;
          }
          else  {
            scene++;
          }
        }
        else if (scene == 1){ //story1
          if (story1.cut < story1.maxcut) story1.cut++;
          else {
            scene++;
            savedTime = millis();
          }
        }
        else if (scene == 3){ //stage1
          if (stage1.count <= 0){
            // if (tutorial4.getCut() < tutorial4.getMaxCut()) tutorial4.increaseCut();
            if (stage1.getCut < stage1.maxCut) stage1.increaseCut();
            else scene++;
          }
        }
        else if (scene == 4){ //clear1
          if (clear1.cut < clear1.maxCut) clear1.cut++;
          else {
            phase++;
            scene = 0;
          }
        }
      break;

      case 2:
        if(scene == 0){ //map2
          scene++;
        }
        else if(scene == 1){ //story2
          if(story2.cut < story2.maxcut){
            story2.cut++;
          }
          else {
            scene++;
          }
        }
        else if(scene == 3){ //stage2
          if (stage2.count <= 0){
            if (stage2.cut < stage2.maxCut) stage2.cut++;
            else scene++;
          }
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
          scene++;
        }
        else if(scene == 1){ //story3
          if(story3.cut < story3.maxcut){
            story3.cut++;
          }
          else {
            scene++;
          }
        }
        else if(scene == 3){ //stage3
          if (stage3.count <= 0){
            if (stage3.cut < stage3.maxCut) stage3.cut++;
            else scene++;
          }
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
          scene++;
        }
        else if(scene == 1){ //story4
          if(story4.cut < story4.maxcut){
            story4.cut++;
          }
          else {
            scene++;
          }
        }
        else if (scene == 2){ //tutorial4
          if (tutorial4.getCut() < tutorial4.getMaxCut()) tutorial4.increaseCut();
          else scene++;
        }
        else if (scene == 3 && !stage4.gameStarted){ //stage4
          stage4.gameStarted = true;
          stage4.gaming = true;
          savedtime = millis();
        }
      break;

      case 5:
      default:
    }
  }
}



function mouseClicked() {
  // rect(width * 12 / 13, height / 18, width / 20, height / 12);
  // rect(width - 70, 63, 90, 90); exit box size
  if(phase !=0 || scene >= 1 ){
    if(mouseX >= width * 12 / 13 &&
      mouseX <= width * 12 / 13 + width / 20 &&
      mouseY >= height / 18 &&
      mouseY <= height / 18 + height / 12){
       exit = true;
   }
  }
  
  // rect(width / 2 - width / 150 - width / 6, height / 2 + height / 19, width / 6, height / 15); yes box size
  // rect(width / 2 + width / 60, height / 2 + height / 19, width / 6, height / 15); no box size
  // rect((width / 2 + width / 100 + width / 6), height / 2 - height / 7.5, width / 50, width / 50); x box size
  if(exit == true){
    if(mouseX >= width / 2 - width / 150 - width / 6 &&
       mouseX <= width / 2 - width / 150 - width / 6 + width / 6 &&
       mouseY >= height / 2 + height / 19 &&
       mouseY <= height / 2 + height / 19 + height / 15){
        location.reload(); // 페이지 새로고침
        // phase = 0;
        // scene = 0;

        // //turn every cut to 0
        // gameIntro.cut = 0;

        // //phase1
        // map1.cut = 0;
        // map1.moveOn = false;
        // story1.cut = 0;
        // tutorial1.cut = 0;
        // tutorial1.count = 3;
        // stage1.cut = 0;
        // stage1.count = 5;
        // clear1.cut = 0;
        // stage4.countBoss = 9;
        // stage4.countMax = 3;
        // stage4.index = 0; //sequence의 인덱스
        // stage4.gaming = false ; //동작을 수행, false는 결과를 보여주는 단계
        // stage4.attackSuccess = false; // A,B에 성공, 보스의 hp -
        // stage4.attackFail = false; // A,B 실패, 아무 영향 없음
        // stage4.defendSuccess = false; // C 성공, 아무 영향 없음.
        // stage4.defendFail = false;
        // stage4.gameStarted = false;

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
        // exit = false;
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

// bodytracking - 손목의 위치 변수에 플레이어의 현재 위치를 저장한다
function trackShoulders(){
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

function playOnce(track){
  if (!track.isPlaying()) track.play();
}