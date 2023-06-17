class Story3{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 0; // 전체 컷 개수, 총 4개 0~3
        this.dialogue = ["(또다시 떠돌아다니지만 이제 익숙해진 맥스)",
                        "아니, 근데 생각할 수록 머슬로스 나쁜 자식이네.\n조금 이상하긴 해도 착한 사람들 같은데 왜 처들어와서 괴롭히고 난리야.",
                        "운동하는 게 도대체 어디가 나쁘다고.. 아, 이참에 나도 헬스장 좀 다시 갈까..?",
                        "으.. 그런데 갑자기 너무 귀찮네.. 괜히 무기력해지는데..? 걷기도 귀찮아.. 내 몸이 왜 이러지..",
                        "오, 선택받은 자여!",
                        "지금부터 정신을 똑바로 차려야 한다네!\n머슬로스의 성에 가까워질수록 나태의 주문이 강력한 효력을 발휘하지 때문이지!",
                        "나태의 주문은 헬창월드 사람들이 집안에만 머물게 된 원인이라네..",
                        "눈앞에 커다란 비석이 보이지 않는가?\n저 비석 안에는 강한 정신력을 지닌 자만이 사용할 수 있는 방패가 들어있다네.",
                        "오, 선택받은 자여!",
                        "나태의 주문을 이겨내고 방패를 얻어 헬창월드 사람들에게 헬창의 마지막 요소 '정신력'을 되찾아주게!",
                        "반드시 해낼지어니!"];
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