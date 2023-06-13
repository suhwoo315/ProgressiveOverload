class Tutorial4{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 2; // cut의 총 개수
        this.dialogue = ["덤벨 컬은 펀치(PUNCH)입니다!",
                        "리버스 컬은 킥(KICK)입니다!",
                        "숄더 프레스는 방어(DEFENSE)입니다!"];
    }

    display(){
        //bg
        background(100);
        //ui
        imageMode(CENTER);
        image(ui[5], width/2, height/2-180, width, height-100);
        //text
        textSize(25);
        fill(0);
        text(this.dialogue[this.cut], width/2, height/2);

        switch(this.cut){
            case 0:
                if (frameCount % 30 < 10) image(stage4_sil[0], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else if (frameCount % 30 < 20) image(stage4_sil[1], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else image(stage4_sil[2], width / 10 + 20, height / 2 - 20 + 80, 300, 300);

                if (frameCount % 20 < 10) image(stage4_chr_max_punch[0], width / 2 - 100, height / 2, 600, 600);
                else image(stage4_chr_max_punch[1], width / 2 - 100, height / 2, 600, 600);
                break;
            case 1:
                if (frameCount % 30 < 10) image(stage4_sil[3], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else if (frameCount % 30 < 20) image(stage4_sil[4], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else image(stage4_sil[5], width / 10 + 20, height / 2 - 20 + 80, 300, 300);

                if (frameCount % 20 < 10) image(stage4_chr_max_kick[0], width / 2 - 100, height / 2, 600, 600);
                else image(stage4_chr_max_kick[1], width / 2 - 100, height / 2, 600, 600);
                break;
            case 2:
                if (frameCount % 30 < 10) image(stage4_sil[6], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else if (frameCount % 30 < 20) image(stage4_sil[7], width / 10 + 20, height / 2 - 20 + 80, 300, 300);
                else image(stage4_sil[8], width / 10 + 20, height / 2 - 20 + 80, 300, 300);

                if (frameCount % 20 < 10) image(stage4_chr_max_defend[0], width / 2 - 100, height / 2, 600, 600);
                else image(stage4_chr_max_defend[0], width / 2 - 100, height / 2, 600, 600); // 에셋 나오면 1로 고치기
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