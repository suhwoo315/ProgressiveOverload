class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 1; // cut의 총 개수
        this.dialogue = ["첫번째 도전을 성공적으로 끝냈군.",
                        "그럼 준비됐나? 다음 도전을 위해?"];
    }

    display(){
        image(stage1_bg[0], 0, 0);
        image(coach[0], width/2, height*2/5, 300, 300);
        image(ui[4], width/2, height*4/5, 500, 200);
        text(this.dialogue[this.cut], width/2, height*4/5);
    }
}