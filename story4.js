class Story4{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 7; // 전체 컷 개수
        this.dialogue = ["", //0
                        "이곳이 바로 머슬로스의 방...!", //1
                        "지금쯤이면 머슬로스 방 앞에 있겠지...", //2
                        "지금까지 배운 동작들로 머슬로스와의 결투에서 우리 영웅은 분명히 머슬로스를 무찌를 거야.", //3
                        "이제 저 괴물을 물리치면 원래 내 세계로 돌아갈 수 있는 거야!", //4
                        "이미 이 세상에 근성장과 관련한 건 다 없앴는데 저 애송이는 뭐지?", //5
                        "머슬로스, 널 가만두지 않겠어! 너를 무찌르고 다시 헬창월드를 되찾겠어!", //6
                        "너도 결국 근손실에서 벗어날 수 없을 것이야! 낄낄낄..."]; //7
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

        let textBoxX = width / 2;
        let textBoxY = height / 2;
        let textBoxW = width;
        let textBoxH = height;
        let textX = width / 2 - 580;
        let textY = height - 250;

        switch(this.cut){
            case 0:
                background(100);
                break;

            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, max[1].width / 3, max[1].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[0], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("맥스", width / 2 - 460, height / 2 + 65);
                break;

            case 2:
            case 3:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //coach
                imageMode(CENTER);
                image(coach[0], width / 2, height / 2 - 100, coach[0].width / 3, coach[0].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[6], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("코치 볼트", width / 2 - 460, height / 2 + 65);
                break;

            case 4:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, max[1].width / 3, max[1].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[0], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("맥스", width / 2 - 460, height / 2 + 65);
                break;

            case 5:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //머슬로스
                imageMode(CENTER);
                image(boss[0], width / 2, height / 2, max[1].width / 3, max[1].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[3], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("머슬로스", width / 2 - 460, height / 2 + 65);
                break;

            case 6:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, max[1].width / 3, max[1].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[0], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("맥스", width / 2 - 460, height / 2 + 65);
                break;

            case 7:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //머슬로스
                imageMode(CENTER);
                image(boss[0], width / 2, height / 2, max[1].width / 3, max[1].height / 3);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[3], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("머슬로스", width / 2 - 460, height / 2 + 65);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}