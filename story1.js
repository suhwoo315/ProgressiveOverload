class Story1{ 
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 0; // 전체 컷 개수
        this.dialogue = ["(정처 없이 떠돈지 몇 시간째)",
                        "헬창의 3요소가 도대체 뭔데.. 그걸 안 알려주고 그렇게 사라지면 어떡해..!",
                        "엉? 이 바벨들은 다 뭐야? 왜 모두 땅에 박혀 있지?\n헬창월드가 그런지 조경도 참 요상하네..",
                        "으아 깜짝이야! 도대체 이 쪽지는 왜 자기 맘대로 나타났다 사라졌다 그러는 거야..!",
                        "오, 선택받은 자여!",
                        "머슬로스의 침공 이전 헬창월드에선 누구나 양손에 레인보우 바벨을 쥐고 다녔다네.",
                        "하지만 근손실의 망령 머슬로스가 모든 바벨을 바닥 깊이 꽂아버렸지..\n마법이 걸려 아무도 바벨을 꺼내지 못하였어.",
                        "오, 선택받은 자여! 우리는 자네를 믿네. 자네는 분명히 레인보우 바벨을 땅속에서 꺼낼 수 있을테니!",
                        "레인보우 바벨을 꺼내 헬창월드 사람들에게 헬창의 첫 번째 요소 '장비'를 되찾아주게!",
                        "반드시 해낼지어니!"];
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

        switch(this.cut){
            case 0:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                fill(255);
                textSize(30);
                textAlign(CENTER, CENTER);
                text("레인보우 바벨들이 박혀있다.", width / 2, height * 23/100)
                snd[0].amp(0.8,0.3);
                break;

            case 1:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[4], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(LEFT, TOP);
                fill(0);
                textSize(30);
                text(this.dialogue[this.cut], textX, textY);
                //name
                fill(255);
                textSize(30);
                textAlign(LEFT, TOP);
                text("맥스", chrNameX, chrNameY);
                break;

            case 2:
            case 3:
            case 4:
            case 5:
                background(100);
                //bg
                imageMode(CENTER);
                image(story1_bg[0], width / 2, height / 2, width, height);
                //레인보우 바벨
                image(story1_ui[0], width / 2, height / 2, width, height);
                image(story1_ui[1], width / 2, height / 2, width, height);
                //ui
                imageMode(CENTER);
                image(ui[6], textBoxX, textBoxY, textBoxW, textBoxH);
                //txt
                //dialogue
                textAlign(CENTER, TOP);
                fill(100);
                textSize(30);
                text(this.dialogue[this.cut], messageX, messageY);
                // //name
                // fill(255);
                // textSize(30);
                // textAlign(LEFT, TOP);
                // text("맥스", chrNameX, chrNameY);
                snd[0].amp(0,0.3);
                break;
        }
        // background(100);
        // imageMode(CENTER);
        // image(story1_bg[0], width / 2, height / 2, story1_bg[0].width, story1_bg[0].height);
    }
}