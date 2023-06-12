class Stage4 {
    constructor(){
        this.seq = ["A", //0 A= 덤벨컬
                    "C", //1 B=리버스컬
                    "B",
                   "C", "A", "A", "C"]; //2 C=프레스
        this.index = 0; //sequence의 인덱스
        this.gaming = true ; //동작을 수행, false는 결과를 보여주는 단계
        this.attackSuccess = false; // A,B에 성공, 보스의 hp -
        this.attackFail = false; // A,B 실패, 아무 영향 없음
        this.defendSuccess = false; // C 성공, 아무 영향 없음.
        this.defendFail = false; // C 실패, Max의 hp - 
        this.countMax = 3; // max의 hp, 0이 되면 게임 종료
        this.countBoss = 9; // 보스의 hp, 0이 되면 게임 종료

        this.startAngle = -90;
        this.endAngle = 0;
        this.radius = 200;
        this.arcLength = 10;

        // 아직 쓰일지 모르는 변수들
        this.currSil = 0;
        this.currChr = 0;
        this.touchLower = true;
        this.touchUpper = false;
        this.actionTime = 3000;
        this.resultTime = 2000;
        
    }





    //////////////gaming == true일 때의 함수////////////
    displayGame(){//리듬게임 아이콘 3개 asset과 유저 실루엣 관련 게이지 asset + 보스와 맥스(둘 다 대기모션, abc공통)
      //운동에 상관없는 asset : 배경, 캐릭터, ui, hp bar, hp
      // 배경
      imageMode(CENTER); //보스 hp에 따라서 달라짐 9~7, 6~4, 3~0
      if(this.countBoss > 6) {
        image(stage4_bg[0], width / 2, height / 2, width, height);
      }
      else if(this.countBoss >= 4 && this.countBoss <= 6){
        image(stage4_bg[1], width / 2, height / 2, width, height);
      }
      else if(this.countBoss < 4){
        image(stage4_bg[2], width / 2, height / 2, width, height);
      }
      image(stage4_ui[15], width / 2, height / 2, width, height);
      

      // 캐릭터
      image(stage4_chr_boss_default[0], width/2 + 400, height/2 + 20, 500, 500); //boss
      // image(stage4_chr_max_default[0], width/2 - 100, height/2, 50, 100); //max
      image(max[5], width / 2 - 100, height / 2, 600, 600); //max
      
      //ui
      imageMode(CORNER);
      // image(stage4_ui[6], width / 2 - 20 - 100, height / 2, width, height); // 시퀀스 바
      image(stage4_ui[6], 40, 0, width * 0.7 - 150, height* 0.8 + 5);
      imageMode(CENTER);
      image(stage4_ui[14], width / 2, height / 2 + 80, width, height); //운동 이름
      
      image(stage4_ui[13], width / 2, height / 2 + 40 + 80, width, height); //실루엣 배경
      image(stage4_ui[0], width / 2 - 10, height / 2 + 60, width, height); //게이지 바
      image(stage4_ui[1], width / 2 - 10, height / 2 + 60, width, height); //게이지 아령, 사람 손 위치에 따라서 다르게

      //hp bar
      image(stage4_ui[2], width / 2, height / 2 + 50, width, height); //보스와 맥스의 hp
      //max hp
      if(this.countMax == 3){
        fill(0, 255, 0); //green
        rectMode(CORNER);
        rect(width / 2 - 350, height - 135 + 50, 470, 60); 
      }
      else if(this.countMax == 2){
        fill(255, 255, 0); //yellow
        rectMode(CORNER);
        rect(width / 2 - 350 + (470 * 1/3), height - 135 + 50, 470 * 2/3, 60); 
      }
      else if(this.countMax == 1){
        fill(255, 0, 0); //red
        rectMode(CORNER);
        rect((width / 2) - 350 + (470 * 2/3), height - 135 + 50, 470 * 1/3, 60); 
      }
      
      //boss hp : 1~3 red  4~6 yellow 7~9 blue
      switch(this.countBoss){
        case 1:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 1/9, 60);
          break;
        case 2:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 2/9, 60);
          break;
        case 3:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 3/9, 60);
          break;
        case 4:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 4/9, 60);
          break;
        case 5:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 5/9, 60);
          break;
        case 6:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 6/9, 60);
          break;
        case 7:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 7/9, 60);
          break;
        case 8:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470 * 8/9, 60);
          break;
        case 9:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(width / 2 + 135, height - 135 + 50, 470, 60);
          break;
      }

      //운동에 따라 달라지는 asset : 시퀀스 아이콘, 운동 실루엣
      let aX1 = width / 2 - 330;
      let aX2 = width / 2 - 330 + 126;
      let aX3 = width / 2 - 330 + 126*2;
      let aX4 = width / 2 - 330 + 126*3;
      let aX5 = width / 2 - 330 + 126*4;
      let bX1 = width / 2 - 330 - 126;
      let bX2 = width / 2 - 330;
      let bX3 = width / 2 - 330 + 126;
      let bX4 = width / 2 - 330 + 126*2;
      let bX5 = width / 2 - 330 + 126*3;
      let cX1 = width / 2 - 330 - 126*2;
      let cX2 = width / 2 - 330 - 126;
      let cX3 = width / 2 - 330;
      let cX4 = width / 2 - 330 + 126;
      let cX5 = width / 2 - 330 + 126*2;
      let iconY = height / 2 - 44;
      let iconW = width * 0.9;
      let iconH = height * 0.9;
      if(this.seq[this.index] == "A"){
        //ui
        //시퀀스 아이콘 5개 a = stage4_ui[3] / b = stage4_ui[4] / c = stage4_ui[5]
        //a의 x좌표 : width / 2 - 330 || width / 2 - 330 + 126 || width / 2 - 330 + 126*2|| width / 2 - 330 + 126*3 || width / 2 - 330 + 126*3
        //b의 x좌표 : width / 2 - 142 || width / 2 || 2 or width + 142
        //c의 x좌표 : width / 2 - 282 || width / 2 - 142 || width / 2
        
        //현재 진행중인 운동
        image(stage4_ui[3], aX1, iconY, iconW, iconH);
        
        // 두번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX2, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX2, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX2, iconY, iconW, iconH);
        }

        //세 번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX3, iconY, iconW, iconH);
        }

        //네 번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX4, iconY, iconW, iconH);
        }

        //다섯 번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX5, iconY, iconW, iconH);
        }
        
        //운동 실루엣
        image(stage4_sil[0], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 0~2 중 다르게
        //text
        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(0);
        text("덤벨 컬", width / 8 - 30, height / 2 - 230 + 80);
      }
      else if(this.seq[this.index] == "B"){
        //ui
        //시퀀스 아이콘 5개
        //현재 진행중인 운동
        image(stage4_ui[4], iconX, iconY, iconW, iconH);
        //다음으로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], width / 2 + 142, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], width / 2 - 142, height / 2, width, height);
        }

        //다음 다음에 오는 운동
        if(this.seq[(this.index+2)%this.seq.length] == 'A'){
          image(stage4_ui[3], width / 2 + 282, height / 2, width, height); //a
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          image(stage4_ui[4], width / 2 + 142, height / 2, width, height); //b
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          image(stage4_ui[5], width / 2, height / 2, width, height); //c
        }
        
        //운동 실루엣
        image(stage4_sil[3], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 3~5 다르게
        //text
        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(0);
        text("리버스 컬", width / 8 - 30, height / 2 - 230 + 80);
      }
      else if(this.seq[this.index] == "C"){
        //ui
        //시퀀스 아이콘 3개
        //현재 진행중인 운동
        image(stage4_ui[5], width / 2 - 282, height / 2, width, height);
        //다음으로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          image(stage4_ui[3], width / 2 + 142, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          image(stage4_ui[4], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          image(stage4_ui[5], width / 2 - 142, height / 2, width, height);
        }

        //다음 다음에 오는 운동
        if(this.seq[(this.index+2)%this.seq.length] == 'A'){
          image(stage4_ui[3], width / 2 + 282, height / 2, width, height); //a
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          image(stage4_ui[4], width / 2 + 142, height / 2, width, height); //b
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          image(stage4_ui[5], width / 2, height / 2, width, height); //c
        }

        //운동 실루엣
        image(stage4_sil[6], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 3~5 다르게
        //text
        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(0);
        text("오버헤드 프레스", width / 8 - 30, height / 2 - 230 + 80);
      }

      // 호의 길이에 따라 끝 각도 계산
      this.endAngle = map(this.arcLength, 10, 300, 0, 360);

      // 부채꼴 그리기
      fill(255, 0, 0); // 색상 설정
      // arc(width / 2, height / 2, this.radius * 2, this.radius * 2, this.startAngle, this.startAngle + this.endAngle); // 원 중심 좌표와 크기, 시작각과 끝각 설정

      if (this.arcLength > 300) {
        this.arcLength = 10; // 호의 길이가 최대값에 도달하면 초기값으로 되돌림
      }

    }//displayGame()의 끝
  







    check3sec(){
      //if(3초 지났으면) {return false}; / else if(3초 이내일 때에는) {return true};
      let passedTime = millis() - savedTime;
      if(passedTime > this.actionTime) return false;
        else return true;
    }

    check(upperFraction, lowerFraction){
      let y = (leftWristY + rightWristY) / 2;
      this.drawDumbbell(y);

      let upperBound = height*upperFraction;
      let lowerBound = height*lowerFraction;

      if (y < upperBound) {
          this.currChr = 5;
          this.currSil = 2;
          if (this.touchLower){
              this.count--;
              this.touchLower = false;
              this.touchUpper = true;
          }
      }
      else if (y < upperBound + (lowerBound-upperBound)*1/4) {
          this.currChr = 4;
          this.currSil = 2;
      }
      else if (y < upperBound + (lowerBound-upperBound)*2/4) {
          this.currChr = 3;
          this.currSil = 1;
      }
      else if (y < upperBound + (lowerBound-upperBound)*3/4) {
          this.currChr = 2;
          this.currSil = 1;
      }
      else if (y < lowerBound) {
          this.currChr = 1;
          this.currSil = 0;
      }
      else {
          this.currChr = 0;
          this.currSil = 0;
          if (this.touchUpper){
              this.touchLower = true;
              this.touchUpper = false;
          }
      }

      textSize(100);
      fill("black");
      text(this.currChr, 50, 400);
    }

  // 움직이는 아령 UI를 그린다
  drawDumbbell(y){
    let maxY = height*2/5 + 100;
    let minY = height*2/5 - 100;
    let dumbbellY = y/height * (minY - maxY);
    //image(stage1_ui[3], width/3.5, minY - dumbbellY, 50, 50);
  }

