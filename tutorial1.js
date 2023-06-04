class Tutorial1 {
    constructor(){
        this.MaxCut = 7;
        this.cut = 0;
        this.dialogue = ["첫 번째 미션에 온 것을 환영한다. \n 나와 앞으로 함께하려면 ENTER 키를 누르거라.",
                            "미션에 앞서서 너가 해야 할 운동을 알려주지.",
                            "이 운동은 [오버 헤드 프레스]다.",
                            "이 운동은 삼각근 성장에 전반적으로 도움이 되지.",
                            "양손에 하나씩 덤벨을 들고",
                            "어깨 위아래로 수직으로 움직이면 된다.",
                            "지금부터 10회 반복, 실시!!"];
        this.coach_strict = loadImage('assets/tutorial1/coach_strict.png'); //나중에 배열로 만들기
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

    getCut(){
        return this.cut;
    }

    getMaxCut(){
        return this.MaxCut - 1;
    }

    increaseCut(){
        this.cut++;
    }
}