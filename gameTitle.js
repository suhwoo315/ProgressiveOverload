class GameTitle{
    constructor(){
        this.credit = false;


    }

    display(){
        background(100)
        imageMode(CENTER);
        image(gameTitle_bg[0], width / 2, height / 2, 2006 * 0.7, 1014 * 0.7);
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(width / 2, height / 2 + 50, 450, 130);
        rect(width / 2, height / 2 + 200, 450, 130);
        // rect(width/2-80, height/2+ 150 - (190 * 1/6), 160, 190 * 1/3);

        if(this.credit == false){
            imageMode(CENTER);
            image(gameTitle_ui[0], width / 2, height / 2 + 50, 400, 120); //start
            image(gameTitle_ui[1], width / 2, height / 2 + 200, 400, 120); //credit
        } else {
            rectMode(CENTER);
            fill(255);
            rect(width / 2, height / 2, 1000, 700);
            fill(0);
            text("credit", width / 2, height / 2, 50);
        }
        
        
    }
}

// asset - phase0
// let gameTitle_bg = []
// let gameTitle_ui = []
// let gameIntro_bg = []
// let gameIntro_ui = []