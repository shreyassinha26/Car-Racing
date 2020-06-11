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
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            //player.getCount();
            //console.log(playerCount);
            form = new Form();
            
            form.display();
            
            console.log(playerCount);
           //await player.getCount();
           
        
            
        }
        
    }
    play(){
        
        if(gamestate ===1){
            database.ref('/').update({'gamestate' : 1});
        form.hide();
        text("game start" , 10 , 10);
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            var index = 0;
            var x =175;
            var y ;
            image(track1Img , 0 , -displayHeight*4 , displayWidth , displayHeight*5);
            var displayPosition = 130;
            for(var i in allPlayers){
                index++;
                x+=200;
                y = displayHeight-allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1 ].y = y;
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    
                }
                if(i === 'player' + player.index){
                    fill("red");
                    ellipse(x , y , 60 , 60);
                    
                }
                else{
                    fill(0);
                }
                displayPosition+=20;
                text(allPlayers[i].name + " : " + allPlayers[i].distanceCovered , 120 , displayPosition);
                console.log("index : " + index + " , player.index : " + player.index);

            }
        }
        
        if(keyCode === 38 && player.index !== null){
            player.distanceCoverd+=50;
            player.updateDistance();
        }
        if(player.distance>3860){
            gamestate = 2;
            this.end();
        }
        
        }
        

    }
    end(){
        console.log("game Ended");
        game.update(2);
        
    }
    
}