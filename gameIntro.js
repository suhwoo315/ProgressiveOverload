class GameIntro{
    constructor(){
        this.cut = 0; //컷 번호
        this.maxcut = 16; // 전체 컷 개수, 총 17개 0~16
        this.dialogue = [
        "으으음..", //0
        "으윽, 갑자기 운동하는 꿈을 꿨어. 티비나 봐야겠어.", //1
        "채널 뭐 재밌는 게 없나...", //2
        "엇, 이게 뭐지?", //3
        "엥 골드짐? 이게 뭐지? 골드짐에 초대한다고? 심심한데 가볼까..?",//4
        "휴 도착했네. 한 번 들어가봐야지 뭐.", //5
        "으아아아~~~ 나 어디로 가는거야?!?!", //6
        "여긴 어디지..? 마치 게임 속 같은데?", //7
        "환영한다! 여긴 헬창월드! 이곳은 힘이 모든 것을 좌우하고 그 힘은 물건을 들어올리는 능력으로 측정되지! 하하하! 나약한 너가 골드짐의 초대를 받아들일 줄은 예상 못했지만 그래도 힘을 키우고 싶은 생각은 있었나 보군!",
        "뭐..뭐 이런 끔찍한 데가 다 있어? 얼렁 날 집에 보내줘!!", //9
        "하하하! 집에 돌아가고 싶나? 이곳에서 탈출하려면 다양한 운동 도전을 통과해야한다! 그동안 운동을 게을리한 너의 업보이지!!",//10
        "내가 왜 그런 고통스러운 짓을…?!! 당장 돌려보내줘!!", //11
        "네 말이 맞다.", //12
        "..?", //13
        "헬스는 너의 육체를 상처 입히고 고통스럽게 만들지. 그리고 에너지를 뽑아간다.", //14
        "그러니까 내 말이..!", //15
        "하지만 그걸 대가로 너에게 강한 힘을 주지. 하하하!!!! 이 얼마나 짜릿한가. 자, 시간이 없다. 어서 가지." //16
        ]
    }
    //max 표정
    // 0: 디폴트 v
    // 1: 졸림 v
    // 2: 눈 뜸 v
    // 3: 놀람/당황V
    // 4: 당당함 V
    // 5: 화남 V
    // 6: 기쁨의 눈물 V
    // 7: 기쁘고 눈물을 닦음 V
    display(){
        switch(this.cut){
            case 0:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, gameIntro_bg[0].width, gameIntro_bg[0].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //dialogue
                textAlign(CENTER);
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 1:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, gameIntro_bg[0].width, gameIntro_bg[0].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 2:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, gameIntro_bg[0].width, gameIntro_bg[0].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 3:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, gameIntro_bg[0].width, gameIntro_bg[0].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, max[3].width, max[3].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 4:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[0], width / 2, height / 2, gameIntro_bg[0].width, gameIntro_bg[0].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[3], width / 2, height / 2, max[3].width, max[3].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 5:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[1], width / 2, height / 2, gameIntro_bg[1].width, gameIntro_bg[1].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[0], width / 2, height / 2, max[0].width, max[0].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 6:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[2], width / 2, height / 2, gameIntro_bg[2].width, gameIntro_bg[2].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 7:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 8:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                imageMode(CENTER);
                image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 9:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 10:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                imageMode(CENTER);
                image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 11:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 12:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                imageMode(CENTER);
                image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 13:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 14:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                imageMode(CENTER);
                image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 15:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 16:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                // imageMode(CENTER);
                // image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                imageMode(CENTER);
                image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
            case 17:
                background(100);
                imageMode(CENTER);
                image(gameIntro_bg[3], width / 2, height / 2, gameIntro_bg[3].width, gameIntro_bg[3].height);
                //ui
                imageMode(CENTER);
                image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
                //max
                imageMode(CENTER);
                image(max[1], width / 2, height / 2, max[1].width, max[1].height);
                //coach
                // imageMode(CENTER);
                // image(coach[1], width / 2, height / 2, coach[1].width, coach[1].height);
                //dialogue
                text(this.dialogue[this.cut], width/2, height - 200);
                break;
        }
        

        //background
    //     if(this.bg == 0){
    //         imageMode(CENTER);
    //         image(gameIntro_bg[0], width / 2, height / 2, 1068, 594);
    //         //ui
    //         imageMode(CENTER);
    //         image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
    //         //max
    //         imageMode(CENTER);
    //         image(max[1], width / 2, height / 2, max[1].width, max[1].height);
            
    //     } 
    //     else if (this.bg == 1){
    //         imageMode(CENTER);
    //         image(gameIntro_bg[1], width / 2, height / 2, 1068, 594);
    //         //ui
    //         imageMode(CENTER);
    //         image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
    //         //max
    //         imageMode(CENTER);
    //         image(max[2], width / 2, height / 2, max[2].width, max[2].height);
    //     }
    //     else if (this.bg == 2){
    //         imageMode(CENTER);
    //         image(gameIntro_bg[2], width / 2, height / 2, 1068, 594);
    //         //ui
    //         imageMode(CENTER);
    //         image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
    //     }
    //     else if (this.bg == 3){
    //         imageMode(CENTER);
    //         image(gameIntro_bg[3], width / 2, height / 2, 1068, 594);
    //         //ui
    //         imageMode(CENTER);
    //         image(gameIntro_ui[0], width / 2, height - 200, 1854 * 2/3, 480 * 2/3);
    //     }
    }
}

// asset - phase0
// let gameTitle_bg = []
// let gameTitle_ui = []
// let gameIntro_bg = []
// let gameIntro_ui = []