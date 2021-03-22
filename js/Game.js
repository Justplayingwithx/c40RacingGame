class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();


    }

      car1 = createSprite(50,130)
      car1.addImage("car1",car1PNG)
      car2 = createSprite(70,130)
      car2.addImage("car2",car2PNG)
      car3 = createSprite(90,130)
      car3.addImage("car3",car3PNG)
      car4 = createSprite(110,130)
      car4.addImage("car4", car4PNG)

      cars = [car1,car2,car3,car4]

  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.findFinishedCars();


    if(allPlayers !== undefined){

        background(rgb(198,135,103));

        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)

      //var display_position = 130;
      var loopIndex = 0;
      var x = 200;
      var y;
      
      for(var plr in allPlayers){
        loopIndex++ 
        x = x + 300;
        y = displayHeight-allPlayers[plr].distance
        cars[loopIndex-1].x = x;
        cars[loopIndex-1].y = y;

        if(loopIndex === player.index){
          stroke(12);
          fill("red");
        ellipse(x,y,80,130);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[loopIndex-1].y
        }

       /* if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>5200){
      gameState = 2;
      player.rank++;
      Player.updateCarRank(player.rank);
      player.update();
    }
   // console.log("hi")
    drawSprites();
    //console.log("xxx")
  }
end(){

/*console.log("game has ended")*/
console.log(player.rank);
background("white")
Player.getPlayerInfo();
if(allPlayers!=undefined){
  for(var plr in allPlayers){
    text(allPlayers[plr].name+":"+allPlayers[plr].rank,displayWidth/2,displayHeight/2);
  }
}
  
}

};
