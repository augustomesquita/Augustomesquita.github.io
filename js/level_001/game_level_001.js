var gameLevel_001 = {
  preload: function() {
    game.load.script("gameMaker_001", "js/level_001/game_maker_001.js");
    game.load.script("gameAttributes_001", "js/level_001/game_attributes_001.js");


    game.load.audio("audioBackground", "audio/background.wav");
    game.load.image("imageBackgroundSky", "img/sky.png");
    game.load.image("imagePlatform", "img/platform.png");
    commomPreload(); // preload comum, deve ser colocado no final.
  },

  create: function() {
    createSprites();
    configBackgroundSound("audioBackground");
    commomCreate(50, 450); // create comum, deve ser colocado no final.
  },

  update: function() {
    commomUpdate(); // update comum, deve ser colocado no final.
  }
};
