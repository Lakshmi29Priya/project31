class Polygon{
constructor(x,y,r){
    var options={
        'restitution':0.8,
            'friction':1.0,
            'density':0.1
    }
this.x=x
this.y=y
this.r=r
this.image=loadImage("polygon.png");
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world, this.body);
}
display(){
    var pos=this.body.position;
    push()
translate(pos.x,pos.y);
imageMode(CENTER);
ellipseMode(CENTER);
//fill("pink")
image(this.image,0,0,this.r, this.r);
pop()
}
}