

var plane_opitions={
	
	isStatic = true 
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  background("black");
engine.update(engine);
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var block_1_opitions = {
	restution:0.5,
		friction:0.02,
frictionAir:0

}
var block_2_opitions = {
	restution:0.7,
		friction:0.01,
frictionAir:0.1

}
var block_3_opitions = {
	restution:0.01,
		friction:1,
frictionAir:0.3

}











	
block1= Bodies.circle(220,10,10,block1_opitions)
Word.add(word,block1);
	block2= Bodies.circle(110,50,10,10,block2_opitions)
Word.add(word,block2);
block3= Bodies.circle(350,50,10,10,block3_opitions)
Word.add(word,block);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



