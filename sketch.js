
var database;
var position;
var gamestate = 0;
var playerCount;
var game;
var form;
var player;
var allPlayers;

function setup(){
    createCanvas(1000,500);
    database = firebase.database();
    game = new Game();
    //player = new Player();
    //form = new Form();
    game.readGamestate();
    game.start();
    
    //gamestate = database.ref('');
    
}

function draw(){
    background("skyBlue");
    //ballPosition.on('value' , readPosition , showError); 

    
    
    drawSprites();
}

function changePosition(x,y){
    
}
 
function readPosition(data){
    
    
    

}
function writePosition(x , y){
    
}
function showError(){
    console.log("e");
}
