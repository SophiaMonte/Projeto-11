var runner, path, barreira, barreira1, bomb, bomb1, bomb2, coin ;
var runnerRun, pathImg, bombI, bomb1I, bomb2I, coinI;
var estadoJogo;
var mortes;
var space, spaceImg;
estadoJogo = "start"; 
function preload(){
  //Imagens runner
  runnerRun = loadAnimation("Runner-1.png", "Runner-2.png");
  //Imagem path
  pathImg = loadImage("path.png");
  //Imagem bomb
  bombI = loadImage("bomb.png");
  bomb1I = loadImage("bomb.png");
  bomb2I = loadImage("bomb.png");
  //Imagem coin
  coinI = loadImage("coin.png");
  //Imagem space
  spaceImg = loadImage("espaço.jpg");
}

function setup(){
  createCanvas(400,400);

  //sprite e imagem path
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 5;

  //sprite, animação e movimento runner
  runner = createSprite(200, 320);
  runner.addAnimation("Run", runnerRun);
  runner.scale = 0.06;
 
  //sprites barreiras invisíveis;
  barreira = createSprite(0, 200, 50, 200);
  barreira.visible = false;
  barreira1 = createSprite(400, 200, 50, 200);
  barreira1.visible = false;
  
  // bomb
  bomb = createSprite(100, 50);
  bomb.addImage(bombI);
  bomb.scale = 0.1;
  bomb.velocityY = 8;
  //bomb1
  bomb1 = createSprite(200, 50);
  bomb1.addImage(bomb1I);
  bomb1.scale = 0.1;
  bomb1.velocityY = 8;
  //bomb2
  bomb2 = createSprite(300, 50);
  bomb2.addImage(bomb2I);
  bomb2.scale = 0.1;
  bomb2.velocityY = 8;
  //mortes

  //coin
  coin = createSprite(200, 120);
  coin.addImage(coinI);
  coin.scale = 0.5;
  coin.velocityY = 5;

  //space
  space = createSprite(200, 200);
  space.addImage(spaceImg);
  space.visible = false;
  }

function draw() {
  //cor de plano de fundo
  background(0);
   
  //chão infinito
  if(path.y > 400){
    path.y = height/2;
  }
  //runner colide com as barreiras
  runner.collide(barreira);
  runner.collide(barreira1);

  //movimentação do runner atráves do mouse
  runner.x = mouseX;


  //Se o runner tocar nas bombas
  if(runner.isTouching(bomb)||runner.isTouching(bomb1)||runner.isTouching(bomb2)){
    bomb.y = 0;
    bomb1.y = 0;
    bomb2.y = 0;
    coin.y = 0;
  }
  //Se o runner tocar no coin
  if(runner.isTouching(coin)){
    space.visible = true; 
  }
  //Se apertar espaço
  if(keyDown("space")){
    bomb.y = 0;
    bomb1.y = 0;
    bomb2.y = 0;
    coin.y = 0;
    space.visible = false;
  }
  //Se tudo sumir
  if(coin.y > 400){
    bomb.y = 0;
    bomb1.y = 0;
    bomb2.y = 0;
    coin.y = 0; 
  }

  //Se a bomba sumir da tela
  /*if(bomb.y > 400){
    estadoJogo = "end";
  }

  //Se estadoJogo == "end"
  if(estadoJogo == "end"){
    if(keyDown("space")){
      estadoJogo = "start";
    }
  }
  
  //Se o runner tocar no coin
  /*if(runner.isTouching(coin)){
    text("GG");
  }*/
  drawSprites(); 

}
//function para começar
function start(){
  fill("yellow");
  text("Aperte 'z' para começar", 100, 200);
  if(keyDown("z")){
    bomb.velocityY = 10;
    bomb1.velocityY = 10;
    bomb2.velocityY = 10;
  }
}
