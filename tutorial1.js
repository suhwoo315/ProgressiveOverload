class Tutorial1 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 11; // cut의 총 개수
        this.dialogue = ["지금부터 실제 운동을 하시게 됩니다.", // 0
                        "화면 앞에 있는 덤벨을 들고 의자에 앉아주세요.", // 1
                        "운동을 시작하기 전, 우선 화면에 표시된 사람 모습 실루엣에 몸을 맞춰주세요.", // 2
                        "성공적으로 인식되었습니다!", // 3
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
        this.prevChr = 0;
        this.isGoingUp = true;
    }

    // 해당 cut에 알맞은 화면을 표시한다
    display(){
        switch(this.cut){
            case 0:
            case 1:
                background(100);
                image(stage1_ui[1], 1000, 500, 300, 300);
                image(ui[5], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
                break;

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

            case 4:
            case 5:
            case 6:
                image(stage1_bg[0], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(coach[0], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
                break;

            case 7:
                image(stage1_bg[0], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(stage1_ui[2], width/3.5, height*2/5, 300, 300);
                image(stage1_sil[this.currSil], width/3, height*2/5, 300, 300);
                image(stage1_chr[this.currChr], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                if (this.count == 2){
                    text(this.dialogue[this.cut + 1], width/2, height*4/5);
                }
                else if (this.count == 1){
                    text(this.dialogue[this.cut + 2], width/2, height*4/5);
                }
                else {
                    text(this.dialogue[this.cut], width/2, height*4/5);
                }
                break;

            case 10:
            case 11:
                image(stage1_bg[0], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(coach[0], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
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
    checkSilhouette(leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY){
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

    // 플레이어의 자세가 기준선을 주어진 횟수만큼 넘었는지 확인한다
    checkCount(leftWristY, rightWristY){
        if (this.count > 0){
            this.checkWrist(leftWristY, rightWristY);
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
        image(stage1_ui[3], width/3.5, minY - dumbbellY, 50, 50);
    }
}