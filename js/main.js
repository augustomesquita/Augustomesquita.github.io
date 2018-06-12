var conf = {
  width: 800,
  height: 600,
  renderer: Phaser.AUTO,
  parent: null,
  transparent: true,
  antialias: false,
  scaleMode: Phaser.ScaleManager.EXACT_FIT
};

var game = new Phaser.Game(conf);


var gameTitle = {
  preload: function() {
    game.load.script("gameCommons", "js/game_commons.js");
    game.load.script("gameConfig", "js/game_config.js");
    game.load.script("gameLevel_001", "js/level_001/game_level_001.js");

    game.load.audio("audioBackground", "audio/background.wav");
    game.load.image("imageBackgroundTitle", "img/title.png");
  },

  create: function() {
    game.add.sprite(0, 0, "imageBackgroundTitle");
    configBackgroundSound("audioBackground");
  }
};

game.state.add("stateGameTitle", gameTitle);
game.state.start("stateGameTitle");

var gameLevel001 = {
  preload: function() {
    game.load.script("gameCommons", "js/game_commons.js");
    game.load.script("gameConfig", "js/game_config.js");
    game.load.script("gameLevel_001", "js/level_001/game_level_001.js");
  },

  create: function() {
    game.state.add("stateGameLevel_001", gameLevel_001);
    game.state.start("stateGameLevel_001");
  }
};

game.state.add("stateGameLevel001", gameLevel001);
game.state.start("stateGameLevel001");
