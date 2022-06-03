var bg, bgImg;
var candy, candyImg;
var candyScore;
var scoringLabel;
var upgradeMenu, upgradeBar1, upgradeBar2;
var mousePower=1;

var goldenArrow, goldenArrowImg;
var emeraldCursor, emeraldCursorImg;
var diamondCursor, diamondCursorImg;
var obsidianCursor, obsidianCursorImg;
var devilsCursor, devilsCursorImg;

var candyUpgrades1, candyUpgrades2, candyUpgrades3, candyUpgrades4, candyUpgrades5;

var goldenCursorUp=50;
var emeraldCursorUp=350;
var diamondCursorUp=1500;
var obsidianCursorUp=10000;
var devilsCursorUp=100000;

var clickSound

var numberOfCandy=0;

function preload(){
  bgImg=loadImage("background.png")
  candyImg=loadImage("candy-removebg.png")

  goldenArrowImg=loadImage("Golden_Cursor-removebg-preview.png")
  emeraldCursorImg=loadImage("emeraldCursor.png")
  diamondCursorImg=loadImage("dimondCursor.png")
  obsidianCursorImg=loadImage("obsidianCursor.png")
  devilsCursorImg=loadImage("devilsCursor.png")

  clickSound=loadSound("mouseClickSound.mp3")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  bg=createSprite(width/2,height/2, width,height)
  bg.addImage("bg",bgImg)
  bg.scale=0.5

  candy=createSprite(300,500,500,300)
  candy.scale=0.8
  candy.addImage("candy",candyImg)
  candy.velocityX=10
  candy.velocityY=10

  scoringLabel=createSprite(1460,50,500,100)
  scoringLabel.shapeColor=rgb(59,59,59)

  upgradeMenu=createSprite(1560,455,500,710)



  upgradeBar1=createSprite(1510,170,350,75)
  upgradeBar1.shapeColor=rgb(100,100,100)

  goldenArrow=createSprite(1390,170,30,50)
  goldenArrow.addImage("Gold", goldenArrowImg)
  goldenArrow.scale=0.25

  candyUpgrades1=createSprite(1490, 170, 30, 50)
  candyUpgrades1.addImage("candy", candyImg)
  candyUpgrades1.scale=0.1



  upgradeBar2=createSprite(1510,290,350,75)
  upgradeBar2.shapeColor=rgb(100,100,100)

  emeraldCursor=createSprite(1390,290,30,50)
  emeraldCursor.addImage("Emerald", emeraldCursorImg)
  emeraldCursor.scale=0.125

  candyUpgrades2=createSprite(1490 ,290, 10, 30)
  candyUpgrades2.addImage("candy", candyImg)
  candyUpgrades2.scale=0.1



  upgradeBar3=createSprite(1510,410,350,75)
  upgradeBar3.shapeColor=rgb(100,100,100)

  diamondCursor=createSprite(1390,410,30,50)
  diamondCursor.addImage("Diamond", diamondCursorImg)
  diamondCursor.scale=0.1

  candyUpgrades3=createSprite(1490 ,410, 10, 30)
  candyUpgrades3.addImage("candy", candyImg)
  candyUpgrades3.scale=0.1



  upgradeBar4=createSprite(1510,530,350,75)
  upgradeBar4.shapeColor=rgb(100,100,100)

  obsidianCursor=createSprite(1390,530,30,50)
  obsidianCursor.addImage("obsidian", obsidianCursorImg)
  obsidianCursor.scale=0.4

  candyUpgrades4=createSprite(1490 ,530, 10, 30)
  candyUpgrades4.addImage("candy", candyImg)
  candyUpgrades4.scale=0.1



  upgradeBar5=createSprite(1510,650,350,75)
  upgradeBar5.shapeColor=rgb(100,100,100)

  devilsCursor=createSprite(1390,650,30,50)
  devilsCursor.addImage("devil", devilsCursorImg)
  devilsCursor.scale=0.35

  candyUpgrades5=createSprite(1490 ,650, 10, 30)
  candyUpgrades5.addImage("candy", candyImg)
  candyUpgrades5.scale=0.1



  candyScore=createSprite(1280,50,50,50)
  candyScore.addImage("candy",candyImg)
  candyScore.scale=0.2

  
}

function draw(){

  background("white")

  /*randomX=Math.round(random(100,1200))
  randomY=Math.round(random(250,700))*/

  var edges=createEdgeSprites()
  candy.bounceOff(edges)

  if(mousePressedOver(candy)){
    increaseScore()
    clickSound.play()
  }

  candy.bounceOff(upgradeMenu)
  candy.bounceOff(scoringLabel)

  //candy.debug=true

  candy.setCollider("circle",0,0,150)
  

  //candy.lifetime=3

  upgrades1()
  upgrades2()
  upgrades3()
  upgrades4()
  upgrades5()

  drawSprites()

  fill("cyan")
  textSize(50)
  text(numberOfCandy,1430,65)
  
  fill("light_blue")
  textSize(35)
  text(goldenCursorUp, 1570, 183)

  text(emeraldCursorUp, 1560, 300)

  text(diamondCursorUp, 1550, 420)

  text(obsidianCursorUp, 1550, 540)

  text(devilsCursorUp, 1540, 660)
  
}

function increaseScore(){
  numberOfCandy+=mousePower
}

function upgrades1(){

  if(mousePressedOver(upgradeBar1) && numberOfCandy>=goldenCursorUp){
    numberOfCandy-= Math.round(goldenCursorUp)
    goldenCursorUp=Math.round(goldenCursorUp*1.5)
    mousePower+=1
  }

}

function upgrades2(){

  if(mousePressedOver(upgradeBar2) && numberOfCandy>=emeraldCursorUp){
    numberOfCandy-= Math.round(emeraldCursorUp)
    emeraldCursorUp=Math.round(emeraldCursorUp*1.5)
    mousePower+=5
  }

}

function upgrades3(){

  if(mousePressedOver(upgradeBar3) && numberOfCandy>=diamondCursorUp){
    numberOfCandy-= Math.round(diamondCursorUp)
    diamondCursorUp=Math.round(diamondCursorUp*1.5)
    mousePower+=25
  }

}

function upgrades4(){

  if(mousePressedOver(upgradeBar4) && numberOfCandy>=obsidianCursorUp){
    numberOfCandy-= Math.round(obsidianCursorUp)
    obsidianCursorUp=Math.round(obsidianCursorUp*1.5)
    mousePower+=100
  }

}

function upgrades5(){

  if(mousePressedOver(upgradeBar5) && numberOfCandy>=devilsCursorUp){
    numberOfCandy-= Math.round(devilsCursorUp)
    devilsCursorUp=Math.round(devilsCursorUp*1.5)
    mousePower+=1000
  }

}