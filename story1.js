class Story1{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 5; // 전체 컷 개수
        this.dialogue = ["", //0
                        "뭐지? 여긴 왜 바벨들이 다 땅에 박혀있는거지?", //1
                        "헬창월드에선 누구나 양손에 레인보우 바벨을 쥐고 다녔지.", //2
                        "하지만 머슬로스가 모든 바벨을 다 바닥에 깊이 꽂아 놓아서 아무도 바벨을 쓰지 못하고 있어.", //3
                        "우리의 영웅은 이 레인보우 바벨을 땅속에서 꺼내서 우리의 바벨을 되찾아줄 거야.", //4
                        "반드시 해낼 거야."]; //5
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
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                fill(255);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("레인보우 바벨들이 박혀있다.", width / 2, height * 23/100)
                snd[0].amp(0.8,0.3);
                break;

            case 1:
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

            case 2:
            case 3:
            case 4:
            case 5:
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
                snd[0].amp(0,0.3);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}