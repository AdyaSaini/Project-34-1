var dog, dogImg;
var happyDog, happyDogImg;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250, 50, 50);
  
  

}

function draw() { 
  background("green");

  dog.display();

  drawSprites();
}



