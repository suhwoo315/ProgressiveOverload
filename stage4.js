class Stage4 {
    constructor(){
        this.gameStarted = false;
        this.seq = ["A", //0 A= 덤벨컬
                    "C", //1 B=리버스컬
                    "B",
                   "C", "A", "C", "B"]; //2 C=프레스
        this.index = 0; //sequence의 인덱스
        this.gaming = false ; //동작을 수행, false는 결과를 보여주는 단계
        this.attackSuccess = false; // A,B에 성공, 보스의 hp -
        this.attackFail = false; // A,B 실패, 아무 영향 없음
        this.defendSuccess = false; // C 성공, 아무 영향 없음.
        this.defendFail = false; // C 실패, Max의 hp - 
        this.countMax = 1; // max의 hp, 0이 되면 게임 종료
        this.countBoss = 7; // 보스의 hp, 0이 되면 게임 종료

        this.startAngle = -90;
        this.endAngle = 0;
        this.radius = 45;
        this.arcLength = 10;

        // 아직 쓰일지 모르는 변수들
        this.currSil = 0;
        this.currChr = 0;
        this.touchUpper = false;
        this.touchLower = false;
        this.actionTime = 9000;
        this.resultTime = 2000;

        this.y = 0;
    }

    //////////////gaming == true일 때의 함수////////////
    displayGame(){//리듬게임 아이콘 3개 asset과 유저 실루엣 관련 게이지 asset + 보스와 맥스(둘 다 대기모션, abc공통)
      if (!this.gameStarted){
        image(stage4_bg[0], width / 2, height / 2, width, height);
        rectMode(CORNER);
        fill(255, 150);
        rect(0, 0, width, height);
        textAlign(CENTER, CENTER);
        text("자, 그럼 SPACE BAR를 눌러서 시작해볼까!!!", width/2, height/2);
        return;
      }

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
      
      //ui
      imageMode(CORNER);
      // image(stage4_ui[6], width / 2 - 20 - 100, height / 2, width, height); // 시퀀스 바
      image(stage4_ui[6], 40, 0, width * 0.7 - 150, height* 0.8 + 5);
      imageMode(CENTER);
      image(stage4_ui[14], width / 2, height / 2 + 80, width, height); //운동 이름
      
      image(stage4_ui[13], width / 2, height / 2 + 40 + 80, width, height); //실루엣 배경
      image(stage4_ui[0], width / 2 - 10, height / 2 + 60, width, height); //게이지 바
      // image(stage4_ui[1], width / 2 - 10, height / 2 + 60, width, height); //게이지 아령, 사람 손 위치에 따라서 다르게

      //hp bar
      image(stage4_ui[2], width / 2, height / 2 + 50, width, height); //보스와 맥스의 hp
      //max hp
      let maxHpX = width / 4 - 10;
      let maxHpY = height  * 7/ 8;
      let maxHpW = width / 3 + 20;
      let maxHpH = height / 12;
      let bossHpX = width / 4 + width / 3 + 30;
      let bossHpY = height * 7/8;
      let bossHpW = width / 3 + 20;
      let bossHpH = height / 12;
      if(this.countMax == 3){
        fill(0, 255, 0); //green
        rectMode(CORNER);
        rect(maxHpX, maxHpY, maxHpW, maxHpH); 
      }
      else if(this.countMax == 2){
        fill(255, 255, 0); //yellow
        rectMode(CORNER);
        rect(maxHpX + maxHpW / 3, maxHpY, maxHpW * 2/3, maxHpH); 
      }
      else if(this.countMax == 1){
        fill(255, 0, 0); //red
        rectMode(CORNER);
        rect(maxHpX + maxHpW * 2/3, maxHpY, maxHpW / 3, maxHpH); 
      }
      
      //boss hp : 1~3 red  4~6 yellow 7~9 blue
      switch(this.countBoss){
        
        case 1:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 1/9, bossHpH);
          break;
        case 2:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 2/9, bossHpH);
          break;
        case 3:
          fill(255, 0, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 3/9, bossHpH);
          break;
        case 4:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 4/9, bossHpH);
          break;
        case 5:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 5/9, bossHpH);
          break;
        case 6:
          fill(255, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 6/9, bossHpH);
          break;
        case 7:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 7/9, bossHpH);
          break;
        case 8:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW * 8/9, bossHpH);
          break;
        case 9:
          fill(0, 255, 0);
          rectMode(CORNER);
          rect(bossHpX, bossHpY, bossHpW, bossHpH);
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
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX3, iconY, iconW, iconH);
        }

        //네 번째로 오는 운동
        if(this.seq[(this.index+3)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX4, iconY, iconW, iconH);
        }

        //다섯 번째로 오는 운동
        if(this.seq[(this.index+4)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX5, iconY, iconW, iconH);
        }
        
        //운동 실루엣
        image(stage4_sil[this.currSil], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 0~2 중 다르게
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
        image(stage4_ui[4], bX1, iconY, iconW, iconH);
        
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
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX3, iconY, iconW, iconH);
        }

        //네 번째로 오는 운동
        if(this.seq[(this.index+3)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX4, iconY, iconW, iconH);
        }

        //다섯 번째로 오는 운동
        if(this.seq[(this.index+4)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX5, iconY, iconW, iconH);
        }
        
        
        //운동 실루엣
        image(stage4_sil[this.currSil + 3], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 3~5 다르게
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
        image(stage4_ui[5], cX1, iconY, iconW, iconH);
        
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
        if(this.seq[(this.index+2)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX3, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+2)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX3, iconY, iconW, iconH);
        }

        //네 번째로 오는 운동
        if(this.seq[(this.index+3)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX4, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+3)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX4, iconY, iconW, iconH);
        }

        //다섯 번째로 오는 운동
        if(this.seq[(this.index+4)%this.seq.length] == 'A') {
          image(stage4_ui[3], aX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'B'){
          image(stage4_ui[4], bX5, iconY, iconW, iconH);
        }
        else if(this.seq[(this.index+4)%this.seq.length] == 'C'){
          image(stage4_ui[5], cX5, iconY, iconW, iconH);
        }
        

        //운동 실루엣
        image(stage4_sil[this.currSil + 6], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //캠 인식에 따라서 6~8 다르게
        //text
        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(0);
        text("오버헤드 프레스", width / 8 + 30, height / 2 - 230 + 80);
      }

      // 호의 길이에 따라 끝 각도 계산
      this.endAngle = map(this.arcLength, 0, 300, 0, 360);

      // 부채꼴 그리기
      fill(0); // 색상 설정
      noStroke();
      arc(135, 70, this.radius * 2, this.radius * 2, this.startAngle, this.startAngle + this.endAngle); // 원 중심 좌표와 크기, 시작각과 끝각 설정
      if (this.arcLength > 300) this.arcLength = 10; // 호의 길이가 최대값에 도달하면 초기값으로 되돌림

      this.drawDumbbell();

      if (this.gaming){
        // 캐릭터
        image(stage4_chr_boss_default[0], width/2 + 400, height/2  - 100, 450, 450); //boss
        image(stage4_chr_max_default[0], width/2, height/2, 600, 600); //max
        //image(max[5], width / 2 - 100, height / 2, 600, 600); //max
      }
      else {
        if(this.attackSuccess == true){
          //playOnce(stage4_snd[3]);
          image(stage4_chr_boss_defend[0], width/2 + 400, height/2  - 100, 450, 450); //boss
          switch(this.seq[this.index]){
            case 'A':
              if (frameCount % 20 < 10) image(stage4_chr_max_punch[0], width / 2, height / 2, 600, 600);
              else image(stage4_chr_max_punch[1], width / 2, height / 2, 600, 600);
              break;
            case 'B':
              if (frameCount % 20 < 10) image(stage4_chr_max_kick[0], width / 2, height / 2, 600, 600);
              else image(stage4_chr_max_kick[1], width / 2, height / 2, 600, 600);
              break;
            default:
              break;
          }
          image(stage4_ui[7], width/2, height/2, stage4_ui[7].width*1.5, stage4_ui[7].height*1.5); // perfect
        }
        else if(this.attackFail == true){
          //playOnce(stage4_snd[9]);
          image(stage4_chr_boss_defend[1], width/2 + 400, height/2  - 100, 450, 450);
          image(stage4_chr_max_default[0], width/2, height/2, 600, 600); //max
          image(stage4_ui[8], width/2, height/2, stage4_ui[8].width*1.5, stage4_ui[8].height*1.5); // miss
        }
        else if(this.defendSuccess == true){
          //playOnce(stage4_snd[5]);
          image(stage4_chr_boss_attack[0], width/2 + 400, height/2  - 100, 450, 450); //boss
          image(stage4_chr_max_defend[1], width / 2, height / 2, 600, 600);
          image(stage4_chr_max_defend[0], width / 2, height / 2, 600, 600);
          image(stage4_ui[7], width/2, height/2, stage4_ui[7].width*1.5, stage4_ui[7].height*1.5); // perfect
        }
        else if(this.defendFail == true){
          //playOnce(stage4_snd[3]);
          image(stage4_chr_boss_attack[0], width/2 + 400, height/2  - 100, 450, 450);
          image(stage4_chr_max_default[0], width/2, height/2, 600, 600); //max
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
      this.y = (leftWristY + rightWristY) / 2;
      console.log(this.y);
      //this.drawDumbbell();

      let upperBound = height*upperFraction;
      let lowerBound = height*lowerFraction;

      if (this.y < upperBound) {
        this.currChr = 5;
        this.currSil = 2;
        this.touchUpper = true;
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*1/4) {
          this.currChr = 4;
          this.currSil = 2;
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*2/4) {
          this.currChr = 3;
          this.currSil = 1;
      }
      else if (this.y < upperBound + (lowerBound-upperBound)*3/4) {
          this.currChr = 2;
          this.currSil = 1;
      }
      else if (this.y < lowerBound) {
          this.currChr = 1;
          this.currSil = 0;
      }
      else {
          this.currChr = 0;
          this.currSil = 0;
          this.touchLower = true;
      }

      if (this.touchLower && this.touchUpper) return true;
      else return false;

      // textSize(100);
      // fill("black");
      // text(this.currChr, 50, 400);
    }

  // 움직이는 아령 UI를 그린다
    drawDumbbell(){
      // let maxY = height;
      // let minY = 0;
      // let dumbbellY = y;
      // image(stage4_ui[1], width/ 2 - 10, this.y, width, height);
      // console.log("111111");
      // console.log(this.y);
      let maxY = height*2/5 + 100;
        let minY = height*2/5 - 100;
        let dumbbellY = this.y/height * (minY - maxY);
        image(stage1_ui[3], width/ 2 - 10, minY - dumbbellY + 150, width, height);

    // image(stage1_ui[3], width/3.5, minY - dumbbellY, 50, 50);
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
          if(this.check(reverseCurlUpper, reverseCurlLower) == true){
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
        console.log(this.countMax);
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