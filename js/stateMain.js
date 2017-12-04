var StateMain={    
    
    //This function is used for loading images sounds and other game library stuff
    preload:function()
    {
        //load the background image 
        game.load.image("background","images/background1.png");
        game.load.spritesheet("spartan","images/sprite sheet man.png",40,40,3);
        console.log("Preload done!");
    },
    
    //Where everything is initialized and set up 
    create:function()
    {
        //place the background image at (0,0)
        this.background = game.add.sprite(0,0,"background");
        this.background.height = game.height;

        this.spartan = game.add.sprite(100,100,"spartan")
        this.spartan.frame = 1;
        this.spartan.animations.add('idle',[0,1],6,true);
        this.spartan.animations.play('idle');

        this.spartan.scale.y = 2;
        this.spartan.scale.x = 2;
        this.spartan.alpha = 1;
        //The anchor is now set to the center of the sprite so it spins around its center
        this.spartan.anchor.setTo(0.5,0.5);
        
        
    },
    //Main game loop
    update:function()
    {       
        // this.spartan.angle = this.spartan.angle + 30;
        // if(this.spartan.angle == 360){
        //     this.spartan.angle=0;
        // }

    }
}