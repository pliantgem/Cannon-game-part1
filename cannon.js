class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.angle=angle;
        this.cannonbase=loadImage("./assets/cannonBase.png");
        this.cannon=loadImage("./assets/canon.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cannon,this.x,this.y,this.width,this.height);
        pop();

        image(this.cannonbase,70,20,200,200);

    }
}