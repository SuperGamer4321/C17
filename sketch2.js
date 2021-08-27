var ball1;
var ball2;
function setup(){
   ball1 = new Ball(200,100,10);
   ball1.set_color("black");
   ball2 = new Ball(300,380,20);
   ball2.set_color("green");
}


function draw(){
   background("pink");
   ball1.display();
   ball2.display();

   ball1.set_speed(4);
   ball2.set_speedy(2);
   //trex.addAnimation();
}