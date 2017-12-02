var StateMain={    
    
    //This function is used for loading images sounds and other game library stuff
    preload:function()
    {
        //load the background image 
        game.load.image("background","images/background1.png");
        game.load.image("spartan","images/spartan.png");
        console.log("Preload done!");
    },
    
    //Where everything is initialized and set up 
    create:function()
    {
        //place the background image at (0,0)
        this.background = game.add.sprite(0,0,"background");
        this.background.height = game.height;

        this.spartan = game.add.sprite(100,100,"spartan");
        this.spartan.height = .25*this.spartan.height;
        this.spartan.width = .25*this.spartan.width;
        this.spartan.alpha = 1;
        //The anchor is now set to the center of the sprite so it spins around its center
        this.spartan.anchor.setTo(0.5,0.5);
        
        
    },
    //Main game loop
    update:function()
    {       
        this.spartan.angle = this.spartan.angle + 30;
        if(this.spartan.angle == 360){
            this.spartan.angle=0;
        }
    }
}