// 제한된 시간 안에 동작을 성공해야한다
     play(){
      //gaming=true일 때만 실행. 3초 내에 미션을 수행했는지를 점검
      if(this.seq[this.index] == 'A'){
        if(checkTime() == false){//시간을 넘겨서 미션실패
          this.attackFail = true;
          this.gaming = false;
          savedTime = millis();
        }
        else{ //시간 안에 성공
          if(check(dumbbellCurlUpper, dumbbellCurlLower) == true){
            this.attackSuccess = true;
            this.gaming = false;
            savedTime = millis();
          }
        }  
      }
      else if(this.seq[this.index] == 'B'){
        if(checkTime() == false){//시간을 넘겨서 미션실패
          this.attackFail = true;
          this.gaming = false;
          savedTime = millis();
        }
        else{ //시간 안에 성공
          if(check(reverseCurlUpper, reverseCurlLower) == true){
            this.attackSuccess = true;
            this.gaming = false;
            savedTime = millis();
          }
        }  
      }
       else if(this.seq[this.index] == 'C'){
         if(check3sec() == false){//시간을 넘겨서 미션실패
           this.defendFail = true;
           this.gaming = false;
           savedTime = millis();
         }
         else{ //시간 안에 성공
           if(check(pressUpper, pressLower) == true){
             this.defendSuccess = true;
             this.gaming = false;
             savedTime = millis();
           }
         }  
       }
     //  savedTime = millis();
     // }
    // 알맞은 화면을 표시한다
    }







    //////////////gaming == false일 때의 함수/////////////
    check2sec(){//this.displayResult를 2초 동안 실행
      let passedTime = millis()-savedTime
      if(passedTime > this.resultTime) return false;
        else return true;
    }

    gauge(){//gauge함수에 따라서 displayResult 내의 게이지 속성이 달라짐
      if (this.attackSuccess == true) {
        this.countBoss--; // 보스 hp 감소
      }
      else if (this.defendFail == true) {
        this.countMax--; // 맥스 hp 감소
      }
    }

    displayResult(){//동작에 대한 결과 asset 예시 miss 등, 줄어든 게이지 asset, 리듬게임 아이콘 asset
      if(this.attackSuccess == true){
        
      }
      else if(this.attackFail == true){
        
      }
      else if(this.defendSuccess == true){
        
      }
      else if(this.defendFail == true){
        
      }
    }

    changeGame(){//초기화
      if(attackSuccess == truth || attackFail == truth || defendSuccess == truth || defendFail == truth){
        this.index = (this.index+1)%this.seq.length;
      }
      this.attackSuccess = false;
      this.attackFail = false;
      this.defendSuccess = false;
      this.defendFail = false;
      this.gaming = true;
  }
}