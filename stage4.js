class Stage4 {
    constructor(){
        this.gameStarted = false;
        this.seq = ["A", //0 A= 덤벨컬
                    "C", //1 B= 사레레
                    "B",
                   "C", "A", "B", "C", "B"]; //2 C= 숄더프레스
        this.index = 0; //sequence의 인덱스
        this.gaming = false ; //동작을 수행, false는 결과를 보여주는 단계
        this.attackSuccess = false; // A,B에 성공, 보스의 hp -
        this.attackFail = false; // A,B 실패, 아무 영향 없음
        this.defendSuccess = false; // C 성공, 아무 영향 없음.
        this.defendFail = false; // C 실패, Max의 hp - 
        this.countMax = 6; // max의 hp, 0이 되면 게임 종료
        this.countBoss = 6; // 보스의 hp, 0이 되면 게임 종료
        this.colors = [color(213, 41, 41), color(213, 122, 41), color(41, 159, 213)];

        this.startAngle = -90;
        this.endAngle = 0;
        this.radius = 87;
        this.arcLength = 10;

        this.touchUpper = false;
        this.touchMiddle = false;
        this.touchLower = false;
        this.actionTime = 9000;
        this.resultTime = 2000;

        this.y = 0;
        this.dumbbellY = 0;
        this.isUpper = false;
    }

    //////////////gaming == true일 때의 함수////////////
    displayGame(){//리듬게임 아이콘 3개 asset과 유저 실루엣 관련 게이지 asset + 보스와 맥스(둘 다 대기모션, abc공통)
      // if (!this.gameStarted){
      //   image(stage4_bg[0], width / 2, height / 2, width, height);
      //   rectMode(CORNER);
      //   fill(255, 150);
      //   rect(0, 0, width, height);
      //   textAlign(CENTER, CENTER);
      //   // text("자, 그럼 SPACE BAR를 눌러서 시작해볼까!!!", width/2, height/2);
      //   return;
      // }

      //운동에 상관없는 asset : 배경, , ui(standing point12,캐릭터(디폴트), 아이콘 배경, 큰 아이콘, 작은 아이콘, 게이지 막대12, 게이지 바, hp bar, hp)
      // 배경
      imageMode(CENTER); 
      image(stage4_bg[0], width / 2, height / 2, width, height);

      //standing point
      image(stage4_ui[2], width / 2, height / 2, width, height);
      image(stage4_ui[3], width / 2, height / 2, width, height);

      //디폴트 캐릭터
      // image(stage4_chr_max_default[0], width / 2, height / 2, width, height); //max
      // image(stage4_chr_boss_default[0], width / 2, height / 2, width, height); //boss

      //아이콘 시퀀스 배경
      image(stage4_ui[1], width / 2, height / 2, width, height);
      
      //게이지 막대 1 2
      imageMode(CENTER);
      if (this.touchUpper && !this.touchLower) image(stage4_ui[4], width / 2, height / 2, width, height);//내려야 함
      else if (!this.touchUpper && this.touchLower) image(stage4_ui[16], width / 2, height / 2, width, height); //올려야 함
      else {
        if (this.seq[this.index] == "A") this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower, false);
        else if (this.seq[this.index] == "B") this.drawDumbbell(this.y, sideUpper, sideLower, false);
        else this.drawDumbbell(this.y, pressUpper, pressLower, false);
        if (this.isUpper) image(stage4_ui[4], width / 2, height / 2, width, height); //내려야 함
        else image(stage4_ui[16], width / 2, height / 2, width, height); //올려야 함
      }

      // 게이지 바
      if (this.seq[this.index] == "A") this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower, true);
      else if (this.seq[this.index] == "B") this.drawDumbbell(this.y, sideUpper, sideLower, true);
      else this.drawDumbbell(this.y, pressUpper, pressLower, true);

      //hp bar
      image(stage4_ui[0], width / 2, height / 2, width, height);
      noStroke();
      fill(0);
      textSize(30);
      textAlign(CENTER, CENTER);
      text("맥스", width*4.1/20, height*16.4/20);
      text("머슬로스", width*15.85/20, height*16.4/20);
      

      //max hp
      let maxHpX = width*2.99/20;
      let maxHpY = height*17.11/20;
      let maxHpW = width*6.95/20;
      let maxHpH = height*1.135/20;
      rectMode(CORNER);
      noStroke();
      if (this.countMax > 4) fill(103, 255, 67);
      else if (this.countMax > 2) fill(245, 122, 67);
      else fill(254, 24, 26);
      rect(maxHpX, maxHpY, maxHpW * this.countMax/6, maxHpH);

      //bossHp
      let bossHpX = width*10.05/20;
      let bossHpY = height*17.11/20;
      let bossHpW = width*6.95/20;
      let bossHpH = height*1.135/20;
      //boss hp : 1~2 red  3~4 yellow 5~6 blue
      fill(254, 24, 26);
      rectMode(CORNER);
      if (this.countBoss > 4) fill(103, 255, 67);
      else if (this.countBoss > 2) fill(245, 122, 67);
      else fill(254, 24, 26);
      rect(bossHpX, bossHpY, bossHpW * this.countBoss/6, bossHpH);

      //운동에 따라 달라지는 asset : 시퀀스 아이콘
      // let aX1 = width / 2 - 330;
      // let aX2 = width / 2 - 330 + 126;
      // let aX3 = width / 2 - 330 + 126*2;
      // let aX4 = width / 2 - 330 + 126*3;
      // let aX5 = width / 2 - 330 + 126*4;
      // let bX1 = width / 2 - 330 - 126;
      // let bX2 = width / 2 - 330;
      // let bX3 = width / 2 - 330 + 126;
      // let bX4 = width / 2 - 330 + 126*2;
      // let bX5 = width / 2 - 330 + 126*3;
      // let cX1 = width / 2 - 330 - 126*2;
      // let cX2 = width / 2 - 330 - 126;
      // let cX3 = width / 2 - 330;
      // let cX4 = width / 2 - 330 + 126;
      // let cX5 = width / 2 - 330 + 126*2;
      // let iconY = height / 2 - 44;
      // let iconW = width * 0.9;
      // let iconH = height * 0.9;
      //시퀀스 아이콘 2개 a = stage4_ui[3] / b = stage4_ui[4] / c = stage4_ui[5]
        //a의 x좌표 : width / 2 - 330 || width / 2 - 330 + 126 || width / 2 - 330 + 126*2|| width / 2 - 330 + 126*3 || width / 2 - 330 + 126*3
        //b의 x좌표 : width / 2 - 142 || width / 2 || 2 or width + 142
        //c의 x좌표 : width / 2 - 282 || width / 2 - 142 || width / 2
      
      //아이콘 and 운동 이름
      let textX = width * 86 / 100;
      let textY = height * 51 / 100;
      if(this.seq[this.index] == "A"){
        //ui
        //현재 진행중인 운동
        // image(stage4_ui[3], aX1, iconY, iconW, iconH);
        image(stage4_ui[9], width / 2, height / 2, width, height);
        noStroke();
        fill(this.colors[0]);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("덤벨 컬", textX, textY);
        
        // 두번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width / 2, height / 2, width, height);
        }

        // 세번째로 오는 운동
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width * 58 / 100, height / 2, width, height);
        }

      }
      else if(this.seq[this.index] == "B"){
        //ui
        //시퀀스 아이콘 2개
        //현재 진행중인 운동
        // image(stage4_ui[4], bX1, iconY, iconW, iconH);
        image(stage4_ui[15], width / 2, height / 2, width, height);
                noStroke();
                fill(this.colors[1]);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("레터럴 레이즈", textX, textY);

        // 두번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width / 2, height / 2, width, height);
        }

        // 세번째로 오는 운동
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width * 58 / 100, height / 2, width, height);
        }

      }
      else if(this.seq[this.index] == "C"){
        //ui
        //시퀀스 아이콘 2개
        //현재 진행중인 운동
        // image(stage4_ui[4], bX1, iconY, iconW, iconH);
        image(stage4_ui[13], width / 2, height / 2, width, height);
                noStroke();
                fill(this.colors[2]);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("숄더 프레스", textX, textY);

        // 두번째로 오는 운동
        if(this.seq[(this.index+1)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width / 2, height / 2, width, height);
        }
        else if(this.seq[(this.index+1)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width / 2, height / 2, width, height);
        }

        // 세번째로 오는 운동
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          // image(stage4_ui[3], aX2, iconY, iconW, iconH);
          image(stage4_ui[6], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          // image(stage4_ui[4], bX2, iconY, iconW, iconH);
          image(stage4_ui[14], width * 58 / 100, height / 2, width, height);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          // image(stage4_ui[5], cX2, iconY, iconW, iconH);
          image(stage4_ui[10], width * 58 / 100, height / 2, width, height);
        }
      }

      // 호의 길이에 따라 끝 각도 계산
      this.endAngle = map(this.arcLength, 0, 300, 0, 360);

      // 부채꼴 그리기
      fill(0); // 색상 설정
      noStroke();
      arc(width*14.7/20, height*11.6/20, this.radius * 2, this.radius * 2, this.startAngle, this.startAngle + this.endAngle); // 원 중심 좌표와 크기, 시작각과 끝각 설정
      if (this.arcLength > 300) this.arcLength = 10; // 호의 길이가 최대값에 도달하면 초기값으로 되돌림

      if (this.gaming){
        // 캐릭터
        imageMode(CENTER);
        image(stage4_chr_boss_default[0], width/2 , height/2 , width, height); //boss
        image(stage4_chr_max_default[0], width/2, height/2, width, height); //max
        //image(max[5], width / 2 - 100, height / 2, 600, 600); //max
      }
      else {
        if(this.attackSuccess == true){
          stage4_snd[3].setVolume(2);
          playOnce(stage4_snd[3]);
          imageMode(CENTER)
          
          switch(this.seq[this.index]){
            case 'A':
              if (frameCount % 20 < 10) image(stage4_chr_max_punch[0], width / 2, height / 2, width, height);
              else image(stage4_chr_max_punch[1], width / 2, height / 2, width, height);
              image(stage4_chr_boss_defend[2], width / 2, height / 2, width, height); //boss
              break;
            case 'B':
              if (frameCount % 20 < 10) image(stage4_chr_max_kick[0], width / 2, height / 2, width, height);
              else image(stage4_chr_max_kick[1], width / 2, height / 2, width, height);
              image(stage4_chr_boss_defend[3], width / 2, height / 2, width, height); //boss
              break;
            default:
              break;
          }
          image(stage4_ui[7], width/2, height/2, stage4_ui[7].width*1.5, stage4_ui[7].height*1.5); // perfect
        }
        else if(this.attackFail == true){
          stage4_snd[9].setVolume(2);
          playOnce(stage4_snd[9]);
          imageMode(CENTER);

          switch(this.seq[this.index]){
            case 'A':
              if (frameCount % 20 < 10) image(stage4_chr_max_punch[0], width / 2, height / 2, width, height);
              else image(stage4_chr_max_punch[1], width / 2, height / 2, width, height);
              image(stage4_chr_boss_defend[0], width / 2, height / 2, width, height); //boss
              break;

            case 'B':
              if (frameCount % 20 < 10) image(stage4_chr_max_kick[0], width / 2, height / 2, width, height);
              else image(stage4_chr_max_kick[1], width / 2, height / 2, width, height);
              image(stage4_chr_boss_defend[1], width / 2, height / 2, width, height); //boss
              break;
          }
          // image(stage4_chr_boss_defend[1], width/2, height/2, width, height);
          // image(stage4_chr_max_default[0], width/2, height/2, width, height); //max
          image(stage4_ui[8], width/2, height/2, stage4_ui[8].width*1.5, stage4_ui[8].height*1.5); // miss
        }
        else if(this.defendSuccess == true){
          stage4_snd[5].setVolume(2);
          playOnce(stage4_snd[5]);
          image(stage4_chr_boss_attack[0], width/2, height/2, width, height); //boss
          image(stage4_chr_boss_attack[1], width/2, height/2, width, height);
          // image(stage4_chr_max_defend[1], width / 2, height / 2, 600, 600);
          image(stage4_chr_max_defend[0], width / 2, height / 2, width, height);
          image(stage4_ui[7], width/2, height/2, stage4_ui[7].width*1.5, stage4_ui[7].height*1.5); // perfect
        }
        else if(this.defendFail == true){
          stage4_snd[3].setVolume(2);
          playOnce(stage4_snd[3]);
          image(stage4_chr_boss_attack[0], width/2, height/2, width, height);
          image(stage4_chr_boss_attack[1], width/2, height/2, width, height);
          image(stage4_chr_max_default[0], width/2, height/2, width, height); //max
          image(stage4_ui[8], width/2, height/2, stage4_ui[8].width*1.5, stage4_ui[8].height*1.5); // miss
        }
      }

    }//displayGame()의 끝
  
    check3sec(){
      //if(3초 지났으면) {return false}; / else if(3초 이내일 때에는) {return true};
      let passedTime = millis() - savedTime;
      if(passedTime > this.actionTime){
        return false;
      }
      else return true;
    }

    check(upperFraction, lowerFraction){
      if (this.seq[this.index] == "A") this.y = (leftWristY + rightWristY) / 2;
      else this.y = (leftElbowY + rightElbowY) / 2;

      let upperBound = height*upperFraction;
      let lowerBound = height*lowerFraction;

      if (this.y < upperBound) {
        if (this.touchMiddle){
          this.touchUpper = true;
          this.touchMiddle = false;
          console.log("touchUpper");
        }
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*1/4) {
          
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*2/4) {
          this.touchMiddle = true;
          console.log("touchMiddle");
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*3/4) {

      }
      else if (this.y < lowerBound) {

      }
      else {
          if (this.touchMiddle) {
            this.touchLower = true;
            this.touchMiddle = false;
            console.log("touchLower");
          }
      }

      if (this.touchLower && this.touchUpper){
        this.touchLower = false;
        this.touchUpper = false;
        this.touchMiddle = false;
        return true;
      }
      else return false;
    }

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y, upperFraction, lowerFraction, isVisible){
      let upperBound = height*upperFraction;
      let lowerBound = height*lowerFraction;
      let boundHeight = lowerBound - upperBound;
      let boundY;
      if (y < upperBound) boundY = upperBound;
      else if (y > lowerBound) boundY = lowerBound;
      else boundY = y;
      
      let upperY = height*9.3/20;
      let lowerY = height*12.3/20;
      let barHeight = lowerY - upperY;
      this.dumbbellY = (barHeight/boundHeight)*(boundY - upperBound) + upperY;

      if (y > (upperBound + lowerBound) / 2) this.isUpper = false; //아래에 있다
      else this.isUpper = true; //위에 있다

      if (isVisible){
        imageMode(CENTER);
        image(stage4_ui[5], width/ 2, this.dumbbellY, width, stage4_ui[5].height);
      }
  }

    // 제한된 시간 안에 동작을 성공해야한다
    play(){
      //gaming=true일 때만 실행. 3초 내에 미션을 수행했는지를 점검
      if(this.seq[this.index] == 'A'){
        if(this.check3sec() == false){//시간을 넘겨서 미션실패
          this.attackFail = true;
          this.gaming = false;
          savedTime = millis();
        }
        else{ //시간 안에 성공
          if(this.check(dumbbellCurlUpper, dumbbellCurlLower) == true){
            this.attackSuccess = true;
            this.gaming = false;
            savedTime = millis();
          }
        }  
      }
      else if(this.seq[this.index] == 'B'){
        if(this.check3sec() == false){//시간을 넘겨서 미션실패
          this.attackFail = true;
          this.gaming = false;
          savedTime = millis();
        }
        else{ //시간 안에 성공
          if(this.check(sideUpper, sideLower) == true){
            this.attackSuccess = true;
            this.gaming = false;
            savedTime = millis();
          }
        }  
      }
       else if(this.seq[this.index] == 'C'){
         if(this.check3sec() == false){//시간을 넘겨서 미션실패
           this.defendFail = true;
           this.gaming = false;
           savedTime = millis();
         }
         else{ //시간 안에 성공
           if(this.check(pressUpper, pressLower) == true){
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
      if(passedTime > this.resultTime){
        return false;
      }
      else return true;
    }

    changeGame(){//점수 계산 및 초기화
      this.index = (this.index+1)%this.seq.length;
      if (this.attackSuccess == true) {
        this.countBoss--; // 보스 hp 감소
      }
      else if (this.defendFail == true) {
        this.countMax--; // 맥스 hp 감소
      }
      
      this.attackSuccess = false;
      this.attackFail = false;
      this.defendSuccess = false;
      this.defendFail = false;
      this.touchLower = false;
      this.touchUpper = false;
      this.gaming = true;
      this.arcLength = 10; // 호의 길이가 최대값에 도달하면 초기값으로 되돌림
      fill(255, 0, 0);
    }


    // 다음 phase로 넘어간다
    //increasePhase(){
      //phase++;
    //}
}