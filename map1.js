class Map1 {
    constructor() {
      this.chrX = 0;
      this.chrY = 0;
      this.targetX = 0;
      // this.targetY = height * 45 / 100;
      // this.speed = 5;
      this.moveOn = false;
    }

    display() {
        imageMode(CENTER);
        if (frameCount % 60 < 30) image(map1_bg[0], width / 2, height / 2, width, height);
        else image(map1_bg[1], width / 2, height / 2, width, height);

          //spacebar
          if (frameCount % 60 < 30) image(map1_chr[1], width * 60 / 100, height * 60 / 100, width * 0.8, height * 0.8);
          else image(map1_chr[2], width * 60 / 100, height * 60 / 100, width * 0.8, height * 0.8);
        
        
    
        // 캐릭터 그리기
        imageMode(CENTER);
        image(map1_chr[0], this.chrX, this.chrY, map1_chr[0].width * 1.5, map1_chr[0].height * 1.5);
        // image(map1_chr[0], width / 2, height / 2);
        
          
    }

    move() {
      // this.chrX = -30;
      // this.chrY = height * 45 / 100;
      this.targetX = width * 17.5 / 100;

      if(this.moveOn == true) {
        this.chrX += 7;
        if(this.chrX >= this.targetX){
          this.chrX = width * 17.5 / 100;
          //sound
          snd[1].setVolume(2.5);
          playOnce(snd[1]);
        }
      }
      else {
        // this.chrX +=0;
        this.chrX = - width * 8 / 100 
        this.chrY = height * 40 / 100;
 
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
        
      


