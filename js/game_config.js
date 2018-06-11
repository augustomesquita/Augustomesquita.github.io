function configBackgroundSound(backgroundSoundKey) {
  audioBackground = new Phaser.Sound(game, backgroundSoundKey, 1, true);
  setTimeout(function() {
    audioBackground.play();
  }, 100);
}

/**
 * Configura sons da fase.
 */
function configAudio() {
  audioCoin = game.add.audio("audioCoin");
  audioJump = game.add.audio("audioJump");
}

/**
 * Configura teclas.
 */
function configKeys() {
  keys = game.input.keyboard.createCursorKeys();
  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  keySpaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

/**
 * Configura jogador e placar.
 */
function configPlayerHUD(playerPositionX, playerPositionY) {
  player = game.add.sprite(playerPositionX, playerPositionY, "spriteDude");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 1000;
  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = true;
  player.animations.add("left", [0, 1, 2, 3], 10, true);
  player.animations.add("right", [5, 6, 7, 8], 10, true);
  txtScore = game.add.text(16, 24, "SCORE: 0", {
    fontSize: "32px",
    fill: "#fff"
  });
  game.add.text(250, 580, "Augusto Mesquita - Javascript Game", {
    fontSize: "16px",
    fill: "#FFF"
  });
}
