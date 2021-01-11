//I found a bug in which the particle fell through the right or left side of the plinko
//it is just to avoid that from happening 
//and yeah it is just a verticle ground class, there was'nt any need of this
//I could have just used th ground class insted. :)

class Barrier{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };