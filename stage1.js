class Stage1 {
    constructor(){
        this.count = 5;
        this.currSil = 0;
        this.currChr = 0;
        this.prevChr = 0;
        this.isGoingUp = true;
        this.bgOn = false;
    }

    // 알맞은 화면을 표시한다
    display(){
        if (this.count > 0){
            background(100);
            image(stage1_bg[5 - this.count], 0, 0, windowHeight, windowWidth);
            image(stage1_chr[this.currChr], width/2, height*2/5, 300, 300);
            image(stage1_sil[this.currSil], width/3, height*2/5, 300, 300);
            image(stage1_ui[2], width/3.5, height*2/5, 150, 150);
            for(let i=0; i<this.count; i++){
                image(stage1_ui[4], 50 + i * 250, height*4/5, 150, 150);
            }
        }
        else {
            if (!this.bgOn){
                background(255, 255, 255, 150);
                image(ui[6], width/2, height/2, 350, 250);
                fill("black");
                text("벨트 획득!", width/2, height/2);
                this.bgOn = true;
            }
        }
    }

    // 스테이지를 클리어했는지 알려준다
    isCleared(){
        return this.count <= 0;
    }

    // 플레이어의 현재 위치를 확인해서 점수를 부여한다
    check(leftWristY, rightWristY){
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

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y){
        let maxY = height*2/5 + 100;
        let minY = height*2/5 - 100;
        let dumbbellY = y/height * (minY - maxY);
        image(stage1_ui[3], width/3.5, minY - dumbbellY, 50, 50);
    }
}