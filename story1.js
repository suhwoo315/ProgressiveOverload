class Story1{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 1; // 전체 컷 개수, 총 2개 0~1
        this.dialogue = ["저 바벨이 바로 머슬로스까지 가는 길을 안내해줄 열쇠다.\n하지만 깊숙이 박혀있기 때문에 아직까지 꺼낸 사람이 없어.\n맥스, 너의 강한 의지력으로 저 바벨을 밖으로 꺼내 흉악한 군주 ‘머슬로스’를 물리쳐야 해."]
    }

    display(){

        let textBoxX = width / 2;
        let textBoxY = height / 2;
        let textBoxW = width;
        let textBoxH = height;
        let textX = width / 2 - 580;
        let textY = height - 250;
        switch(this.cut){
            case 0:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                
                break;
            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[0], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("코치 볼트", width / 2 - 460, height / 2 + 65);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}