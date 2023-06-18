class Clear3{ 
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 10; // cut의 총 개수
        this.dialogue = ["우와..! 정말 힘들었다! 그래도 해냈어!!\n방패도 조금.. 멋있는 걸..?",
                        "쪽지 안 나오나? 이제 헬창의 3요소 모두 찾았는데!!",
                        "오, 선택받은 자여!",
                        "헬창의 3요소를 모두 되찾다니 헬창월드 사람들은 감격의 눈물을 흘릴 것이라네!",
                        "방금 얻은 방패로 머슬로스의 나태의 주문을 막을 수 있을 것이라네.",
                        "그러니 이번 동작도 잊어서는 안 된다네!",
                        "양팔을 위로 올렸다 내렸다 올렸다 내렸다..! 어떤가! 힘이 나지 않는가!!",
                        "이제 헬창의 3요소를 모두 얻었으니, 머슬로스와의 결투만이 남았군!",
                        "지금까지 했던 동작들을 잘 활용해서 꼭 헬창월드를 구해주게!",
                        "반드시 해낼지어니!",
                        "그래, 이렇게 된 거 한 번 가보자고!!" //10
                    ];
    }

    display(){ //에셋 안 고침
        imageMode(CENTER);

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
                image(clear3_bg[0], width/2, height/2, width, height);

                //max
                imageMode(CENTER);
                image(max[4], width / 2, height / 2, maxSize, maxSize);
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
                
            case 1:
                image(clear3_bg[0], width/2, height/2, width, height);

                //max
                imageMode(CENTER);
                image(max[4], width / 2, height / 2, maxSize, maxSize);
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

            case 2: //쪽지
                image(clear3_bg[0], width/2, height/2, width, height);

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

            case 3: //쪽지
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);

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

            case 4:
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);

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

            case 5:
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);

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

            case 6:
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);
                
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

            case 7:
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);
                
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
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);
                
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
                image(clear3_bg[0], width/2, height/2, width, height);
                // image(clear3_ui[0], width / 2, height / 2, width, height);
                
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
                image(clear3_bg[0], width/2, height/2, width, height);

                //max
                imageMode(CENTER);
                image(max[4], width / 2, height / 2, maxSize, maxSize);
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
                //snd[0].amp(0,0.3);                  
                break;
        }
    }
}