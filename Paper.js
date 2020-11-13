class Paper{
    constructor(x,y){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
          }
        
          this.body=Bodies.circle(x,y,20,options);
          this.radius=20;
          this.image=loadImage("paper.png")
          World.add(world,this.body);
          
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y) 
        rotate(angle);
        imageMode(RADIUS);
        fill("pink");
        image(0,0,this.radius,this.radius);
        pop();

    }
}