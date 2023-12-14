var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var cnv;
var juno

function preload() {
  juno = loadImage('images/JunoGIF2.gif');
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 1.5;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
}

function windowResized() {
  centerCanvas();
}

function draw() {
  if(screen == 0){
    startScreen()
  }else if(screen == 1){
    gameOn()
  }else if(screen==2){
    endScreen()
  }	
}

function startScreen(){
  background(179, 213, 212)
  fill(0, 88, 94)
  textAlign(CENTER);
  textSize(30)
  textFont("Papyrus")
  textStyle(BOLD)
  text('PLAY  BALL', width / 2, height / 3);
  textSize(25)
  text('click to start', width / 2, height / 2 + 20);
  reset();
}

function drawBall() {
  fill(59, 112, 119)
  strokeWeight(3);
  stroke(59, 33, 2);
  ellipse(x,y,30,30);
}

function gameOn(){
  background(179, 213, 212)
  rectMode(CENTER)
  //rect(mouseX,height-75,150,150)
  imageMode(CENTER)
  image(juno,mouseX,height-75,150,150);
  drawBall();

  noStroke();
  text("score = " + score, 80,50);
  y+= speed;
  if(y>height){
    screen =2
  }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
    y=-20
    speed+=.5
    score+= 1
  }
  if(y==-20){
    pickRandom();
  }
}

function pickRandom(){
  x= random(20,width-20)
}

function endScreen(){
  background(0, 88, 94)
  textAlign(CENTER);
  textSize(30)
  fill(179, 213, 212)
  text('GAME   OVER', width / 2, height / 4);
  textSize(25)
  text("score = " + score, width / 2, height / 3 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
  if(screen==0){
    screen=1
  }else if(screen==2){
    screen=0
  }
}

function reset(){
  score=0;
  speed=2;
  y=-20;
}