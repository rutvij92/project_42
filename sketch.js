var hr,mn,sc;
var scAngle,mnAngle,hrAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
 
}
function draw() {
  background(0);  
  hr=hour();
  mn=minute();
  sc=second();
  translate(200,200);
rotate(-90);
  scAngle=map(sc,0,60,0,360)
 mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

 

push();
rotate(scAngle);
stroke(225,0,0);
strokeWeight(7);
line(0,0,115,0);
pop();

push();
rotate(mnAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hrAngle);
stroke("orange");
strokeWeight(7);
line(0,0,50,0);
pop();

noFill();
strokeWeight(5);
stroke("red")
arc(0,0,300,300,0,scAngle);
stroke("yellow")
arc(0,0,280,280,0,mnAngle);
stroke("orange")
arc(0,0,260,260,0,hrAngle);




drawSprites();

}