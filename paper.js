  
class Paper{
    constructor(x,y,r){
       var options ={
           isStatic:false,
           restitution:0.04,
           friction:1.2,
           density : 1.2
       }
       this.body = Bodies.circle(x,y, r/2, options) 
       this.r = r;
       this.i = loadImage("images/paper.png");
       //this.height = height;
       World.add(world,this.body);
    };
    display(){
       var pos = this.body.position		
            push()
            translate(pos.x,pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.i, 0,0,this.r*2, this.r*2)
			pop()
			
      }
}