class Map1 {
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
          image(map1_bg[0], width / 2, height / 2, map1_bg[0].width,  map1_bg[0].height);
      
          // 캐릭터 그리기
          image(map1_chr[0], this.chrX, this.chrY, 200, 200);
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
          
        //  if(this.moveOn == true){
        //         this.chrX -= 5;
        //         if (this.chrX == this.targetX + width / 8){
        //             this.chrX = this.targetX + width / 8;
        //             this.chrY -= 5;
        //             if (this.chrY == this.targetY + height / 6){
        //                 this.chrY = this.targetY + height / 6;
        //                 this.chrX -= 5;
        //                 if (this.chrX == this.targetX){
        //                     this.chrX = this.targetX;
        //                     this.chrY -=5;
        //                 }
        //             }
        //         }
        //     }
        // else if (this.moveOn == false){
        //         this.chrX = width / 2;
        //         this.chrY = height *2/3;
        // }
            
            // let step = 0;
            // if (step == 0){
            //     this.chrX -= 5;
            //     if(this.chrX == this.targetX + width / 8){
            //         console.log("asdf");
            //         step++;
            //     }
            // }
            // else if (step == 1){
            //     this.chrY -= 5;
            //     if(this.chrY == this.targetY + height / 6){
            //         step++;
            //     }
            // }
            // else if (step == 2){
            //     this.chrX -= 5;
            //     if(this.chrX == this.targetX){
            //         step++;
            //     }
            // }
            // else if (step == 3){
            //     this.chrY -= 5;
            //     if(this.chrY == this.targetY){
            //         scene++;
            //     }
            // }
    }
        
        // 목표 위치
        // this.targetX = width / 4;
        // this.targetY = height / 3;
        // this.chrX -= 5;
  
        
        // let speed = 5;
        // let step = 0;


        // if (step == 0){
        //     this.chrX -= 5;
        //     if(this.chrX == this.targetX + width / 8){
        //         step++;
        //     }
        // }
        // else if (step == 1){
        //     this.chrY -= 5;
        //     if(this.chrY == this.targetY + height / 6){
        //         step++;
        //     }
        // }
        // else if (step == 2){
        //     this.chrX -= 5;
        //     if(this.chrX == this.targetX){
        //         step++;
        //     }
        // }
        // else if (step == 3){
        //     this.chrY -= 5;
        //     if(this.chrY == this.targetY){
        //         scene++;
        //     }
        // }
        
      
}

