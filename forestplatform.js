class fplatform{
constructor(posx){
    this.rw = random(100, 700);// width of platform will be between 100 and 500
    this.rh = random([260,390,490,590,560,360,220,210,170,150,100,190]); // height of platform will be taken from array given to random function
    this.rx = posx; //setting the x posing where platform will be created  
    this.ry =height;    //setting y position where platform will be created to height( is a variable that stores height of canvas)
    
    this.spt=createSprite(this.rx, this.ry , this.rw, this.rh); //using rx,ry,rw,rh to give values 
this.spt.addAnimation("ft1",foresttile1image) 










}


}