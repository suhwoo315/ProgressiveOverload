class Tutorial1 {
    constructor(){
        this.cut = 0;
        this.dialogue = ["대사1", "대사2", "대사3", "대사4"];
        this.coach_strict = loadImage('assets/tutorial1/coach_strict.png'); //나중에 배열로 만들기
        this.keyWasDown = false;
    }

    display(){
        background(100);
        fill(255);
        rectMode(CENTER);
        rect(width/2, height*3/4, width - 50, height/4);
        textSize(24);
        fill(0);
        text(this.dialogue[this.cut], width/2, height*3/4);
        image(this.coach_strict, width/8, height*2.2/5, 300, 300);
    }

    increase(){
        this.cut++;
    }

    checkKeyboard(){ // keyPressed() 물어보기
        let result = false;
        let temp;
        if (!(temp = keyIsDown(ENTER)) && this.keyWasDown) result = true;
        this.keyWasDown = temp;
        return result;
    }
}