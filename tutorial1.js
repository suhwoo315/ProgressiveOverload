class Tutorial1 {
    constructor(){
        this.cut = 6; // 현재 cut
        this.maxCut = 11; // cut의 총 개수
        this.dialogue = ["지금부터 화면이 자동으로 넘어갑니다.", //0
                        "양손에 덤벨을 하나씩 쥐어보세요.", //1
                        "별도의 지시가 있기 전까지 덤벨을 놓지 말아주세요.", //2
                        "이제부터 배울 동작은 '덤벨 컬'입니다.", //3
                        "화면에서 안내하는 동작을 직접 따라해볼까요?", //4
                        "먼저 손등이 앞을 향하도록 한 채 팔을 접으세요.\n덤벨이 어깨 높이까지 올라옵니다.", //5
                        "좌측의 바는 덤벨의 실시간 위치를 나타냅니다.", //6
                        "팔꿈치를 고정하고 초록색 선까지 덤벨을 천천히 내려주세요.", //7
                        "아주 좋습니다!\n팔꿈치를 고정하고 팔을 접어 덤벨을 초록색 선까지 올려주세요.", //8
                        "훌륭합니다! 혼자서 한 번 반복해볼까요?\n", //9
                        "완벽합니다!", //10
                        "지금부터 스테이지 1이 시작됩니다.\n이 자세를 잊지 말아주세요!"]; //11
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
        image(tutorial1_ui[0], width/2, height/2, width, height);
        noStroke();
        fill(0);
        textSize(30);
        textAlign(CENTER, TOP);
        // textAlign(CENTER, CENTER);
        // fill(81, 209, 121);
        fill(0);
        text(this.dialogue[this.cut], messageX, messageY);
        // imageMode(CENTER)
        // image(tutorial1_sil[10], width / 2, height / 2, width, height);
        // rect(width*19.2/100, height * 21 / 100, width * 4.5 / 100, height * 30 / 100);


        switch(this.cut){ // 그림도 있는 경우
            case 3:
            case 4:
            case 5:
                imageMode(CENTER);
                if (frameCount % 60 < 15) image(tutorial1_sil[0], silX1, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial1_sil[1], silX1, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial1_sil[2], silX1, silY, silW, silH);
                else image(tutorial1_sil[1], silX1, silY, silW, silH);
                if (frameCount % 60 < 15) image(tutorial1_sil[3], silX2, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial1_sil[4], silX2, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial1_sil[5], silX2, silY, silW, silH);
                else image(tutorial1_sil[4], silX2, silY, silW, silH);
                break;

            case 6: //좌측의 바는 덤벨의 실시간 위치를 나타냅니다.
                image(tutorial1_sil[10], width/2, height/2, width, height);
                if (frameCount % 60 < 15) image(tutorial1_sil[0], silX1, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial1_sil[1], silX1, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial1_sil[2], silX1, silY, silW, silH);
                else image(tutorial1_sil[1], silX1, silY, silW, silH);
                if (frameCount % 60 < 15) image(tutorial1_sil[3], silX2, silY, silW, silH); // sil
                else if (frameCount % 60 < 30) image(tutorial1_sil[4], silX2, silY, silW, silH);
                else if (frameCount % 60 < 45) image(tutorial1_sil[5], silX2, silY, silW, silH);
                else image(tutorial1_sil[4], silX2, silY, silW, silH);
                this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower);
                stroke(81, 209, 121);
                strokeWeight(5);
                noFill();
                rectMode(CORNER);
                if (frameCount % 60 < 30) rect(width*19/100, height * 21 / 100, width * 4.9 / 100, height * 30 / 100);
                break;
            
            case 7: //팔꿈치를 고정하고 초록색 선까지 덤벨을 천천히 내려주세요. **내려가는 화살표 추가
                imageMode(CENTER);
                image(tutorial1_sil[10], width/2, height/2, width, height);
                image(tutorial1_sil[2], silX1, silY, silW, silH);
                image(tutorial1_sil[5], silX2, silY, silW, silH);
                image(tutorial1_sil[7], width / 2, height / 2, width, height);
                this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower);
                break;
            
            case 8: //아주 좋습니다!\n팔꿈치를 고정하고 팔을 접어 덤벨을 초록색 선까지 올려주세요. //올라가는 화살표 추가
                image(tutorial1_sil[9], width/2, height/2, width, height);
                image(tutorial1_sil[0], silX1, silY, silW, silH);
                image(tutorial1_sil[3], silX2, silY, silW, silH);
                image(tutorial1_sil[6], width / 2, height / 2, width, height);
                this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower);
                break;
            
            case 9: //서우 부탁
                //내려야 할 때
                image(tutorial1_sil[10], width/2, height/2, width, height);
                image(tutorial1_sil[2], silX1, silY, silW, silH);
                image(tutorial1_sil[5], silX2, silY, silW, silH);
                image(tutorial1_sil[7], width / 2, height / 2, width, height)

                //올려야 할 때
                // image(tutorial1_sil[9], width/2, height/2, width, height);
                // image(tutorial1_sil[0], silX1, silY, silW, silH);
                // image(tutorial1_sil[3], silX2, silY, silW, silH);
                // image(tutorial1_sil[6], width / 2, height / 2, width, height);

                this.drawDumbbell(this.y, dumbbellCurlUpper, dumbbellCurlLower);
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

    // 움직이는 아령 UI를 그린다 **서우가 확인 필
    drawDumbbell(y, upperFraction, lowerFraction){
        let upperBound = height*upperFraction;
        let lowerBound = height*lowerFraction;
        let boundHeight = lowerBound - upperBound;
        
        let upperY = height*5.7/20;
        let lowerY = height*8.7/20;
        let barHeight = lowerY - upperY;

        let dumbbellY = lowerY + (y - lowerBound) * barHeight / boundHeight;

        if (dumbbellY < upperY) image(tutorial1_sil[11], width/ 2, upperY, width, tutorial1_ui.height);
        if (dumbbellY < lowerY) image(tutorial1_sil[11], width/ 2, lowerY, width, tutorial1_ui.height);
        else image(tutorial1_sil[11], width/ 2, dumbbellY, width, tutorial1_ui.height);

        strokeWeight(5);
        stroke(0);
        line(0, lowerY, width, lowerY);
        stroke(255, 0, 0);
        line(0, upperY, width, upperY);
    }
}