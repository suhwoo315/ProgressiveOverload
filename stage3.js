class Stage3 {
    constructor(){
        this.clear = false;
        this.count = 5;
        this.currSil = 0;
        this.currChr = 0;
        this.touchLower = true;
        this.touchUpper = false;
        this.bgOn = false;
        this.cut = 0;
        this.maxCut = 4;
        this.dialogue = ["", //0
                        "", //1
                        "", //2
                        "세 번째 도전과제를\n달성하였습니다!", //3
                        "덤벨을 제자리에\n내려놓아주세요."]; //4
    }

    // 알맞은 화면을 표시한다
    display(){
        if (this.count > 0){
            imageMode(CENTER);

            //background
            image(stage3_bg[0], width / 2, height / 2, width, height);
            image(stage3_bg[1], width / 2, height / 2, width, height);
            if(this.count == 4){
                image(stage3_bg[2], width / 2, height / 2, width, height);
            }
            else if(this.count == 3){
                image(stage3_bg[3], width / 2, height / 2, width, height);
            }
            else if(this.count == 2){
                image(stage3_bg[4], width / 2, height / 2, width, height);
            }
            else if(this.count == 1){
                image(stage3_bg[5], width / 2, height / 2, width, height);
            }

            // character
            if (this.count > 3){
                image(stage3_chr[this.currChr], width/2, height/2, width, height);
            }
            else if (this.count > 1){
                image(stage3_chr[this.currChr + 6], width/2, height/2, width, height);
            }
            else {
                image(stage3_chr[this.currChr + 12], width/2, height/2, width, height);
            }

            // ui - 운동 이름
            image(stage3_ui[0], width / 2, height / 2, width, height);
            textAlign(RIGHT, CENTER);
            textSize(25);
            fill(0);
            text("숄더 프레스", width * 1.1 / 9, height * 18.5 / 100);

            // ui - 실루엣 및 게이지 바 : 
            image(stage3_ui[3], width / 2, height / 2, width, height); //실루엣 배경
            if (frameCount % 60 < 15) image(stage3_sil[0], width /2, height / 2, width, height); // sil
            else if (frameCount % 60 < 30) image(stage3_sil[1], width / 2, height / 2 , width, height);
            else if (frameCount % 60 < 45) image(stage3_sil[2], width / 2, height / 2 , width, height);
            else image(stage3_sil[1], width / 2, height / 2, width, height);
            image(stage3_ui[1], width / 2, height / 2, width, height); //게이지 바

            // ui - 아령 차감
            image(stage3_ui[4], width / 2, height / 2, width, height); //아령 배경
            image(stage3_ui[5], width / 2, height / 2, width, height); //회색 아령
            if (this.count > 0) image(stage3_ui[6], width / 2, height / 2, width, height);
            if (this.count > 1) image(stage3_ui[7], width / 2, height / 2, width, height);
            if (this.count > 2) image(stage3_ui[8], width / 2, height / 2, width, height);
            if (this.count > 3) image(stage3_ui[9], width / 2, height / 2, width, height);
            if (this.count > 4) image(stage3_ui[10], width / 2, height / 2, width, height);
        }
        else {
            imageMode(CENTER);
            image(stage3_bg[0], width / 2, height / 2, width, height);
            switch(this.cut){
                case 0:
                    image(stage3_bg[6], width / 2, height / 2, width, height);
                    image(stage3_chr[12], width/2, height/2, width, height);
                    break;
                case 1:
                    image(stage3_bg[7], width / 2, height / 2, width, height);
                    image(stage3_chr[12], width/2, height/2, width, height);
                    break;
                case 2:
                    image(stage3_bg[7], width / 2, height / 2, width, height);
                    image(stage3_chr[18], width/2, height/2, width, height);
                    break;
                case 3:
                case 4:
                    image(stage3_ui[11], width / 2, height / 2, width, height);
                    noStroke();
                    fill(0);
                    textSize(30);
                    textAlign(CENTER, CENTER);
                    fill(0);
                    text(this.dialogue[this.cut], width/2, height*9.3/20);
                    break;
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
            let y = (leftWristY + rightWristY) / 2;
            this.drawDumbbell(y);

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
                    //stage2_snd[2].play(); // 한 세트를 성공할 때마다 소리가 나옴
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
        
        let upperY = height*5.7/20;
        let lowerY = height*8.7/20;
        let barHeight = lowerY - upperY;
        let dumbbellY = (boundY * barHeight / boundHeight) - barHeight

        image(tutorial1_sil[11], width/ 2, dumbbellY, width, tutorial1_ui.height);
    }
}