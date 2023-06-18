class Story2{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 11; // 전체 컷 개수
        this.dialogue = ["(또다시 정처 없이 떠돈지 몇 시간째)", //0
                        "첫 번째 요소가 '장비'.. 또 뭐가 필요한 거지.. 운동만 잘하면 다 아닌가..", //1
                        "으..!! 미리 알려주면 어디가 덧나냐고!!\n자기 할 말만 하고.. 사람도 하나 없고 얼마나 썰렁하다고..", //2
                        "", //3
                        "에? 이건 또 뭐야? 펌프? 오랫동안 방치된 것 같은데..\n저 버튼은 이제 작동도 안 되겠네..", //펌프 ui 등장
                        "오, 선택받은 자여!", //5
                        "왠지 자네가 나를 기다리고 있었을 것만 같은 기분이 들었다네.",
                        "헬창월드 사람들은 태초부터 물 대신 프로틴 쉐이커를 마셔왔다네.\n지금 눈앞에 보이는 ㅇㅇ는 영양소가 반짝이는 프로틴 리버(river)였지.", //7
                        "하지만 근손실의 망령 머슬로스가 펌프를 막아버려서 더이상 프로틴 리버가 흐르지 않게 되었다네...",
                        "오, 선택받은 자여!",
                        "프로틴 리버를 다시 흐르게 해 헬창월드 사람들에게 헬창의 두 번째 요소 '식단'을 되찾아주게!",
                        "반드시 해낼지어니!" //11
                        ];
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
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
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
                //snd[0].amp(0.8,1);  
                break;

            case 1:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, maxSize, maxSize);
                
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
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
                break;

            case 2:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[5], width / 2, height / 2, maxSize, maxSize);
                
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
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
                break;
            case 3:
                background(100);
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                image(story2_ui[1], width / 2, height / 2, width, height);
                fill(255);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("너무 낡아서 사용할 수 없는 펌프", width / 2, height * 23/100);
                snd[0].amp(0.8,0.3);
                break;
            case 4:
                background(100);
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);
                
                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
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
                break;
            case 5:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 6:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 7:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 8:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 9:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 10:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 11:
                //bg
                imageMode(CENTER);
                image(story2_bg[0], width / 2, height / 2, width, height);
                //펌프
                image(story2_ui[0], width / 2, height / 2, width, height);
                // image(story2_ui[1], width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);

                //ui
                imageMode(CENTER);
                image(ui[6], width / 2, height / 2, width, height);

                //message
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                //sound
                //snd[0].amp(0,0.3);                  
                break;
        }   
        // background(100);
        // imageMode(CENTER);
        // image(story2_bg[0], width / 2, height / 2, story2_bg[0].width, story2_bg[0].height);
    }
}