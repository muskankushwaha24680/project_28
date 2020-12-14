
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone ;
var boy , boyImg ;
var ground ;
var launchObj;
var tree;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8  ;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone = new Stone(50,520,60);

 tree = new Tree(700,600,50,50);

boy = createSprite(200,580,20,10);
boy.addImage(boyImg);
boy.scale = 0.1;

ground = new Ground(400,660,80,10);

mango1 = new Mango(650,300,30);
mango2 = new Mango(530,240,40);
mango3 = new Mango(700,250,50);
mango4 = new Mango(500,300,40);
mango5 = new Mango(550,390,40);
mango6 = new Mango(730,300,40);
mango7 = new Mango(600,270,50);
mango8 = new Mango(700,350,40);

launchObj = new Launcher(stone.body,{x: 150,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
   stone.display();
   ground.display();
   launchObj.display();
   tree.display(); 
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();

   detectCollision(stone , mango1);
   detectCollision(stone , mango2);
   detectCollision(stone , mango3);
   detectCollision(stone , mango4);
   detectCollision(stone , mango5);
   detectCollision(stone , mango6);
   detectCollision(stone , mango7);
   detectCollision(stone , mango8);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
launchObj.fly();
	}

	function keyPressed(){
		if(keyCode === 32){
			launchObj.attach(stone.body);
		}
  }
  
  function detectCollision(lstone,lmango){
  MangoBodyPosition = lmango.body.position ;
  stoneBodyPosition = lstone.body.position ;

  var distance = dist( stoneBodyPosition.x , stoneBodyPosition.y , MangoBodyPosition.x , MangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){

    Matter.Body.setStatic(lmango.body,false);
  }
  }