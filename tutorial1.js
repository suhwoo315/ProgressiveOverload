class Tutorial1 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 9; // cut의 총 개수
        this.dialogue = ["지금부터 실제 운동을 하시게 됩니다.", // 0
                        "화면 앞에 있는 덤벨을 들고 의자에 앉아주세요.", // 1
                        // "운동을 시작하기 전, 우선 화면에 표시된 사람 모습 실루엣에 몸을 맞춰주세요.", // 2
                        // "성공적으로 인식되었습니다!", // 3
                        "바벨을 안전하게 빼기 위한 동작이니 잘 따라해 보라고!", // 4
                        "먼저 앞에 있는 덤벨을 잡고", // 5
                        "두 팔에 힘을 줘서 덤벨을 올려봐!", // 6
                        "자, 세 번 반복해볼까?", // 7
                        "좋았어! 두 번 더!", // 8
                        "거의 다 왔어! 한 번 더!", // 9
                        "좋아, 그럼 본격적으로 시작해보자고!", // 10
                        "동작하면서 꼭 허리 조심해 , 맥스!"]; // 11
        this.count = 3;
        this.currSil = 0;
        this.currChr = 0;
        this.touchLower = false;
        this.touchUpper = true;
    }

    // 해당 cut에 알맞은 화면을 표시한다
    display(){
        switch(this.cut){
            case 0:
            case 1:
                //bg
                background(100);
                //ui
                imageMode(CENTER);
                image(ui[5], width/2, height/2-180, width, height-100);
                //text
                textSize(25);
                textAlign(CENTER, CENTER)
                fill(0);
                text(this.dialogue[this.cut], width/2, height/2);
                //image(stage1_ui[1], 1000, 500, 300, 300);
                break;

            /*
            case 2:
                push();
                translate(width, 0);
                scale(-1, 1);
                image(video, 0, 0, width, height);
                pop();
                image(stage1_ui[1], width/2, height*2/5, 300, 300);
                image(ui[5], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
                line(width/7, 0, width/7, height);
                line(width*6/7, 0, width*6/7, height);
                line(0, height*4/5, 0, height*4/5);
                break;

            case 3:
                background(100);
                image(stage1_ui[1], width/2, height*2/5, 300, 300);
                image(ui[5], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
                break;
            */

            case 2: //4
            case 3: //5
            case 4: //6
                //bg
                imageMode(CENTER);
                image(stage1_bg[0], width/2, height/2, width, height);
                //chr
                image(coach[0], width / 2, height / 2, coach[0].width / 3, coach[0].height / 3);
                //ui
                image(stage1_ui[0], 20, 20, 100, 50); // 운동 이름
                //image(ui[6], width/2, height/2, width, height); //네모 박스
                image(ui[4], width/2, height/2, width, height); //게이지바
                //text
                textSize(25);
                textAlign(CENTER, CENTER);
                fill(255);
                text("코치 볼트", width / 2 - 460, height / 2 + 40);
                textAlign(LEFT, TOP);
                fill(0);
                text(this.dialogue[this.cut], width/2 - 580, height - 250);
                //text
               

            case 5: //7
                //bg
                imageMode(CENTER);
                image(stage1_bg[0], width/2, height/2, width, height);
                //ui
                imageMode(CENTER);
                image(stage1_ui[0], width / 2, height / 2 + 80, width, height); // 운동 이름
                image(stage1_ui[6], width / 2, height / 2 + 40 + 80, width, height); //실루엣 배경
                image(stage1_ui[2], width / 2 - 10, height / 2 + 60, width, height); //게이지바
                //text
                textAlign(RIGHT, CENTER);
                textSize(25);
                fill(0);
                text("덤벨 컬", width / 8 - 30, height / 2 - 230 + 80);
                
                image(ui[4], width/2, height/2+200, width, height/2); // 박스
                //sil
                // image(stage4_sil[0], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                image(stage1_sil[this.currSil], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                //chr
                image(stage1_chr[this.currChr], width/2 + 50, height/2+20, 500, 500);
                
                //text
                textSize(25);
                textAlign(CENTER, CENTER);
                fill(255);
                text("코치 볼트", width / 2 - 460, height / 2 + 65+170);
                textAlign(LEFT, TOP);
                fill(0);
                if (this.count == 2){
                    text(this.dialogue[this.cut + 1], width/2-580, height-100);
                }
                else if (this.count == 1){
                    text(this.dialogue[this.cut + 2], width/2-580, height-100);
                }
                else {
                    text(this.dialogue[this.cut], width/2-580, height-100);
                }
                break;

            case 8: //10
            case 9: //11
                //bg
                image(stage1_bg[0], width/2, height/2, width, height);
                //chr
                image(coach[0], width / 2, height / 2, coach[0].width / 3, coach[0].height / 3);
                //ui
                image(stage1_ui[0], 20, 20, 100, 50);
                image(ui[4], width/2, height/2, width, height);
                //text
                textSize(25);
                textAlign(CENTER, CENTER);
                fill(255);
                text("코치 볼트", width / 2 - 460, height / 2 + 65);
                textAlign(LEFT, TOP);
                fill(0);
                text(this.dialogue[this.cut], width/2-580, height-250);
                break;

            default:
                background(255, 0, 0);
                textSize(32);
                fill("black");
                text("error", windowWidth/2, windowHeight/2);
                break;
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

    // 플레이어가 테두리 안으로 들어왔는지 확인한다
    checkSilhouette(){
        if (leftShoulderX > width/6 && rightShoulderX < width*5/6 &&
            leftShoulderY > height*2/5 && leftShoulderY < height*3/5 &&
            rightShoulderY > height*2/5 && rightShoulderY < height*3/5){
            return true;
        }
        else {
            return false;
        }
    }

    // 플레이어의 손목 위치를 확인해서 동작 횟수를 차감한다
    /*
    checkWrist(leftWristY, rightWristY){
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
    */

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
        // fill("white");
        // text(this.currChr, 400, 400);
    }

    // 플레이어의 자세가 기준선을 주어진 횟수만큼 넘었는지 확인한다
    checkCount(){
        if (this.count > 0){
            this.check(dumbbellCurlUpper, dumbbellCurlLower);
            return false;
        }
        else {
            return true;
        }
    }

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y){
        let maxY = height*2/5 + 100;
        let minY = height*2/5 - 100;
        let dumbbellY = y/height * (minY - maxY);
        image(stage1_ui[3], width/ 2 - 10, minY - dumbbellY + 150, width, height);
    }
}