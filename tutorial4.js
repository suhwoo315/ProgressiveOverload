class Tutorial4{
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 0; // cut의 총 개수
        this.dialogue = ["레인보우 바벨을 뽑았던 첫 번째 동작 '덤벨 컬'은 바벨로 머슬로스를 공격하게 해줍니다.",
                        "화면에 해당 아이콘이 뜨면 이 동작으로 머슬로스를 공격하세요!",
                        "프로틴 우물을 재가동시켰던 두 번째 동작 '레터럴 라이즈'는 프로틴 쉐이크로 머슬로스를 공격하게 해줍니다.",
                        "화면에 해당 아이콘이 뜨면 이 동작으로 머슬로스를 공격하세요!",
                        "방패를 사용하는 자격을 부여했던 세 번째 동작 '숄더 프레스'는 방패로 머슬로스의 나태의 주문을 방어하게 해줍니다.",
                        "화면에 해당 아이콘이 뜨면 이 동작으로 자신을 방어하세요!",
                        "시간이 모두 지나기 전에 해당 동작을 수행해야 합니다.",
                        "머슬로스의 HP를 없애 머슬로스를 물리치세요!"];
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