class Map4 {
  constructor() {
    this.chrX = 0;
    this.chrY = 0;
    // this.chrX = width * 17.5 / 100;
    // this.chrY = height * 40 / 100;
    this.targetX = 0;
    this.targetY = 0;
    // this.targetY = height * 45 / 100;
    // this.speed = 5;
    this.moveOn = false;
    this.cut = 0
    this.maxcut = 2;
    this.timerStarted = false;
  }

  display() {
      imageMode(CENTER);
      if(this.cut == 0){
        image(map4_bg[0], width / 2, height / 2, width, height);
      }
      else if(this.cut == 1){
        image(map4_bg[1], width / 2, height / 2, width, height);
        playOnce(map4_snd[0]);
      }
      else if(this.cut == 2){
        if (frameCount % 60 < 30) image(map4_bg[2], width / 2, height / 2, width, height);
        else image(map4_bg[3], width / 2, height / 2, width, height);

        //spacebar
        if (frameCount % 60 < 30) image(map1_chr[1], width * 60 / 100, height * 60 / 100, width * 0.8, height * 0.8);
        else image(map1_chr[2], width * 60 / 100, height * 60 / 100, width * 0.8, height * 0.8);
      }
      
  
      // 캐릭터 그리기
      imageMode(CENTER);
      image(map4_chr[0], this.chrX, this.chrY, map4_chr[0].width * 1.5, map4_chr[0].height * 1.5);
      // image(map4_chr[0], width / 2, height / 2);
      
        
  }

  move() {
    // this.chrX = width * 17.5 / 100;
    // this.chrY = height * 40 / 100;
    this.targetX = width * 82 / 100;
    this.targetY = height * 40 / 100;

    if(this.moveOn == true) {
      if(this.chrX <= width * 49.2 / 100 + (this.targetX - width * 49.2 / 100) * 3 / 5){
        this.chrX += 7;
        
      }
      
      else if(this.chrX > width * 49.2 / 100 + (this.targetX - width * 49.2 / 100) * 3 / 5){
        this.chrX +=7;
        this.chrY -=8;
      }
      if(this.chrX >= this.targetX){
        this.chrX = this.targetX;
        this.chrY = this.targetY;
        snd[1].setVolume(2.5);
        playOnce(snd[1]);
      }
    }
    else if (this.moveOn == false){
      
      this.chrX = width * 49.2 / 100;
      this.chrY = height * 68 / 100;
      

    }
      
    
      
    }
      // if (this.moveOn) {
      //     if (this.chrX > this.targetX + width / 8) {
      //       this.chrX -= 10;
      //     } 
      //     else if (this.chrY > this.targetY + height / 12) {
      //       this.chrY -= 10;
      //     } 
      //     else if (this.chrX > this.targetX) {
      //       this.chrX -= 10;
      //     } 
      //     else if (this.chrY > this.targetY) {
      //       this.chrY -= 10;
      //     } 
      //     else if (this.chrX <= this.targetX && this.chrY <=this.targetY) {
      //       // Reached the destination
      //       scene++;
      //     }
      //   } else {
      //     this.chrX = width / 2;
      //     this.chrY = height * 2 / 3;
      //   }

}
      
    


