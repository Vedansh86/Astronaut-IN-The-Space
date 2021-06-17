var bg,sleep,brush,gym,eat,bath,move
var astronaut


function preload() {
  bg = loadImage("Images/iss.png")
  sleep = loadAnimation("Images/sleep.png")
  brush = loadAnimation("Images/brush.png")
  gym = loadAnimation("Images/gym1.png","Images/gym1.png","Images/gym2.png","Images/gym2.png")
  eat = loadAnimation("Images/eat1.png","Images/eat1.png","Images/eat2.png","Images/eat2.png")
  bath = loadAnimation("Images/bath1.png","Images/bath1.png","Images/bath2.png","Images/bath2.png")
  move = loadAnimation("Images/move.png","Images/move.png","Images/move1.png","Images/move1.png")



}




function setup() {

  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut,scale = 0.1;
}

function draw() {
  background(255,255,255);
    textSize(20);
    fill("white")
    text("upArrow = brushing",20,55);
    text("downArrow =Gymming",20,70);
    text("rightArrow = Bathing",20,85);
    text("leftArrow = Eating",20,100);
    text("M key = Moving",20,110);
edges = createEdgeSprites();
astronaut.bounceOff(edges);
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.x = 150;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.x = 150;
  astronaut.velocityX = 0.5;
  astronaut.velocityY = 0.5;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.x = 150;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.x = 150;
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}
  drawSprites();
}