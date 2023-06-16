class Tutorial0 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 4; // cut의 총 개수
        this.dialogue = ["이 게임은 1인용 게임입니다.\n혼자서 즐겨주시기 바랍니다.",
                        "이 게임은 앉아서 진행됩니다.\n의자가 바닥에 표시된 위치에 올바르게 위치했는지 확인하십시오.",
                        "이제 의자에 앉아주십시오.",
                        "게임 중에는 초보자용 덤벨(1kg)과 숙련자용 덤벨(3kg) 중 자신의 신체에 맞는 도구를 사용해주세요.",
                        "득근을 빕니다!"];
    }

    // 해당 컷에 맞는 화면을 그린다
    display(){
        background(255);
        image(tutorial0_ui[0], width/2, height/2, width, height);
        textSize(25);
        textAlign(CENTER, CENTER)
        fill(81, 209, 121);
        text(this.dialogue[this.cut], width/2, height/2);
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