class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 6; // cut의 총 개수
        this.dialogue = ["", //0
                        "", //1
                        "", //2
                        "성공했다!!", //3
                        "우리의 영웅이라면 반드시 방패를 들어냈을 거야.", //4
                        "나중에 보스의 나태주문 공격에도 이렇게 포기하지 않고 해낸 동작으로 방패를 사용할 수 있겠지.", //5
                        "우리 영웅은 반드시 머슬로스와의 결투에서 승리를 거둘거야!"] //6
    }

    display(){ //에셋 안 고침
        imageMode(CENTER);

        switch(this.cut){
            case 0:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;

            case 1:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;
                
            case 2:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;

            case 3:
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

            case 4:
            case 5:
            case 6:
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