class Map1 {
    constructor() {
      // this.chrX = width / 2;
      // this.chrY = height * 2/3;
      // this.targetX = 0;
      // this.targetY = 0;
      // this.speed = 5;
      // this.moveOn = false;
    }
  
    display() {
          imageMode(CENTER);
          image(map1_bg[0], width / 2, height / 2, width, height);
      
          // 캐릭터 그리기
          // image(map1_chr[0], this.chrX, this.chrY, 200, 200);
          image(map1_chr[0], width / 2, height / 2, width, height);
          
    }

    // move() {
    //   this.targetX = width / 4;
    //   this.targetY = height / 2
    //     if (this.moveOn) {
    //         if (this.chrX > this.targetX + width / 8) {
    //           this.chrX -= 10;
    //         } 
    //         else if (this.chrY > this.targetY + height / 12) {
    //           this.chrY -= 10;
    //         } 
    //         else if (this.chrX > this.targetX) {
    //           this.chrX -= 10;
    //         } 
    //         else if (this.chrY > this.targetY) {
    //           this.chrY -= 10;
    //         } 
    //         else if (this.chrX <= this.targetX && this.chrY <=this.targetY) {
    //           // Reached the destination
    //           scene++;
    //         }
    //       } else {
    //         this.chrX = width / 2;
    //         this.chrY = height * 2 / 3;
    //       }

    // }
        
      
}

