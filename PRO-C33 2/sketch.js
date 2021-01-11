const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var turn = 0;
var gameState = "play";
var points = 0;
var leftBarrier,rightBarrier;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  leftBarrier = new Barrier(0,400,10,800);
  rightBarrier = new Barrier(485,400,10,800);




   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 35; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 35; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  
 //
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 //for particles
  

   //for divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

//for the first 100 points(from left)
   if(particle != null){
     particle.display();
      
       if(particle.body.position.y>760){
           

           if(particle.body.position.x<80){
              points=points+100;
              particle = null;
               if(turn>=5){
                  gameState = "end"
               }               
           }
       }
   }

//for the first 200 points(from left)
   if(particle != null){
    particle.display();
     
      if(particle.body.position.y>760){
          

          if(particle.body.position.x<160 && particle.body.position.x>80){
             points=points+200;
             particle = null;
              if(turn>=5){
                 gameState = "end"
              }               
          }
      }
  }
//for the 500 points(both)
  if(particle != null){
  particle.display();
   
    if(particle.body.position.y>760){
        

        if(particle.body.position.x<320 && particle.body.position.x>160){
           points=points+500;
           particle = null;
            if(turn>=5){
               gameState = "end"
            }               
        }
    }
}

//for the second 200 points(from left)
  if(particle != null){
  particle.display();
   
    if(particle.body.position.y>760){
        

        if(particle.body.position.x<400 && particle.body.position.x>320){
           points=points+200;
           particle = null;
            if(turn>=5){
               gameState = "end"
            }               
        }
    }
}

//for the second 100 points(from left)
  if(particle != null){
  particle.display();
   
    if(particle.body.position.y>760){
        

        if(particle.body.position.x>400){
           points=points+100;
           particle = null;
            if(turn>=5){
               gameState = "end"
            }               
        }
    }
}




//texts
 text("Score:"+points,10,20);
  
 text("100",20,550);
 text("200",105,550);
 text("500",185,550);
 text("500",265,550);
 text("200",340,550);
 text("100",425,550);
 
//end text
push()
 if(gameState === "end"){
   textSize(35);
   fill("red");
   stroke("white")
   text("!!GAME OVER!!",115,360);
   text("Your Score:"+points,110,420);
  
 }
 pop()

 
 
}

  

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}