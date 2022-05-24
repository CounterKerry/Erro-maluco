
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var ball_options = {
		restitution = 0.95;
		frictionAir = 0.01;
	}

	ball = Body.circle(100, 10, 20, ball_options);
	world.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
 
}



