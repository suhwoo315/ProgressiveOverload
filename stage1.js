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
            if ((frameCount % 10) == 0){
                this.animIndex = ++this.animIndex % this.anim.length;
            }
            image(this.anim[this.animIndex], 0, 0, 700, 700);
        }
        else {

        }
    }

    track(){
        if (this.count < 10){

        }
        else {

        }
    }
}