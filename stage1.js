class Stage1 {
    constructor(){
        this.score = 0;
        this.animIndex = 0;
        this.prevAnimIndex = 0;
        this.anim = [];
        for(let i=0; i<6; i++){
            this.anim[i] = loadImage('assets/stage1/anim' + i + '.png');
        }
        this.isBottom = false;
        this.isGoingUp = true;
    }

    display(){
        if (this.score < 10){
            imageMode(CENTER);
            image(this.anim[this.animIndex], width/2, height/2, 400, 400);
        }
        else {
            fill(255);
            textSize(32);
            text('You have done 10 dumbbell curls', 10, 30);
        }
    }

    check(leftWristY, rightWristY){
        textSize(32);
        text("score: " + this.score, 10, 30);
        if (this.isGoingUp) text("Up!", 10, 100);
        else text("Down!", 10, 170);
        
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

            // if (this.prevAnimIndex == 4 && this.animIndex == 5 && this.isBottom){
            //     this.count++;
            //     this.isBottom = false;
            // }
        }
    }
}