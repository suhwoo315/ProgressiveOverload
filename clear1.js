class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 1; // cut의 총 개수
        this.dialogue = ["첫번째 도전을 성공적으로 끝냈군.",
                        "그럼 준비됐나? 다음 도전을 위해?"];
    }

    display(){
        imageMode(CENTER);
        image(stage1_bg[0], width/2, height/2, width, height);
        image(coach[0], width / 2, height / 2, max[3].width / 3, max[3].height / 3);
        image(ui[4], width/2, height/2, width, height);
        textAlign(LEFT, TOP)
        textSize(25);
        fill(0);
        text(this.dialogue[this.cut], width/2 - 580, height - 250);
        textAlign(CENTER, CENTER);
        fill(255);
        text("코치 볼트", width / 2 - 460, height / 2 + 65);
    }
}