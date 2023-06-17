class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 5; // cut의 총 개수
        this.dialogue = ["", //0
                        "해냈다!!", //1
                        "예상대로 첫번째 도전을 성공적으로 끝냈군.", //2
                        "이 레인보우 바벨은 나중에 머슬로스와의 결투에서 요긴하게 쓰일테니", //3
                        "우리 영웅은 바벨을 뽑기 위해 했던 동작을 잘 기억해줄 거야.", //4
                        "이젠 헬창의 두번째 요소 차례겠군..."]; //5
    }

    display(){ // 아직 에셋 안 고침
        imageMode(CENTER);

        switch(this.cut){
            case 0:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;

            case 1:
                image(stage1_bg[0], width/2, height/2, width, height);
                image(coach[0], width / 2, height / 2, max[3].width / 3, max[3].height / 3);
                image(ui[4], width/2, height/2, width, height);
                textAlign(LEFT, TOP)
                textSize(25);
                fill(0);
                text(this.dialogue[this.cut], width/2 - 580, height - 250);
                textAlign(CENTER, CENTER);
                fill(255);
                text("맥스", width / 2 - 460, height / 2 + 65);
                break;

            case 2:
            case 3:
            case 4:
            case 5:
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
                break;
        }
    }
}