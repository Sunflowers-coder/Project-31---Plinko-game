const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var particles = [];
var plinkos = []; 

function preload()
{
	
}



function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(400,795,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Division(i,height-280/2, 10, 280));
  }
  for (var j=40; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=15; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=50; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=25; j<=width-10; j=j+53) {
    plinkos.push(new Plinko(j,375));
  }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  for (var n = 0; n<divisons.length; n++) {
    divisons[n].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();

  drawSprites();
}