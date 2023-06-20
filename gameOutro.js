class GameOutro { 
    constructor(){
        this.success = false; //false로 바꾸기 (디버깅 용)
        this.cut = 0; // 현재 cut
        this.maxCut = 23; // cut의 총 개수
        this.dialogue = ["", //0
                        "", //1
                        "히이이이잉.. 근성장에 대한 의지는 영원히 꺾을 수 없는 것이군...", // 2
                        "머슬.. 머슬.. 도대체 머슬이 뭐라고..", // 3
                        "(퓨슈슈슉.. 소멸하는 머슬로스)", // 4
                        "마침내 성공했군!", // 5
                        "당신은!", // 6
                        "정말 고맙네. 자네 덕에 헬창월드가 다시 활기를 되찾았어.", // 7
                        "저길 보게! 레인보우 덤벨과 프로틴 쉐이커를 들고 활보하는 사람들을!", // 8
                        "이게 얼마만에 소파에서 벗어나 마주하는 햇빛인지..!", //무조건 눈물 글썽이는 귀여운 얼굴이어야 함. 아님 말구.. 9
                        "저기.. 눈물 흘리면 근손실.. 어어..! 벽에 저게 뭐지!!", // 10
                        "헬창월드가 의욕으로 넘치는 날, 세계를 잇는 통로가 열릴지어니..", // 11
                        "선택받은 자여! 통로가 열렸으니 이제 자네의 세계로 돌아갈 때가 되었네!", // 12
                        "드디어..!", // 13
                        "건투를 비네! 득근!", // 14
                        "(맥스의 방)", // 15
                        "으... 지금까지 다 꿈이었던 건가... 아까 그 화면은 어디갔지? 방송 끝났나..", // 16
                        "하.. 꿈이 참 생생하네.. 힘들게 싸웠으니까 좀 쉬어야겠어..", // 17
                        "...", // 18
                        "잠깐! 이제부터 다시 운동을 가야겠어!", // 19
                        "", // 20
                        "", // 21
                        ""]; //22
        this.creditsY = 0;
        this.creditsSpeed = -1;               
    }

    display(){
        let bossX = width / 2;
        let bossY = height / 2;
        let bossW = width;
        let bossH = height;
        let maxSize = max[0].height * windowHeight / 1600 * 2 / 3;
        let textBoxX = width / 2;
        let textBoxY = height / 2;
        let textBoxW = width;
        let textBoxH = height;
        let textX = width / 7;
        let textY = height * 2/3;
        let chrNameX = width / 15;
        let chrNameY = height * 2 / 3;
        let bossNameX = width / 17.6;
        let bossNameY = height * 2 / 3;
        let coachSize = height * 60 / 100;

        //sound
        stage4_snd[0].stop();
        if (this.success == false){
            background(100);
            //game over + 멘트 + replay button + exit button 같이 있는 창 asset 하나
            image(gameOutro_bg[2], width / 2, height / 2,  width, height);
            image(gameOutro_ui[0], width / 2, height / 2,  width, height);
            image(gameOutro_ui[1], width / 2, height / 2,  width, height);
            if (mouseIsPressed){
                if(mouseX >= width / 7 + width / 35  &&
                mouseX <= width * 5 / 14 &&
                mouseY >= height * 7 / 10 &&
                mouseY <= height * 4 / 5){
                    phase = 4;
                    scene = 2;
                    tutorial4.cut = 8;
                    stage4.gameStarted = false;
                    stage4.index = 0;
                    stage4.gaming = false;
                    stage4.attackSuccess = false;
                    stage4.attackFail = false;
                    stage4.defendSuccess = false;
                    stage4.defendFail = false;
                    stage4.countMax = 5;
                    stage4.countBoss = 5;
                    stage4.touchLower = false;
                    stage4.touchMiddle = false;
                    stage4.touchUpper = false;
                    stage4.y = 0;
                } // 여기는 replay
                else if(mouseX >= width * 4 / 7  &&
                mouseX <= width * 27 / 35  &&
                mouseY >= height * 7 / 10 &&
                mouseY <= height * 4 / 5){
                    //exit = true;
                    location.reload();
                } //여기는 quit. 이 버튼 누르면 새로고침
            }

        }
        else if(this.success == true) {
            switch(this.cut){
                case 0:
                    playOnce(gameOutro_snd[4]);
                    imageMode(CENTER); 
                    image(stage4_bg[0], width / 2, height / 2, width, height);
                    image(stage4_ui[2], width / 2, height / 2, width, height);
                    image(stage4_ui[3], width / 2, height / 2, width, height);
                    image(stage4_chr_boss_default[0], width/2 , height/2 , width, height); //boss
                    image(stage4_chr_max_default[0], width/2, height/2, width, height); //max
                    background(0, 150);
                    image(gameOutro_ui[5], width / 2, height / 2, width, height);
                    break;

                case 1:
                    imageMode(CENTER); 
                    image(stage4_bg[0], width / 2, height / 2, width, height);
                    image(stage4_ui[2], width / 2, height / 2, width, height);
                    image(stage4_ui[3], width / 2, height / 2, width, height);
                    image(stage4_chr_boss_default[0], width/2 , height/2 , width, height); //boss
                    image(stage4_chr_max_default[0], width/2, height/2, width, height); //max
                    background(0, 150);
                    image(gameOutro_ui[6], width / 2, height / 2, width, height);
                    noStroke();
                    fill(0);
                    textSize(40);
                    textAlign(CENTER, CENTER);
                    fill(0);
                    text("덤벨을 제자리에\n내려놓아주세요.", width/2, height*9.3/20);
                    break;

                case 2:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(gameOutro_ui[4], bossX, bossY, bossW, bossH);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("머슬로스", bossNameX, bossNameY);

                    //스페이스바
                    if (frameCount % 60 < 30) image(map1_chr[1], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                    else image(map1_chr[2], width * 75 / 100, height * 72 / 100, width * 0.4, height * 0.4);
                    break;

                case 3:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(gameOutro_ui[4], bossX, bossY, bossW, bossH);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("머슬로스", bossNameX, bossNameY);
                    break;


                case 4:
                    //sound
                    gameOutro_snd[3].setVolume(2.5);
                    playOnce(gameOutro_snd[3]);                                                          
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    // //보스 사라지게
                    // // //boss
                    
                    // bossW1 -= 16;
                    // bossH1 -= 9;
                    // if(bossW1 <= 0 || bossH1 <= 0) {
                    //     bossW1 = 0;
                    //     bossH1 = 0;
                    // }
                    // imageMode(CENTER);
                    // image(gameOutro_ui[4], bossX, bossY, bossW1, bossH1);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    break;

                case 5:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //coach
                    imageMode(CENTER);
                    image(coach[0], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    //sound
                    snd[0].setVolume(1.5);
                    playOnce(snd[0]);                      
                    break;

                case 6:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);
                    //max
                    imageMode(CENTER);
                    image(max[4], width / 2, height / 2, maxSize, maxSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
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
                
                case 7:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[1], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 8:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[1], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 9:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[3], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 10:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);
                    //max
                    imageMode(CENTER);
                    image(max[1], width / 2, height / 2, maxSize, maxSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    snd[0].amp(0,0.3);                      
                    break;


                case 11:
                    //sound
                    snd[0].stop();
                    gameOutro_snd[1].setVolume(0);
                    playOnce(gameOutro_snd[1]);
                    gameOutro_snd[1].amp(1,1);                                       
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[1], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[0], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 12:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[1], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[0], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 13:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[1], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);
                    //max
                    imageMode(CENTER);
                    image(max[6], width / 2, height / 2, maxSize, maxSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
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

                case 14:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[1], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[0], bossX, bossY, coachSize, coachSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 15:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[3], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //sound
                    gameOutro_snd[1].amp(0,0.2);
                    gameOutro_snd[2].setVolume(2.5);
                    playOnce(gameOutro_snd[2]);
                    break;

                case 16:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[3], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
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
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    gameOutro_snd[1].stop();
                    gameOutro_snd[2].stop();                    
                    break;

                case 17:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[3], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);
                    //max
                    imageMode(CENTER);
                    image(max[1], width / 2, height / 2, maxSize, maxSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
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

                case 18:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[3], width / 2, height / 2, width, height);
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
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    break;

                case 19:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[3], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);
                    //max
                    imageMode(CENTER);
                    image(max[4], width / 2, height / 2, maxSize, maxSize);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(40);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(40);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    gameOutro_snd[0].setVolume(0);
                    playOnce(gameOutro_snd[0]);
                    gameOutro_snd[0].amp(0.8,2);                                           
                    break;

                case 20:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[4], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    break;

                case 21:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[5], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    break;

                case 22:
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[6], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    break;
                
                case 23:
                    //sound
                    gameOutro_snd[0].amp(1.5,0.3);
                    background(0);
                    imageMode(CORNER);
                    image(gameOutro_credit[0], 0, this.creditsY, width, gameOutro_credit[0].height * width / gameOutro_credit[0].width);
                    this.creditsY += this.creditsSpeed;
                    break;
            }
        }
    }
}