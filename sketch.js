
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = []
var divisonsHeight = 300;
var particles = []
var plinks = [];
 function preload()
 {

 }



 function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(400,690,800,20)








  for (i = 0;i<=innerWidth;i=i+80){
    divisons.push(new Division(i,height-divisonsHeight/2,10,divisonsHeight));
  }

  for (j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(0);  

  drawSprites();




  for(var n = 0;n = divisons.length;n++){
    divisons[n].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var h=0;h<particles.length;h++){
    paticles[h].display();
  }
  for(j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
}