class Story3{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 6; // 전체 컷 개수, 총 4개 0~3
        this.dialogue = ["저 방패는 뭐지...? 근데 괜히 무기력하고 귀찮아지는 것 같아...\n저 방패는 무겁겠지...? 들기 귀찮...", //0
                        "아마 우리의 영웅이라도 지금쯤 귀찮음을 느끼고 있을거야...", //1
                        "바로 머슬로스의 나태 주문 때문이지.", //2
                        "부지런히 운동했던 헬창월드 사람들의 의지를 다 빼앗고 있어. ", //3
                        "나태 주문을 이겨낼 수 있는 방패가 있긴 하지만 오로지 강한 정신력을 가진 자만 사용할 수 있지.", //4
                        "그렇지만 우리의 영웅은 강한 정신력으로 이 방패를 쓸 수 있는 자격을 분명히 갖출 거야.", //5
                        "반드시 해낼 거야."] //6
    }

    display(){ // 에셋 안 고침

        // 고치기 필요 (임시 코드)
        let maxSize = max[0].height * windowHeight / 1600 * 2 / 3;
        let textBoxX = width / 2;
        let textBoxY = height / 2;
        let textBoxW = width;
        let textBoxH = height;
        let textX = width / 7;
        let textY = height * 2/3;
        let chrNameX = width / 15;
        let chrNameY = height * 2 / 3;
        let messageX = width / 2
        let messageY = height * 690 / 918.5625;

        switch(this.cut){
            case 0:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(255);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;

            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(255);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}