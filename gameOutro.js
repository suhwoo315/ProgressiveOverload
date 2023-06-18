class GameOutro { 
    constructor(){
        this.succuess = false;
        this.cut = 0; // 현재 cut
        this.maxCut = 0; // cut의 총 개수
        this.dialogue = ["히이이이잉.. 근성장에 대한 의지는 영원히 꺾을 수 없는 것이군...",
                        "머슬.. 머슬.. 도대체 머슬이 뭐라고..",
                        "(퓨슈슈슉.. 소멸하는 머슬로스)",
                        "마침내 성공했군!",
                        "당신은!",
                        "정말 고맙네. 자네 덕에 헬창월드가 다시 활기를 되찾았어.",
                        "저길 보게! 레인보우 덤벨과 프로틴 쉐이커를 들고 활보하는 사람들을!",
                        "이게 얼마만에 소파에서 벗어나 마주하는 햇빛인지..!", //무조건 눈물 글썽이는 귀여운 얼굴이어야 함. 아님 말구..
                        "저기.. 눈물 흘리면 근손실.. 어어..! 하늘에 저게 뭐지!!",
                        "헬창월드가 의욕으로 넘치는 날, 세계를 잇는 통로가 열릴지어니..",
                        "선택받은 자여! 통로가 열렸으니 이제 자네의 세계로 돌아갈 때가 되었네!",
                        "드디어..!",
                        "건투를 비네! 득근!",
                        "(맥스의 방)",
                        "으... 지금까지 다 꿈이었던 건가... 아까 그 화면은 어디갔지? 방송 끝났나..",
                        "하.. 꿈이 참 생생하네.. 힘들게 싸웠으니까 좀 쉬어야겠어..",
                        "...",
                        "잠깐! 이제부터 다시 운동을 가야겠어!",
                        "(가방을 챙겨 나가는 맥스)",
                        "(소파 위에 있는 쪽지)",
                        "(쪽지 클로즈업 - 반드시 해낼지어니!)"];
    }

    display(){

        let maxSize = max[0].height * windowHeight / 1600 * 2 / 3;
        let textBoxX = width / 2;
        let textBoxY = height / 2;
        let textBoxW = width;
        let textBoxH = height;
        let textX = width / 7;
        let textY = height * 2/3;
        let chrNameX = width / 15;
        let chrNameY = height * 2 / 3;
        let messageX = width / 2
        let messageY = height * 690 / 918.5625; 

        if (!this.succuess){
            //game over + 멘트 + replay button + exit button 같이 있는 창 asset 하나
            //image(gameOutro_bg[2], width / 2, height / 2,  width, height);
            //image(gameOutro_ui[0], width / 2, height / 2,  width, height);
            //image(gameOutro_ui[1], width / 2, height / 2,  width, height);
            //if (mouseIsPressed){
                //if(mouseX >= width / 2 - width / 150 - width / 6 &&
                //mouseX <= width / 2 - width / 150 - width / 6 + width / 6 &&
                //mouseY >= height / 2 + height / 19 &&
                //mouseY <= height / 2 + height / 19 + height / 15){
                    //phase = 4;
                    //scene = 3;
                    //countMax = 3;
                    //bossMax = 7;
                //} 여기는 replay
                //else if(mouseX >= width / 2 + width / 60 &&
                //mouseX <= width / 2 + width / 60 + width / 6 &&
                //mouseY >= height / 2 + height / 19 &&
                //mouseY <= height / 2 + height / 19 + height / 15){
                    //exit = true;
                //} 여기는 quit. 이 버튼 누르면 exit 누른 거랑 마찬가지로 '정말 나가시겠습니까?' 뜨는 패턴
            //}

        }
        else {
            switch(this.cut){

            }
        }
    }
}