var conf = {
  width: 800,
  height: 600,
  renderer: Phaser.AUTO,
  parent: null,
  transparent: true,
  antialias: false,
  state: {
    preload: preload,
    create: create,
    update: update
  },
  scaleMode: Phaser.ScaleManager.EXACT_FIT
};

var game = new Phaser.Game(conf);

var platforms,
  player,
  keys,
  coins,
  audioBackground,
  audioCoin,
  audioJump,
  txtScore,
  score = 0;

var keyW, keyA, keyD;
