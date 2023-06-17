class Clear2{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 6; // cut의 총 개수 6ro 0~5
        this.dialogue = ["", //0
                        "", //1
                        "이것이 바로 프로틴 물인가?! 초코릿 맛이구만!!", //2
                        "두번째 도전도 성공적으로 끝냈겠지??", //3
                        "이 동작으로 만들어낸 프로틴 쉐이커로도 머슬로스를 공격할 수 있어.", //4
                        "우리의 영웅이 지금 동작도 잘 기억해야 할거야.", //5
                        "그럼 헬창의 마지막 요소만 남은 것인가..."]; //6
    }

    display(){ // 에셋 안 고침
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
                image(clear2_bg[0], width / 2, height / 2, width, height);
                //ui
                // fill(255);
                // textSize(30);
                // textAlign(CENTER, CENTER);
                // text("생긴지 오래되어 보이는 한 펌프", width / 2, height * 23/100)
                break;

            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(clear2_bg[1], width / 2, height / 2, width, height);
                
                break;

            case 2:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                
                //max
                imageMode(CENTER);
                image(max[4], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                // //name
                // fill(255);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                break;

            case 3:
            case 4:
            case 5:
            case 6:
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
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }    
}
