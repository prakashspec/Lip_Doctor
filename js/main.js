var game = new Phaser.Game(1600, 1200, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   tickId:[0,false,false,false],
   padtickPosX:[0,-110,50.25,208.4,-109.85,50.4,210.4,-108.85,51.4,209.15,-107.6,51.9,209.15],
   padtickPosY:[0,-128,-128,-128,15,15,15,160,160,160,305,305,305],
   padtickPosVisible:[0,false,false,false,false,false,false,false,false,false,false,false,false],
   hairPosX: [0,448.7,468.05,508.15,549.85,586.4,718.65,744.75,783.9,823],
   hairPosY: [0,377.85,367.25,367.25,369.25,385,377.25,356.75,349.6,351],
   hairPos2X: [0,601.9,634.1,666.5,692.1,817.5,837.05,865.55,900.25],
   hairPos2Y: [0,348.35,348.45,357.5,369.2,378.3,374.85,369.7,367.1],
   hairPos3X: [0,643.75,678.95,707.85,846.55,869.5,895.8,918.5,949.4],
   hairPos3Y: [0,445.25,448.2,459.7,458.75,444.9,432.05,421.9,426.75],
   lipColor: [0,0,0],
   finalGirlVis : [false,true,true,true],
   finalGirlNum : [[0],[0],[0],[0]],
};

var test = true;

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#b8175f';
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;

            game.scale.setResizeCallback(this.gameResized, this);

            game.load.image('loading', 'assets/prebar.png');
	    
            game.load.image('barover', 'assets/barover.png');
         
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
      init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,700,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			// this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');

            // this.prelogo.inputEnabled = true
            // this.prelogo.input.useHandCursor = true;
            // this.prelogo.events.onInputUp.add(this.openLink, this);
             
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',72,71);
             
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             
              
             game.load.image('padclosebtn', 'assets/padclosebtn.png');
             game.load.image('nxtbtn', 'assets/nxtbtn.png');
             game.load.image('menubtn', 'assets/menubtn.png');
             
             game.load.image('playagain', 'assets/playagain.png');
             game.load.image('windowbg', 'assets/windowbg.png');
             game.load.image('playbtn', 'assets/playbtn.png');
             game.load.image('girlselectbg', 'assets/girlselectbg.png');
             game.load.image('girlselect1', 'assets/girlselect1.png');
             game.load.image('girlselect2', 'assets/girlselect2.png');
             game.load.image('girlselect3', 'assets/girlselect3.png');
             game.load.image('tick1', 'assets/tick1.png');
             game.load.image('tick2', 'assets/tick2.png');
             game.load.image('tick3', 'assets/tick3.png');
             game.load.image('level1bg', 'assets/level1bg.png');
             game.load.image('level1girl', 'assets/level1girl.png');
             game.load.image('level2girl', 'assets/level2girl.png');
             game.load.image('level3girl', 'assets/level3girl.png');
             game.load.image('girl1lip', 'assets/girl1lip.png');
             game.load.image('girl2lip', 'assets/girl2lip.png');
             game.load.image('girl3lip', 'assets/girl3lip.png');
             game.load.image('girl1moistering', 'assets/girl1moistering.png');
             game.load.image('girl1moistering2', 'assets/girl1moistering2.png');
             game.load.image('pimple', 'assets/pimple.png');
             game.load.image('girl1nose', 'assets/girl1nose.png');
             game.load.image('girl2nose', 'assets/girl2nose.png');
             game.load.image('girl3nose', 'assets/girl3nose.png');
             game.load.image('pad', 'assets/pad.png');
             game.load.image('padtick', 'assets/padtick.png');
             game.load.image('padbg', 'assets/padbg.png');
             game.load.image('toolbox', 'assets/toolbox.png');
             game.load.image('tool1', 'assets/tool1.png');
             game.load.image('tool2', 'assets/tool2.png');
             game.load.image('tool3', 'assets/tool3.png');
             game.load.image('tool4', 'assets/tool4.png');
             game.load.image('tool5', 'assets/tool5.png');
             game.load.image('tool6', 'assets/tool6.png');
             game.load.image('tool7', 'assets/tool7.png');
             game.load.image('tool8', 'assets/tool8.png');
             game.load.image('tool9', 'assets/tool9.png');
             game.load.image('tool10', 'assets/tool10.png');
             game.load.image('tool11', 'assets/tool11.png');
             game.load.image('tool12', 'assets/tool12.png');
             
             game.load.image('girl1mustache', 'assets/girl1mustache.png');
             game.load.image('girl2mustache', 'assets/girl2mustache.png');
             game.load.image('girl3mustache', 'assets/girl3mustache.png');
             game.load.image('meter', 'assets/meter.png');
             game.load.image('meterbg', 'assets/meterbg.png');
             game.load.image('meterfill', 'assets/meterfill.png');
             game.load.image('apply1', 'assets/apply1.png');
             game.load.image('apply1_1', 'assets/apply1_1.png');
             game.load.image('arrow', 'assets/arrow.png');
             game.load.image('clock', 'assets/clock.png');
             game.load.image('clockcenterpoint', 'assets/clockcenterpoint.png');
             game.load.image('minstick', 'assets/minstick.png');
             
             game.load.image('drag1', 'assets/drag1.png');
             game.load.image('drag2', 'assets/drag2.png');
             game.load.image('drag3', 'assets/drag3.png');
             game.load.image('drag4', 'assets/drag4.png');
             game.load.image('drag5', 'assets/drag5.png');
             game.load.image('drag6', 'assets/drag6.png');
             game.load.image('drag7', 'assets/drag7.png');
             game.load.image('drag8', 'assets/drag8.png');
             game.load.image('drag9', 'assets/drag9.png');
             game.load.image('drag11', 'assets/drag11.png');
             game.load.image('apply6', 'assets/apply6.png');
             game.load.image('apply6_2', 'assets/apply6_2.png');
             game.load.image('apply6_3', 'assets/apply6_3.png');
             game.load.image('hair1', 'assets/hair1.png');
             game.load.image('hair2', 'assets/hair2.png');
             game.load.image('hair3', 'assets/hair3.png');
             game.load.image('hair4', 'assets/hair4.png');
             game.load.image('hair5', 'assets/hair5.png');
             game.load.image('hair6', 'assets/hair6.png');
             game.load.image('hair7', 'assets/hair7.png');
             game.load.image('hair8', 'assets/hair8.png');
             game.load.image('hair9', 'assets/hair9.png');
             game.load.image('g2hair1', 'assets/g2hair1.png');
             game.load.image('g2hair2', 'assets/g2hair2.png');
             game.load.image('g2hair3', 'assets/g2hair3.png');
             game.load.image('g2hair4', 'assets/g2hair4.png');
             game.load.image('g2hair5', 'assets/g2hair5.png');
             game.load.image('g2hair6', 'assets/g2hair6.png');
             game.load.image('g2hair7', 'assets/g2hair7.png');
             game.load.image('g2hair8', 'assets/g2hair8.png');
             
             game.load.image('g3hair1', 'assets/g3hair1.png');
             game.load.image('g3hair2', 'assets/g3hair2.png');
             game.load.image('g3hair3', 'assets/g3hair3.png');
             game.load.image('g3hair4', 'assets/g3hair4.png');
             game.load.image('g3hair5', 'assets/g3hair5.png');
             game.load.image('g3hair6', 'assets/g3hair6.png');
             game.load.image('g3hair7', 'assets/g3hair7.png');
             game.load.image('g3hair8', 'assets/g3hair8.png');
             game.load.image('pimplemarker', 'assets/pimplemarker.png');
             game.load.image('pimplemarker2', 'assets/pimplemarker2.png');
             game.load.image('pimplemarker3', 'assets/pimplemarker3.png');
             game.load.image('pimplemarker4', 'assets/pimplemarker4.png');
             game.load.image('pimplemarker5', 'assets/pimplemarker5.png');
             game.load.image('pimplemarker6', 'assets/pimplemarker6.png');
             game.load.image('g1mouthwithjar', 'assets/g1mouthwithjar.png');
             game.load.image('g2mouthwithjar', 'assets/g2mouthwithjar.png');
             game.load.image('g3mouthwithjar', 'assets/g3mouthwithjar.png');
             game.load.image('lipstickchooser', 'assets/lipstickchooser.png');
             game.load.spritesheet('girl1biglip','assets/girl1biglip.png',260,109,13);
             game.load.spritesheet('girl2biglip','assets/girl2biglip.png',209,108,13);
             game.load.spritesheet('girl3biglip','assets/girl3biglip.png',225,113,13);
             game.load.spritesheet('drag12','assets/drag12.png',119,292,12);
             game.load.spritesheet('waterdrops','assets/waterdrops.png',109,136,36);
             game.load.spritesheet('drag8new','assets/drag8new.png',57,212,5);
             //game.load.image('girl1biglip', 'assets/girl1biglip.png');
             for(var i=1; i<=82; i++)
             {
               game.load.image('marker'+i, 'assets/markerapply/marker'+i+'.png');
               game.load.image('g2marker'+i, 'assets/markerapply2/marker'+i+'.png');
               game.load.image('g3marker'+i, 'assets/markerapply3/marker'+i+'.png');
             }
             game.load.image('bodypart', 'assets/bodypart.png');
             for (var i=1; i<=12; i++) {
               game.load.image('hint'+i, 'assets/hint'+i+'.png');
             }
             
             
             
             //LLLLL
             game.load.spritesheet('girl1eye','assets/girl1eye.png',501,201,7);
             game.load.spritesheet('girl2eye','assets/girl2eye.png',343,98,7);
             game.load.spritesheet('girl3eye','assets/girl3eye.png',435,107,9);
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;


	   //this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;this.game.scale.setShowAll();
	   //window.addEventListener('resize', function () 
	   //{  this.game.scale.refresh();});
	   ////this.game.scale.refresh();

   },
fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   },
   openLink:function(){
      
   }
}

Main.title = function(){}
Main.title.prototype = {
   create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
      
      this.titlebg = game.add.sprite(0,0, 'windowbg');
      this.playbtn = game.add.sprite(game.world.centerX,1073.9, 'playbtn');
      this.playbtn.anchor.setTo(0.5);
      this.playbtn.inputEnabled = true;
      this.playbtn.input.useHandCursor = true;
      this.playbtn.events.onInputUp.add(this.enterGame, this);
      this.playbtn.events.onInputOver.add(this.btnOver, this);
      this.playbtn.events.onInputOut.add(this.btnOut, this);
      
      
      
      
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   
},
enterGame:function(){
   game.state.start('menu');
   },
moreLink:function(){
   
},
btnOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
btnOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
   
}
Main.menu = function(){}

Main.menu.prototype = {
    create:function(){
      
            
            this.titlebg = game.add.sprite(0,0, 'windowbg');
      this.playbtn = game.add.sprite(624.15,1073.9, 'playbtn');
      this.playbtn.anchor.setTo(0.5);
      
      
        this.levelGroup = game.add.group();
        //this.levelGroup.y = -1300;
        this.girlselectbg = game.add.sprite(0,0,'girlselectbg');
        this.levelGroup.add(this.girlselectbg);
        
        this.girlselect1 = game.add.sprite(490.45,372.5,'girlselect1');
        this.girlselect1.anchor.setTo(0.5);
        this.levelGroup.add(this.girlselect1);
        
        this.girlselect2 = game.add.sprite(1056.55,384,'girlselect2');
        this.girlselect2.anchor.setTo(0.5);
        this.levelGroup.add(this.girlselect2);
        
        this.girlselect3 = game.add.sprite(754.2,888.55,'girlselect3');
        this.girlselect3.anchor.setTo(0.5);
        this.levelGroup.add(this.girlselect3);
        
        this.tick1 = game.add.sprite(635.2,157.1,'tick1');
        this.tick1.anchor.setTo(0.5);
        this.tick1.visible = Main.tickId[1];
        this.levelGroup.add(this.tick1);
        
        this.tick3 = game.add.sprite(1243.7,198.05,'tick2');
        this.tick3.anchor.setTo(0.5);
        this.tick3.visible = Main.tickId[3];
        this.levelGroup.add(this.tick3);
        
        this.tick2 = game.add.sprite(938.4,685.5,'tick3');
        this.tick2.anchor.setTo(0.5);
        this.tick2.visible = Main.tickId[2];
        this.levelGroup.add(this.tick2);
        
      this.rect1 = game.add.graphics(243,160);
      this.rect1.anchor.setTo(0.5);
      this.rect1.beginFill(0x000000, 0);
      this.rect1.drawRect(0, 0, 426, 470);
      this.rect1.angle = 354;
      this.rect1.alpha = 0;
      this.rect1.id = 1;
      this.rect1.inputEnabled = true;
      this.rect1.input.useHandCursor = true;
      this.rect1.events.onInputUp.add(this.selectGirl, this);
      this.levelGroup.add(this.rect1);
      
      
      this.rect2 = game.add.graphics(865,125);
      this.rect2.anchor.setTo(0.5);
      this.rect2.beginFill(0x000000, 0);
      this.rect2.drawRect(0, 0, 426, 470);
      this.rect2.angle = 5;
      this.rect2.alpha = 0;
      this.rect2.id = 3;
      this.rect2.inputEnabled = true;
      this.rect2.input.useHandCursor = true;
      this.rect2.events.onInputUp.add(this.selectGirl, this);
      this.levelGroup.add(this.rect2);
      
      
      this.rect3 = game.add.graphics(558,640);
      this.rect3.anchor.setTo(0.5);
      this.rect3.beginFill(0x000000, 0);
      this.rect3.drawRect(0, 0, 426, 470);
      this.rect3.angle = 2;
      this.rect3.alpha = 0;
      this.rect3.id = 2;
      this.rect3.inputEnabled = true;
      this.rect3.input.useHandCursor = true;
      this.rect3.events.onInputUp.add(this.selectGirl, this);
      this.levelGroup.add(this.rect2);
      
      this.blocker = game.add.graphics(0,0);
      this.blocker.anchor.setTo(0.5);
      this.blocker.beginFill(0x000000, 0);
      this.blocker.drawRect(0, 0, 1600, 1200);
      this.blocker.alpha = 0;
      this.blocker.visible = false;
      this.levelGroup.add(this.blocker);
       
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            //this.moreBtn = game.add.sprite(90,730,'morebtn');
            //this.moreBtn.anchor.setTo(0.5);
            //this.moreBtn.inputEnabled = true;
            //this.moreBtn.input.useHandCursor = true;
            //this.moreBtn.events.onInputUp.add(this.moreLink, this);
            //this.moreBtn.events.onInputOver.add(this.btnOver, this);
            //this.moreBtn.events.onInputOut.add(this.btnOut, this);
            
            //this.levelGroup.add(this.moreBtn);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true)
        },
selectGirl:function(items){
   this.blocker.visible = true;
   this['rect'+items.id].inputEnabled = false;
   this['tick'+items.id].visible = true;
   Main.tickId[items.id] = true;
   this.whichGirl = items.id;
   Main.finalGirlNum[this.whichGirl][0] = 1;
   this.time.events.add(Phaser.Timer.SECOND * 1,this.levelChooseNew, this);
   //this.levelChooseNew();
   },
levelChooseNew:function(){
   test = false;
   //Main.lipColor[0] = 0;
   //Main.lipColor[1] = 0;
   //Main.lipColor[2] = 0;
   Main.finalGirlVis[this.whichGirl] = true;
   game.state.start('g'+this.whichGirl+'level1');
   //game.state.start('g1level13');
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   
},
moreLink:function()
{
   
},
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}

