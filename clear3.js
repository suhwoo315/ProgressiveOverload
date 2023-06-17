class Clear3{ 
    constructor(){
        this.cut = 0; // 현재 cut
        this.maxCut = 0; // cut의 총 개수
        this.dialogue = ["우와..! 정말 힘들었다! 그래도 해냈어!!\n방패도 조금.. 멋있는 걸..?",
                        "쪽지 안 나오나? 이제 헬창의 3요소 모두 찾았는데!!",
                        "오, 선택받은 자여!",
                        "헬창의 3요소를 모두 되찾다니 헬창월드 사람들은 감격의 눈물을 흘릴 것이라네!",
                        "방금 얻은 방패로 머슬로스의 나태의 주문을 막을 수 있을 것이라네.",
                        "그러니 이번 동작도 잊어서는 안 된다네!",
                        "양팔을 위로 올렸다 내렸다 올렸다 내렸다..! 어떤가! 힘이 나지 않는가!!",
                        "이제 헬창의 3요소를 모두 얻었으니, 머슬로스와의 결투만이 남았군!",
                        "지금까지 했던 동작들을 잘 활용해서 꼭 헬창월드를 구해주게!",
                        "반드시 해낼지어니!",
                        "그래, 이렇게 된 거 한 번 가보자고!!"];
    }

    display(){ //에셋 안 고침
        imageMode(CENTER);

        switch(this.cut){
            case 0:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;

            case 1:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;
                
            case 2:
                image(stage1_bg[0], width/2, height/2, width, height);
                break;

            case 3:
                image(stage1_bg[0], width/2, height/2, width, height);
                image(coach[0], width / 2, height / 2, max[3].width / 3, max[3].height / 3);
                image(ui[4], width/2, height/2, width, height);
                textAlign(LEFT, TOP)
                textSize(25);
                fill(0);
                text(this.dialogue[this.cut], width/2 - 580, height - 250);
                textAlign(CENTER, CENTER);
                fill(255);
                text("맥스", width / 2 - 460, height / 2 + 65);
                break;

            case 4:
            case 5:
            case 6:
                image(stage1_bg[0], width/2, height/2, width, height);
                image(coach[0], width / 2, height / 2, max[3].width / 3, max[3].height / 3);
                image(ui[4], width/2, height/2, width, height);
                textAlign(LEFT, TOP)
                textSize(25);
                fill(0);
                text(this.dialogue[this.cut], width/2 - 580, height - 250);
                textAlign(CENTER, CENTER);
                fill(255);
                text("코치 볼트", width / 2 - 460, height / 2 + 65);
                break;
        }
    }
}