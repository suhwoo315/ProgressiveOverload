class Tutorial1 {
    constructor(){
        this.numCuts = 6;
        this.coach_strict = loadImage('assets/tutorial1/coach_strict.png');
        this.player_surprised = loadImage('assets/tutorial1/player_surprised.png');
    }

    display(cut){
        if (cut == 0){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("블라블라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
        else if (cut == 1){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("덤벨을 들어봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
        else if (cut == 2){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("좀 더 멀리 가서 들어봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
        else if (cut == 3){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("잘했다 내려봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
        else if (cut == 4){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("좀 더 멀리 가서 내려봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
        else if (cut == 5){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("오케이 굿 이제 실전이다~~", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/4, 300, 300);
        }
    }
}