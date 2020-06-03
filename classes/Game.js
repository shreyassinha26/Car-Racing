class Game{
    constructor(){

    }
    readGamestate(){
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on('value' , function (data){
            gamestate = data.val();
            
        } , function(){
            console.log("Error");
        } );
    }
    update(state){
        database.ref('/').update({'gamestate' : state});
    }
    async start(){
        if(gamestate === 0 ){
            
            player = new Player();
            await player.getCount();
            //console.log(playerCount);
            form = new Form();
            
            form.display();
            
            if(playerCount >=4){
                //this.update(1);
                player.updateCount(0);
                player.getCount();
            }
            
        }
        
    }
    play(){
        database.ref('/').set({'gamestate' : 1});
        form.hide();
        text("game start" , 10 , 10);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var displayPosition = 130;
            for(var i in allPlayers){
                if(i === 'player' + player.index){
                    fill("red");
                    
                }
                else{
                    fill(0);
                }
                displayPosition+=20;
                text(allPlayers[i].name + " : " + allPlayers[i].distance , 120 , displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!== null){
            player.distance+=50;
            player.update();
        }
    }
}