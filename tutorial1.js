class Tutorial1 {
    constructor(){
        this.MaxCut = 7; // cut의 총 개수 - 대사 수와 같다
        this.cut = 0; // 현재 cut
        this.dialogue = ["첫 번째 미션에 온 것을 환영한다. \n 나와 앞으로 함께하려면 ENTER 키를 누르거라.",
                            "미션에 앞서서 너가 해야 할 운동을 알려주지.",
                            "이 운동은 [오버 헤드 프레스]다.",
                            "이 운동은 삼각근 성장에 전반적으로 도움이 되지.",
                            "양손에 하나씩 덤벨을 들고",
                            "어깨 위아래로 수직으로 움직이면 된다.",
                            "지금부터 10회 반복, 실시!!"];
    }

    // 해당 cut에 알맞은 화면을 표시한다
    display(){
        switch(this.cut){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            default:
                background(255, 255, 0);
                textSize(32);
                fill("black");
                text(this.cut, windowWidth/2, windowHeight/2);
        }
    }

    // 현재 cut을 반환한다 - sketch.js에서 사용
    getCut(){
        return this.cut;
    }

    // cut의 총 개수를 반환한다 - sketch.js에서 사용하기 쉽도록 -1을 했다
    getMaxCut(){
        return this.MaxCut - 1;
    }

    // 다음 cut으로 넘어간다
    increaseCut(){
        this.cut++;
    }
}