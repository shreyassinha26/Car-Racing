
var database;
var position;
var gamestate = 0;
var playerCount;
var game;
var form;
var player;
var allPlayers;
var value ;
var car1 , car2 , car3 , car4;
var cars = [car1 , car2 , car3 , car4];
var car1Img , car2Img , car3Img , car4Img , groundImg , track1Img , track2Img;
var clicked = false;

function preload(){
    car1Img = loadImage("Images/car1.png");
    car2Img = loadImage("Images/car2.png");
    car3Img = loadImage("Images/car3.png");
    car4Img = loadImage("Images/car4.png");
    groundImg = loadImage("Images/ground.png");
    track1Img = loadImage("Images/track.jpg");
    track2Img = loadImage("Images/track.png");
}
function setup(){
    createCanvas(displayWidth-50,displayHeight-200);
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
    if(playerCount >=4){
        game.update(1);
        player.updateCount(0);
        player.getCount();
        car1 = createSprite(100 , 200);
        car2 = createSprite(300 , 200);
        car3 = createSprite(500 , 200);
        car4 = createSprite(700 , 200);
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
        cars = [car1 , car2 , car3 , car4];
        Player.getPlayerInfo();
    }
        
    if(keyCode === 32){
        value = 32;
    }
    if(/*value === 32 &&*/ gamestate === 1){
        clear();
        game.play();
        drawSprites();
    }
    
    
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
