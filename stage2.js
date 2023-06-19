class Stage2 {
    constructor(){
        this.clear = false;
        this.count = 5;
        this.currSil = 0;
        this.currChr = 0;
        this.touchLower = true;
        this.touchUpper = false;
        this.bgOn = false;
        this.cut = 0;
        this.maxCut = 2;
        this.dialogue = ["", //0
                        "두 번째 도전과제를\n달성하였습니다!", //1
                        "덤벨을 제자리에\n내려놓아주세요."]; //2
    }

    // 알맞은 화면을 표시한다
    display(){            
        if (this.count > 0){
            imageMode(CENTER);
            if(this.count == 4){
                stage2_snd[2].amp(0.6);                
                playOnce(stage2_snd[2]);
            }
            else if(this.count == 3){
                stage2_snd[2].amp(1.5);
            }
            else if(this.count == 2){
                stage2_snd[2].amp(2);
            }
            else if(this.count == 1){
                stage2_snd[2].amp(3);
            }
                      
            //background
            image(stage2_bg[0], width / 2, height / 2, width, height);
            if (this.count == 5){
                image(stage2_bg[1], width / 2, height / 2, width, height);
            }
            else if(this.count == 4){
                image(stage2_bg[1], width / 2, height / 2, width, height);
            }
            else if(this.count == 3){
                image(stage2_bg[2], width / 2, height / 2, width, height);
            }
            else if(this.count == 2){
                image(stage2_bg[3], width / 2, height / 2, width, height);
            }
            else if(this.count == 1){
                image(stage2_bg[4], width / 2, height / 2, width, height);
            }

            // character 
            image(stage2_chr[this.currChr], width/2, height/2, width, height);

            // ui - 운동 이름
            image(stage2_ui[0], width / 2, height / 2, width, height);
            textAlign(RIGHT, CENTER);
            textSize(25);
            fill(0);
            text("레터럴 레이즈", width * 1.1 / 9, height * 18.5 / 100);

            // ui - 실루엣 및 게이지 바 : 
            image(stage2_ui[3], width / 2, height / 2, width, height); //실루엣 배경
            if (frameCount % 60 < 15) image(stage2_sil[0], width /2, height / 2, width, height); // sil
            else if (frameCount % 60 < 30) image(stage2_sil[1], width / 2, height / 2 , width, height);
            else if (frameCount % 60 < 45) image(stage2_sil[2], width / 2, height / 2 , width, height);
            else image(stage2_sil[1], width / 2, height / 2, width, height);
            if (!this.touchLower) image(stage2_ui[12], width / 2, height / 2, width, height); //게이지 바
            else image(stage2_ui[1], width / 2, height / 2, width, height);

            // ui - 아령 차감
            image(stage2_ui[4], width / 2, height / 2, width, height); //아령 배경
            image(stage2_ui[5], width / 2, height / 2, width, height); //회색 아령
            if (this.count > 0) {
                image(stage2_ui[6], width / 2, height / 2, width, height);
                
            }   
            if (this.count > 1) image(stage2_ui[7], width / 2, height / 2, width, height);
            if (this.count > 2) image(stage2_ui[8], width / 2, height / 2, width, height);
            if (this.count > 3) image(stage2_ui[9], width / 2, height / 2, width, height);
            if (this.count > 4) image(stage2_ui[10], width / 2, height / 2, width, height);
        }
        else {
            stage2_snd[0].stop();
            stage2_snd[2].stop();            
            imageMode(CENTER);
            image(stage2_bg[0], width / 2, height / 2, width, height);
            image(stage2_bg[5], width / 2, height / 2, width, height);
            image(stage2_chr[0], width/2, height/2, width, height);
            snd[3].setVolume(2);
            if(this.cut != 2) playOnce(snd[3]);            
            if (this.cut > 0) {
                if (!this.bgOn){
                    background(255, 255, 255, 150);
                    this.bgOn = true;
                }
                image(stage2_ui[11], width / 2, height / 2, width, height);
                noStroke();
                fill(0);
                textSize(30);
                textAlign(CENTER, CENTER);
                fill(0);
                text(this.dialogue[this.cut], width/2, height*9.3/20);
            }
            


        }
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
            let y = (rightElbowY + leftElbowY) / 2;
            this.drawDumbbell(y, sideUpper, sideLower);
            // strokeWeight(5);
            // stroke(255, 0, 0);
            // line(0, y, width, y);

            let upperBound = height*upperFraction;
            let lowerBound = height*lowerFraction;

            if (y < upperBound) {
                this.currChr = 5;
                this.currSil = 2;
                if (this.touchLower){
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
                    this.count--;
                    this.touchLower = true;
                    this.touchUpper = false;
                    stage2_snd[1].amp(3.5);
                    stage2_snd[1].play(); // 한 세트를 성공할 때마다 소리가 나옴
                }
            }
        }
    }

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y, upperFraction, lowerFraction){
        let upperBound = height*upperFraction;
        let lowerBound = height*lowerFraction;
        let boundHeight = lowerBound - upperBound;
        let boundY;
        if (y < upperBound) boundY = upperBound;
        else if (y > lowerBound) boundY = lowerBound;
        else boundY = y;
        
        let upperY = height*10.7/20;
        let lowerY = height*13.7/20;
        let barHeight = lowerY - upperY;
        let dumbbellY = (barHeight/boundHeight)*(boundY - upperBound) + upperY;

        imageMode(CENTER);
        image(stage2_ui[2], width/ 2, dumbbellY, width, stage2_ui[2].height);

        // stroke(0);
        // line(0, upperBound, width, upperBound);
        // line(0, lowerBound, width, lowerBound);
    }
}