/**
 * Configura sons da fase.
 */
function configSound(backgroundSoundKey) {
  audioBackground = new Phaser.Sound(game, backgroundSoundKey, 1, true);
  setTimeout(function() {
    audioBackground.play();
  }, 100);

  audioCoin = game.add.audio("audioCoin");
  audioJump = game.add.audio("audioJump");
}

/**
 * Configura teclas.
 */
function configKeys() {
  keys = game.input.keyboard.createCursorKeys();
  keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

/**
 * Configura jogador e placar.
 */
function configPlayerHUD() {
  player = game.add.sprite(50, game.world.height - 150, "spriteDude");
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

/**
 * Configura colisões.
 */
function configCollision() {
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(coins, platforms);
  game.physics.arcade.overlap(player, coins, collectCoin);
}

/**
 * Configura coleta de moeda.
 * @param {jogador} player
 * @param {moeda} coin
 */
function collectCoin(player, coin) {
  audioCoin.play();
  coin.kill();
  score += 10;
  txtScore.text = "SCORE: " + score;
}

/**
 * Habilita movimentação do jogador.
 */
function enablePlayerMovement() {
  player.body.velocity.x = 0;
  if (keys.left.isDown || keyA.isDown) {
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if (keys.right.isDown || keyD.isDown) {
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else {
    player.animations.stop();
    player.frame = 4;
  }
  if ((keys.up.isDown || keyW.isDown) && player.body.touching.down) {
    player.body.velocity.y = -580;
    audioJump.play();
  }
}
