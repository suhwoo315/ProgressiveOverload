class GameTitle{
    constructor(){

    }

    display(){
        background(100)
        imageMode(CENTER);
        image(gameTitle_bg[0], width / 2, height / 2, width, height);

        if (frameCount % 60 < 30) image(gameTitle_bg[1], width / 2, height / 2, width, height);
    }
}
