class Stage1 {
    constructor(){
        this.count = 5;
        this.currSil = 0;
        this.currChr = 0;
        this.touchLower = false;
        this.touchUpper = true;
        this.bgOn = false;
        this.cut = 0;
        this.maxCut = 1;
        this.dialogue = ["첫 번째 도전과제를 달성하였습니다!", //0
                        "덤벨을 제자리에 내려놓아주세요."]; //1
    }

    // 알맞은 화면을 표시한다
    display(){
        if (this.count > 0){
            imageMode(CENTER);

            //background
            image(stage1_bg[0], width / 2, height / 2, width, height);
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

            // character 
            image(stage1_chr[this.currChr], width/2 + 50, height/2+20, 500, 500);

            // ui - 운동 이름
            image(stage1_ui[0], width / 2, height / 2, width, height);
            textAlign(RIGHT, CENTER);
            textSize(25);
            fill(0);
            text("덤벨 컬", width / 9, height * 18.5 / 100);

            // ui - 실루엣 및 게이지 바 : 
            image(stage1_ui[6], width / 2, height / 2, width, height); //실루엣 배경
            if (frameCount % 60 < 15) image(stage1_sil[0], width /2, height / 2, width, height); // sil
            else if (frameCount % 60 >= 15 && frameCount % 45 < 30) image(stage1_sil[1], width / 2, height / 2 , width, height);
            else if (frameCount % 60 >= 30 && frameCount % 60 < 45) image(stage1_sil[2], width / 2, height / 2 , width, height);
            else image(stage1_sil[1], width / 2, height / 2, width, height);
            image(stage1_ui[1], width / 2, height / 2, width, height); //게이지 바

            // ui - 아령 차감
            image(stage1_ui[5], width / 2, height / 2, width, height); //아령 배경
            
            if(this.count == 5){
                //남은 개수
                image(stage1_ui[12], width / 2, height / 2, width, height); 
                image(stage1_ui[13], width / 2, height / 2, width, height);
                image(stage1_ui[14], width / 2, height / 2, width, height);
                image(stage1_ui[15], width / 2, height / 2, width, height);
                image(stage1_ui[16], width / 2, height / 2, width, height);
            }

            else if(this.count == 4){ //회색 아령 하나씩 추가
                //남은 개수
                image(stage1_ui[13], width / 2, height / 2, width, height);
                image(stage1_ui[14], width / 2, height / 2, width, height);
                image(stage1_ui[15], width / 2, height / 2, width, height);
                image(stage1_ui[16], width / 2, height / 2, width, height);
                //처리 횟수
                image(stage1_ui[17], width / 2, height / 2, width, height);
                
            }
            else if(this.count == 3){
                //남은 개수
                image(stage1_ui[14], width / 2, height / 2, width, height);
                image(stage1_ui[15], width / 2, height / 2, width, height);
                image(stage1_ui[16], width / 2, height / 2, width, height);
                //처리 횟수
                image(stage1_ui[17], width / 2, height / 2, width, height);
                image(stage1_ui[18], width / 2, height / 2, width, height);
            }
            else if(this.count == 2){
                //남은 개수
                image(stage1_ui[15], width / 2, height / 2, width, height);
                image(stage1_ui[16], width / 2, height / 2, width, height);
                //처리 횟수
                image(stage1_ui[17], width / 2, height / 2, width, height);
                image(stage1_ui[18], width / 2, height / 2, width, height);
                image(stage1_ui[19], width / 2, height / 2, width, height);
            }
            else if(this.count == 1){
                //남은 개수
                
                image(stage1_ui[16], width / 2, height / 2, width, height);
                //처리 횟수
                image(stage1_ui[17], width / 2, height / 2, width, height);
                image(stage1_ui[18], width / 2, height / 2, width, height);
                image(stage1_ui[19], width / 2, height / 2, width, height);
                image(stage1_ui[20], width / 2, height / 2, width, height);
            }
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
        // 아령을 들 때마다 점점 아우라가 커진다
        //if(this.count < 5) playOnce(stage1_snd[0]);
        //if(this.count == 4)stage1_snd[0].amp(1,0.2);
        //if(this.count == 3) stage1_snd[0].amp(2,0.2);
        //if(this.count == 2) stage1_snd[0].amp(3,0.2);
        //if(this.count == 1) stage1_snd[0].amp(4,0.2);
        //if(this.count == 0) stage1_snd[0].stop();
    }

    // 현재 cut을 반환한다 - sketch.js에서 사용
    getCut(){
        return this.cut;
    }

    // cut의 총 개수를 반환한다
    getMaxCut(){
        return this.maxCut;
    }

    // 다음 cut으로 넘어간다
    increaseCut(){
        this.cut++;
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
                    //stage1_snd[2].play(); // 한 세트를 성공할 때마다 소리가 나옴
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
        }
    }

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y){
        let maxY = height*2/5 + 100;
        let minY = height*2/5 - 100;
        let dumbbellY = y/height * (minY - maxY);
        image(stage1_ui[2], width/ 2, minY - dumbbellY + 150, width, height);
        // image(stage4_ui[1], width / 2 - 10, height / 2 + 60, width, height);
    }
}