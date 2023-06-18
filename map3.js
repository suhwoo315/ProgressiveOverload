class Map3 {
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
  }

  display() {
      imageMode(CENTER);
      if (frameCount % 60 < 30) image(map3_bg[0], width / 2, height / 2, width, height);
      else image(map3_bg[1], width / 2, height / 2, width, height);

      //spacebar
      if (frameCount % 60 < 30) image(map3_chr[1], width / 2, height / 2, width, height);
      else image(map3_chr[2], width / 2, height / 2, width, height);
  
      // 캐릭터 그리기
      imageMode(CENTER);
      image(map3_chr[0], this.chrX, this.chrY, map3_chr[0].width, map3_chr[0].height);
      // image(map3_chr[0], width / 2, height / 2);
      
        
  }

  move() {
    // this.chrX = width * 17.5 / 100;
    // this.chrY = height * 40 / 100;
    this.targetX = width * 49.2 / 100;
    this.targetY = height * 68 / 100;

    if(this.moveOn == true) {
      if(this.chrY < this.targetY){
        this.chrY +=5;
      }
      else if(this.chrY >= this.targetY){
        this.chrY = this.targetY;
      }

      // if(this.chrX <= this.targetX && this.chrY > this.targetY){
      //   this.chrX += 3;
      //   this.chrY -= 3;
      // }
      
      // else if(this.chrY <= this.targetY){
      //   this.chrX +=3;
      //   this.chrY = this.targetY;
      // }
      // if(this.chrX >= this.targetX && this.chrY <= this.targetY){
      //   this.chrX = this.targetX;
      //   this.chrY = this.targetY;
      //   //playOnce(snd[1]);
      // }
    }
    else if (this.moveOn == false){
      
      this.chrX = width * 49.2 / 100;
      this.chrY = height * 14.5 / 100;
      

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
      
    


