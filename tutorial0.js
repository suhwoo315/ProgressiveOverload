class Tutorial0 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 5; // cut의 총 개수
        this.dialogue = ["이 게임은 1인용 게임입니다.\n혼자서 즐겨주시기 바랍니다.",
                        "이 게임에는 카메라를 인식하는 기능이 있습니다.\n카메라의 범위 내에 한 명만 위치해주십시오.",
                        "이 게임은 앉아서 진행됩니다.\n의자가 바닥에 표시된 위치에 올바르게 위치했는지 확인하십시오.",
                        "이제 의자에 등을 똑바로 붙이고 앉아주십시오.\n 게임 도중 의자의 위치가 바뀌지 않도록 주의해주세요.",
                        "게임 중에는 초보자용 덤벨(1kg)과 숙련자용 덤벨(3kg) 중\n자신의 신체에 맞는 도구를 사용해주세요.",
                        "득근을 빕니다!"];
    }

    // 해당 컷에 맞는 화면을 그린다
    display(){
        let messageX = width / 2
        let messageY = height * 690 / 918.5625; 
        background(255);
        image(tutorial0_ui[0], width/2, height/2, width, height);
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0);
        // fill(81, 209, 121)
        text(this.dialogue[this.cut], messageX, messageY);
        gameTitle_snd[0].stop();

        if(this.cut == 0) {
            //스페이스바
            if (frameCount % 60 < 30) image(map1_chr[1], width * 72 / 100, height * 72 / 100, width * 0.4, height * 0.4);
            else image(map1_chr[2], width * 72 / 100, height * 72 / 100, width * 0.4, height * 0.4);
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