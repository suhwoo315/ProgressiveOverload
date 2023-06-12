class Map2 {
    constructor() {
      this.chrX = width / 2;
      this.chrY = height * 2/3;
      this.targetX = width / 4;
      this.targetY = height / 3;
      this.speed = 5;
      this.moveOn = false;
    }
  
    display() {
          imageMode(CENTER);
          image(map2_bg[0], width / 2, height / 2, map2_bg[0].width,  map2_bg[0].height);
      
          // 캐릭터 그리기
          image(map2_chr[0], this.chrX, this.chrY, 200, 200);
    }

    move() {
        if (this.moveOn) {
            if (this.chrX > this.targetX + width / 8) {
              this.chrX -= 10;
            } else if (this.chrY > this.targetY + height / 6) {
              this.chrY -= 10;
            } else if (this.chrX > this.targetX) {
              this.chrX -= 10;
            } else if (this.chrY > this.targetY) {
              this.chrY -= 10;
            } else {
              // Reached the destination
              scene++;
            }
          } else {
            this.chrX = width / 2;
            this.chrY = height * 2 / 3;
          }

    }
        
      
}
