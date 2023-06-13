class Story4{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 8; // 전체 컷 개수, 총 2개 0~1
        this.dialogue = ["이곳이 바로 머슬로스의 방...!\n레인보우 바벨을 여기에 놓으면 되겠군.", // 0(대사 컷 기준) - 1(전체 컷 기준) 그 앞에 대사 없는 장면 있음
                        "레인보우 바벨을 놓음에 따라 거대한 방의 문이 열린다.", // 1 - 2 이 다음에 대사 없는 장면 있음
                        "이제 저 괴물을 물리치면 원래 내 세계로 돌아갈 수 있는거야!", // 2 - 4
                        "크아아앙(대충 감히 여기가 어디라고 찾아왔냐는 뜻)", // 3 - 5
                        "무슨 소리인지 모르겠지만 머슬로스, 널 가만두지 않겠어!", // 4 - 6
                        "크아아앙(대충 넌 날 이길 수 없다는 뜻)", // 5 - 7
                        "지금까지 너가 수행했던 동작들로 머슬로스와 최후의 결투를 벌일 거야.\n우리가 함께 수련했던 동작들을 잘 명심하라고!"]; 6 - 8
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
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
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
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[5], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[1], textX, textY);
                break;
            
            case 3:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
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
                text(this.dialogue[2], textX, textY);
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
                text(this.dialogue[4], textX, textY);
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
                text(this.dialogue[5], textX, textY);
                //name
                fill(255);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("머슬로스", width / 2 - 460, height / 2 + 65);
                break;

            case 8:
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
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}