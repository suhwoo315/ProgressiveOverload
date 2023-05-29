class Stage1 {
    constructor(){
        this.count = 0;
        this.animIndex = 0;
        this.anim = [];
        for(let i=0; i<6; i++){
            this.anim[i] = loadImage('assets/stage1/anim' + i + '.png');
        }
    }

    display(){
        if (this.count < 10){
            // if ((frameCount % 10) == 0){
            //     this.animIndex = ++this.animIndex % this.anim.length;
            // }
            imageMode(CENTER);
            image(this.anim[this.animIndex], width/2, height/2, 400, 400);
        }
        else {
            fill(255);
            textSize(32);
            text('You have done 10 dumbbell curls', 10, 30);
        }
    }

    check(x, y){
        if (this.count < 10){

        }
    }
}