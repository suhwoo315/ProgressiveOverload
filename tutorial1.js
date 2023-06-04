class Tutorial1 {
    constructor(){
        this.MaxCut = 7; // cut의 총 개수
        this.cut = 0; // 현재 cut
        this.dialogue = ["지금부터 실제 운동을 하시게 됩니다.",
                        "화면 앞에 있는 덤벨을 들고 의자에 앉아주세요.",
                        "운동을 시작하기 전, 우선 화면에 표시된 사람 모습 실루엣에 몸을 맞춰주세요.",
                        "성공적으로 인식되었습니다!",
                        "바벨을 안전하게 빼기 위한 동작이니 잘 따라해 보라고!",
                        "먼저 앞에 있는 덤벨을 잡고",
                        "두 팔에 힘을 줘서 덤벨을 올려봐!",
                        "자 여러번 반복해볼까?",
                        "좋아, 그럼 본격적으로 시작해보자고!",
                        "동작하면서 꼭 허리 조심해 , 맥스!"];
        this.count = 3;
    }

    // 해당 cut에 알맞은 화면을 표시한다
    display(){
        switch(this.cut){
            case 0:
            case 1:
            case 2:
            case 3:
                image(video, 0, 0);
                image(stage1_ui[1], width/2, height*2/5, 300, 300);
                image(ui[5], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
            case 4:
            case 5:
            case 6:
                image(stage1_bg[this.cut], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(coach[0], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
            case 7:
                image(stage1_bg[this.cut], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(stage1_chr[0], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
            case 8:
            case 9:
                image(stage1_bg[this.cut], 0, 0);
                image(stage1_ui[0], 20, 20, 100, 50);
                image(stage1_chr[0], width/2, height*2/5, 300, 300);
                image(ui[4], width/2, height*4/5, 500, 200);
                text(this.dialogue[this.cut], width/2, height*4/5);
            default:
                background(255, 0, 0);
                textSize(32);
                fill("black");
                text("error", windowWidth/2, windowHeight/2);
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