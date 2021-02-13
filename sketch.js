const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    var canvas = createCanvas(800,400);
    en = Engine.create();
    wo = en.world;

    
    ground = new Ground(400,height,800,20)

    box1 = new Box(300,320,70,70);
    box2 = new Box(520,320,70,70);
    pig1 = new Pig(410, 350);
    log1 = new Log(410,260,300, PI/2);

}

function draw(){
    background("lightblue");
    Engine.update(en);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    
}