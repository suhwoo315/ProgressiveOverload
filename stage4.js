class Stage4 {
    constructor(){
        this.seq = ["A", //0 A= 덤벨컬
                    "B", //1 B=리버스컬
                    "C",
                   "B"]; //2 C=프레스
        this.index = 0; //sequence의 인덱스
        this.gaming = true ; //동작을 수행, false는 결과를 보여주는 단계
        this.attackSuccess = false; // A,B에 성공, 보스의 hp -
        this.attackFail = false; // A,B 실패, 아무 영향 없음
        this.defendSuccess = false; // C 성공, 아무 영향 없음.
        this.defendFail = false; // C 실패, Max의 hp - 
        this.countMax = 3; // max의 hp, 0이 되면 게임 종료
        this.countBoss = 9; // 보스의 hp, 0이 되면 게임 종료

        // 아직 쓰일지 모르는 변수들
        this.isGoingup = true;
        this.currChr = 0;
        this.prevChr = 0;
        this.actionTime = 3000;
        this.resultTime = 2000;
        
    }

    //////////////gaming == true일 때의 함수////////////
    displayGame(){//리듬게임 아이콘 3개 asset과 유저 실루엣 관련 게이지 asset + 보스와 맥스(둘 다 대기모션, abc공통)
      // 배경
      if (this.countBoss > 6) image(stage4_bg[0], 0, 0, windowWidth, windowHeight);
      else if (this.countBoss > 3) image(stage4_bg[1], 0, 0, windowWidth, windowHeight);
      else image(stage4_bg[2], 0, 0, windowWidth, windowHeight);

      // 캐릭터
      image(stage4_chr_max_default[0], windowWidth/2 - 100, windoHeight/2, 50, 100);


      if(this.seq[this.index] == "A"){
        
      }
      else if(this.seq[this.index] == "B"){
        
      }
      else if(this.seq[this.index] == "C"){
        
      }
    }
  
    check3sec(){
      //if(3초 지났으면) {return false}; / else if(3초 이내일 때에는) {return true};
      let passedTime = millis() - savedTime;
      if(passedTime > this.actionTime) return false;
        else return true;
    }

    checkA(leftWristY, rightWristY){//stage1 참고, 동작 수행 여부 판단
        if (this.count > 0){
            let y = (leftWristY + rightWristY) / 2;
            this.drawDumbbell(y);
            this.prevChr = this.currChr;

            if (y < height*3/9) {
                if (this.prevChr == 4 && this.isGoingUp){
                    this.currSil = 2;
                    this.currChr = 5;
                    this.isGoingUp = !this.isGoingUp;
                    this.count--;

                }
            }
            else if (y < height*4/9) {
                if (this.prevChr == 3 && this.isGoingUp || this.prevChr == 5 && !this.isGoingUp){
                    this.currChr = 4;
                }
            }
            else if (y < height*5/9) {
                if (this.prevChr == 2 && this.isGoingUp || this.prevChr == 4 && !this.isGoingUp){
                    this.currSil = 1;
                    this.currChr = 3;
                }
            }
            else if (y < height*5.5/9) {
                if (this.prevChr == 1 && this.isGoingUp || this.prevChr == 3 && !this.isGoingUp){
                    this.currChr = 2;
                }
            }
            else if (y < height*6/9) {
                if (this.prevChr == 0 && this.isGoingUp || this.prevChr == 2 && !this.isGoingUp){
                    this.currSil = 0;
                    this.currChr = 1;
                }
            }
            else {
                if (this.prevChr == 1 && !this.isGoingUp){
                    this.currChr = 0;
                    this.isGoingUp = !this.isGoingUp;
                }
            }
        }
    }
    

    checkB(){//stage2 참고, 동작 수행 여부 판단
      
    }

    checkC(){//stage3 참고, 동작 수행 여부 판단
      
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
          if(checkA() == true){
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
          if(checkB() == true){
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
           if(checkC() == true){
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