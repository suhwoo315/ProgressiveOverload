class GameOutro { 
    constructor(){
        this.success = false; //false로 바꾸기 (디버깅 용)
        this.cut = 0; // 현재 cut
        this.maxCut = 21; // cut의 총 개수
        this.dialogue = ["히이이이잉.. 근성장에 대한 의지는 영원히 꺾을 수 없는 것이군...", // 0
                        "머슬.. 머슬.. 도대체 머슬이 뭐라고..", // 1
                        "(퓨슈슈슉.. 소멸하는 머슬로스)", // 2
                        "마침내 성공했군!", // 3
                        "당신은!", // 4
                        "정말 고맙네. 자네 덕에 헬창월드가 다시 활기를 되찾았어.", // 5
                        "저길 보게! 레인보우 덤벨과 프로틴 쉐이커를 들고 활보하는 사람들을!", // 6
                        "이게 얼마만에 소파에서 벗어나 마주하는 햇빛인지..!", //무조건 눈물 글썽이는 귀여운 얼굴이어야 함. 아님 말구.. 7
                        "저기.. 눈물 흘리면 근손실.. 어어..! 벽에 저게 뭐지!!", // 8
                        "헬창월드가 의욕으로 넘치는 날, 세계를 잇는 통로가 열릴지어니..", // 9
                        "선택받은 자여! 통로가 열렸으니 이제 자네의 세계로 돌아갈 때가 되었네!", // 10
                        "드디어..!", // 11
                        "건투를 비네! 득근!", // 12
                        "(맥스의 방)", // 13
                        "으... 지금까지 다 꿈이었던 건가... 아까 그 화면은 어디갔지? 방송 끝났나..", // 14
                        "하.. 꿈이 참 생생하네.. 힘들게 싸웠으니까 좀 쉬어야겠어..", // 15
                        "...", // 16
                        "잠깐! 이제부터 다시 운동을 가야겠어!", // 17
                        "(가방을 챙겨 나가는 맥스)", // 18
                        "(맥스가 나간 사이 탁자 위에 있는 쪽지가 놓여져 있다)", // 19
                        "(쪽지 클로즈업 - 반드시 해낼지어니!)"]; //20
        this.creditsY = 0;
        this.creditsSpeed = -2;
        this.credits = ["Credit\n\n\n두부 겸리더 : 안다겸\n불꽃 카리스마 : 윤서우\n블링블링 이즈 : 임승현\n박력징은 : 조지은\n만능열쇠 : 황인호\n주말 : 사짐\n종강 : 안 옴\n수면 : 부족\n살려 : 주세요\n당근 : 흔들고 있음\n여러분들의 근성장을 응원합니다\n잦은 밤샘으로 이미 근손실이 난 게임 제작자들 일동"];                
    }

    display(){
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

        //sound
        //stage4_snd[2].stop();
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
                    stage4.countMax = 3;
                    stage4.bossMax = 7;
                } // 여기는 replay
                else if(mouseX >= width * 4 / 7  &&
                mouseX <= width * 27 / 35  &&
                mouseY >= height * 7 / 10 &&
                mouseY <= height * 4 / 5){
                    exit = true;
                } //여기는 quit. 이 버튼 누르면 exit 누른 거랑 마찬가지로 '정말 나가시겠습니까?' 뜨는 패턴
            }

        }
        else if(this.success == true) {
            switch(this.cut){
                case 0:
                    background(100);
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
                    image(gameOutro_ui[4], bossX, bossY, bossSize, bossSize);
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

                case 1:
                    background(100);
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
                    image(gameOutro_ui[4], bossX, bossY, bossSize, bossSize);
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


                case 2:
                    background(100);
                    //sound
                    playOnce(gameOutro_snd[3]);                                                          
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    break;

                case 3:
                    background(100);
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
                    image(coach[0], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    //sound
                    snd[0].amp(0.8,1);                      
                    break;

                case 4:
                    background(100);
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
                    image(gameOutro_bg[0], width / 2, height / 2, width, height);
                    //dark mode
                    rectMode(CENTER);
                    noStroke();
                    fill(0, 90);
                    rect(width / 2, height / 2, width, height);                    
                    //boss
                    imageMode(CENTER);
                    image(coach[1], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 6:
                    background(100);
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
                    image(coach[1], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 7:
                    background(100);
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
                    image(coach[3], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 8:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    snd[0].amp(0,0.3);                      
                    break;


                case 9:
                    background(100);
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
                    image(coach[0], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 10:
                    background(100);
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
                    image(coach[0], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 11:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    break;

                case 12:
                    background(100);
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
                    image(coach[0], bossX, bossY, bossSize, bossSize);
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 13:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //sound
                    gameOutro_snd[1].amp(0,0.2);
                    playOnce(gameOutro_snd[2]);
                    break;

                case 14:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    gameOutro_snd[1].stop();
                    gameOutro_snd[2].amp(0,0.5);                    
                    break;

                case 15:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    break;

                case 16:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    break;

                case 17:
                    background(100);
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
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    //name
                    fill(70);
                    textStyle('normal');
                    textSize(30);
                    textAlign(LEFT, TOP);
                    text("맥스", chrNameX, chrNameY);
                    //sound
                    gameOutro_snd[2].stop();
                    gameOutro_snd[0].setVolume(0);
                    playOnce(gameOutro_snd[0]);
                    gameOutro_snd[0].amp(0.6,2);                                           
                    break;

                case 18:
                    background(100);
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[4], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    break;

                case 19:
                    background(100);
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[5], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    break;

                case 20:
                    background(100);
                    //bg
                    imageMode(CENTER);
                    image(gameOutro_bg[6], width / 2, height / 2, width, height);
                    // image(story4_ui[0], width / 2, height / 2, width, height);
                    //ui
                    imageMode(CENTER);
                    image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                    //txt
                    //dialogue
                    textAlign(LEFT, TOP);
                    fill(0);
                    textSize(25);
                    text(this.dialogue[this.cut], textX, textY);
                    break;
                
                case 21:
                    //sound
                    //gameOutro_snd[0].amp(1,0.3);                
                    background(0);
                    fill(255);
                    textAlign(CENTER, TOP);
                    textSize(30);
                    text(this.credits, width/2, this.creditsY);
                    this.creditsY += this.creditsSpeed;
                    break;
            }
        }
    }
}