class Story4{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 7; // 전체 컷 개수
        this.dialogue = ["", //0
                        "이곳이 바로 머슬로스의 방...! 후..", //1
                        "(끼익)", //2
                        "이잉? 이미 이 세상에 근성장과 관련한 건 모조리 없앴는데! 저 애송이는 뭐지?", //3
                        "뭐야.. 생각보다 조그맣잖아. 한주먹거리도 안 되겠는데?", //4
                        "지금 뭐라고 혼자서 중얼거리는 것이지! 넌 누구냐!\n어떻게 내 마법의 영향을 받지 않는 것이지!", //5
                        "어이, 머슬로스! 운동, 식단, 정신력을 다 얻은 나를 감당할 수 있겠나!", //6
                        "애송이같으니라고.. 너도 결국 근손실에서 벗어날 수 없을 것이야! 후훗..."]; //7
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

         // 고치기 필요 (임시 코드)
         let bossX = width / 2;
         let bossY = height / 2;
         let bossSize = width / 3;
         let maxSize = max[0].height * windowHeight / 1600 * 2 / 3;
         let textBoxX = width / 2;
         let textBoxY = height / 2;
         let textBoxW = width;
         let textBoxH = height;
         let textX = width / 7;
         let textY = height * 2/3;
         let chrNameX = width / 15;
         let chrNameY = height * 2 / 3;
         let bossNameX = width / 19.5;
         let bossNameY = height * 2 / 3;
         let messageX = width / 2
         let messageY = height * 690 / 918.5625;
        switch(this.cut){
            case 0:
                background(100);
                imageMode(CENTER);
                image(story4_bg[0], width / 2, height / 2, width, height);
                image(story4_ui[0], width / 2, height / 2, width, height);

                //text
                fill(255);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("무서운 머슬로스의 방 문", width / 2, height * 23/100);
                break;


            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);
                // image(story4_ui[0], width / 2, height / 2, width, height);
                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, maxSize, maxSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
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
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);
                // image(story4_ui[0], width / 2, height / 2, width, height);
                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, maxSize, maxSize);

                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
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
                image(story4_bg[1], width / 2, height / 2, width, height);

                //boss
                imageMode(CENTER);
                image(stage4_chr_boss_default[0], bossX, bossY, bossSize, bossSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("머슬로스", bossNameX, bossNameY);
                break;

            case 4:
                background(100);
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);
                // image(story4_ui[0], width / 2, height / 2, width, height);
                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, maxSize, maxSize);

                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);

                
                break;

            case 5:
                background(100);
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);

                //boss
                imageMode(CENTER);
                image(stage4_chr_boss_default[0], bossX, bossY, bossSize, bossSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("머슬로스", bossNameX, bossNameY);
                break;

            case 6:
                background(100);
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);
                // image(story4_ui[0], width / 2, height / 2, width, height);
                //dark mode
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, maxSize, maxSize);

                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);

            case 7:
                background(100);
                //bg
                imageMode(CENTER);
                image(story4_bg[1], width / 2, height / 2, width, height);

                //boss
                imageMode(CENTER);
                image(stage4_chr_boss_default[0], bossX, bossY, bossSize, bossSize);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(25);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(30);
                textAlign(LEFT, TOP);
                text("머슬로스", bossNameX, bossNameY);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}