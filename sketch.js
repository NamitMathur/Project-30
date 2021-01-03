const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,750);
    engine=Engine.create();
    world=engine.world;
    
    block1=new Block(855,430,30,30);
    block2=new Block(885,430,30,30);
    block3=new Block(915,430,30,30);
    block4=new Block(945,430,30,30);
    block5=new Block(975,430,30,30);
    block6=new Block(825,430,30,30);

    block7=new Block(900,400,30,30);
    block8=new Block(930,400,30,30);
    block9=new Block(870,400,30,30);
    block10=new Block(960,400,30,30);
    block11=new Block(840,400,30,30);

    block12=new Block(915,370,30,30);
    block13=new Block(885,370,30,30);
    block14=new Block(855,370,30,30);
    block15=new Block(945,370,30,30);

    block16=new Block(900,340,30,30);
    block17=new Block(930,340,30,30);
    block18=new Block(870,340,30,30);

    block19=new Block(915,310,30,30);
    block20=new Block(885,310,30,30);

    block21=new Block(900,280,30,30);
    
    ground1=new Ground(600,650,1200,20);
    platform=new Ground(900,460,250,10);

    polygon=Bodies.circle(200,375,20);
    World.add(world,polygon);

    sling=new Slingshot(this.polygon,{x:200,y:375});

    Engine.run(engine);

}
function draw(){
    background("darkblue");
    ground1.display();
    platform.display();

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
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    sling.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,50,50);
}
function mouseDragged(){
    Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
