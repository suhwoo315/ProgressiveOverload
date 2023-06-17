class Story2{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 0; // 전체 컷 개수
        this.dialogue = ["(또다시 정처 없이 떠돈지 몇 시간째)",
                        "첫 번째 요소가 '장비'.. 또 뭐가 필요한 거지.. 운동만 잘하면 다 아닌가..",
                        "으..!! 미리 알려주면 어디가 덧나냐고!!\n자기 할 말만 하고.. 사람도 하나 없고 얼마나 썰렁하다고..",
                        "에? 이건 또 뭐야? 펌프? 오랫동안 방치된 것 같은데..\n저 버튼은 이제 작동도 안 되겠네..",
                        "오, 선택받은 자여!",
                        "왠지 자네가 나를 기다리고 있었을 것만 같은 기분이 들었다네.",
                        "헬창월드 사람들은 태초부터 물 대신 프로틴 쉐이커를 마셔왔다네.\n지금 눈앞에 보이는 ㅇㅇ는 영양소가 반짝이는 프로틴 리버(river)였지.",
                        "하지만 근손실의 망령 머슬로스가 펌프를 막아버려서 더이상 프로틴 리버가 흐르지 않게 되었다네...",
                        "오, 선택받은 자여!",
                        "프로틴 리버를 다시 흐르게 해 헬창월드 사람들에게 헬창의 두 번째 요소 '식단'을 되찾아주게!",
                        "반드시 해낼지어니!"];
    }

    display(){ //에셋 안 고침

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
                //ui
                fill(255);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("생긴지 오래되어 보이는 한 펌프", width / 2, height * 23/100)
                break;

            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
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

            case 2:
            case 3:
            case 4:
            case 5:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
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