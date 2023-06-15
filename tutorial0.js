class Tutorial1 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 9; // cut의 총 개수
        this.dialogue = ["뒤에 누가 있으면 인식이 안 된다",
                        "의자에서 등 떼지 말아라",
                        "1인용 게임이다",
                        "이 게임은 앉아서 진행된다"];
    }

    // 해당 컷에 맞는 화면을 그린다
    display(){

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