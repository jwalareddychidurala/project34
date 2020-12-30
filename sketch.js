var dog,dogImage,dogImage1,database,foods;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(250,300,50,50);
  dog.addImage(dogImage);
  dog.scale=0.3;
  database.ref('food').on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writestock(foods);
	dog.addImage(dogImage1);
}
  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
text("food remaining-"+foods,400,50);
fill("white");
text("note:press up arrow key to feed the drago milk",250,600);
}

function readStock(data){
  foods=data.val();
}
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
