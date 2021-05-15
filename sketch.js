var robber , cop, copImage, robberImage, bgImage
var score=0
function preload(){
  robberImage = loadImage("Robber.png")
  copImage = loadAnimation("Images/1 (1).png","Images/2 (1).png","Images/4 (1).png","Images/5 (1).png","Images/6 (1).png","Images/7 (1).png" )
  bgImage = loadImage("Images/Bg.png")
}
function setup() {
  createCanvas(displayWidth-20, displayHeight-120);
  
  bg=createSprite(50,300,displayWidth-50,displayHeight-30)
  bg.addImage(bgImage)
  bg.velocityX=-2
  bg.scale=4.2;
  
  coinGroup = new Group()

  robber = createSprite(50,displayHeight-250)
  robber.addImage(robberImage)
  robber.scale = 0.6
  robber.debug = true
  robber.setCollider("rectangle",0,0,120,250)



  ground = createSprite(displayWidth/2,displayHeight-120,displayWidth,2)
  //ground.visible = false
  ground.velocityX = -5

  goalGroup=new Group()
}

function draw() {
  background(bgImage);  
 
  cops()
  goal()
 
  if(keyDown("space")&& robber.y>510){
    robber.velocityY = -12
  }
 
  robber.velocityY += 0.5
 
 
  robber.collide(ground)
 
 
  if(ground.x<0){
    ground.x = ground.width/2
  }

  if(bg.x<0){
    bg.x = bg.width/2

}
for(var i = 0;i<goalGroup.length;i++){
if(goalGroup.get(i).isTouching(robber)){
  goalGroup.get(i).destroy()
  score = score+1
 }
}


 
  
  drawSprites();
}
function cops() {
if(frameCount%60===0){
  var cop = createSprite(displayWidth-100, displayHeight-180)
  cop.addAnimation("cops", copImage)
 cop.x=random(displayWidth/2-200,displayWidth)
 cop.lifetime=100;
}
}


function goal() {
  if(frameCount%80===0){
    var goal = createSprite(displayWidth-100, displayHeight-180)
    goal.velocityX = -3
    
    goal.x=random(150,displayWidth-200)
    goal.y=random(250,displayHeight-300)
    goal.lifetime=150
    goal.debug=true
    goalGroup.add(goal)
  }
  }

