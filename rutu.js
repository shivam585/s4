class forestrutu
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("rutuinforestidle1",rutuinforestidle);
        this.spt.addAnimation("rutuinforestrunning1",rutuinforestrunning);
		this.spt.frameDelay=1
        this.spt.scale=0.4
	}

rutuapplyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+1;
	}

	rutumoveLeft()
	{ 
		this.spt.x=this.spt.x-4;
	}

	rutumoveRight()
	{ 

		this.spt.x=this.spt.x+15;
        this.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
       
	}

	rutujump()
	{ 
		this.spt.velocityY=-15;
    }
	
}
