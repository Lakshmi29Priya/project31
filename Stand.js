class Stand{
    constructor(x,y,width,height){
  var options={
        isStatic:true,
        restitution:1,
        friction:1
    }
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)
}
display()
{
var standpos=this.body.position;
push();
rectMode(CENTER)
translate(standpos.x,standpos.y);
rotate(this.body.angle);
fill("brown");
rect(0,0,this.width,this.height)
pop();
}
}