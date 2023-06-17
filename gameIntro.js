class GameIntro{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 19; // 전체 컷 개수
        this.dialogue = ["오늘도 헬스장 안 가면 한 달 동안 안 가는 건데...", //0 - 0 - 1
                        "하지만... 귀찮다... 내일 가자.", //1 - 0 - 1
                        "채널 뭐 재밌는 거 없나...", //2 - 0 - 0
                        "", //3 - 1
                        "엇, 이 화면은 뭐지?",//4 - 1 - 2
                        "아 화면이 너무 밝아... 으아아아~~", //5 - 2 - 3
                        "", //6 - 하얀배경
                        "여긴 어디지..? 아까 봤던 TV속 화면 같은데..?", //7
                        "근데 내 손에 뭔가 쥐어져 있어!", //8 - 3 - 2
                        "", //9 - 3 + 4
                        "지금 이 쪽지가 보인다는 것은 몸 안에 선택 받은 헬창의 DNA가 흐른다는거겠지?", //10
                        "당신은 우리의 헬창월드를 구해줄 유일한 영웅이 되어줄거야.",//11 - 3+4
                        "이곳 헬창월드는 헬스를 사랑하는 사람들이 모여서\n열심히 운동하며 살아가는 천국 같은 곳이야.", //12 - 3+4
                        "하지만 근손실의 망령 머슬로스가 나타나\n여기에 있는 헬스 장비들과 사람들의 운동 의욕을 모두 앗아가고 있어.", //13 - 3+4
                        "이 쪽지를 읽고 있을 땐 이미 머슬로스가 헬창월드를 완전히 파괴한 이후겠지...", //14 - 3+4
                        "그러나 우리의 영웅은 헬창의 3요소를 되찾아 머슬로스를 물리치고 우리 헬창월드를 되돌려줄거야.", //15 - 3+4
                        "그래야만 자신도 원래 세계로 되돌아갈 수 있을테니...\n우리의 헬창월드는 반드시 돌아올거야 언젠가...", //16 - 3+4
                        "뭐야...? 내가 헬창월드를 구원할 유일한 영웅이라고?", //17
                        "난 헬스장도 귀찮아서 제대로 가지 않은 사람인데...", //18 - 3 - 3
                        "그래도 원래 내 세계로 돌아가야 하니 한번 해보자고!"] //19 - 3 - 4
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
                image(max[0], width / 2, height / 2, maxSize, maxSize);
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
                snd[2].setVolume(0.5);
                snd[2].amp(0.8,0.3);
                playOnce(snd[2]);

                break;
            case 6:
                background(255);
                // imageMode(CENTER);
                // image(gameIntro_bg[2], width / 2, height / 2, width, height);
                
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
                gameIntro_snd[0].stop();
                snd[2].stop();
                snd[0].setVolume(0);
                snd[0].amp(1,0.3);
                playOnce(snd[0]);
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
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width / 3, coach[1].height / 3);
                // //ui
                imageMode(CENTER);
                image(gameIntro_bg[4], width / 2, height * 2/5, width, height);
                // imageMode(CENTER);
                // image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                // //dialogue
                // textAlign(LEFT, TOP);
                // fill(0);
                // textSize(30);
                // text(this.dialogue[this.cut], textX, textY);
                // //name
                // fill(70);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("코치 볼트", chrNameX, chrNameY);
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
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
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
            case 18:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, maxSize, maxSize);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width, coach[1].height);
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
            case 19:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, width, height);
                
                // max
                imageMode(CENTER);
                image(max[4], width / 2, height / 2, maxSize, maxSize);
                // coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2 - 100, coach[1].width / 3, coach[1].height / 3);
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
                snd[0].amp(0,0.3);
                break;
        }
    }
}

