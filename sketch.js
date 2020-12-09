const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var ground,polygon1;
var slingshot;
var score;

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
	world = engine.world;
    block1=new Block(500,500,30,30);
    block2=new Block(530,500,30,30);
    block3=new Block(560,500,30,30);
    block4=new Block(590,500,30,30);
    block5=new Block(620,500,30,30);
    block6=new Block(650,500,30,30);
block7=new Block(620,480,30,30);
block8=new Block(590,480,30,30);
block9=new Block(560,480,30,30);
block10=new Block(530,480,30,30);
block11=new Block(560,460,30,30);
block12=new Block(590,460,30,30);
block13=new Block(575,440,30,30);  
 //Polygon=Bodies.circle(50,200,40);
 //World.add(world,Polygon);   
polygon1=new Polygon(300,230,50);
ground=new Stand(580,530,230,20);
slingshot=new launcher(polygon1.body,{x:300,y:230})

Engine.run(engine);
}
function draw(){
    background("white");
    text("Score:"+score,200,200); 
    drawSprites();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();


ground.display();
//Polygon.display();
polygon1.display();
slingshot.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
    slingshot.fly();
 
}





