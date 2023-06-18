class Tutorial3 {
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 10; // cut의 총 개수
        this.dialogue = ["지금부터 화면이 자동으로 넘어갑니다.", //0
                        "양손에 덤벨을 하나씩 쥐어보세요.", //1
                        "별도의 지시가 있기 전까지 덤벨을 놓지 말아주세요.", //2
                        "이제부터 배울 동작은 '숄더 프레스'입니다.", //3
                        "화면에서 안내하는 동작을 직접 따라해볼까요?", //4
                        "먼저 손바닥이 앞으로 향하도록 한 채 양팔을 벌려 덤벨을 어깨 높이까지 올려주세요.", //5
                        "양팔을 초록색 선까지 천천히 위로 쭉 뻗어주세요.", //6
                        "아주 좋습니다!\n다시 덤벨을 주황색 선까지 천천히 내려주세요.", //7
                        "훌륭합니다! 혼자서 한 번 반복해볼까요?\n", //8
                        "완벽합니다!", //9
                        "지금부터 스테이지 3이 시작됩니다.\n이 자세를 잊지 말아주세요!"]; //10
        this.lowerPass = false;
        this.upperPass = false;
        this.y = 0;
    }

    // 해당 cut에 알맞은 화면을 표시한다
    display(){
        let messageX = width / 2
        let messageY = height * 690 / 918.5625; 
        let silX1 = width / 2;
        let silX2 = width / 2;
        let silY = height / 2;
        let silW = width * 0.8;
        let silH = height * 0.8;
        
        // 기본 화면 요소
        background(255);
        imageMode(CENTER, CENTER);
        image(tutorial3_ui[0], width/2, height/2, width, height);
        noStroke();
        fill(0);
        textSize(30);
        textAlign(CENTER, TOP);
        fill(0);
        text(this.dialogue[this.cut], messageX, messageY);


        switch(this.cut){ // 그림도 있는 경우
            case 3:
            case 4:
                imageMode(CENTER);
                if (frameCount % 60 < 15) image(tutorial3_sil[0], silX1, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial3_sil[1], silX1, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial3_sil[2], silX1, silY, silW, silH);
                else image(tutorial3_sil[1], silX1, silY, silW, silH);
                if (frameCount % 60 < 15) image(tutorial3_sil[3], silX2, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial3_sil[4], silX2, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial3_sil[5], silX2, silY, silW, silH);
                else image(tutorial3_sil[4], silX2, silY, silW, silH);
                break;
            
            case 5:
                imageMode(CENTER);
                image(tutorial3_sil[0], silX1, silY, silW, silH);
                image(tutorial3_sil[3], silX1, silY, silW, silH);
                break;

            case 6:
                imageMode(CENTER);
                image(tutorial3_sil[9], width/2, height/2, width, height);
                image(tutorial3_sil[2], silX1, silY, silW, silH);
                image(tutorial3_sil[5], silX2, silY, silW, silH);
                image(tutorial3_sil[6], width / 2, height / 2, width, height);
                this.drawDumbbell(this.y, pressUpper, pressLower);
                break;

            case 7:
                imageMode(CENTER);
                image(tutorial3_sil[10], width/2, height/2, width, height);
                image(tutorial3_sil[0], silX1, silY, silW, silH);
                image(tutorial3_sil[3], silX2, silY, silW, silH);
                image(tutorial3_sil[7], width / 2, height / 2, width, height);
                this.drawDumbbell(this.y, pressUpper, pressLower);
                break;
            
            case 8:
                if (!this.upperPass){
                    image(tutorial3_sil[9], width/2, height/2, width, height);
                    image(tutorial3_sil[2], silX1, silY, silW, silH);
                    image(tutorial3_sil[5], silX2, silY, silW, silH);
                    image(tutorial3_sil[6], width / 2, height / 2, width, height);
                }
                else {
                    image(tutorial3_sil[10], width/2, height/2, width, height);
                    image(tutorial3_sil[0], silX1, silY, silW, silH);
                    image(tutorial3_sil[3], silX2, silY, silW, silH);
                    image(tutorial3_sil[7], width / 2, height / 2, width, height);
                }
                this.drawDumbbell(this.y, pressUpper, pressLower);
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

    // 손이 위, 아래 기준선을 넘었는지 확인한다
    checkPass(upperFraction, lowerFraction){
        this.y = (leftWristY + rightWristY) / 2;

        let upperBound = height*upperFraction;
        let lowerBound = height*lowerFraction;

        if (!this.lowerPass && ! this.upperPass){
            if (this.y > lowerBound) this.lowerPass = true;
        }
        else {
            if (this.y < upperBound) this.upperPass = true;
        }
    }

    // 움직이는 아령 UI를 그린다
    drawDumbbell(y, upperFraction, lowerFraction){
        let upperBound = height*upperFraction;
        let lowerBound = height*lowerFraction;
        let boundHeight = lowerBound - upperBound;
        let boundY;
        if (y < upperBound) boundY = upperBound;
        else if (y > lowerBound) boundY = lowerBound;
        else boundY = y;
        
        let upperY = height*5.7/20;
        let lowerY = height*8.7/20;
        let barHeight = lowerY - upperY;
        let dumbbellY = (boundY * barHeight / boundHeight) - barHeight

        image(tutorial3_sil[11], width/ 2, dumbbellY, width, tutorial1_ui.height);
    }
}