class brickwall {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([550,350,400]);   //setting y position where wall will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addImage("brickwall",brickwallimage);
     this.spt.scale=1.4;
    
    }
  
  
}