Main.g1level1 = function(){}

Main.g1level1.prototype = {
    create:function(){
        this.levelGroupD = game.add.group();
        this.girlselectbg = game.add.sprite(0,0,'girlselectbg');
        this.levelGroupD.add(this.girlselectbg);
        
        this.girlselect1 = game.add.sprite(490.45,372.5,'girlselect1');
        this.girlselect1.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect1);
        
        this.girlselect2 = game.add.sprite(1056.55,384,'girlselect2');
        this.girlselect2.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect2);
        
        this.girlselect3 = game.add.sprite(754.2,888.55,'girlselect3');
        this.girlselect3.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect3);
        
        this.tick1 = game.add.sprite(635.2,157.1,'tick1');
        this.tick1.anchor.setTo(0.5);
        this.tick1.visible = Main.tickId[1];
        this.levelGroupD.add(this.tick1);
        
        this.tick3 = game.add.sprite(1243.7,198.05,'tick2');
        this.tick3.anchor.setTo(0.5);
        this.tick3.visible = Main.tickId[3];
        this.levelGroupD.add(this.tick3);
        
        this.tick2 = game.add.sprite(938.4,685.5,'tick3');
        this.tick2.anchor.setTo(0.5);
        this.tick2.visible = Main.tickId[2];
        this.levelGroupD.add(this.tick2);
        
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(489.4,599.15,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(538.75,575.15,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(530.9,614.45,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(571.85,608.25,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(528.6,650.3,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(778.5,605.25,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(845.25,578.15,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(824.3,615.45,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(802.3,650,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(860.05,632.45,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
         
         this.girl1mustache = game.add.sprite(670.25,675.45,'girl1mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputDown.add(this.pickTool, this);
         this.tool1.events.onInputUp.add(this.leaveTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         
         this.hint = game.add.sprite(2000,420,'hint1');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         //this['padtick'+i].visible = Main.padtickPosVisible[i];
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag1');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            if (test == false) {
                test = true;
                this.levelGroup.y = -1700;
            
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
            }
game.time.events.loop(3000, this.eyeloop, this);

},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.005;
        
   },
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    this.pad.inputEnabled = false;
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.movedX = true;
    this.movedX2 = false;
},
leaveTool:function()
{
   this.dragflag = false;
   this.movedX = true;
   this.movedX2 = false;
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
      
      if ((this.dragItem.y>600) && (this.dragItem.y<750)) {
         if ((this.dragItem.x>500) && (this.dragItem.x<650) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>650) && (this.dragItem.x<800) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
      //sprite.x = game.input.activePointer.x;
      //sprite.y = game.input.activePointer.y+30;
   }
   
   
   if (this.applyflag) {
      if (this.applyItem.alpha >= 1) {
            this.meterFill.y = 400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false
            
            Main.padtickPosVisible[1] = true;
            this.levelChange = true;
            this.referCheckList();
            this.levelJump();
        }
   }
   
   
   
   
   
},
levelJump:function(){
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   },
nextLevel:function(){
game.state.start('g1level2');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level2 = function(){}

Main.g1level2.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(489.4,599.15,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(538.75,575.15,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(530.9,614.45,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(571.85,608.25,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(528.6,650.3,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(778.5,605.25,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(845.25,578.15,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(824.3,615.45,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(802.3,650,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(860.05,632.45,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
         
         this.girl1mustache = game.add.sprite(670.25,675.45,'girl1mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint2');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 1;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag2');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(550,640);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 70);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(3000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.x = 671.7;
   this.dragItem.y = 659.15;
   this.dragItem.scale.setTo(0, 1);
   game.add.tween(this.dragItem.scale).to({x:1}, 1000, 'Linear', true).onComplete.add(this.bringTimer, this);
   this.rect0.kill();
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   
   Main.padtickPosVisible[2] = true;
    this.referCheckList();
    game.add.tween(this.dragItem).to({alpha:0}, 1000, 'Linear', true).onComplete.add(this.nextLevel, this);
   //this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
},

update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
   }
},
nextLevel:function(){
game.state.start('g1level3');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level3 = function(){}

Main.g1level3.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.girlGroup.add(this.pimplemarker);
         this.pimple1 = game.add.sprite(489.4,599.15,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(538.75,575.15,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(530.9,614.45,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(571.85,608.25,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(528.6,650.3,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(778.5,605.25,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(845.25,578.15,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(824.3,615.45,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(802.3,650,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(860.05,632.45,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
         
         this.girl1mustache = game.add.sprite(670.25,675.45,'girl1mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girl1mustache.visible = false;
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint3');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag3');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(550,640);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 70);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      for (var i=1; i<=10; i++) {
      this['rect'+i] = game.add.graphics(this['pimple'+i].x-15,this['pimple'+i].y-15);
      this['rect'+i].anchor.setTo(0.5);
      this['rect'+i].beginFill(0x000000, 0);
      this['rect'+i].drawRect(0, 0, 30, 30);
      this['rect'+i].alpha = 0;
      this['rect'+i].id = i;
      this.levelGroup.add(this['rect'+i]);
     }
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=10; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pimpleCount = 0;
    }
},
removeItem:function(evt){
   if (this.pimpleCount<10) {
    this.pimpleCount++;
    this['pimple'+evt.id].kill();
    this['rect'+evt.id].kill();
    if (this.pimpleCount == 10) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[3] = true;
        this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    }
   }
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 340;
      this.dragItem.x = game.input.activePointer.x+25;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g1level4');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level4 = function(){}

Main.g1level4.prototype = {
    create:function(){
      
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
         
         this.girl1mustache = game.add.sprite(670.25,675.45,'girl1mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girl1mustache.visible = false;
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         
         this.hint = game.add.sprite(2000,420,'hint4');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
    
    
    
         

         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
game.time.events.loop(4000, this.eyeloop, this);            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
    this.movedX2 = true;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
         
    
    
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.pimplemarker.alpha -= 0.005;
   this.meterFill.y -=1.005;
},

activateDrag2:function(){
   
   },
deactivateDrag2:function(){
   
   },
dragUpdate2:function(){
   this.pimplemarker2.alpha -= 0.005;
   this.meterFill.y -=1.005;
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>630) && (this.dragItem.y<800)) {
         if ((this.dragItem.x>450) && (this.dragItem.x<600) && (this.movedX)) {
            this.movedX = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX2 = true;
            //game.add.tween(this.meterFill).to({y:this.meterFill.y-22}, 100, 'Linear', true);
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>700) && (this.dragItem.x<800) && (this.movedX2)) {
            this.movedX2 = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX = true;
            //game.add.tween(this.meterFill).to({y:this.meterFill.y-22}, 100, 'Linear', true);
            this.meterFill.y -=22.2;
         }
      }
   
   if (this.applyflag) {
      if (this.pimplemarker.alpha <= 0) {
            this.pimplemarker.alpha = 0;
            this.applyflag = false;
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
               this.meterFill.y = 400;
               this.applyflag = false;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
            
        }
   }
   
   if (this.applyflag2) {
      if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
               this.meterFill.y = 400;
               this.applyflag2 = false;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
            
        }
   }
        
   
   
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

},
nextLevel:function(){
game.state.start('g1level5');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level5 = function(){}

Main.g1level5.prototype = {
    create:function(){
      
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         
         
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         
         this.hint = game.add.sprite(2000,420,'hint5');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag5');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.moistering1.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x+200;
      this.dragItem.y = game.input.activePointer.y+10;
   }
   if ((this.dragItem.y>700) && (this.dragItem.y<800)) {
         if ((this.dragItem.x>800) && (this.dragItem.x<850) && (this.movedX)) {
            this.movedX = false;
            this.moistering1.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>900) && (this.dragItem.x<1000) && (this.movedX2)) {
            this.movedX2 = false;
            this.moistering1.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
      if (this.moistering1.alpha <= 0) {
         this.meterFill.y = 400;
         this.applyflag = false;
            this.moistering1.alpha = 0;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelJump();
            Main.padtickPosVisible[5] = true;
            this.referCheckList();
        }
   }
},
levelJump:function(){
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   },
nextLevel:function(){
game.state.start('g1level6');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level6 = function(){}

Main.g1level6.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.anchor.setTo(0.5);
         this.moistering1.alpha = 0;
         this.girlGroup.add(this.moistering1);
         
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         
         
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint6');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(672.1,717,'apply6');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag6');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
activateDrag:function(){
  
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.005;
        
   },
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    this.pad.inputEnabled = false;
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true);
   game.add.tween(this.moistering1).to({alpha:1}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   Main.padtickPosVisible[6] = true;
    this.referCheckList();
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+70;
   }
   if ((this.dragItem.y>600) && (this.dragItem.y<800)) {
         if ((this.dragItem.x>500) && (this.dragItem.x<650) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>650) && (this.dragItem.x<850) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
      
        if (this.applyItem.alpha >= 1) {
         this.meterFill.y = 400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            this.bringTimer();
        }
   }
   
},
nextLevel:function(){
game.state.start('g1level7');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level7 = function(){}

Main.g1level7.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.pimplemarker.visible = false;
         this.girlGroup.add(this.pimplemarker);
         
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.pimplemarker2.visible = false;
         this.girlGroup.add(this.pimplemarker2);
         
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
         this.hair2 = game.add.sprite(659.25,377.7,'hair2');
         this.hair2.anchor.setTo(0.5);
         this.girlGroup.add(this.hair2);
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint7');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag7');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.girl1nose = game.add.sprite(668,571,'girl1nose');
         this.girl1nose.anchor.setTo(0.5);
         this.girl1nose.visible = false;
         this.levelGroup.add(this.girl1nose);
         
         this.rect0 = game.add.graphics(610,550);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 60, 100);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         
         this.rect1 = game.add.graphics(680,550);
         this.rect1.anchor.setTo(0.5);
         this.rect1.beginFill(0x000000, 0);
         this.rect1.drawRect(0, 0, 60, 100);
         this.rect1.alpha = 0;
         this.levelGroup.add(this.rect1);

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    
    this.rect1.inputEnabled = true;
    this.rect1.input.useHandCursor = true;
    this.rect1.events.onInputDown.add(this.startApply2, this);
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
startApply:function(){
 this.applyflag = true;
 this.dragflag = false;
 this.rect0.visible = false;
 this.rect1.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect0.x+25;
 this.dragItem.y = this.rect0.y+150;
},
startApply2:function(){
 this.applyflag2 = true;
 this.dragflag = false;
 this.rect1.visible = false;
 this.rect0.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect1.x+15;
 this.dragItem.y = this.rect1.y+150;
},

update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   
   if (this.applyflag) {
        this.meterFill.y -=2.12;
        this.pimplemarker.alpha -= 0.010;
        if (this.pimplemarker.alpha <= 0) {
            this.applyflag = false;
            this.pimplemarker.alpha = 0;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect1.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
            
        }
   }
   
   if (this.applyflag2) {
        this.pimplemarker2.alpha -= 0.010;
        this.meterFill.y -=2.12;
        if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect0.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
        }
   }
},
levelTimer:function(){
    Main.padtickPosVisible[7] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g1level8');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level8 = function(){}

Main.g1level8.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         
         
         for (var i=1; i<=9; i++) {
            this['hair'+i] = game.add.sprite(659.25,377.7,'hair'+i);
            this['hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['hair'+i]);
         }
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint8');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag8new');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      this.rectGroup = game.add.group();
      for (var i=1; i<=9; i++) {
      this['rect'+i] = game.add.graphics(Main.hairPosX[i],Main.hairPosY[i]);
      this['rect'+i].anchor.setTo(0.5);
      this['rect'+i].beginFill(0x000000, 0);
      this['rect'+i].drawRect(0, 0, 50, 30);
      this['rect'+i].alpha = 0;
      this['rect'+i].id = i;
      this.rectGroup.add(this['rect'+i]);
     }
     this.levelGroup.add(this.rectGroup);
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.rectGroup.x = this.girlGroup.x-300;
    this.rectGroup.y = this.girlGroup.y;
    this.rectGroup.scale.setTo(1.5);
    game.add.tween(this.girlGroup.scale).to({x:1.5, y:1.5}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:-300}, 700, Phaser.Easing.Quadratic.Out, true);
    this.tool4.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=9; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    this['rect'+i].events.onInputDown.add(this.cutDown, this);
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pimpleCount = 0;
    }
    this.girl1.inputEnabled = true;
   this.girl1.input.useHandCursor = true;
   this.girl1.events.onInputDown.add(this.cutDown, this);
   this.girl1.events.onInputUp.add(this.cutUp, this);
},
cutDown:function(){
   this.dragItem.frame = 2;
   },
cutUp:function(){
   this.dragItem.frame = 0;
},
removeItem:function(evt){
   if (this.pimpleCount<9) {
    this.pimpleCount++;
    this['hair'+evt.id].kill();
    this['rect'+evt.id].kill();
    this.dragItem.frame = 0;
    if (this.pimpleCount == 9) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[8] = true;
    this.referCheckList();
        game.add.tween(this.girlGroup.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeTool, this);
    }
   }
   
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

},
update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 300;
      this.dragItem.x = game.input.activePointer.x+90;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
nextLevel:function(){
game.state.start('g1level9');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level9 = function(){}

Main.g1level9.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.waterdrops = game.add.sprite(660,350,'waterdrops');
        this.waterdrops.animations.add('fall');
        this.waterdrops.play('fall', 24, true);
         this.waterdrops.visible = false;
         this.waterdrops.anchor.setTo(0.5);
         this.girlGroup.add(this.waterdrops);
        this.girl1lip = game.add.sprite(676.2,716.2,'girl1lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girl1biglip.alpha = 0;
         this.girlGroup.add(this.girl1biglip);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint9');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();

         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(662.3,720.45,'g1mouthwithjar');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.visible = false;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag9');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(560,670);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 90);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.visible = false;
    this.applyItem.visible = true;
    this.girl1lip.visible = false;
    this.moistering1.visible = false;
   this.bringTimer();
   this.rect0.kill();
   this.waterdrops.visible = true;
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true);
   Main.padtickPosVisible[9] = true;
    this.referCheckList();
   game.add.tween(this.girl1biglip).to({alpha:1}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
},
nextLevel:function(){
game.state.start('g1level10');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level10 = function(){}

Main.g1level10.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.waterdrops = game.add.sprite(660,350,'waterdrops');
        this.waterdrops.animations.add('fall');
        this.waterdrops.play('fall', 24, true);
         this.waterdrops.anchor.setTo(0.5);
         this.girlGroup.add(this.waterdrops);
         
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint10');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
activateDrag:function(){
  
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.waterdrops.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>350) && (this.dragItem.y<500)) {
         if ((this.dragItem.x>550) && (this.dragItem.x<650) && (this.movedX)) {
            this.movedX = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>700) && (this.dragItem.x<800) && (this.movedX2)) {
            this.movedX2 = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        if (this.waterdrops.alpha <= 0) {
         this.meterFill.y =400;
            this.waterdrops.alpha = 0;
            this.applyflag = false;
           
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelTimer();
        }
   }
   
},
levelTimer:function(){
    Main.padtickPosVisible[10] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g1level11');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level11 = function(){}

Main.g1level11.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint11');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(746,734,'marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag11');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(560,670);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.kill();
   this.rect0.kill();
   this.applyItem.alpha = 1;
   this.runCount = 1;
   this.runApplyItem();
},
runApplyItem:function(){
   if (this.runCount < 82) {
      this.runCount++;
      this.applyGroup.removeAll();
         this.applyItem = game.add.sprite(746,734,'marker'+this.runCount);
         this.applyItem.anchor.setTo(0.5);
         this.applyGroup.add(this.applyItem);
         this.time.events.add(Phaser.Timer.SECOND * 0.01,this.runApplyItem, this);
      if (this.runCount == 82) {
         Main.padtickPosVisible[11] = true;
    this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   game.add.tween(this.dragItem).to({alpha:0}, 700, 'Linear', true);
},
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 300;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+100;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g1level12');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g1level12 = function(){}

Main.g1level12.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.once = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint12');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(746,734,'marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         this.colorPickerGroup  = game.add.group();
         this.colorPickerGroup.scale.setTo(0.9);
         this.colorPickerGroup.x = 1670;
         this.colorPickerGroup.y = 580;
         this.colorPicker = game.add.sprite(1670,580,'lipstickchooser');
         this.colorPicker.scale.setTo(0.9);
         this.levelGroup.add(this.colorPicker);
         this.colorPicker.inputEnabled = true;
         this.colorPicker.input.useHandCursor = true;
         this.colorPicker.events.onInputOver.add(this.chooserOver, this);
         this.colorPicker.events.onInputOut.add(this.chooserOut, this);
         
         this.pick0 = game.add.graphics(33,40);
         this.pick0.anchor.setTo(0.5);
         this.pick0.beginFill(0x0000ff, 0);
         this.pick0.drawRect(0, 0, 40, 130);
         this.pick0.id = 0;
         this.colorPickerGroup.add(this.pick0);
         
         this.pick1 = game.add.graphics(83,40);
         this.pick1.anchor.setTo(0.5);
         this.pick1.beginFill(0x0000ff, 0);
         this.pick1.drawRect(0, 0, 40, 130);
         this.pick1.id = 1;
         this.colorPickerGroup.add(this.pick1);
         
         this.pick2 = game.add.graphics(132,40);
         this.pick2.anchor.setTo(0.5);
         this.pick2.beginFill(0x0000ff, 0);
         this.pick2.drawRect(0, 0, 40, 130);
         this.pick2.id = 2;
         this.colorPickerGroup.add(this.pick2);
         
         this.pick3 = game.add.graphics(180,40);
         this.pick3.anchor.setTo(0.5);
         this.pick3.beginFill(0x0000ff, 0);
         this.pick3.drawRect(0, 0, 40, 130);
         this.pick3.id = 3;
         this.colorPickerGroup.add(this.pick3);
         
         this.pick4 = game.add.graphics(225,40);
         this.pick4.anchor.setTo(0.5);
         this.pick4.beginFill(0x0000ff, 0);
         this.pick4.drawRect(0, 0, 40, 130);
         this.pick4.id = 4;
         this.colorPickerGroup.add(this.pick4);
         
         this.pick5 = game.add.graphics(273,40);
         this.pick5.anchor.setTo(0.5);
         this.pick5.beginFill(0x0000ff, 0);
         this.pick5.drawRect(0, 0, 40, 130);
         this.pick5.id = 5;
         this.colorPickerGroup.add(this.pick5);
         
         
         this.pick6 = game.add.graphics(35,180);
         this.pick6.anchor.setTo(0.5);
         this.pick6.beginFill(0x0000ff, 0);
         this.pick6.drawRect(0, 0, 40, 130);
         this.pick6.id = 6;
         this.colorPickerGroup.add(this.pick6);
         
         this.pick7 = game.add.graphics(86,180);
         this.pick7.anchor.setTo(0.5);
         this.pick7.beginFill(0x0000ff, 0);
         this.pick7.drawRect(0, 0, 40, 130);
         this.pick7.id = 7;
         this.colorPickerGroup.add(this.pick7);
         
         this.pick8 = game.add.graphics(133,180);
         this.pick8.anchor.setTo(0.5);
         this.pick8.beginFill(0x0000ff, 0);
         this.pick8.drawRect(0, 0, 40, 130);
         this.pick8.id = 8;
         this.colorPickerGroup.add(this.pick8);
         
         this.pick9 = game.add.graphics(180,180);
         this.pick9.anchor.setTo(0.5);
         this.pick9.beginFill(0x0000ff, 0);
         this.pick9.drawRect(0, 0, 40, 130);
         this.pick9.id = 9;
         this.colorPickerGroup.add(this.pick9);
         
         this.pick10 = game.add.graphics(225,180);
         this.pick10.anchor.setTo(0.5);
         this.pick10.beginFill(0x0000ff, 0);
         this.pick10.drawRect(0, 0, 40, 130);
         this.pick10.id = 10;
         this.colorPickerGroup.add(this.pick10);
         
         this.pick11 = game.add.graphics(273,180);
         this.pick11.anchor.setTo(0.5);
         this.pick11.beginFill(0x0000ff, 0);
         this.pick11.drawRect(0, 0, 40, 130);
         this.pick11.id = 11;
         this.colorPickerGroup.add(this.pick11);
         
         for (var i=0; i<=11; i++) {
            this['pick'+i].alpha = 0;
            this['pick'+i].inputEnabled = true;
            this['pick'+i].input.useHandCursor = true;
            this['pick'+i].events.onInputUp.add(this.chooseLipstick, this);
            this['pick'+i].events.onInputOver.add(this.chooserOver, this);
            this['pick'+i].events.onInputOut.add(this.chooserOut, this);
         }
         
         
         
         
         
         
         
         this.dragItem = game.add.sprite(-500,0,'drag12');
         this.dragItem.frame = 0;
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         this.levelGroup.add(this.colorPickerGroup);
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(560,670);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            
            this.nxtbtn = game.add.sprite(-200,800,'nxtbtn');
            this.nxtbtn.anchor.setTo(0.5);
            this.nxtbtn.inputEnabled = true;
            this.nxtbtn.input.useHandCursor = true;
            this.nxtbtn.events.onInputUp.add(this.closeTool, this);
            this.nxtbtn.events.onInputOver.add(this.btnOver, this);
            this.nxtbtn.events.onInputOver.add(this.chooserOver, this);
            this.nxtbtn.events.onInputOut.add(this.chooserOut, this);
            
            game.time.events.loop(4000, this.eyeloop, this);
            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
chooserOver:function(){this.dragItem.visible = false;},
chooserOut:function(){this.dragItem.visible = true;},
chooseLipstick:function(evt){
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.dragItem.frame = evt.id;
    Main.lipColor[0] = evt.id+1;
    },
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    
    this.pad.inputEnabled = false;
    game.add.tween(this.colorPicker).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.colorPickerGroup).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(items){
                effectVar = game.add.sprite(items.x+70,items.y-items.width/3,'effects'); 
               effectVar.anchor.setTo(0.5);
               effectVar.scale.setTo(3);		
		effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
               effectVar.animations.play('glitter', 30, false);
   this.girl1biglip.frame = Main.lipColor[0];
   Main.padtickPosVisible[12] = true;
    this.referCheckList();
    if (this.once) {
        this.once = false;
        game.add.tween(this.nxtbtn).to({x:200}, 700, Phaser.Easing.Exponential.Out, true)
    }
   //this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
},
removeGlitter:function(evt)
         {
            evt.kill();
         },
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 310;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+70;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

},
nextLevel:function(){
game.state.start('g1level13');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    effectVar = game.add.sprite(items.x,items.y-items.width/3,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
     effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
}
Main.g1level13 = function(){}

Main.g1level13.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        
        if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[2][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girleye2 = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye2.animations.add('blink2');
        this.girlGroup2.add(this.girleye2);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
        
        
        this.girlGroup3 = game.add.group();
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup3.add(this.girl1);
        this.girleye3 = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye3.animations.add('blink3');
        this.girlGroup3.add(this.girleye3);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup3.add(this.girl1biglip);
         
         this.levelGroup.add(this.girlGroup2);
         this.levelGroup.add(this.girlGroup3);
         this.levelGroup.add(this.girlGroup);
         
         
         
      this.girlGroup.x = 350;
      this.girlGroup.y = 500;
      this.girlGroup.scale.setTo(0.6);
      
      this.girlGroup2.x = -200;
      this.girlGroup2.y = 500;
      this.girlGroup2.scale.setTo(0.6);
      
      this.girlGroup3.x = 770;
      this.girlGroup3.y = 480;
      this.girlGroup3.scale.setTo(0.6);
      game.time.events.loop(4000, this.eyeloop, this);
        }
        else if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[2][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup2.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye2 = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye2.animations.add('blink2');
        this.girlGroup.add(this.girleye2);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      game.time.events.loop(4000, this.eyeloop2, this);
        }
        else if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup2.add(this.girleye);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye2 = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye2.animations.add('blink2');
        this.girlGroup.add(this.girleye2);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      game.time.events.loop(4000, this.eyeloop3, this);
        }
        else if (Main.finalGirlNum[1][0] == 1) {
        this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(420.1,361.55,'girl1eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup.x = 180;
      this.girlGroup.y = 200;
      this.girlGroup.scale.setTo(0.9);
      game.time.events.loop(4000, this.eyeloop4, this);
        }
        
            
            //DDDD
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            this.playagain = game.add.sprite(450,100,'playagain');
            this.playagain.anchor.setTo(0.5);
            
            this.menubtn = game.add.sprite(770,100,'menubtn');
            this.menubtn.anchor.setTo(0.5);
            
            
            this.playagain.scale.setTo(0);
            this.playagain.inputEnabled = true;
            this.playagain.input.useHandCursor = true;
            this.playagain.events.onInputUp.add(this.playAgain, this);
            this.playagain.events.onInputOver.add(this.btnOver, this);
            this.playagain.events.onInputOut.add(this.btnOut, this);
            
            this.menubtn.scale.setTo(0);
            this.menubtn.inputEnabled = true;
            this.menubtn.input.useHandCursor = true;
            this.menubtn.events.onInputUp.add(this.menuFun, this);
            this.menubtn.events.onInputOver.add(this.btnOver, this);
            this.menubtn.events.onInputOut.add(this.btnOut, this);
            
            
            
            game.add.tween(this.playagain.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.menubtn.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            

            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
   this.girleye2.play('blink2', 10, false);
   this.girleye3.play('blink3', 10, false);
},
eyeloop2:function(){
   this.girleye.play('blink', 10, false);
   this.girleye2.play('blink2', 10, false);
},
eyeloop3:function(){
   this.girleye.play('blink', 10, false);
   this.girleye2.play('blink2', 10, false);
},
eyeloop4:function(){
   this.girleye.play('blink', 10, false);
},



openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
playAgain:function(){
game.state.start('g1level1');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
menuFun:function(){
game.state.start('menu');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
moreGames:function(){

},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    items.scale.setTo(0.9);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
btnOut:function(items){
    items.scale.setTo(0.8);
}
}
Main.g2level1 = function(){}

Main.g2level1.prototype = {
    create:function(){
        this.levelGroupD = game.add.group();
        this.girlselectbg = game.add.sprite(0,0,'girlselectbg');
        this.levelGroupD.add(this.girlselectbg);
        
        this.girlselect1 = game.add.sprite(490.45,372.5,'girlselect1');
        this.girlselect1.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect1);
        
        
        this.girlselect2 = game.add.sprite(1056.55,384,'girlselect2');
        this.girlselect2.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect2);
        
        this.girlselect3 = game.add.sprite(754.2,888.55,'girlselect3');
        this.girlselect3.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect3);
        
        this.tick1 = game.add.sprite(635.2,157.1,'tick1');
        this.tick1.anchor.setTo(0.5);
        this.tick1.visible = Main.tickId[1];
        this.levelGroupD.add(this.tick1);
        
        this.tick3 = game.add.sprite(1243.7,198.05,'tick2');
        this.tick3.anchor.setTo(0.5);
        this.tick3.visible = Main.tickId[3];
        this.levelGroupD.add(this.tick3);
        
        this.tick2 = game.add.sprite(938.4,685.5,'tick3');
        this.tick2.anchor.setTo(0.5);
        this.tick2.visible = Main.tickId[2];
        this.levelGroupD.add(this.tick2);
        
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.pimplemarker = game.add.sprite(746.45,517.7,'pimplemarker3');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(586.4,506,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(635.75,482,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(627.9,521.3,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(668.85,515.1,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(625.6,557.15,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(824,504.1,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(890.75,477,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(869.8,514.3,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(847.8,548.85,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(905.55,531.3,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
         
         this.girl1mustache = game.add.sprite(752.8,574.4,'girl2mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint1');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         //this['padtick'+i].visible = Main.padtickPosVisible[i];
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(750.65,573.05,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag1');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            if (test == false) {
                test = true;
                this.levelGroup.y = -1700;
            
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},

removeGlitter:function(evt){
      evt.kill(); 
},

pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.12;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
   }
   
   if ((this.dragItem.y>600) && (this.dragItem.y<650)) {
         if ((this.dragItem.x>650) && (this.dragItem.x<730) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>780) && (this.dragItem.x<850) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
      
   if (this.applyflag) {
        if (this.applyItem.alpha >= 1) {
            this.meterFill.y = 400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false
            
            Main.padtickPosVisible[1] = true;
            this.levelChange = true;
            this.referCheckList();
            
        }
   }
   
   if (!this.applyflag && this.levelChange) {
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   }
},
nextLevel:function(){
game.state.start('g2level2');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level2 = function(){}

Main.g2level2.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.pimplemarker = game.add.sprite(746.45,517.7,'pimplemarker3');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(586.4,506,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(635.75,482,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(627.9,521.3,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(668.85,515.1,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(625.6,557.15,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(824,504.1,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(890.75,477,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(869.8,514.3,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(847.8,548.85,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(905.55,531.3,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
         
         this.girl1mustache = game.add.sprite(752.8,574.4,'girl2mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint2');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(750.65,573.05,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 1;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag2');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(640,555);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 50);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.x = 762.8;
   this.dragItem.y = 569.25;
   this.dragItem.scale.setTo(0, 1);
   game.add.tween(this.dragItem.scale).to({x:1}, 1000, 'Linear', true).onComplete.add(this.bringTimer, this);
   this.rect0.kill();
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   Main.padtickPosVisible[2] = true;
    this.referCheckList();
   game.add.tween(this.dragItem).to({alpha:0}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
   }
},
nextLevel:function(){
game.state.start('g2level3');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level3 = function(){}

Main.g2level3.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.pimplemarker = game.add.sprite(746.45,517.7,'pimplemarker3');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(586.4,506,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(635.75,482,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(627.9,521.3,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(668.85,515.1,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(625.6,557.15,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(824,504.1,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(890.75,477,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(869.8,514.3,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(847.8,548.85,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(905.55,531.3,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
         
         this.girl1mustache = game.add.sprite(752.8,574.4,'girl2mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girl1mustache.visible = false;
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint3');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag3');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(550,640);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 70);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      for (var i=1; i<=10; i++) {
      this['rect'+i] = game.add.graphics(this['pimple'+i].x-15,this['pimple'+i].y-15);
      this['rect'+i].anchor.setTo(0.5);
      this['rect'+i].beginFill(0x000000, 0);
      this['rect'+i].drawRect(0, 0, 30, 30);
      this['rect'+i].alpha = 0;
      this['rect'+i].id = i;
      this.levelGroup.add(this['rect'+i]);
     }
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=10; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    this.pimpleCount = 0;
    }
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
removeItem:function(evt){
   if (this.pimpleCount<10) {
    this.pimpleCount++;
    this['pimple'+evt.id].kill();
    this['rect'+evt.id].kill();
    if (this.pimpleCount == 10) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[3] = true;
        this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    }
   }
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 340;
      this.dragItem.x = game.input.activePointer.x+25;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g2level4');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level4 = function(){}

Main.g2level4.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = true;
        this.levelChange = false;
       this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.pimplemarker = game.add.sprite(746.45,517.7,'pimplemarker3');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint4');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
    
    
    

         
    

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.pimplemarker.alpha -= 0.005;
        this.meterFill.y -=1.005;
        
   },
activateDrag2:function(){
   
   },
deactivateDrag2:function(){
   
   },
dragUpdate2:function(){
   this.pimplemarker2.alpha -= 0.005;
   this.meterFill.y -=1.005;
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
     this.movedX = true;
    this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>550) && (this.dragItem.y<700)) {
         if ((this.dragItem.x>600) && (this.dragItem.x<750) && (this.movedX)) {
            this.movedX = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>750) && (this.dragItem.x<850) && (this.movedX2)) {
            this.movedX2 = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        if (this.pimplemarker.alpha <= 0) {
            this.pimplemarker.alpha = 0;
            this.applyflag = false;
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
                 this.meterFill.y =400;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
            
        }
   }
   
   
   if (this.applyflag2) {
        
        if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
                 this.meterFill.y =400;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
            
        }
   }
   
   
   
   
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

    },
nextLevel:function(){
game.state.start('g2level5');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level5 = function(){}

Main.g2level5.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.anchor.setTo(0.5);
         this.moistering1.visible = false;
         this.girlGroup.add(this.moistering1);
         
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
         
         
         
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint5');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag5');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},

bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},

activateDrag:function(){
  
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.moistering1.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x+200;
      this.dragItem.y = game.input.activePointer.y+10;
   }
   if ((this.dragItem.y>600) && (this.dragItem.y<700)) {
         if ((this.dragItem.x>900) && (this.dragItem.x<1000) && (this.movedX)) {
            this.movedX = false;
            this.moistering1.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>1000) && (this.dragItem.x<1100) && (this.movedX2)) {
            this.movedX2 = false;
            this.moistering1.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        if (this.moistering1.alpha <= 0) {
            this.moistering1.alpha = 0;
            this.meterFill.y = 400;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            Main.padtickPosVisible[5] = true;
            this.referCheckList();
            
        }
   }
   
   if (!this.applyflag && this.levelChange) {
    
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   }
},
nextLevel:function(){
game.state.start('g2level6');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level6 = function(){}

Main.g2level6.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint6');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(752.15,622,'apply6_2');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag6');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.005;
        
   },
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   Main.padtickPosVisible[6] = true;
    this.referCheckList();
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+70;
   }
   if ((this.dragItem.y>650) && (this.dragItem.y<750)) {
         if ((this.dragItem.x>650) && (this.dragItem.x<750) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>750) && (this.dragItem.x<850) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        if (this.applyItem.alpha >= 1) {
            this.meterFill.y =400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
   
            this.bringTimer();
        }
   }
   
},
nextLevel:function(){
game.state.start('g2level7');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level7 = function(){}

Main.g2level7.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.pimplemarker = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker.anchor.setTo(0.5);
         this.pimplemarker.visible = false;
         this.girlGroup.add(this.pimplemarker);
        this.pimplemarker2 = game.add.sprite(746.45,517.7,'pimplemarker4');
         this.pimplemarker2.anchor.setTo(0.5);
         this.pimplemarker2.visible = false;
         this.girlGroup.add(this.pimplemarker2);         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint7');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag7');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.girl1nose = game.add.sprite(750.75,505.15,'girl2nose');
         this.girl1nose.anchor.setTo(0.5);
         this.girl1nose.visible = false;
         this.levelGroup.add(this.girl1nose);
         
         this.rect0 = game.add.graphics(700,460);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 50, 100);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         
         this.rect1 = game.add.graphics(760,460);
         this.rect1.anchor.setTo(0.5);
         this.rect1.beginFill(0x000000, 0);
         this.rect1.drawRect(0, 0, 45, 100);
         this.rect1.alpha = 0;
         this.levelGroup.add(this.rect1);

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    
    this.rect1.inputEnabled = true;
    this.rect1.input.useHandCursor = true;
    this.rect1.events.onInputDown.add(this.startApply2, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true); 
},
startApply:function(){
 this.applyflag = true;
 this.dragflag = false;
 this.rect0.visible = false;
 this.rect1.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect0.x+25;
 this.dragItem.y = this.rect0.y+150;
},
startApply2:function(){
 this.applyflag2 = true;
 this.dragflag = false;
 this.rect1.visible = false;
 this.rect0.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect1.x+15;
 this.dragItem.y = this.rect1.y+160;
},

update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   
   if (this.applyflag) {
        this.meterFill.y -=2.12;
        this.pimplemarker.alpha -= 0.010;
        if (this.pimplemarker.alpha <= 0) {
            this.applyflag = false;
            this.pimplemarker.alpha = 0;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect1.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
            
        }
   }
   
   if (this.applyflag2) {
        this.pimplemarker2.alpha -= 0.010;
        this.meterFill.y -=2.12;
        if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect0.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
        }
   }
},
levelTimer:function(){
    Main.padtickPosVisible[7] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g2level8');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level8 = function(){}

Main.g2level8.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         
         
         for (var i=1; i<=8; i++) {
            this['g2hair'+i] = game.add.sprite(Main.hairPos2X[i],Main.hairPos2Y[i],'g2hair'+i);
            this['g2hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g2hair'+i]);
         }
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint8');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag8new');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      this.rectGroup = game.add.group();
      this.rect1 = game.add.graphics(600,500);
     this.rect1.anchor.setTo(0.5);
     this.rect1.beginFill(0x000000, 0);
     this.rect1.drawRect(0, 0, 50, 50);
     this.rect1.alpha = 0;
     this.rect1.id = 1;
      this.rectGroup.add(this.rect1);
      
     this.rect2 = game.add.graphics(625,500);
     this.rect2.anchor.setTo(0.5);
     this.rect2.beginFill(0x000000, 0);
     this.rect2.drawRect(0, 0, 50, 50);
     this.rect2.alpha = 0;
     this.rect2.id = 2;
      this.rectGroup.add(this.rect1);
      
     this.rect3 = game.add.graphics(670,510);
     this.rect3.anchor.setTo(0.5);
     this.rect3.beginFill(0x000000, 0);
     this.rect3.drawRect(0, 0, 50, 50);
     this.rect3.alpha = 0;
     this.rect3.id = 3;
      this.rectGroup.add(this.rect3);
     
     this.rect4 = game.add.graphics(720,530);
     this.rect4.anchor.setTo(0.5);
     this.rect4.beginFill(0x000000, 0);
     this.rect4.drawRect(0, 0, 50, 50);
     this.rect4.alpha = 0;
     this.rect4.id = 4;
     this.rectGroup.add(this.rect4);
     
     this.rect5 = game.add.graphics(900,550);
     this.rect5.anchor.setTo(0.5);
     this.rect5.beginFill(0x000000, 0);
     this.rect5.drawRect(0, 0, 50, 50);
     this.rect5.alpha = 0;
     this.rect5.id = 5;
     this.rectGroup.add(this.rect5);
     
     this.rect6 = game.add.graphics(930,540);
     this.rect6.anchor.setTo(0.5);
     this.rect6.beginFill(0x000000, 0);
     this.rect6.drawRect(0, 0, 50, 50);
     this.rect6.alpha = 0;
     this.rect6.id = 6;
     this.rectGroup.add(this.rect6);
     
     this.rect7 = game.add.graphics(970,530);
     this.rect7.anchor.setTo(0.5);
     this.rect7.beginFill(0x000000, 0);
     this.rect7.drawRect(0, 0, 60, 50);
     this.rect7.alpha = 0;
     this.rect7.id = 7;
     this.rectGroup.add(this.rect7);
     
     this.rect8 = game.add.graphics(1020,530);
     this.rect8.anchor.setTo(0.5);
     this.rect8.beginFill(0x000000, 0);
     this.rect8.drawRect(0, 0, 50, 50);
     this.rect8.alpha =0;
     this.rect8.id = 8;
     this.rectGroup.add(this.rect8);
     this.levelGroup.add(this.rectGroup);
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
game.time.events.loop(4000, this.eyeloop, this);            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    //this.rectGroup.x = this.girlGroup.x-300;
    //this.rectGroup.y = this.girlGroup.y-20;
    //this.rectGroup.scale.setTo(1.5);
    game.add.tween(this.girlGroup.scale).to({x:1.5, y:1.5}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:-300}, 700, Phaser.Easing.Quadratic.Out, true);
    this.tool4.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=8; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    this['rect'+i].events.onInputDown.add(this.cutDown, this);
    this.pimpleCount = 0;
    }
    this.girl1.inputEnabled = true;
   this.girl1.input.useHandCursor = true;
   this.girl1.events.onInputDown.add(this.cutDown, this);
   this.girl1.events.onInputUp.add(this.cutUp, this);
   
   game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
cutDown:function(){
   this.dragItem.frame = 2;
   },
cutUp:function(){
   this.dragItem.frame = 0;
   },
removeItem:function(evt){
   if (this.pimpleCount<8) {
    this.pimpleCount++;
    this['g2hair'+evt.id].kill();
    this['rect'+evt.id].kill();
    this.dragItem.frame = 0;
    if (this.pimpleCount == 8) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[8] = true;
    this.referCheckList();
        game.add.tween(this.girlGroup.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeTool, this);
    }
   }
   
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

    },
update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 300;
      this.dragItem.x = game.input.activePointer.x+90;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
nextLevel:function(){
game.state.start('g2level9');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level9 = function(){}

Main.g2level9.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(745.95,612.9,'girl2lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.alpha = 0;
         this.girl1biglip.anchor.setTo(0.5);
         
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint9');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();

         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(739.2,626.4,'g2mouthwithjar');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.visible = false;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag9');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(650,580);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 200, 90);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
game.time.events.loop(4000, this.eyeloop, this);



},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},

bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.visible = false;
    this.applyItem.visible = true;
    this.girl1lip.visible = false;
   this.bringTimer();
   this.rect0.kill();
   this.waterdrops.visible = true;
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true);
   Main.padtickPosVisible[9] = true;
    this.referCheckList();
   game.add.tween(this.girl1biglip).to({alpha:1}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
},
nextLevel:function(){
game.state.start('g2level10');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level10 = function(){}

Main.g2level10.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        //this.girlGroup.y = 17;
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
        this.girl1lip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.waterdrops = game.add.sprite(750,300,'waterdrops');
        this.waterdrops.animations.add('fall');
        this.waterdrops.play('fall', 24, true);
         this.waterdrops.anchor.setTo(0.5);
         this.girlGroup.add(this.waterdrops);
         
         
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint10');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.waterdrops.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>320) && (this.dragItem.y<500)) {
         if ((this.dragItem.x>650) && (this.dragItem.x<750) && (this.movedX)) {
            this.movedX = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>750) && (this.dragItem.x<900) && (this.movedX2)) {
            this.movedX2 = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        if (this.waterdrops.alpha <= 0) {
         this.meterFill.y = 400;
            this.waterdrops.alpha = 0;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelTimer();
        }
   }
   
},
levelTimer:function(){
    Main.padtickPosVisible[10] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g2level11');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level11 = function(){}

Main.g2level11.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint11');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(765,624,'g2marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag11');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(650,575);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 200, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
this.padclosebtn.visible = true;
},

closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true); 
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.kill();
   this.rect0.kill();
   this.applyItem.alpha = 1;
   this.runCount = 1;
   this.runApplyItem();
},
runApplyItem:function(){
   if (this.runCount < 82) {
      this.runCount++;
      this.applyGroup.removeAll();
         this.applyItem = game.add.sprite(765,624,'g2marker'+this.runCount);
         this.applyItem.anchor.setTo(0.5);
         this.applyGroup.add(this.applyItem);
         this.time.events.add(Phaser.Timer.SECOND * 0.01,this.runApplyItem, this);
      if (this.runCount == 82) {
         Main.padtickPosVisible[11] = true;
    this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   game.add.tween(this.dragItem).to({alpha:0}, 700, 'Linear', true);
},
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 300;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+100;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g2level12');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
}
}
Main.g2level12 = function(){}

Main.g2level12.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.once = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(587.75,368.05,'girl2eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint12');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(746,734,'marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         this.colorPickerGroup  = game.add.group();
         this.colorPickerGroup.scale.setTo(0.9);
         this.colorPickerGroup.x = 1670;
         this.colorPickerGroup.y = 580;
         this.colorPicker = game.add.sprite(1670,580,'lipstickchooser');
         this.colorPicker.scale.setTo(0.9);
         this.levelGroup.add(this.colorPicker);
         this.colorPicker.inputEnabled = true;
         this.colorPicker.input.useHandCursor = true;
         this.colorPicker.events.onInputOver.add(this.chooserOver, this);
         this.colorPicker.events.onInputOut.add(this.chooserOut, this);
         
         this.pick0 = game.add.graphics(33,40);
         this.pick0.anchor.setTo(0.5);
         this.pick0.beginFill(0x0000ff, 0);
         this.pick0.drawRect(0, 0, 40, 130);
         this.pick0.id = 0;
         this.colorPickerGroup.add(this.pick0);
         
         this.pick1 = game.add.graphics(83,40);
         this.pick1.anchor.setTo(0.5);
         this.pick1.beginFill(0x0000ff, 0);
         this.pick1.drawRect(0, 0, 40, 130);
         this.pick1.id = 1;
         this.colorPickerGroup.add(this.pick1);
         
         this.pick2 = game.add.graphics(132,40);
         this.pick2.anchor.setTo(0.5);
         this.pick2.beginFill(0x0000ff, 0);
         this.pick2.drawRect(0, 0, 40, 130);
         this.pick2.id = 2;
         this.colorPickerGroup.add(this.pick2);
         
         this.pick3 = game.add.graphics(180,40);
         this.pick3.anchor.setTo(0.5);
         this.pick3.beginFill(0x0000ff, 0);
         this.pick3.drawRect(0, 0, 40, 130);
         this.pick3.id = 3;
         this.colorPickerGroup.add(this.pick3);
         
         this.pick4 = game.add.graphics(225,40);
         this.pick4.anchor.setTo(0.5);
         this.pick4.beginFill(0x0000ff, 0);
         this.pick4.drawRect(0, 0, 40, 130);
         this.pick4.id = 4;
         this.colorPickerGroup.add(this.pick4);
         
         this.pick5 = game.add.graphics(273,40);
         this.pick5.anchor.setTo(0.5);
         this.pick5.beginFill(0x0000ff, 0);
         this.pick5.drawRect(0, 0, 40, 130);
         this.pick5.id = 5;
         this.colorPickerGroup.add(this.pick5);
         
         
         this.pick6 = game.add.graphics(35,180);
         this.pick6.anchor.setTo(0.5);
         this.pick6.beginFill(0x0000ff, 0);
         this.pick6.drawRect(0, 0, 40, 130);
         this.pick6.id = 6;
         this.colorPickerGroup.add(this.pick6);
         
         this.pick7 = game.add.graphics(86,180);
         this.pick7.anchor.setTo(0.5);
         this.pick7.beginFill(0x0000ff, 0);
         this.pick7.drawRect(0, 0, 40, 130);
         this.pick7.id = 7;
         this.colorPickerGroup.add(this.pick7);
         
         this.pick8 = game.add.graphics(133,180);
         this.pick8.anchor.setTo(0.5);
         this.pick8.beginFill(0x0000ff, 0);
         this.pick8.drawRect(0, 0, 40, 130);
         this.pick8.id = 8;
         this.colorPickerGroup.add(this.pick8);
         
         this.pick9 = game.add.graphics(180,180);
         this.pick9.anchor.setTo(0.5);
         this.pick9.beginFill(0x0000ff, 0);
         this.pick9.drawRect(0, 0, 40, 130);
         this.pick9.id = 9;
         this.colorPickerGroup.add(this.pick9);
         
         this.pick10 = game.add.graphics(225,180);
         this.pick10.anchor.setTo(0.5);
         this.pick10.beginFill(0x0000ff, 0);
         this.pick10.drawRect(0, 0, 40, 130);
         this.pick10.id = 10;
         this.colorPickerGroup.add(this.pick10);
         
         this.pick11 = game.add.graphics(273,180);
         this.pick11.anchor.setTo(0.5);
         this.pick11.beginFill(0x0000ff, 0);
         this.pick11.drawRect(0, 0, 40, 130);
         this.pick11.id = 11;
         this.colorPickerGroup.add(this.pick11);
         
         for (var i=0; i<=11; i++) {
            this['pick'+i].alpha = 0;
            this['pick'+i].inputEnabled = true;
            this['pick'+i].input.useHandCursor = true;
            this['pick'+i].events.onInputUp.add(this.chooseLipstick, this);
            this['pick'+i].events.onInputOver.add(this.chooserOver, this);
            this['pick'+i].events.onInputOut.add(this.chooserOut, this);
         }
         
         
         
         
         
         
         
         this.dragItem = game.add.sprite(-500,0,'drag12');
         this.dragItem.frame = 0;
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         this.levelGroup.add(this.colorPickerGroup);
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(650,575);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 200, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            
            this.nxtbtn = game.add.sprite(-200,800,'nxtbtn');
            this.nxtbtn.anchor.setTo(0.5);
            this.nxtbtn.inputEnabled = true;
            this.nxtbtn.input.useHandCursor = true;
            this.nxtbtn.events.onInputUp.add(this.closeTool, this);
            this.nxtbtn.events.onInputOver.add(this.btnOver, this);
            this.nxtbtn.events.onInputOver.add(this.chooserOver, this);
            this.nxtbtn.events.onInputOut.add(this.chooserOut, this);
game.time.events.loop(4000, this.eyeloop, this);            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
chooserOver:function(){this.dragItem.visible = false;},
chooserOut:function(){this.dragItem.visible = true;},
chooseLipstick:function(evt){
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.dragItem.frame = evt.id;
    Main.lipColor[1] = evt.id+1;
    },
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    
    this.pad.inputEnabled = false;
    game.add.tween(this.colorPicker).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.colorPickerGroup).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true); 
},
startApply:function(items){
                effectVar = game.add.sprite(items.x+70,items.y-items.width/3,'effects'); 
               effectVar.anchor.setTo(0.5);
               effectVar.scale.setTo(3);		
		effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
               effectVar.animations.play('glitter', 30, false);
   this.girl1biglip.frame = Main.lipColor[1];
   Main.padtickPosVisible[12] = true;
    this.referCheckList();
    if (this.once) {
        this.once = false;
        game.add.tween(this.nxtbtn).to({x:200}, 700, Phaser.Easing.Exponential.Out, true)
    }
   //this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
},
removeGlitter:function(evt)
         {
            evt.kill();
         },
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 310;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+70;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

},
nextLevel:function(){
game.state.start('g2level13');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    effectVar = game.add.sprite(items.x,items.y-items.width/3,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
     effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
}
Main.g2level13 = function(){}

Main.g2level13.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        
        if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[2][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
        
        
        this.girlGroup3 = game.add.group();
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup3.add(this.girl1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup3.add(this.girl1biglip);
         
         this.levelGroup.add(this.girlGroup2);
         this.levelGroup.add(this.girlGroup3);
         this.levelGroup.add(this.girlGroup);
         
         
         
      this.girlGroup.x = 350;
      this.girlGroup.y = 500;
      this.girlGroup.scale.setTo(0.6);
      
      this.girlGroup2.x = -200;
      this.girlGroup2.y = 500;
      this.girlGroup2.scale.setTo(0.6);
      
      this.girlGroup3.x = 770;
      this.girlGroup3.y = 480;
      this.girlGroup3.scale.setTo(0.6);
      
        }
        else if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[2][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      
        }
        else if ((Main.finalGirlNum[2][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      
        }
        else if (Main.finalGirlNum[2][0] == 1) {
        this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup.x = 180;
      this.girlGroup.y = 200;
      this.girlGroup.scale.setTo(0.9);
        }
        
      

            //DDDD
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            this.playagain = game.add.sprite(450,100,'playagain');
            this.playagain.anchor.setTo(0.5);
            
            this.menubtn = game.add.sprite(770,100,'menubtn');
            this.menubtn.anchor.setTo(0.5);
            
            
            this.playagain.scale.setTo(0);
            this.playagain.inputEnabled = true;
            this.playagain.input.useHandCursor = true;
            this.playagain.events.onInputUp.add(this.playAgain, this);
            this.playagain.events.onInputOver.add(this.btnOver, this);
            this.playagain.events.onInputOut.add(this.btnOut, this);
            
            this.menubtn.scale.setTo(0);
            this.menubtn.inputEnabled = true;
            this.menubtn.input.useHandCursor = true;
            this.menubtn.events.onInputUp.add(this.menuFun, this);
            this.menubtn.events.onInputOver.add(this.btnOver, this);
            this.menubtn.events.onInputOut.add(this.btnOut, this);
            
            
            
            game.add.tween(this.playagain.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.menubtn.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            

            
},


openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
playAgain:function(){
game.state.start('g2level1');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
menuFun:function(){
game.state.start('menu');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
moreGames:function(){

},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    items.scale.setTo(0.9);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
btnOut:function(items){
    items.scale.setTo(0.8);
}
}
Main.g3level1 = function(){}

Main.g3level1.prototype = {
    create:function(){
        this.levelGroupD = game.add.group();
        this.girlselectbg = game.add.sprite(0,0,'girlselectbg');
        this.levelGroupD.add(this.girlselectbg);
        
        this.girlselect1 = game.add.sprite(490.45,372.5,'girlselect1');
        this.girlselect1.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect1);
        
        this.girlselect2 = game.add.sprite(1056.55,384,'girlselect2');
        this.girlselect2.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect2);
        
        this.girlselect3 = game.add.sprite(754.2,888.55,'girlselect3');
        this.girlselect3.anchor.setTo(0.5);
        this.levelGroupD.add(this.girlselect3);
        
        this.tick1 = game.add.sprite(635.2,157.1,'tick1');
        this.tick1.anchor.setTo(0.5);
        this.tick1.visible = Main.tickId[1];
        this.levelGroupD.add(this.tick1);
        
        this.tick3 = game.add.sprite(1243.7,198.05,'tick2');
        this.tick3.anchor.setTo(0.5);
        this.tick3.visible = Main.tickId[3];
        this.levelGroupD.add(this.tick3);
        
        this.tick2 = game.add.sprite(938.4,685.5,'tick3');
        this.tick2.anchor.setTo(0.5);
        this.tick2.visible = Main.tickId[2];
        this.levelGroupD.add(this.tick2);
        
        
        
        
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.visible= false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(785.75,635.45,'pimplemarker5');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(785.75,635.45,'pimplemarker6');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(611.95,623.75,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(661.3,599.75,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(653.45,639.05,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(651.15,674.9,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(694.4,632.85,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(877.05,621.85,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(943.8,594.75,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(922.85,632.05,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(900.85,666.6,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(958.6,649.05,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
                  
         this.girl1mustache = game.add.sprite(786.4,708.5,'girl3mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(-500,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint1');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         //this['padtick'+i].visible = Main.padtickPosVisible[i];
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(788.5,707.2,'apply1_1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag1');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            
            if (test == false) {
                test = true;
                this.levelGroup.y = -1700;
            
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            this.toolbox.x = -500;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            game.add.tween(this.levelGroup).to({y:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringToolBox, this);
            }
game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
bringToolBox:function(){
    game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
activateTool:function(){
    this.toolTween1 = game.add.tween(this.tool1.scale).to({x:1.05, y:1.05}, 700, Phaser.Easing.Quadratic.Out, true, 0, -1);
   this.toolTween2 = game.add.tween(this.tool1).to({angle:25}, 700, Phaser.Easing.Quadratic.Out, true, 0, -1);
   this.toolTween1.yoyo(true, 100);
   this.toolTween2.yoyo(true, 100);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
   }
   if ((this.dragItem.y>700) && (this.dragItem.y<800)) {
         if ((this.dragItem.x>650) && (this.dragItem.x<750) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>800) && (this.dragItem.x<950) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        if (this.applyItem.alpha >= 1) {
            this.meterFill.y = 400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false
            
            Main.padtickPosVisible[1] = true;
            this.levelChange = true;
            this.referCheckList();
            
        }
   }
   
   if (!this.applyflag && this.levelChange) {
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   }
},
nextLevel:function(){
game.state.start('g3level2');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level2 = function(){}

Main.g3level2.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.visible = false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(785.75,635.45,'pimplemarker5');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(785.75,635.45,'pimplemarker6');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(611.95,623.75,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(661.3,599.75,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(653.45,639.05,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(651.15,674.9,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(694.4,632.85,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(877.05,621.85,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(943.8,594.75,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(922.85,632.05,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(900.85,666.6,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(958.6,649.05,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
         
         this.girl1mustache = game.add.sprite(786.4,708.5,'girl3mustache');
         this.girl1mustache.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1mustache);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint2');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(788.5,707.2,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 1;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag2');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(670,680);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 70);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.x = 800.65;
   this.dragItem.y = 703.4;
   this.dragItem.scale.setTo(0, 1);
   game.add.tween(this.dragItem.scale).to({x:1}, 1000, 'Linear', true).onComplete.add(this.bringTimer, this);
   this.rect0.kill();
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   game.add.tween(this.dragItem).to({alpha:0}, 700, 'Linear', true);
   Main.padtickPosVisible[2] = true;
    this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+30;
   }
},
nextLevel:function(){
game.state.start('g3level3');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level3 = function(){}

Main.g3level3.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.visible= false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(785.75,635.45,'pimplemarker5');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(785.75,635.45,'pimplemarker6');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         this.pimple1 = game.add.sprite(611.95,623.75,'pimple');
         this.pimple1.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple1);
         this.pimple2 = game.add.sprite(661.3,599.75,'pimple');
         this.pimple2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple2);
         this.pimple3 = game.add.sprite(653.45,639.05,'pimple');
         this.pimple3.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple3);
         this.pimple4 = game.add.sprite(651.15,674.9,'pimple');
         this.pimple4.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple4);
         this.pimple5 = game.add.sprite(694.4,632.85,'pimple');
         this.pimple5.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple5);
         this.pimple6 = game.add.sprite(877.05,621.85,'pimple');
         this.pimple6.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple6);
         this.pimple7 = game.add.sprite(943.8,594.75,'pimple');
         this.pimple7.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple7);
         this.pimple8 = game.add.sprite(922.85,632.05,'pimple');
         this.pimple8.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple8);
         this.pimple9 = game.add.sprite(900.85,666.6,'pimple');
         this.pimple9.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple9);
         this.pimple10 = game.add.sprite(958.6,649.05,'pimple');
         this.pimple10.anchor.setTo(0.5);
         this.girlGroup.add(this.pimple10);
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint3');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag3');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(550,640);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 70);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      for (var i=1; i<=10; i++) {
      this['rect'+i] = game.add.graphics(this['pimple'+i].x-15,this['pimple'+i].y-15);
      this['rect'+i].anchor.setTo(0.5);
      this['rect'+i].beginFill(0x000000, 0);
      this['rect'+i].drawRect(0, 0, 30, 30);
      this['rect'+i].alpha = 0;
      this['rect'+i].id = i;
      this.levelGroup.add(this['rect'+i]);
     }
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=10; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    this.pimpleCount = 0;
    }
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true); 
},
removeItem:function(evt){
   if (this.pimpleCount<10) {
    this.pimpleCount++;
    this['pimple'+evt.id].kill();
    this['rect'+evt.id].kill();
    if (this.pimpleCount == 10) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[3] = true;
        this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    }
   }
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 340;
      this.dragItem.x = game.input.activePointer.x+25;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g3level4');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level4 = function(){}

Main.g3level4.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.visible= false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(785.75,635.45,'pimplemarker5');
         this.pimplemarker.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker);
         this.pimplemarker2 = game.add.sprite(785.75,635.45,'pimplemarker6');
         this.pimplemarker2.anchor.setTo(0.5);
         this.girlGroup.add(this.pimplemarker2);
         
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
                  
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool1');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool2');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool3');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool4');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint4');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
    
    
    
    

         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
     this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.pimplemarker.alpha -= 0.005;
        this.meterFill.y -=1.005;
        
   },
activateDrag2:function(){
   
   },
deactivateDrag2:function(){
   
   },
dragUpdate2:function(){
   this.pimplemarker2.alpha -= 0.005;
   this.meterFill.y -=1.005;
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>600) && (this.dragItem.y<850)) {
         if ((this.dragItem.x>500) && (this.dragItem.x<700) && (this.movedX)) {
            this.movedX = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>700) && (this.dragItem.x<950) && (this.movedX2)) {
            this.movedX2 = false;
            this.pimplemarker.alpha -= 0.05;
            this.pimplemarker2.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        if (this.pimplemarker.alpha <= 0) {
            this.pimplemarker.alpha = 0;
            this.applyflag = false;
            
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
               this.meterFill.y = 400;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
            
        }
   }
   
   if (this.applyflag2) {
        
        if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
               this.meterFill.y = 400;
                this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            this.closeTool();
            }
        }
   }
   
   
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

    },
nextLevel:function(){
game.state.start('g3level5');    

},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level5 = function(){}

Main.g3level5.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.levelChange = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering');
         this.moistering1.visible = false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         
         
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(348.2,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(348.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(348.2,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(348.2,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint5');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag5');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            this.toolbox.x = -500;
            
            game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.moistering1.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x+200;
      this.dragItem.y = game.input.activePointer.y+10;
   }
   if ((this.dragItem.y>750) && (this.dragItem.y<900)) {
         if ((this.dragItem.x>900) && (this.dragItem.x<1000) && (this.movedX)) {
            this.movedX = false;
            this.moistering1.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>1000) && (this.dragItem.x<1200) && (this.movedX2)) {
            this.movedX2 = false;
            this.moistering1.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        if (this.moistering1.alpha <= 0) {
            this.moistering1.alpha = 0;
            this.meterFill.y = 400;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelChange = true;
            Main.padtickPosVisible[5] = true;
            this.referCheckList();
            
        }
   }
   
   if (!this.applyflag && this.levelChange) {
    
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
   }
},
nextLevel:function(){
game.state.start('g3level6');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level6 = function(){}

Main.g3level6.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.anchor.setTo(0.5);
         this.moistering1.visible = false;
         this.moistering1.alpha = 0;
         this.girlGroup.add(this.moistering1);
         
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
         
         
         
         
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint6');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(786,756,'apply6_3');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag6');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
    this.pad.inputEnabled = false;
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.applyItem.alpha += 0.005;
        this.meterFill.y -=2.005;
        
   },
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true);
   game.add.tween(this.moistering1).to({alpha:1}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   Main.padtickPosVisible[6] = true;
    this.referCheckList();
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+70;
   }
   if ((this.dragItem.y>800) && (this.dragItem.y<900)) {
         if ((this.dragItem.x>700) && (this.dragItem.x<800) && (this.movedX)) {
            this.movedX = false;
            this.applyItem.alpha += 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>800) && (this.dragItem.x<900) && (this.movedX2)) {
            this.movedX2 = false;
            this.applyItem.alpha += 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        if (this.applyItem.alpha >= 1) {
         this.meterFill.y =400;
            this.applyItem.alpha = 1;
            this.applyflag = false;
            this.dragflag = false;
            this.dragItem.visible = false;
            
            this.bringTimer();
        }
   }
   
},
nextLevel:function(){
game.state.start('g3level7');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level7 = function(){}

Main.g3level7.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.visible = false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.pimplemarker = game.add.sprite(675.2,613.35,'pimplemarker');
         this.pimplemarker.anchor.setTo(0.5);
         this.pimplemarker.visible = false;
         this.girlGroup.add(this.pimplemarker);
         
         this.pimplemarker2 = game.add.sprite(675.2,613.35,'pimplemarker2');
         this.pimplemarker2.anchor.setTo(0.5);
         this.pimplemarker2.visible = false;
         this.girlGroup.add(this.pimplemarker2);
         
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint7');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag7');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.girl1nose = game.add.sprite(785.8,626.6,'girl3nose');
         this.girl1nose.anchor.setTo(0.5);
         this.girl1nose.visible = false;
         this.levelGroup.add(this.girl1nose);
         
         this.rect0 = game.add.graphics(720,600);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 60, 100);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         
         this.rect1 = game.add.graphics(790,600);
         this.rect1.anchor.setTo(0.5);
         this.rect1.beginFill(0x000000, 0);
         this.rect1.drawRect(0, 0, 60, 100);
         this.rect1.alpha = 0;
         this.levelGroup.add(this.rect1);

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    
    this.rect1.inputEnabled = true;
    this.rect1.input.useHandCursor = true;
    this.rect1.events.onInputDown.add(this.startApply2, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
 this.applyflag = true;
 this.dragflag = false;
 this.rect0.visible = false;
 this.rect1.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect0.x+25;
 this.dragItem.y = this.rect0.y+150;
},
startApply2:function(){
 this.applyflag2 = true;
 this.dragflag = false;
 this.rect1.visible = false;
 this.rect0.visible = false;
 this.girl1nose.visible = true;
 this.dragItem.x = this.rect1.x+30;
 this.dragItem.y = this.rect1.y+150;
},

update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   
   if (this.applyflag) {
        this.meterFill.y -=2.12;
        this.pimplemarker.alpha -= 0.010;
        if (this.pimplemarker.alpha <= 0) {
            this.applyflag = false;
            this.pimplemarker.alpha = 0;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect1.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
            
        }
   }
   
   if (this.applyflag2) {
        this.pimplemarker2.alpha -= 0.010;
        this.meterFill.y -=2.12;
        if (this.pimplemarker2.alpha <= 0) {
            this.pimplemarker2.alpha = 0;
            this.applyflag2 = false;
            this.girl1nose.visible = false;
            this.dragflag = true;
            this.rect0.visible = true;
            if ((this.pimplemarker.alpha == 0) && (this.pimplemarker2.alpha == 0)) {
            this.dragflag = false;
            this.dragItem.visible = false;
            this.rect0.visible = false;
            this.rect1.visible = false;
            this.levelTimer();
            }
        }
   }
},
levelTimer:function(){
    Main.padtickPosVisible[7] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g3level8');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level8 = function(){}

Main.g3level8.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.visible = false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         
         
         for (var i=1; i<=8; i++) {
            this['g3hair'+i] = game.add.sprite(Main.hairPos3X[i],Main.hairPos3Y[i],'g3hair'+i);
            this['g3hair'+i].anchor.setTo(0.5);
            this.girlGroup.add(this['g3hair'+i]);
         }
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool5');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool6');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool7');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool8');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint8');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag8new');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
      this.rectGroup = game.add.group();
     // for (var i=1; i<=8; i++) {
     // this['rect'+i] = game.add.graphics(Main.hairPos3X[i]-5,Main.hairPos3Y[i]+5);
     // this['rect'+i].anchor.setTo(0.5);
     // this['rect'+i].beginFill(0x000000, 0.5);
     // this['rect'+i].drawRect(0, 0, 35, 22);
     // this['rect'+i].alpha = 1;
     // this['rect'+i].id = i;
     // this.rectGroup.add(this['rect'+i]);
     //}
     this.rect1 = game.add.graphics(643.75,640);
     this.rect1.anchor.setTo(0.5);
     this.rect1.beginFill(0x000000, 0);
     this.rect1.drawRect(0, 0, 50, 50);
     this.rect1.alpha = 0;
     this.rect1.id = 1;
      this.rectGroup.add(this.rect1);
      
     this.rect2 = game.add.graphics(690,650);
     this.rect2.anchor.setTo(0.5);
     this.rect2.beginFill(0x000000, 0);
     this.rect2.drawRect(0, 0, 60, 40);
     this.rect2.alpha = 0;
     this.rect2.id = 2;
      this.rectGroup.add(this.rect1);
      
     this.rect3 = game.add.graphics(750,670);
     this.rect3.anchor.setTo(0.5);
     this.rect3.beginFill(0x000000, 0);
     this.rect3.drawRect(0, 0, 50, 50);
     this.rect3.alpha = 0;
     this.rect3.id = 3;
      this.rectGroup.add(this.rect3);
     
     this.rect4 = game.add.graphics(950,670);
     this.rect4.anchor.setTo(0.5);
     this.rect4.beginFill(0x000000, 0);
     this.rect4.drawRect(0, 0, 50, 50);
     this.rect4.alpha = 0;
     this.rect4.id = 4;
     this.rectGroup.add(this.rect4);
     
     this.rect5 = game.add.graphics(990,640);
     this.rect5.anchor.setTo(0.5);
     this.rect5.beginFill(0x000000, 0);
     this.rect5.drawRect(0, 0, 50, 50);
     this.rect5.alpha = 0;
     this.rect5.id = 5;
     this.rectGroup.add(this.rect5);
     
     this.rect6 = game.add.graphics(1042,620);
     this.rect6.anchor.setTo(0.5);
     this.rect6.beginFill(0x000000, 0);
     this.rect6.drawRect(0, 0, 50, 50);
     this.rect6.alpha = 0;
     this.rect6.id = 6;
     this.rectGroup.add(this.rect6);
     
     this.rect7 = game.add.graphics(1080,615);
     this.rect7.anchor.setTo(0.5);
     this.rect7.beginFill(0x000000, 0);
     this.rect7.drawRect(0, 0, 50, 50);
     this.rect7.alpha = 0;
     this.rect7.id = 7;
     this.rectGroup.add(this.rect7);
     
     this.rect8 = game.add.graphics(1110,615);
     this.rect8.anchor.setTo(0.5);
     this.rect8.beginFill(0x000000, 0);
     this.rect8.drawRect(0, 0, 50, 50);
     this.rect8.alpha =0;
     this.rect8.id = 8;
     this.rectGroup.add(this.rect8);
     
     this.levelGroup.add(this.rectGroup);
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
game.time.events.loop(4000, this.eyeloop, this);            
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},

openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
    
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween(this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
pickTool:function(){
    //this.rectGroup.x = this.girlGroup.x-290;
    //this.rectGroup.y = this.girlGroup.y-20;
    //this.rectGroup.scale.setTo(1.5);
    game.add.tween(this.girlGroup.scale).to({x:1.5, y:1.5}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:-300}, 700, Phaser.Easing.Quadratic.Out, true);
    this.tool4.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.pad.inputEnabled = false;
    for (var i=1; i<=8; i++) {
    this['rect'+i].inputEnabled = true;
    this['rect'+i].events.onInputUp.add(this.removeItem, this);
    this['rect'+i].events.onInputDown.add(this.cutDown, this);
    this.pimpleCount = 0;
    }
    this.girl1.inputEnabled = true;
   this.girl1.input.useHandCursor = true;
   this.girl1.events.onInputDown.add(this.cutDown, this);
   this.girl1.events.onInputUp.add(this.cutUp, this);
   
   game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
cutDown:function(){
   this.dragItem.frame = 2;
   },
cutUp:function(){
   this.dragItem.frame = 0;
   },
removeItem:function(evt){
   if (this.pimpleCount<8) {
    this.pimpleCount++;
    this['g3hair'+evt.id].kill();
    this['rect'+evt.id].kill();
    this.dragItem.frame = 0;
    if (this.pimpleCount == 8) {
        this.dragflag = false;
        this.dragItem.visible = false;
        Main.padtickPosVisible[8] = true;
    this.referCheckList();
        game.add.tween(this.girlGroup.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.girlGroup).to({x:0}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeTool, this);
    }
   }
   
},

update:function(){
    if (this.dragflag) {
      this.dragItem.angle = 300;
      this.dragItem.x = game.input.activePointer.x+90;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

    },
nextLevel:function(){
game.state.start('g3level9');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
}
Main.g3level9 = function(){}

Main.g3level9.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.waterdrops = game.add.sprite(780,390,'waterdrops');
        this.waterdrops.animations.add('fall');
        this.waterdrops.play('fall', 24, true);
         this.waterdrops.visible = false;
         this.waterdrops.anchor.setTo(0.5);
         this.girlGroup.add(this.waterdrops);
        this.girl1lip = game.add.sprite(793.95,753.55,'girl3lip');
         this.girl1lip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1lip);
         this.moistering1 = game.add.sprite(676.2,716.2,'girl1moistering2');
         this.moistering1.visible = false;
         this.moistering1.anchor.setTo(0.5);
         this.girlGroup.add(this.moistering1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girl1biglip.alpha = 0;
         this.girlGroup.add(this.girl1biglip);
        
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool1.inputEnabled = true;
         this.tool1.input.useHandCursor = true;
         this.tool1.events.onInputUp.add(this.pickTool, this);
         this.tool1.events.onInputOver.add(this.toolOver, this);
         this.tool1.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint9');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();

         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(786.15,762.15,'g3mouthwithjar');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.visible = false;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag9');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(680,720);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 90);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.tool1.x = 348.2;
            this.tool2.x = 348.2;
            this.tool3.x = 348.2;
            this.tool4.x = 348.2;
            
            this.tool1.scale.setTo(0);
            this.tool2.scale.setTo(0);
            this.tool3.scale.setTo(0);
            this.tool4.scale.setTo(0);
            this.toolbox.x = -500;
            game.add.tween(this.toolbox).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringTools, this);
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
bringTools:function(){
    game.add.tween(this.tool1.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:606.15}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:850.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:1084.45}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:1, y:1}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:1318}, 1000, Phaser.Easing.Quadratic.Out, true);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool1.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.visible = false;
    this.applyItem.visible = true;
    this.girl1lip.visible = false;
    this.moistering1.visible = false;
   this.bringTimer();
   this.rect0.kill();
   this.waterdrops.visible = true;
},
bringTimer:function(){
game.add.tween(this.clockGroup).to({x:1300}, 700, 'Linear', true).onComplete.add(this.startTimer, this);
this.timerCount = 118;   
},
startTimer:function(){
   if (this.timerCount > 10) {
      this.timerCount--;
      this.minstick.angle += 10;
      this.time.events.add(Phaser.Timer.SECOND * 0.01,this.startTimer, this);
      if (this.timerCount == 10) {
         game.add.tween(this.clockGroup).to({x:1800}, 700, 'Linear', true).onComplete.add(this.removeItem, this);
      }
   }
},
removeItem:function(){
   game.add.tween(this.applyItem).to({alpha:0}, 700, 'Linear', true);
   Main.padtickPosVisible[9] = true;
    this.referCheckList();
   game.add.tween(this.girl1biglip).to({alpha:1}, 700, 'Linear', true).onComplete.add(this.nextLevel, this);
   
},
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
},
nextLevel:function(){
game.state.start('g3level10');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level10 = function(){}

Main.g3level10.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = true;
        this.applyflag2 = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
        this.waterdrops = game.add.sprite(780,390,'waterdrops');
        this.waterdrops.animations.add('fall');
        this.waterdrops.play('fall', 24, true);
         this.waterdrops.anchor.setTo(0.5);
         this.girlGroup.add(this.waterdrops);
         
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool2.inputEnabled = true;
         this.tool2.input.useHandCursor = true;
         this.tool2.events.onInputUp.add(this.pickTool, this);
         this.tool2.events.onInputOver.add(this.toolOver, this);
         this.tool2.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint10');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
     
         this.applyItem = game.add.sprite(671.1,664,'apply1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.levelGroup.add(this.applyItem);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag4');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         

         
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool2.inputEnabled = false;
    this.dragflag = true;
    this.movedX = true;
   this.movedX2 = false;
    this.dragItem.visible = true;
    game.add.tween(this.meterGroup).to({x:-650}, 100, 'Linear', true);
    
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
activateDrag:function(){
   
   },
deactivateDrag:function(){
   
   },
dragUpdate:function(){
   this.waterdrops.alpha -= 0.005;
        this.meterFill.y -=2.005;
        
   },
update:function(){
    if (this.dragflag) {
      this.dragItem.x = game.input.activePointer.x;
      this.dragItem.y = game.input.activePointer.y+80;
   }
   if ((this.dragItem.y>400) && (this.dragItem.y<600)) {
         if ((this.dragItem.x>650) && (this.dragItem.x<800) && (this.movedX)) {
            this.movedX = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX2 = true;
            this.meterFill.y -=22.2;
         }
         if ((this.dragItem.x>800) && (this.dragItem.x<950) && (this.movedX2)) {
            this.movedX2 = false;
            this.waterdrops.alpha -= 0.05;
            this.movedX = true;
            this.meterFill.y -=22.2;
         }
      }
   if (this.applyflag) {
        
        
        if (this.waterdrops.alpha <= 0) {
         this.meterFill.y =400;
            this.waterdrops.alpha = 0;
            this.applyflag = false;
            
            this.dragflag = false;
            this.dragItem.visible = false;
            this.levelTimer();
        }
   }
   
},
levelTimer:function(){
    Main.padtickPosVisible[10] = true;
    this.referCheckList();
    this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
    },
nextLevel:function(){
game.state.start('g3level11');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level11 = function(){}

Main.g3level11.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool3.inputEnabled = true;
         this.tool3.input.useHandCursor = true;
         this.tool3.events.onInputUp.add(this.pickTool, this);
         this.tool3.events.onInputOver.add(this.toolOver, this);
         this.tool3.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint11');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(800,760,'g3marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         
         
         this.dragItem = game.add.sprite(0,0,'drag11');
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(680,710);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.pad.inputEnabled = false;
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(){
    this.dragflag = false;
    this.dragItem.kill();
   this.rect0.kill();
   this.applyItem.alpha = 1;
   this.runCount = 1;
   this.runApplyItem();
},
runApplyItem:function(){
   if (this.runCount < 82) {
      this.runCount++;
      this.applyGroup.removeAll();
         this.applyItem = game.add.sprite(800,760,'g3marker'+this.runCount);
         this.applyItem.anchor.setTo(0.5);
         this.applyGroup.add(this.applyItem);
         this.time.events.add(Phaser.Timer.SECOND * 0.01,this.runApplyItem, this);
      if (this.runCount == 82) {
         Main.padtickPosVisible[11] = true;
    this.referCheckList();
   this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
      }
   }
},
removeItem:function(){
   this.applyItem.visible = false;
   this.girl1mustache.visible = false;
   game.add.tween(this.dragItem).to({alpha:0}, 700, 'Linear', true);
},
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 300;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+100;
      this.dragItem.y = game.input.activePointer.y+60;
   }
},
nextLevel:function(){
game.state.start('g3level12');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
}
Main.g3level12 = function(){}

Main.g3level12.prototype = {
    create:function(){
        this.dragflag = false;
        this.applyflag = false;
        this.once = true;
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        this.girleye = game.add.sprite(573.65,474.9,'girl3eye');
        this.girleye.animations.add('blink');
        this.girlGroup.add(this.girleye);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = 0;
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
        this.levelGroup.add(this.girlGroup);
        
        this.tool1 = game.add.sprite(606.15,1008.1,'tool9');
         this.tool1.anchor.setTo(0.5);
         this.levelGroup.add(this.tool1);
         this.tool2 = game.add.sprite(850.2,1008.1,'tool10');
         this.tool2.anchor.setTo(0.5);
         this.levelGroup.add(this.tool2);
         this.tool3 = game.add.sprite(1084.45,1008.1,'tool11');
         this.tool3.anchor.setTo(0.5);
         this.levelGroup.add(this.tool3);
         this.tool4 = game.add.sprite(1318,1008.1,'tool12');
         this.tool4.anchor.setTo(0.5);
         this.levelGroup.add(this.tool4);
         
         this.tool4.inputEnabled = true;
         this.tool4.input.useHandCursor = true;
         this.tool4.events.onInputUp.add(this.pickTool, this);
         this.tool4.events.onInputOver.add(this.toolOver, this);
         this.tool4.events.onInputOut.add(this.toolOut, this);
         
         this.toolbox = game.add.sprite(348.2,986.15,'toolbox');
         this.toolbox.anchor.setTo(0.5);
         this.levelGroup.add(this.toolbox);
         
         this.padbg = game.add.sprite(0,0,'padbg');
         this.levelGroup.add(this.padbg);
         this.padbg.visible = false;
         this.hint = game.add.sprite(2000,420,'hint12');
         this.hint.anchor.setTo(0.8);
         this.levelGroup.add(this.hint);
         this.padGroup = game.add.group();
         this.padGroup.x = 1436.35;
         this.padGroup.y = 338.15;
         this.pad = game.add.sprite(0,0,'pad');
         this.pad.anchor.setTo(0.5);
         this.padGroup.scale.setTo(0.5);
         this.pad.inputEnabled = true;
         this.pad.input.useHandCursor = true;
         this.pad.events.onInputUp.add(this.padzoom, this);
         this.padGroup.add(this.pad);
         this.padclosebtn = game.add.sprite(250,-330,'padclosebtn');
         this.padclosebtn.anchor.setTo(0.5);
         this.padclosebtn.visible = false;
         this.padclosebtn.inputEnabled = true;
         this.padclosebtn.input.useHandCursor = true;
         this.padclosebtn.events.onInputUp.add(this.closePad, this);
         this.padGroup.add(this.padclosebtn);
         for(var i = 1; i<=12; i++)
         {
         this['padtick'+i] = game.add.sprite(Main.padtickPosX[i],Main.padtickPosY[i],'padtick');
         this['padtick'+i].anchor.setTo(0.5);
         this.padGroup.add(this['padtick'+i]);
         }
         this.referCheckList();
         this.meterGroup = game.add.group();
         this.meterGroup.x = -850;
         this.meterGroup.y = 100;
         this.meter = game.add.sprite(750,400,'meter');
         this.meter.anchor.setTo(0.5);
         this.meterBg = game.add.sprite(748,400,'meterbg');
         this.meterBg.anchor.setTo(0.5);
         this.meterFill = game.add.sprite(749,825,'meterfill');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterBg);
         this.meterGroup.add(this.meterFill);
         this.meterGroup.add(this.meter);
         this.mask = game.add.graphics(720, 181);
         this.mask.beginFill(0xffffff);
         this.mask.drawRect(0, 0, 70, 433);
         this.mask.alpha = 0.8;
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
         this.levelGroup.add(this.meterGroup);
        
         this.applyGroup = game.add.group();
         this.applyItem = game.add.sprite(746,734,'marker1');
         this.applyItem.anchor.setTo(0.5);
         this.applyItem.alpha = 0;
         this.applyGroup.add(this.applyItem);
         this.levelGroup.add(this.applyGroup);
         
         this.colorPickerGroup  = game.add.group();
         this.colorPickerGroup.scale.setTo(0.9);
         this.colorPickerGroup.x = 1670;
         this.colorPickerGroup.y = 580;
         this.colorPicker = game.add.sprite(1670,580,'lipstickchooser');
         this.colorPicker.scale.setTo(0.9);
         this.levelGroup.add(this.colorPicker);
         this.colorPicker.inputEnabled = true;
         this.colorPicker.input.useHandCursor = true;
         this.colorPicker.events.onInputOver.add(this.chooserOver, this);
         this.colorPicker.events.onInputOut.add(this.chooserOut, this);
         
         this.pick0 = game.add.graphics(33,40);
         this.pick0.anchor.setTo(0.5);
         this.pick0.beginFill(0x0000ff, 0);
         this.pick0.drawRect(0, 0, 40, 130);
         this.pick0.id = 0;
         this.colorPickerGroup.add(this.pick0);
         
         this.pick1 = game.add.graphics(83,40);
         this.pick1.anchor.setTo(0.5);
         this.pick1.beginFill(0x0000ff, 0);
         this.pick1.drawRect(0, 0, 40, 130);
         this.pick1.id = 1;
         this.colorPickerGroup.add(this.pick1);
         
         this.pick2 = game.add.graphics(132,40);
         this.pick2.anchor.setTo(0.5);
         this.pick2.beginFill(0x0000ff, 0);
         this.pick2.drawRect(0, 0, 40, 130);
         this.pick2.id = 2;
         this.colorPickerGroup.add(this.pick2);
         
         this.pick3 = game.add.graphics(180,40);
         this.pick3.anchor.setTo(0.5);
         this.pick3.beginFill(0x0000ff, 0);
         this.pick3.drawRect(0, 0, 40, 130);
         this.pick3.id = 3;
         this.colorPickerGroup.add(this.pick3);
         
         this.pick4 = game.add.graphics(225,40);
         this.pick4.anchor.setTo(0.5);
         this.pick4.beginFill(0x0000ff, 0);
         this.pick4.drawRect(0, 0, 40, 130);
         this.pick4.id = 4;
         this.colorPickerGroup.add(this.pick4);
         
         this.pick5 = game.add.graphics(273,40);
         this.pick5.anchor.setTo(0.5);
         this.pick5.beginFill(0x0000ff, 0);
         this.pick5.drawRect(0, 0, 40, 130);
         this.pick5.id = 5;
         this.colorPickerGroup.add(this.pick5);
         
         
         this.pick6 = game.add.graphics(35,180);
         this.pick6.anchor.setTo(0.5);
         this.pick6.beginFill(0x0000ff, 0);
         this.pick6.drawRect(0, 0, 40, 130);
         this.pick6.id = 6;
         this.colorPickerGroup.add(this.pick6);
         
         this.pick7 = game.add.graphics(86,180);
         this.pick7.anchor.setTo(0.5);
         this.pick7.beginFill(0x0000ff, 0);
         this.pick7.drawRect(0, 0, 40, 130);
         this.pick7.id = 7;
         this.colorPickerGroup.add(this.pick7);
         
         this.pick8 = game.add.graphics(133,180);
         this.pick8.anchor.setTo(0.5);
         this.pick8.beginFill(0x0000ff, 0);
         this.pick8.drawRect(0, 0, 40, 130);
         this.pick8.id = 8;
         this.colorPickerGroup.add(this.pick8);
         
         this.pick9 = game.add.graphics(180,180);
         this.pick9.anchor.setTo(0.5);
         this.pick9.beginFill(0x0000ff, 0);
         this.pick9.drawRect(0, 0, 40, 130);
         this.pick9.id = 9;
         this.colorPickerGroup.add(this.pick9);
         
         this.pick10 = game.add.graphics(225,180);
         this.pick10.anchor.setTo(0.5);
         this.pick10.beginFill(0x0000ff, 0);
         this.pick10.drawRect(0, 0, 40, 130);
         this.pick10.id = 10;
         this.colorPickerGroup.add(this.pick10);
         
         this.pick11 = game.add.graphics(273,180);
         this.pick11.anchor.setTo(0.5);
         this.pick11.beginFill(0x0000ff, 0);
         this.pick11.drawRect(0, 0, 40, 130);
         this.pick11.id = 11;
         this.colorPickerGroup.add(this.pick11);
         
         for (var i=0; i<=11; i++) {
            this['pick'+i].alpha = 0;
            this['pick'+i].inputEnabled = true;
            this['pick'+i].input.useHandCursor = true;
            this['pick'+i].events.onInputUp.add(this.chooseLipstick, this);
            this['pick'+i].events.onInputOver.add(this.chooserOver, this);
            this['pick'+i].events.onInputOut.add(this.chooserOut, this);
         }
         
         
         
         
         
         
         
         this.dragItem = game.add.sprite(-500,0,'drag12');
         this.dragItem.frame = 0;
         this.dragItem.anchor.setTo(0.5);
         this.dragItem.visible = false;
         this.levelGroup.add(this.dragItem);
         this.levelGroup.add(this.colorPickerGroup);
         this.arrow = game.add.sprite(480,660,'arrow');
         this.arrow.anchor.setTo(0.5);
         this.arrow.scale.setTo(0.8);
         this.arrow.visible = false;
         this.levelGroup.add(this.arrow);
         
         this.rect0 = game.add.graphics(680,710);
         this.rect0.anchor.setTo(0.5);
         this.rect0.beginFill(0x000000, 0);
         this.rect0.drawRect(0, 0, 230, 85);
         this.rect0.alpha = 0;
         this.levelGroup.add(this.rect0);
         

         
         
      this.clockGroup = game.add.group();
      this.clockGroup.x = 1800;
      this.clockGroup.y = 750;
      this.clock = game.add.sprite(0,0,'clock');
      this.clock.anchor.setTo(0.5);
      this.clockcenterpoint = game.add.sprite(1,6,'clockcenterpoint');
      this.clockcenterpoint.anchor.setTo(0.5);
      this.minstick = game.add.sprite(0,5,'minstick');
      this.minstick.anchor.setTo(0.5, 1);
      this.clockGroup.add(this.clock);
      this.clockGroup.add(this.minstick);
      this.clockGroup.add(this.clockcenterpoint);
      this.levelGroup.add(this.clockGroup);
      this.levelGroup.add(this.padGroup);
      
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            
            this.nxtbtn = game.add.sprite(-200,800,'nxtbtn');
            this.nxtbtn.anchor.setTo(0.5);
            this.nxtbtn.inputEnabled = true;
            this.nxtbtn.input.useHandCursor = true;
            this.nxtbtn.events.onInputUp.add(this.closeTool, this);
            this.nxtbtn.events.onInputOver.add(this.btnOver, this);
            this.nxtbtn.events.onInputOver.add(this.chooserOver, this);
            this.nxtbtn.events.onInputOut.add(this.chooserOut, this);
            game.time.events.loop(4000, this.eyeloop, this);
},
eyeloop:function(){
   this.girleye.play('blink', 10, false);
},
chooserOver:function(){this.dragItem.visible = false;},
chooserOut:function(){this.dragItem.visible = true;},
chooseLipstick:function(evt){
    this.dragflag = true;
    this.dragItem.visible = true;
    this.rect0.inputEnabled = true;
    this.rect0.input.useHandCursor = true;
    this.rect0.events.onInputDown.add(this.startApply, this);
    this.dragItem.frame = evt.id;
    Main.lipColor[2] = evt.id+1;
    },
openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
pickTool:function(){
    this.tool3.inputEnabled = false;
    
    this.pad.inputEnabled = false;
    game.add.tween(this.colorPicker).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.colorPickerGroup).to({x:1270}, 700, Phaser.Easing.Back.Out, true)
    game.add.tween(this.padGroup).to({x:2000}, 700, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.hint).to({x:1500}, 700, Phaser.Easing.Quadratic.Out, true);
},
startApply:function(items){
                effectVar = game.add.sprite(items.x+70,items.y-items.width/3,'effects'); 
               effectVar.anchor.setTo(0.5);
               effectVar.scale.setTo(3);		
		effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
               effectVar.animations.play('glitter', 30, false);
   this.girl1biglip.frame = Main.lipColor[2];
   Main.padtickPosVisible[12] = true;
    this.referCheckList();
    if (this.once) {
        this.once = false;
        game.add.tween(this.nxtbtn).to({x:200}, 700, Phaser.Easing.Exponential.Out, true)
    }
   //this.time.events.add(Phaser.Timer.SECOND * 0.25,this.nextLevel, this);
},
removeGlitter:function(evt)
         {
            evt.kill();
         },
update:function(){
    if (this.dragflag) {
    this.dragItem.angle = 310;
    this.dragItem.scale.setTo(0.8);
      this.dragItem.x = game.input.activePointer.x+70;
      this.dragItem.y = game.input.activePointer.y+50;
   }
},
closeTool:function(){
    game.add.tween(this.tool1.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool1).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool2).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(this.tool3.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool3).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4.scale).to({x:0, y:0}, 1000, Phaser.Easing.Quadratic.Out, true);
game.add.tween(this.tool4).to({x:348.2}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.closeToolBox, this);
Main.padtickPosVisible[4] = true;
    this.referCheckList();
},
closeToolBox:function(){
game.add.tween(this.toolbox).to({x:-500}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.nextLevel, this);

},
nextLevel:function(){
game.state.start('g3level13');
},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    effectVar = game.add.sprite(items.x,items.y-items.width/3,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
     effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
toolOver:function(items){
    items.scale.setTo(1.05);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);
},
toolOut:function(items){
    items.scale.setTo(1);
},
removeGlitter:function(evt){
      evt.kill(); 
},
}
Main.g3level13 = function(){}

Main.g3level13.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.girlGroup = game.add.group();
        this.level1bg = game.add.sprite(0,0,'level1bg');
        this.levelGroup.add(this.level1bg);
        
        if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[2][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
        
        
        this.girlGroup3 = game.add.group();
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup3.add(this.girl1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup3.add(this.girl1biglip);
         
         this.levelGroup.add(this.girlGroup2);
         this.levelGroup.add(this.girlGroup3);
         this.levelGroup.add(this.girlGroup);
         
         
         
      this.girlGroup.x = 350;
      this.girlGroup.y = 500;
      this.girlGroup.scale.setTo(0.6);
      
      this.girlGroup2.x = -200;
      this.girlGroup2.y = 500;
      this.girlGroup2.scale.setTo(0.6);
      
      this.girlGroup3.x = 770;
      this.girlGroup3.y = 480;
      this.girlGroup3.scale.setTo(0.6);
      
        }
        else if ((Main.finalGirlNum[3][0] == 1) && (Main.finalGirlNum[2][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(709.15,588.15,'level2girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
        this.girl1body = game.add.sprite(708.15,1180,'bodypart');
        this.girl1body.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1body);
         this.girl1biglip = game.add.sprite(756.05,621.35,'girl2biglip');
         this.girl1biglip.frame = Main.lipColor[1];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      
        }
        else if ((Main.finalGirlNum[1][0] == 1) && (Main.finalGirlNum[3][0] == 1)) {
         this.girlGroup2 = game.add.group();
         this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup2.add(this.girl1);
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup2.add(this.girl1biglip);
         
         
          this.girl1 = game.add.sprite(706.2,584.5,'level1girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
         this.girl1biglip = game.add.sprite(671.2,718.45,'girl1biglip');
         this.girl1biglip.frame = Main.lipColor[0];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         
         
         
          this.girlGroup2.x = -180;
      this.girlGroup2.y = 300;
      this.girlGroup2.scale.setTo(0.8);
         this.girlGroup.x = 580;
      this.girlGroup.y = 300;
      this.girlGroup.scale.setTo(0.8);
     this.levelGroup.add(this.girlGroup2);
     this.levelGroup.add(this.girlGroup);
      
        }
        else if (Main.finalGirlNum[3][0] == 1) {
        this.girl1 = game.add.sprite(835.15,601.1,'level3girl');
        this.girl1.anchor.setTo(0.5);
        this.girlGroup.add(this.girl1);
        
         this.girl1biglip = game.add.sprite(794.15,758.15,'girl3biglip');
         this.girl1biglip.frame = Main.lipColor[2];
         this.girl1biglip.anchor.setTo(0.5);
         this.girlGroup.add(this.girl1biglip);
         this.girlGroup.x = 100;
      this.girlGroup.y = 200;
      this.girlGroup.scale.setTo(0.9);
        }
        
      
            //DDDD
        //Common Buttons
         
         
         this.musicButton = game.add.sprite(1550,50,"soundicon");
         this.musicButton.anchor.setTo(0.5);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
            this.playagain = game.add.sprite(450,100,'playagain');
            this.playagain.anchor.setTo(0.5);
            
            this.menubtn = game.add.sprite(770,100,'menubtn');
            this.menubtn.anchor.setTo(0.5);
            
            
            this.playagain.scale.setTo(0);
            this.playagain.inputEnabled = true;
            this.playagain.input.useHandCursor = true;
            this.playagain.events.onInputUp.add(this.playAgain, this);
            this.playagain.events.onInputOver.add(this.btnOver, this);
            this.playagain.events.onInputOut.add(this.btnOut, this);
            
            this.menubtn.scale.setTo(0);
            this.menubtn.inputEnabled = true;
            this.menubtn.input.useHandCursor = true;
            this.menubtn.events.onInputUp.add(this.menuFun, this);
            this.menubtn.events.onInputOver.add(this.btnOver, this);
            this.menubtn.events.onInputOut.add(this.btnOut, this);
            
            
            
            game.add.tween(this.playagain.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.menubtn.scale).to({x:0.8, y:0.8}, 1000, Phaser.Easing.Quadratic.Out, true);
            

            
},


openLink:function(){
        
},
changemusic:function(){
        if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            }
},
padzoom:function(){
   game.add.tween( this.padGroup.scale).to({x:1, y:1}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:796.4, y:595.3}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = true;
   this.padclosebtn.visible = true;
},
removeGlitter:function(evt){
      evt.kill(); 
},
playAgain:function(){
game.state.start('g3level1');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
menuFun:function(){
game.state.start('menu');
Main.padtickPosVisible = [0,false,false,false,false,false,false,false,false,false,false,false,false];
},
moreGames:function(){

},
referCheckList:function()
{
    for(var i = 1; i<=12; i++)
         {
         this['padtick'+i].visible = Main.padtickPosVisible[i];
         }
},
closePad:function()
{
    this.padclosebtn.visible = false;
    game.add.tween( this.padGroup.scale).to({x:0.5, y:0.5}, 1000, Phaser.Easing.Back.Out, true);
   game.add.tween( this.padGroup).to({x:1436.35, y:338.15}, 1000, Phaser.Easing.Back.Out, true);
   this.padbg.visible = false;
},
btnOver:function(items){
    items.scale.setTo(0.9);
    effectVar = game.add.sprite(items.x-30,items.y-140,'effects'); 
    effectVar.anchor.setTo(0.5);
    effectVar.scale.setTo(3);		
    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
    effectVar.animations.play('glitter', 30, false);  
},
btnOut:function(items){
    items.scale.setTo(0.8);
}
}







game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('menu', Main.menu);
game.state.add('g1level1', Main.g1level1);
game.state.add('g1level2', Main.g1level2);
game.state.add('g1level3', Main.g1level3);
game.state.add('g1level4', Main.g1level4);
game.state.add('g1level5', Main.g1level5);
game.state.add('g1level6', Main.g1level6);
game.state.add('g1level7', Main.g1level7);
game.state.add('g1level8', Main.g1level8);
game.state.add('g1level9', Main.g1level9);
game.state.add('g1level10', Main.g1level10);
game.state.add('g1level11', Main.g1level11);
game.state.add('g1level12', Main.g1level12);
game.state.add('g1level13', Main.g1level13);
game.state.add('g2level1', Main.g2level1);
game.state.add('g2level2', Main.g2level2);
game.state.add('g2level3', Main.g2level3);
game.state.add('g2level4', Main.g2level4);
game.state.add('g2level5', Main.g2level5);
game.state.add('g2level6', Main.g2level6);
game.state.add('g2level7', Main.g2level7);
game.state.add('g2level8', Main.g2level8);
game.state.add('g2level9', Main.g2level9);
game.state.add('g2level10', Main.g2level10);
game.state.add('g2level11', Main.g2level11);
game.state.add('g2level12', Main.g2level12);
game.state.add('g2level13', Main.g2level13);

game.state.add('g3level1', Main.g3level1);
game.state.add('g3level2', Main.g3level2);
game.state.add('g3level3', Main.g3level3);
game.state.add('g3level4', Main.g3level4);
game.state.add('g3level5', Main.g3level5);
game.state.add('g3level6', Main.g3level6);
game.state.add('g3level7', Main.g3level7);
game.state.add('g3level8', Main.g3level8);
game.state.add('g3level9', Main.g3level9);
game.state.add('g3level10', Main.g3level10);
game.state.add('g3level11', Main.g3level11);
game.state.add('g3level12', Main.g3level12);
game.state.add('g3level13', Main.g3level13);
game.state.add('title', Main.title);


game.state.start('boot');