class Stage1 {
    constructor(){
        this.count = 5;
        this.currSil = 0;
        this.currChr = 0;
        //this.prevChr = 0;
        //this.isGoingUp = true;
        this.touchLower = false;
        this.touchUpper = true;
        this.bgOn = false;
        this.cut = 0;
        this.maxCut = 1;
        this.dialogue = ["첫 번째 도전과제를 달성하였습니다!",
                        "벨트를 획득하였습니다."];
    }

    // 알맞은 화면을 표시한다
    display(){
        if (this.count > 0){
            imageMode(CENTER);
            image(stage1_bg[0], width / 2, height / 2, width, height); //background
            if(this.count == 4){
                image(stage1_ui[7], width / 2, height / 2, width, height);
            }
            else if(this.count == 3){
                image(stage1_ui[8], width / 2, height / 2, width, height);
            }
            else if(this.count == 2){
                image(stage1_ui[9], width / 2, height / 2, width, height);
            }
            else if(this.count == 1){
                image(stage1_ui[10], width / 2, height / 2, width, height);
            }
            image(stage1_chr[this.currChr], width/2 + 50, height/2+20, 500, 500); // character 
            image(stage1_ui[6], width / 2, height / 2 + 40 + 80, width, height); //실루엣 배경
            image(stage1_sil[this.currSil], width / 10 + 20, height / 2 - 20 + 80, 300, 300); //sil
            image(stage1_ui[2], width / 2 - 10, height / 2 + 60, width, height); //게이지 바
            image(stage1_ui[0], width / 2, height / 2 + 80, width, height); // 운동 이름
            
            image(stage1_ui[4], width / 2, height / 2, width, height);
            if(this.count == 4){ //회색 아령
                image(stage1_ui[5], width / 2 + 420, height / 2, width, height);
               
            }
            else if(this.count == 3){
                image(stage1_ui[5], width / 2 + 420, height / 2, width, height);
                image(stage1_ui[5], width / 2 + 210, height / 2, width, height);
            }
            else if(this.count == 2){
                image(stage1_ui[5], width / 2 + 420, height / 2, width, height);
                image(stage1_ui[5], width / 2 + 210, height / 2, width, height);
                image(stage1_ui[5], width / 2, height / 2, width, height);
            }
            else if(this.count == 1){
                image(stage1_ui[5], width / 2 + 420, height / 2, width, height);
                image(stage1_ui[5], width / 2 + 210, height / 2, width, height);
                image(stage1_ui[5], width / 2, height / 2, width, height);
                image(stage1_ui[5], width / 2 - 210, height / 2, width, height);
            }
            

            // for(let i=0; i<this.count; i++){
            //     image(stage1_ui[5], width / 2 + 420 - 210 * i, height / 2, width, height);
            // }
        }
        else {
            if (!this.bgOn){
                background(255, 255, 255, 150);
                this.bgOn = true;
            }
            fill(255);
            rectMode(CENTER);
            rect(width / 2, height / 2, width, height);
            image(ui[6], width/2, height/2, width, height);
            fill("black");
            textAlign(CENTER, CENTER);
            text(this.dialogue[this.cut], width/2, height/2);
        }
        textAlign(RIGHT, CENTER);
        textSize(25);
        fill(0);
        text("덤벨 컬", width / 8 - 30, height / 2 - 230 + 80);
        
    } 

    // 플레이어의 현재 위치를 확인해서 점수를 부여한다
    check(upperFraction, lowerFraction){
        if (this.count > 0){
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
                    stage1_snd[2].play(); // 한 세트를 성공할 때마다 소리가 나옴
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

            // textSize(100);
            // fill("black");
            // text(this.currChr, 50, 400);
        }
    }

    /*
    check(leftWristY, rightWristY){
        if (this.count > 0){
            let y = (leftWristY + rightWristY) / 2;
            this.drawDumbbell(y);
            this.prevChr = this.currChr;

            let upperFraction = 3/10;
            let lowerFraction = 5.5/10;
            let upperBound = height*upperFraction;
            let lowerBound = height*lowerFraction;

            if (y < upperBound) {
                if (this.prevChr == 4 && this.isGoingUp){
                    this.currChr = 5;
                    this.isGoingUp = !this.isGoingUp;
                    this.count--;
                }
            }
            else if (y < upperBound + (lowerBound-upperBound)*1/4) {
                if (this.prevChr == 3 && this.isGoingUp || this.prevChr == 5 && !this.isGoingUp){
                    this.currSil = 2;
                    this.currChr = 4;
                }
            }
            else if (y < upperBound + (lowerBound-upperBound)*2/4) {
                if (this.prevChr == 2 && this.isGoingUp || this.prevChr == 4 && !this.isGoingUp){
                    this.currSil = 1;
                    this.currChr = 3;
                }
            }
            else if (y < upperBound + (lowerBound-upperBound)*3/4) {
                if (this.prevChr == 1 && this.isGoingUp || this.prevChr == 3 && !this.isGoingUp){
                    this.currChr = 2;
                }
            }
            else if (y < lowerBound) {
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

            console.log(this.currChr);
            textSize(100);
            fill("black");
            text(this.currChr, 50, 400);
        }
    }
    */

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y){
        let maxY = height*2/5 + 100;
        let minY = height*2/5 - 100;
        let dumbbellY = y/height * (minY - maxY);
        image(stage1_ui[3], width/ 2 - 10, minY - dumbbellY + 150, width, height);
        // image(stage4_ui[1], width / 2 - 10, height / 2 + 60, width, height);
    }

    // 사운드 구현
    //sound(){
    // 카운트가 하나 줄면(덤벨 게이지가 하나 사라지면) 성공했다는 소리가 난다
        //if (this.count < 5) {
            //stage1_snd[2].play();
            //stage1_snd[2].setLoop(false);
            
        //}
    //}
}