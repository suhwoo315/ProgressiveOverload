class Stage1 {
    constructor(){
        this.score = 0;
        this.animIndex = 0;
        this.prevAnimIndex = 0;
        this.anim = [];
        for(let i=0; i<6; i++){
            this.anim[i] = loadImage('assets/stage1/anim' + i + '.png');
        }
        this.player_happy = loadImage('assets/stage1/player_happy.png');
        this.isBottom = false;
        this.isGoingUp = true;
    }

    display(){
        if (this.score < 10){
            background(100);
            imageMode(CENTER);
            image(this.anim[this.animIndex], width/2, height/2, 400, 400);

            fill(255);
            rectMode(CORNER);
            rect(width*7/10, height*9/10, 50, -600);

            fill(255, 0, 0);
            rect(width*7/10, height*9/10, 50, -this.score*600/10);

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
            image(this.player_happy, width/4, height*3/5, 300, 300);
        }
    }

    check(leftWristY, rightWristY){
        if (this.score < 10){
            let y = (leftWristY + rightWristY) / 2;
            this.prevAnimIndex = this.animIndex;

            if (y < height*3/9) {
                if (this.prevAnimIndex == 4 && this.isGoingUp){
                    this.animIndex = 5;
                    this.isGoingUp = !this.isGoingUp;
                    this.isBottom = false;
                    this.score++;
                }
            }
            else if (y < height*4/9) {
                if (this.prevAnimIndex == 3 && this.isGoingUp || this.prevAnimIndex == 5 && !this.isGoingUp){
                    this.animIndex = 4;
                }
            }
            else if (y < height*5/9) {
                if (this.prevAnimIndex == 2 && this.isGoingUp || this.prevAnimIndex == 4 && !this.isGoingUp){
                    this.animIndex = 3;
                }
            }
            else if (y < height*6/9) {
                if (this.prevAnimIndex == 1 && this.isGoingUp || this.prevAnimIndex == 3 && !this.isGoingUp){
                    this.animIndex = 2;
                    this.isBottom = true;
                }
            }
            else if (y < height*7/9) {
                if (this.prevAnimIndex == 0 && this.isGoingUp || this.prevAnimIndex == 2 && !this.isGoingUp){
                    this.animIndex = 1;
                    this.isBottom = true;
                }
            }
            else {
                if (this.prevAnimIndex == 1 && !this.isGoingUp){
                    this.animIndex = 0;
                    this.isGoingUp = !this.isGoingUp;
                    this.isBottom = true;
                }
            }
        }
    }
}