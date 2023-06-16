class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 4; // cut의 총 개수
        this.dialogue = ["해냈다!!", //0
                        "예상대로 첫번째 도전을 성공적으로 끝냈군.", //1
                        "이 레인보우 바벨은 나중에 머슬로스와의 결투에서 요긴하게 쓰일테니", //2
                        "우리 영웅은 바벨을 뽑기 위해 했던 동작을 잘 기억해줄 거야.", //3
                        "이젠 헬창의 두번째 요소 차례겠군..."]; //4
    }

    display(){
        imageMode(CENTER);

        // 쪽지 화면 (승현이 부탁혀~~)
        image(stage1_bg[0], width/2, height/2, width, height);
        image(coach[0], width / 2, height / 2, max[3].width / 3, max[3].height / 3);
        image(ui[4], width/2, height/2, width, height);
        textAlign(LEFT, TOP)
        textSize(25);
        fill(0);
        text(this.dialogue[this.cut], width/2 - 580, height - 250);
        textAlign(CENTER, CENTER);
        fill(255);
        text("코치 볼트", width / 2 - 460, height / 2 + 65); // 참고로 첫번째 대사는 맥스 대사니까 잊지마쇼!
    }
}