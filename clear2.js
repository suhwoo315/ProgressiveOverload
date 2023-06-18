class Clear2{ 
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 11; // cut의 총 개수
        this.dialogue = ["와, 쉽지 않았다. 하마터면 실패할 뻔했네.\n아니, 나 왜 열심히 하고 있는 거지?", //0,
                        "아니야, 그래도 움직이니까 기분이 좋긴 하다.\n프로틴 쉐이커? 이건 무슨 맛일까..?", //1
                        "", //프로틴쉐이커 들고 있는 손
                        "음, 초콜릿 맛이네! 생각보다 맛있는데..?", //3
                        "오, 선택받은 자여!",
                        "두 번째 도전까지 성공적으로 마치다니 자네가 너무나 자랑스럽다네!",
                        "이 프로틴 쉐이커 또한 나중에 머슬로스와의 결투에서 요긴하게 쓰일 것이라네.",
                        "그러니 이번 동작도 절대 잊어서는 안 된다네!",
                        "양팔을 옆으로 들었다 내렸다 들었다 내렸다 하면 쏘 해피..", //쏘리
                        "자네도 이쯤되면 인정하지 않나? 운동은 우리를 행복하게 만들어 준다는 것을..!",
                        "그럼 이제 헬창의 마지막 요소를 찾아 나서게!",
                        "운동하는 사람은 착한 사람이라더니.. 조금 이상하지만 그래도 착한 것 같긴 하네.." //11    
                        ];
    }

    display(){ // 아직 에셋 안 고침

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

        imageMode(CENTER);

        switch(this.cut){
            case 0: //맥스
                image(clear2_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[8], width / 2, height / 2, maxSize, maxSize);
                
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
                snd[0].amp(0.8,1);                  
                break;

            case 1: //쪽지
                image(clear2_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                
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

            case 2: //프로틴쉐이커 들고 있는 손
                image(clear2_bg[0], width/2, height/2, width, height);
                

                //hand
                imageMode(CENTER);
                image(clear2_bg[1], width / 2, height / 2, width, height);
                break;

            case 3: //맥스
                image(clear2_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                // //hand
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                // //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                
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
            case 4: //쪽지
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 5: //쪽지
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            

            case 6: //쪽지
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 7: //맥스
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 8:
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 9:
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 10:
                image(clear2_bg[0], width/2, height/2, width, height);

                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //hand
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
                //ui
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 11:
                image(clear2_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[2], width / 2, height / 2, maxSize, maxSize);
                
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
                snd[0].amp(0,0.3);                 
                break;
        }
    }

    // display(){ // 에셋 안 고침
    //     let maxSize = max[0].height * windowHeight / 1600 * 2 / 3;
    //     let textBoxX = width / 2;
    //     let textBoxY = height / 2;
    //     let textBoxW = width;
    //     let textBoxH = height;
    //     let textX = width / 7;
    //     let textY = height * 2/3;
    //     let chrNameX = width / 15;
    //     let chrNameY = height * 2 / 3;
    //     let messageX = width / 2
    //     let messageY = height * 690 / 918.5625; 
    //     switch(this.cut){
    //         case 0:
    //             background(100);
    //             //bg
    //             imageMode(CENTER);
    //             image(clear2_bg[0], width / 2, height / 2, width, height);
    //             //ui
    //             // fill(255);
    //             // textSize(30);
    //             // textAlign(CENTER, CENTER);
    //             // text("생긴지 오래되어 보이는 한 펌프", width / 2, height * 23/100)
    //             break;

    //         case 1:
    //             background(100);
    //             //bg
    //             imageMode(CENTER);
    //             image(clear2_bg[1], width / 2, height / 2, width, height);
                
    //             break;

    //         case 2:
    //             background(100);
    //             //bg
    //             imageMode(CENTER);
    //             image(story1_bg[0], width / 2, height / 2, width, height);
                
    //             //max
    //             imageMode(CENTER);
    //             image(max[4], width / 2, height / 2, maxSize, maxSize);
    //             //ui
    //             imageMode(CENTER);
    //             image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
    //             //txt
    //             //dialogue
    //             textAlign(CENTER, TOP);
    //             fill(100);
    //             textSize(30);
    //             text(this.dialogue[this.cut], textX, textY);
    //             // //name
    //             // fill(255);
    //             // textSize(30);
    //             // textAlign(LEFT, TOP);
    //             // text("맥스", chrNameX, chrNameY);
    //             break;

    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //             background(100);
    //             //bg
    //             imageMode(CENTER);
    //             image(story1_bg[0], width / 2, height / 2, width, height);
    //             //ui
    //             imageMode(CENTER);
    //             image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
    //             //txt
    //             //dialogue
    //             textAlign(CENTER, TOP);
    //             fill(100);
    //             textSize(30);
    //             text(this.dialogue[this.cut], messageX, messageY);
    //             break;
    //     }
    //     // background(100);
    //     // imageMode(CENTER);
    //     // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    // }    
}
