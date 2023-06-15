class Tutorial0 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 2; // cut의 총 개수
        this.dialogue = ["이 게임은 1인용 게임입니다.\n혼자서 즐겨주시기 바랍니다.",
                        "이 게임은 앉아서 진행됩니다.\n의자에 앉아주십시오.",
                        "조작은 스페이스바(Space Bar)만 사용합니다."];
    }

    // 해당 컷에 맞는 화면을 그린다
    display(){
        background(255);
        image(ui[5], width/2, height/2-180, width, height-100);
        textSize(25);
        textAlign(CENTER, CENTER)
        fill(0);
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