class Tutorial4{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 8; // cut의 총 개수
        this.dialogue = ["레인보우 바벨을 뽑았던 첫 번째 동작 '덤벨 컬'은\n바벨로 머슬로스를 공격하게 해줍니다.", //0
                        "화면에 해당 아이콘이 뜨면 '덤벨 컬'으로 머슬로스를 공격하세요!", //1
                        "프로틴 우물을 재가동시켰던 두 번째 동작 '레터럴 라이즈'는\n프로틴 쉐이크로 머슬로스를 공격하게 해줍니다.", //2
                        "화면에 해당 아이콘이 뜨면 '레터럴 라이즈'로 머슬로스를 공격하세요!", //3
                        "방패를 사용하는 자격을 부여했던 세 번째 동작 '숄더 프레스'는\n방패로 머슬로스의 나태의 주문을 방어하게 해줍니다.", //4
                        "화면에 해당 아이콘이 뜨면 '숄더 프레스'로 자신을 방어하세요!", //5
                        "시간이 모두 지나기\n전에 해당 동작을\n수행해야 합니다.", //6
                        "머슬로스의 HP를\n없애 머슬로스를\n물리치세요!", //7
                        "건투를 빕니다!"]; //8
        this.exercises = ["덤벨 컬", "레터럴 라이즈", "숄더 프레스"];
        this.colors = [color(213, 41, 41), color(213, 122, 41), color(41, 159, 213)];
        
        this.startAngle = -90;
        this.endAngle = 0;
        this.radius = 87;
        this.arcLength = 10;
    }

    display(){
        let messageX = width / 2
        let messageY = height * 690 / 918.5625; 
        let silX1 = width / 2;
        let silX2 = width / 2;
        let silY = height / 2;
        let silW = width * 0.8;
        let silH = height * 0.8;
        
        // 기본 화면 요소
        if (this.cut < 6 || this.cut == 8){
            background(255);
            imageMode(CENTER, CENTER);
            image(tutorial4_ui[0], width/2, height/2, width, height);
            noStroke();
            fill(0);
            textSize(30);
            textAlign(CENTER, TOP);
            text(this.dialogue[this.cut], messageX, messageY);
        }

        switch(this.cut){
            case 0:
            case 2:
            case 4:
                imageMode(CENTER);
                // 정면 실루엣
                if (frameCount % 60 < 15) image(tutorial4_sil[this.cut * 3], silX1, silY, silW, silH);
                else if (frameCount % 60 < 30) image(tutorial4_sil[this.cut * 3 + 1], silX1, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial4_sil[this.cut * 3 + 2], silX1, silY, silW, silH);
                else image(tutorial4_sil[this.cut * 3 + 1], silX1, silY, silW, silH);
                // 측면 실루엣
                if (frameCount % 60 < 15) image(tutorial4_sil[this.cut * 3 + 3], silX2, silY, silW, silH);
                else if (frameCount % 60 < 30) image(tutorial4_sil[this.cut * 3 + 4], silX2, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial4_sil[this.cut * 3 + 5], silX2, silY, silW, silH);
                else image(tutorial4_sil[this.cut * 3 + 4], silX2, silY, silW, silH);
                // 캐릭터 모션
                if (frameCount % 60 < 30) image(tutorial4_chr[this.cut], width/2, height/2, width, height);
                else image(tutorial4_chr[this.cut + 1], width/2, height/2, width, height);
                break;
            
            case 1:
            case 3:
            case 5:
                // 동그라미 아이콘
                imageMode(CENTER);
                image(tutorial4_ui[(this.cut + 1) / 2], width/2, height/2, width, height);
                noStroke();
                fill(this.colors[(this.cut + 1) / 2 - 1]);
                textSize(30);
                textAlign(CENTER, CENTER);
                text(this.exercises[(this.cut + 1) / 2 - 1], width*12.4/20, height*5.9/20);
                break;

            case 6:
                imageMode(CENTER);
                image(tutorial4_bg[0], width/2, height/2, width, height);
                image(tutorial4_ui[4], width/2, height/2, width, height);
                // timer
                this.endAngle = map(this.arcLength, 0, 300, 0, 360);
                fill(0, 150);
                noStroke();
                arc(width*14.7/20, height*11.6/20, this.radius * 2, this.radius * 2, this.startAngle, this.startAngle + this.endAngle); // 원 중심 좌표와 크기, 시작각과 끝각 설정
                if (this.arcLength > 300) this.arcLength = 10; // 호의 길이가 최대값에 도달하면 초기값으로 되돌림
                // text
                noStroke();
                fill(0);
                textSize(30);
                textAlign(CENTER, CENTER);
                text(this.dialogue[this.cut], width*10.7/20, height*8.7/20);
                fill(this.colors[0]);
                text(this.exercises[0], width*17.2/20, height*10.25/20);
                break;
            
            case 7:
                imageMode(CENTER);
                image(tutorial4_bg[1], width/2, height/2, width, height);
                noStroke();
                fill(103, 255, 67);
                // HP bar
                rect(width*2.99/20, height*17.11/20, width*6.95/20, height*1.135/20); // max
                let length = width*6.95/20;
                if (frameCount % 120 < 20){}
                else if (frameCount % 120 < 40) length *= 5/6;
                else if (frameCount % 120 < 60){
                    length *= 4/6;
                    fill(245, 122, 67);
                }
                else if (frameCount % 120 < 80){
                    length *= 3/6;
                    fill(245, 122, 67);
                }
                else if (frameCount % 120 < 100){
                    length *= 2/6;
                    fill(254, 24, 26);
                }
                else {
                    length *= 1/6;
                    fill(254, 24, 26);
                }
                rect(width*10.05/20, height*17.11/20, length, height*1.135/20);
                // text
                noStroke();
                fill(0);
                textSize(30);
                textAlign(CENTER, CENTER);
                text(this.dialogue[this.cut], width*4.5/20, height*12.5/20);
                text("맥스", width*4.1/20, height*16.4/20);
                text("머슬로스", width*15.85/20, height*16.4/20);
                break;

            default:
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