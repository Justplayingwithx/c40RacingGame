var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4;
var cars;
var car1PNG, car2PNG,car3PNG,car4PNG;
var trackImage, groundImage;

var form, player, game;


function preload(){
car1PNG = loadImage("images/car1.png")
car2PNG = loadImage("images/car2.png")
car3PNG = loadImage("images/car3.png")
car4PNG = loadImage("images/car4.png")

trackImage = loadImage("images/track.jpg");
groundImage = loadImage("images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

}
