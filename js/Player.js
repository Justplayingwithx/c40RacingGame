class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  findFinishedCars(){
    //Added an event listener for the change in finished cars...
     database.ref('carsAtEnd').on("value",(data)=>{
         this.rank = data.val();
     },()=>{
      console.error("event listener error on line 23")
     })
  }



  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank
    });
  }

  delete(){
    var playerIndex = "players" 
    database.ref(playerIndex).remove();
  
  }
  static updateCarRank(rank){
    console.warn("we have reached herev")
    //updating the number of players that have reached the end (in the database).
    database.ref('/').update({
      carsAtEnd: rank
      })
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
