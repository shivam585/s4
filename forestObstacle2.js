class forestobstacle2 {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random([200,300]);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry,50,50); //using rx,ry
      //this.spt.shapeColor="green";
    
      this.spt.scale=0.2;
      this.spt.velocityX=-2;

      this.spt.addImage(pizzaimage);
    
        
        
         

  
    }

    
  
}