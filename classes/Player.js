class Player{
    constructor(){
        this.distanceCovered = 0;
        this.name = null;
        this.index = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value" , function (data){
            playerCount = data.val();
            
        } , function(){
            console.log("Error");
        });
    }
    update(){
        var playerIndex = 'players/player' + playerCount ;
        database.ref(playerIndex).set({'name' : this.name ,  distanceCovered : 0});
    }
    updateCount(count){
        count = count%4;
        database.ref('/').update({'playerCount' : count});
        
    }
    updateDistance(){
        var playersIndex = 'players/player' + this.index ;
        database.ref(playersIndex).set({name : this.name , distanceCovered : this.distanceCovered});

    }
    static getPlayerInfo(){
        var playerRef = database.ref('players');
        playerRef.on('value' , function(data){
            allPlayers = data.val();
            
        } , function(){
            console.log("Error");
        });
    }
}