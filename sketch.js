
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObj
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	 dustbinObj=new Dustbin(1200,650);
	 paperObj =new Paper(500,650,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
   dustbinObj.display();
 paperObj.display();

}

function keyPressed(){

	if(keyIsDown(UP_ARROW)){
		console.log("up")
		Matter.Body.applyForce(paperObj.body,{x:0,y:0},{x:90,y:0})
		
	}
}

