class GameIntro{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 23; // 전체 컷 개수
        this.dialogue = ["으.. 오늘도 헬스장 안 가면 한 달 동안 안 가는 건데..", //0
                        "돈은 아깝다만.. 귀찮다.. 에이 몰라~ 그냥 내일 가지, 뭐.", //1
                        "TV 재밌는 거 뭐 안 하나..", //2
                        "(요상한 헬창월드 화면)", //3
                        "엇, 이 화면은 뭐지?", //4
                        "뭐야, 왜 이렇게 밝아.. 내 눈..! 으아아아~~~", //5
                        "", //헬창월드 //6
                        "여긴 어디지..? 분명 아까 봤던 TV 속 화면 같은데..?\n사람들은 다 어디 간 거야..", //7
                        "(바스락)", //8
                        "어..! 이건 뭐지..?", //9
                        "헬창월드를 구원할 선택받은 자여,",
                        "지금 이 쪽지를 읽고 있다는 것은 당신이 선택받은 자라는 뜻이겠지.",
                        "자네의 몸 안에는 고귀한 헬창 마스터의 DNA가 흐르고 있다네.",
                        "이곳 헬창월드는 헬스를 사랑하는 사람들이 모여 즐겁게 운동하며 살아가는 천국 같은 곳이었다네.",
                        "근손실의 망령 머슬로스가 나타나기 전까진..!",
                        "어느 날 나타난 머슬로스는 헬창월드 사람들의 운동 의욕을 하나 둘 앗아가기 시작했다네.",
                        "사람들은 덤벨 대신 리모컨을, 프로틴 대신 햄버거를 선택하기 시작했지.",
                        "자네가 쪽지를 읽고 있을 땐 이미 머슬로스가 헬창월드를 완전히 파괴한 이후겠지...",
                        "지금 거리에 사람이 한 명도 없지 않나?\n사람들이 모두 소파에 누워 감자칩을 먹고 있기 때문이라네.",
                        "초인종을 눌러도 집에서 나오지 않을 것이네.\n걸을 의욕조차 완전히 소멸되었기 때문이지.",
                        "오, 선택받은 자여!\n헬창의 3요소를 되찾아 머슬로스를 물리치고 우리 헬창월드를 구해주게!",
                        "헬창월드가 의욕으로 넘치는 날, 세계를 잇는 통로가 열릴지어니..",
                        "건투를 비네.",
                        "이게 뭔 개떡같은 소리야.. 구원자? 선택받은 자?\n나는 헬스장도 귀찮아서 제대로 안 다닌다고..", //22
                        "세계를 잇는 통로는 또 무슨 소리야.. 날 집으로 보내줘어어어..!!" //23
                    ];
    }
    //max 표정
    // 0: 디폴트 v
    // 1: 졸림 v
    // 2: 눈 뜸 v
    // 3: 놀람/당황V
    // 4: 당당함 V
    // 5: 화남 V
    // 6: 기쁨의 눈물 V
    // 7: 기쁘고 눈물을 닦음 V

    //배경
    //1 : 맥스 방
    //2 : tv켜짐
    //3 : 빨려들어감
    //4 : 헬창월드
    //5 : 손

    //컷 정보
    //0~9 max 표정 순서 : 1 - 1 - 2 - () - 2 - 4 - () - 4 - 2 - 2  //// 
    //10~22 message
    //23 max 표정 3

    //배경 정보

    display(){
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
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, maxSize, maxSize);
                
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                // image(gameIntro_ui[0], textBoxX, height - 500);
                //dialogue
                textAlign(LEFT, TOP);
                textLeading(35);
                textStyle('normal');
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                //스페이스바
                if (frameCount % 60 < 30) image(map1_chr[1], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                else image(map1_chr[2], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                
                break;
            case 1:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //maxname
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                
                break;
            case 2:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                //sound
                playOnce(gameIntro_snd[0]);

                break;
            case 3:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[1], width / 2, height / 2, width, height);
                
                // //max
                // imageMode(CENTER);
                // image(max[2], width / 2, height / 2, maxSize, maxSize);
                // //ui
                // imageMode(CENTER);
                // image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                // //dialogue
                // textAlign(LEFT, TOP);
                // fill(0);
                // textSize(30);
                // text(this.dialogue[this.cut], textX, textY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;

            case 4:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[1], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;

            case 5:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[2], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                //sound
                gameIntro_snd[0].amp(0, 0.3);
                snd[2].amp(1.5);
                playOnce(snd[2]);

                break;
            case 6:
                background(255);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                //sound
                gameIntro_snd[0].stop();
                snd[2].stop();
                snd[0].setVolume(1.3);
                playOnce(snd[0]);                
                // //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                // //ui
                // imageMode(CENTER);
                // image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                // //dialogue
                // textAlign(LEFT, TOP);
                // fill(0);
                // textSize(30);
                // text(this.dialogue[this.cut], textX, textY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 7:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);

                break;

                
            case 8:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;
            case 9:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                // //max
                // imageMode(CENTER);
                // image(max[2], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;
            case 10:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 11:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 12:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 13:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 14:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 15:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 16:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;
            case 17:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 18:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 19:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 20:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 21:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 22:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 23:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                // rectMode(CENTER);
                // noStroke();
                // fill(0, 90);
                // rect(width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], textBoxX, textBoxY, textBoxW, textBoxH);
                // image(gameIntro_ui[0], textBoxX, height - 500);
                //dialogue
                textAlign(LEFT, TOP);
                textLeading(35);
                textStyle('normal');
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                //sound
                snd[0].stop();
                break;
        }
    }
}

