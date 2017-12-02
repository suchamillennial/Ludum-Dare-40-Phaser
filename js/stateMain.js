var StateMain={    
    
    //This function is used for loading images sounds and other game library stuff
    preload:function()
    {
        //load the background image 
        game.load.image("background","images/background1.png");

        console.log("Preload done!");
    },
    
    //Where everything is initialized and set up 
    create:function()
    {
        //place the background image at (0,0)
        this.char1=game.add.sprite(0,0,"background");
    },
    //Main game loop
    update:function()
    {       
        
    }
}