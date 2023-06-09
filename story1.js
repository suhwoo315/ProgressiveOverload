class Story1{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 10; // 전체 컷 개수
        this.dialogue = ["(정처 없이 떠돈지 몇 시간째)", //0
                        "헬창의 3요소가 도대체 뭔데.. 그걸 안 알려주고 그렇게 사라지면 어떡해..!", //1
                        "", //2
                        "엉? 이 바벨들은 다 뭐야? 왜 모두 땅에 박혀 있지?\n헬창월드가 그런지 조경도 참 요상하네..", //3
                        "오, 선택받은 자여!", //4
                        "으아 깜짝이야! 도대체 이 쪽지는 왜 자기 맘대로 나타났다 사라졌다 그러는 거야..!",//5
                        "머슬로스의 침공 이전 헬창월드에선 누구나 양손에 레인보우 바벨을 쥐고 다녔다네.",
                        "하지만 근손실의 망령 머슬로스가 모든 바벨을 바닥 깊이 꽂아버렸지..\n마법이 걸려 아무도 바벨을 꺼내지 못하였어.",
                        "오, 선택받은 자여! 우리는 자네를 믿네. 자네는 분명히 레인보우 바벨을 땅속에서 꺼낼 수 있을테니!",
                        "레인보우 바벨을 꺼내 헬창월드 사람들에게 헬창의 첫 번째 요소 '장비'를 되찾아주게!",
                        "반드시 해낼지어니!" //10
                    ];
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
                textSize(40);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(40);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);

                //스페이스바
                if (frameCount % 60 < 30) image(map1_chr[1], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                else image(map1_chr[2], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                
                break;


            // //max
            // imageMode(CENTER);
            // image(max[1], width / 2, height / 2, maxSize, maxSize);
                // background(100);
                // //bg
                // imageMode(CENTER);
                // image(story1_bg[0], width / 2, height / 2, width, height);
                // //레인보우 바벨
                // image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);
                // fill(255);
                // textSize(40);
                // textAlign(CENTER, CENTER);
                // text("레인보우 바벨들이 박혀있다.", width / 2, height * 23/100)

                // break;

            case 1:
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
                textSize(40);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(40);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;

            case 2:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                fill(255);
                textSize(40);
                textAlign(CENTER, CENTER);
                text("레인보우 바벨들이 박혀있다.", width / 2, height * 23/100)

                //스페이스바
                if (frameCount % 60 < 30) image(map1_chr[1], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                else image(map1_chr[2], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                break;
            case 3:
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);
                
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
                // image(gameIntro_ui[0], textBoxX, height - 500);
                //dialogue
                textAlign(LEFT, TOP);
                textLeading(35);
                textStyle('normal');
                fill(0);
                textSize(40);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(70);
                textStyle('normal');
                textSize(40);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;
            case 4:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);


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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 5:

            background(100);
            imageMode(CENTER);
            image(story1_bg[0], width / 2, height / 2, width, height);
            image(story1_ui[0], width / 2, height / 2, width, height);
            // image(story1_ui[1], width / 2, height / 2, width, height);

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
            // image(gameIntro_ui[0], textBoxX, height - 500);
            //dialogue
            textAlign(LEFT, TOP);
            textLeading(35);
            textStyle('normal');
            fill(0);
            textSize(40);
            text(this.dialogue[this.cut], textX, textY);
            //name
            fill(70);
            textStyle('normal');
            textSize(40);
            textAlign(LEFT, TOP);
            text("맥스", chrNameX, chrNameY);

                // //bg
                // background(100);
                // imageMode(CENTER);
                // image(story1_bg[0], width / 2, height / 2, width, height);
                // image(story1_ui[0], width / 2, height / 2, width, height);
                // // image(story1_ui[1], width / 2, height / 2, width, height);


                // //dark mode
                // rectMode(CENTER);
                // noStroke();
                // fill(0, 90);
                // rect(width / 2, height / 2, width, height);

                // //hand
                // imageMode(CENTER);
                // image(gameIntro_bg[4], width / 2, height / 2, width, height);

                // //ui
                // imageMode(CENTER);
                // image(ui[6], width / 2, height / 2, width, height);

                // //message
                // //dialogue
                // textAlign(CENTER, TOP);
                // fill(100);
                // textSize(40);
                // text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 6:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);

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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 7:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);

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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 8:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);

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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 9:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);

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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
            case 10:
                //bg
                background(100);
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                image(story1_ui[0], width / 2, height / 2, width, height);
                // image(story1_ui[1], width / 2, height / 2, width, height);

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
                textSize(40);
                text(this.dialogue[this.cut], messageX, messageY);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}