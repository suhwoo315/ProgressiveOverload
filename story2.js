class Story2{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 3; // 전체 컷 개수, 총 4개 0~3
        this.dialogue = ["",
                        "이 펌프는 뭐지? 오랫동안 방치된 것 같은데…\n저 버튼은 이제 작동도 안 될 것 같아…",
                        "머슬로스가 이 프로틴 펌프를 막아버려서 이 세상에 모든 프로틴이 고갈되었어…\n우리는 항상 물 대신 프로틴 쉐이커를 먹어왔는데 더 이상 먹을 수 없는 것일까?",
                        "우리의 영웅은 이 레인보우 바벨을 땅속에서 꺼내서\n우리의 바벨을 되찾아줄 거야. 반드시 해낼 거야."]
    }

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
            case 3:
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
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}