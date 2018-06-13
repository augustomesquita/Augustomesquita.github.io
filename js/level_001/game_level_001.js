var gameLevel_001 = {
  preload: function() {
    game.load.script("gameMaker_001", "js/level_001/game_maker_001.js");
    game.load.audio("audioBackground", "audio/background.wav");
    game.load.image("imageBackgroundSky", "img/sky.png");
    game.load.image("imagePlatform", "img/platform.png");
  },

  create: function() {
    createBackground();
    createPlataforms();
    createCoins();
    enableBackgroundSound("audioBackground");
  },

  update: function () {}
};
