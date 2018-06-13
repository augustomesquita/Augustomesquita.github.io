var gameLevel_001 = {
  preload: function() {
    game.load.script("gameMaker_001", "js/level_001/game_maker_001.js");
    game.load.audio("audioBackground", "audio/background.wav");
    game.load.image("imageBackgroundSky", "img/sky.jpg");
    game.load.image("imagePlatform", "img/platform.png");
  },

  create: function() {
    setInitialCameraPosition(game.world.height, 0);
    createBackground();
    createPlataforms();
    createCoins();
    enableBackgroundSound("audioBackground");
  },

  update: function() {},

  bound_x: 2000, // Dimensão horizontal do mundo
  bound_y: 2000 // Dimensão vertical do mundo
};
