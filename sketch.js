var sword,swordImage;
var alien1,alien1Image;
var alien2,alien2Image;
var fruit1,fruit1Image;
var fruit2,fruit2Image;
var fruit3,fruit3Image;
var fruit4,fruit4Image;
var score=0;
var Gamestate="play";
var gameoverImage;
var gameoversound
var fruitsound



function preload(){
 swordImage=loadImage("sword.png");
 alien1Image=loadImage("alien1.png");
 alien2Image=loadImage("alien2.png");
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
 fruit3Image=loadImage("fruit3.png"); 
 fruit4Image=loadImage("fruit4.png"); 
 gameoverImage=loadImage("gameover.png");
 gameoversound=loadSound("gameover.mp3")
 fruitsound=loadSound("knifeSwooshSound.mp3")
}

function setup(){
createCanvas(600, 600);
  
sword=createSprite(50,50);
sword.addImage(swordImage);
sword.scale=0.7

  fruitGroup= new Group();
  alienGroup= new Group();
}
function draw(){
background('lightblue')
  
  if(Gamestate==="play"){
    
  
  textSize(20);
  text("Score:"+score,300,15);
  
sword.y = World.mouseY
sword.x = World.mouseX

  
  if(fruitGroup.isTouching(sword)){
    
    fruitGroup.destroyEach();
    score=score+2;
    fruitsound.play();
    
    
  }
    
  
  if(alienGroup.isTouching(sword)){
    
    Gamestate="end";
    gameoversound.play();
    
  }
  
  alienspawn();
  spawnfruit(); 
    
    
  }
  
  else if(Gamestate==="end"){
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    alienGroup.setVelocityXEach(0);
    sword.addImage(gameoverImage);
    sword.scale=2;
    sword.x=300;
    sword.y=300;
  }
  
drawSprites();
}

function spawnfruit() {
  
  
 if (frameCount % 60 === 0) {
 var fruit = createSprite(400,200,20,20);
 fruit.y = Math.round(random(50,550));
 var rand=Math.round(random(1,4));
   switch(rand){
       
     case 1:fruit.addImage(fruit1Image);
       break;
       
      case 2:fruit.addImage(fruit2Image);
       break;      
       
      case 3:fruit.addImage(fruit3Image);
       break;      
       
      case 4:fruit.addImage(fruit4Image);
       break;      
       
       default:break
   }
 fruit.scale = 0.3;
 fruit.velocityX = -3;

    fruit.lifetime = 600;
   fruitGroup.add(fruit);
  
 }
}  

  function alienspawn(){
    
     if (frameCount % 100 === 0) {
 var alien = createSprite(400,200,20,20);
 alien.y = Math.round(random(50,550));
 var rand=Math.round(random(1,2));
   switch(rand){
       
     case 1:alien.addImage(alien1Image);
       break;
       
      case 2:alien.addImage(alien2Image);
       break;
    
           default:break
   }
 alien.scale = 1;
 alien.velocityX = -3;

    alien.lifetime = 600;
   alienGroup.add(alien);
  
 }
    
    
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  