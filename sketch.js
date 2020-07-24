const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var score = 0;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(500,325,120,10);
  base2 = new Ground(1000,375,200,10);

  ground = new Ground(600,395,1200,10);

  //layer 1

  block1 = new Block(540,310,20,20);
  block2 = new Block(520,310,20,20);
  block3 = new Block(500,310,20,20);
  block4 = new Block(480,310,20,20);
  block5 = new Block(460,310,20,20);
  
  block6 = new Block(530,290,20,20);
  block7 = new Block(510,290,20,20);
  block8 = new Block(490,290,20,20);
  block9 = new Block(470,290,20,20);
  
  block10 = new Block(520,270,20,20);
  block11 = new Block(500,270,20,20);
  block12 = new Block(480,270,20,20);
  
  block13 = new Block(510,250,20,20);
  block14 = new Block(490,250,20,20);

  block15 = new Block(500,230,20,20);

  block16 = new Block(920,360,20,20);
  block17 = new Block(940,360,20,20);
  block18 = new Block(960,360,20,20);
  block19 = new Block(980,360,20,20);
  block20 = new Block(1000,360,20,20);
  block21 = new Block(1020,360,20,20);
  block22 = new Block(1040,360,20,20);
  block23 = new Block(1060,360,20,20);
  block24 = new Block(1080,360,20,20);

  block25 = new Block(930,340,20,20);
  block26 = new Block(950,340,20,20);
  block27 = new Block(970,340,20,20);
  block28 = new Block(990,340,20,20);
  block29 = new Block(1010,340,20,20);
  block30 = new Block(1030,340,20,20);
  block31 = new Block(1050,340,20,20);
  block32 = new Block(1070,340,20,20);

  block33 = new Block(940,320,20,20);
  block34 = new Block(960,320,20,20);
  block35 = new Block(980,320,20,20);
  block36 = new Block(1000,320,20,20);
  block37 = new Block(1020,320,20,20);
  block38 = new Block(1040,320,20,20);
  block39 = new Block(1060,320,20,20);

  block40 = new Block(950,300,20,20);
  block41 = new Block(970,300,20,20);
  block42 = new Block(990,300,20,20);
  block43 = new Block(1010,300,20,20);
  block44 = new Block(1030,300,20,20);
  block45 = new Block(1050,300,20,20);

  block46 = new Block(960,280,20,20);
  block47 = new Block(980,280,20,20);
  block48 = new Block(1000,280,20,20);
  block49 = new Block(1020,280,20,20);
  block50 = new Block(1040,280,20,20);

  block51 = new Block(970,260,20,20);
  block52 = new Block(990,260,20,20);
  block53 = new Block(1010,260,20,20);
  block54 = new Block(1030,260,20,20);

  block55 = new Block(980,240,20,20);
  block56 = new Block(1000,240,20,20);
  block57 = new Block(1020,240,20,20);

  block58 = new Block(990,220,20,20);
  block59 = new Block(1010,220,20,20);

  block60 = new Block(1000,200,20,20);

  
  
  var options = {
    density:1,
    friction:1,
    restitution:0.2,
  }

  polygon = Bodies.circle(50,200,20,options)
  World.add(world, polygon);

  slingShot = new SlingShot(polygon,{x:200, y:200});
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  fill("green");
  ellipse(polygon.position.x,polygon.position.y,20,20); 

  text("Score : " + score,750,40);

  base.display();
  base2.display();

  slingShot.display();

  ground.display();

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
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block58.display();
  block59.display();
  block60.display();

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
  block14.score();
  block15.score();

  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();
  block37.score();
  block38.score();
  block39.score();
  block40.score();
  block41.score();
  block42.score();
  block43.score();
  block44.score();
  block45.score();
  block46.score();
  block47.score();
  block48.score();
  block49.score();
  block50.score();
  block51.score();
  block52.score();  
  block53.score();
  block54.score();
  block55.score();
  block56.score();
  block57.score();
  block58.score();
  block59.score();
  block60.score();
}

function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});
  }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon,{x:150, y:115});
    slingShot.attach(polygon);
    gameState = "onSling";
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Kentucky/Louisville");
  var responseJSON = await response.json();
  var time = responseJSON.datetime;
  var hour = time.slice(11,13);
  if (hour >= 06 && hour<= 18){
      background = "white";
  }
  else{
      background = "black";
  }
}