class GameOutro { 
    constructor(){
        this.success = false;
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
                        "(소파 위에 있는 쪽지)", // 19
                        "(쪽지 클로즈업 - 반드시 해낼지어니!)"]; //20
                        
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
        let messageX = width / 2
        let messageY = height * 690 / 918.5625;
        let creditsY = 0;
        let creditsSpeed = 0.1;

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

                case 1:
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

                case 2:
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 6:
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 8:
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

                case 9:
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 10:
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 11:
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

                case 12:
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
                    text("코치볼트", bossNameX, bossNameY);
                    break;

                case 13:
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

                case 14:
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

                case 15:
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

                case 16:
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

                case 17:
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

                case 18:
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

                case 19:
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

                case 20:
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
                
                //case 21:
                //    background(0);
                //    fill(255);
                //    textAlign(CENTER, TOP);
                //    textSize(50);
                //    creditsY += creditsSpeed;
                //    text("Credit", windowWidth / 2, windowWidth * (19-creditsY) / 32);
                //    textSize(30);
                //    text("두부 온 리더 : 안다겸", windowWidth / 2, windowWidth * (21-creditsY) / 32);
                //    text("불꽃 카리스마 : 윤서우", windowWidth / 2, windowWidth * (22-creditsY) / 32);
                //    text("블링블링 이즈 : 임승현", windowWidth / 2, windowWidth * (23-creditsY) / 32);
                //    text("마이네임 이즈 : 임승현", windowWidth / 2, windowWidth * (23-creditsY) / 32);                
                //    text("박력짐은 : 조지은", windowWidth / 2, windowWidth * (24-creditsY) / 32);
                //    text("만능열쇠 황인호", windowWidth / 2, windowWidth * (25-creditsY) / 32);
                //    text("주말 : 사라짐", windowWidth / 2, windowWidth * (26-creditsY) / 32);
                //    text("종강 : 안 옴", windowWidth / 2, windowWidth * (27-creditsY) / 32);
                //    text("수면 : 부족", windowWidth / 2, windowWidth * (28-creditsY) / 32);
                //    text("살려 : 주세요", windowWidth / 2, windowWidth * (29-creditsY) / 32);
                //    text("당근 : 흔들고 있음", windowWidth / 2, windowWidth * (30-creditsY) / 32);
                //    text("여러분들의 근성장을 응원합니다", windowWidth / 2, windowWidth * (31-creditsY) / 32);
                //    text("잦은 밤샘으로 이미 근손실이 난 게임 제작자들 일동", windowWidth / 2, windowWidth * (32-creditsY) / 32);

                //    break;
            }
        }
    }
}