class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(230 , 100);
        var input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3");
        input.position(250 , 260);
        button.position(350 , 300);
        button.mousePressed(()=>{
            input.hide();
            button.hide();
            player.name = input.value();
            playerCount++;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            //title.hide();
            //greeting.hide();
            //var name = input.value();
            //playerCount++;
            //player.update( name);
            //player.updateCount(playerCount);
            
            greeting.html("Hello " + player.name);
            greeting.position(230 , 280);
        } ); 
        /*function (){
            input.hide();
            button.hide();
            title.hide();
            //greeting.hide();
            var name = input.value();
            playerCount++;
            player.update( name);
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + name);
            greeting.position(230 , 280);
        }*/
    }
    hideGreeting(){
        this.greeting.hide();
    }
}