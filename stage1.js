class Stage1 {
    constructor(){
        this.count = 5;
        this.currChr = 0;
        this.prevChr = 0;
        this.isBottom = false;
        this.isGoingUp = true;
    }

    // 알맞은 화면을 표시한다
    display(){
        if (this.count > 0){
            background(100);
            imageMode(CENTER);
            image(stage1_chr[this.currChr], width/2, height/2, 400, 400);

            fill(255);
            rectMode(CORNER);
            rect(width*7/10, height*9/10, 50, -600);

            fill(255, 0, 0);
            rect(width*7/10, height*9/10, 50, -this.count*600/10);

            fill(255, 255, 0);
            textStyle(BOLD);
            stroke(10);
            textSize(40);
            if (this.isGoingUp) text("Up!", width*6.7/10, height*9/10-500);
            else text("Down!", width*6.5/10, height*9/10);
            textStyle(NORMAL);

            stroke(1);
        }
        else {
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("덤벨컬을 10개나 해써! 아이템을 얻어써!", width/2, height*3/4);
        }
    }

    // 플레이어의 현재 위치를 확인해서 점수를 부여한다
    check(leftWristY, rightWristY){
        if (this.count > 0){
            let y = (leftWristY + rightWristY) / 2;
            this.prevChr = this.currChr;

            if (y < height*3/9) {
                if (this.prevChr == 4 && this.isGoingUp){
                    this.currChr = 5;
                    this.isGoingUp = !this.isGoingUp;
                    this.isBottom = false;
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
                    this.currChr = 3;
                }
            }
            else if (y < height*5.5/9) {
                if (this.prevChr == 1 && this.isGoingUp || this.prevChr == 3 && !this.isGoingUp){
                    this.currChr = 2;
                    this.isBottom = true;
                }
            }
            else if (y < height*6/9) {
                if (this.prevChr == 0 && this.isGoingUp || this.prevChr == 2 && !this.isGoingUp){
                    this.currChr = 1;
                    this.isBottom = true;
                }
            }
            else {
                if (this.prevChr == 1 && !this.isGoingUp){
                    this.currChr = 0;
                    this.isGoingUp = !this.isGoingUp;
                    this.isBottom = true;
                }
            }
        }
    }
}