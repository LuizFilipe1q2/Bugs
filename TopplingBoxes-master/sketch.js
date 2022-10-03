const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var log1,log2;
var bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,240,70,70);
    box2 = new Box(920,160,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(920,100,70,70);
    box5 = new Box(806,60,70,70);
    log1 = new Log(806,120,300,20);
    log2 = new Log(806,60,300,20);
    log3 = new Log(806,30,150,-PI/4);
    log4 = new Log(806,30,150,PI/4);
    bird = new Bird(100,100)
    console.log(log4);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}