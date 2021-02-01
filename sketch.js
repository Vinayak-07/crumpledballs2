
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var ground1;
var rec1,rec2,rec3;
var binIMg,paperimg;
function preload()
{
	binIMg = loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1200, 560);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,530,25);
	ground1 = new Ground(600,550,1200,20);
	rec1 = new Dustbin(840,440,10,100);
	rec2 = new Dustbin(895,465,120,10);
	rec3 = new Dustbin(940,420,10,100);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1500,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  paper.display();
  image(binIMg,855,420,120,150);
  ground1.display(); 

}
function keyPressed(){
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 35,y: -25});
}
}



