class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 0; // cut의 총 개수
        this.dialogue = ["어후, 죽는 줄 알았네..!\n그래도 꺼내긴 꺼냈네. 이 쪽지가 하는 말이 완전 허무맹랑한 소리는 아닌가 봐..",
                        "오, 선택받은 자여!",
                        "우리의 기대대로 첫 번째 도전을 성공적으로 마쳤는가보군!\n역시 헬창 마스터의 DNA네!",
                        "이 레인보우 바벨은 나중에 머슬로스와의 결투에서 요긴하게 쓰일 것이라네.",
                        "레인보우 바벨을 꺼내기 위해 했던 동작을 절대 잊어서는 안 된다네!",
                        "팔꿈치를 양옆에 붙이고 팔을 접었다 폈다 접었다 폈다 하면 기부니가 좋..", //미안ㅠ바꿔도돼
                        "어서 헬창의 두 번째 요소를 찾아서 떠나게!",
                        "이, 이상한 사람이네.."];
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