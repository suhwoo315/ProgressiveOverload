class Tutorial1 {
    constructor(){
        this.numCuts = 6;
        this.coach_strict = loadImage('assets/tutorial1/coach_strict.png');
    }

    display(cut){
        if (cut == 0){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("하이~~ 이제부터 운동할 거여~~ ( 엔터 눌러서 다음으로 >_< )", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
        else if (cut == 1){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("덤벨을 들어봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
        else if (cut == 2){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("안 보인다~~ 좀 더 멀리 가서 들어봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
        else if (cut == 3){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("잘했다~~ 이제 내려봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
        else if (cut == 4){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("안 보인다~~ 좀 더 멀리 가서 내려봐라", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
        else if (cut == 5){
            background(100);
            fill(255);
            rectMode(CENTER);
            rect(width/2, height*3/4, width - 50, height/4);
            textSize(24);
            fill(0);
            text("오케이 굿 이제 실전이다~~ ( 엔터 눌러서 다음으로 >_< )", width/2, height*3/4);
            image(this.coach_strict, width/4, height*3/5, 300, 300);
        }
    }
}