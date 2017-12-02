var game;
window.onload = function()
{
    //Create a game of 480 X 640 Dimensions and auto choose the graphics library supported
    game=new Phaser.Game(480,640,Phaser.AUTO,"ph_game");
    
    game.global ={
        angle : 0
    }
    //Add the game state "StateMain" from that file
    game.state.add("StateMain",StateMain);
    //Start the game with game state "StateMain"
    game.state.start("StateMain");
}