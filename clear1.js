class Clear1{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 7; // cut의 총 개수
        this.dialogue = [
                        "어후, 죽는 줄 알았네..!\n그래도 꺼내긴 꺼냈네. 이 쪽지가 하는 말이 완전 허무맹랑한 소리는 아닌가 봐..", //0
                        "오, 선택받은 자여!", //1
                        "우리의 기대대로 첫 번째 도전을 성공적으로 마쳤는가보군!\n역시 헬창 마스터의 DNA네!", //2
                        "이 레인보우 바벨은 나중에 머슬로스와의 결투에서 요긴하게 쓰일 것이라네.", //3
                        "레인보우 바벨을 꺼내기 위해 했던 동작을 절대 잊어서는 안 된다네!", //4
                        "팔꿈치를 양옆에 붙이고 팔을 접었다 폈다 접었다 폈다 하면 기부니가 좋..", //미안ㅠ바꿔도돼 //5
                        "어서 헬창의 두 번째 요소를 찾아서 떠나게!", //6
                        "이, 이상한 사람이네.." //7
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
                image(clear1_bg[0], width/2, height/2, width, height);
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

                //스페이스바
                if (frameCount % 60 < 30) image(map1_chr[1], width * 63 / 100, height * 63 / 100, width * 0.6, height * 0.6);
                else image(map1_chr[2], width * 63 / 100, height * 63 / 100, width * 0.6, height * 0.6);
                break;

            case 1: //쪽지
                image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

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

            case 2: //쪽지
                image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
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
                image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

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
            case 4: //쪽지
            image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);

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
                image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
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
            image(clear1_bg[0], width/2, height/2, width, height);
                rectMode(CENTER);
                noStroke();
                fill(0, 90);
                rect(width / 2, height / 2, width, height);
                
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
            image(clear1_bg[0], width/2, height/2, width, height);
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
                snd[0].amp(0,0.3);   
                break;
        }
    }

    // 현재 cut을 반환한다 - sketch.js에서 사용
    getCut(){
        return this.cut;
    }

    // cut의 총 개수를 반환한다
    getMaxCut(){
        return this.maxCut;
    }

    // 다음 cut으로 넘어간다
    increaseCut(){
        this.cut++;
    }
} 