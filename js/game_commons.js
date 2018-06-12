/**
 * Variáveis comuns ao projeto.
 */
var platforms,
  player,
  keys,
  coins,
  audioBackground,
  audioCoin,
  audioJump,
  txtScore,
  score = 0;

var keySpaceBar, keyW, keyA, keyD;

/**
 * Configura colisões.
 */
function enableCollision() {
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
  if (keys.left.isDown) {
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if (keys.right.isDown) {
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if (keySpaceBar.isDown && player.body.touching.down) {
    player.body.velocity.y = -580;
    audioJump.play();
  }
}

/**
 * Preload comum com dados comuns a todos os preloads
 * do sistema.
 */
function commomPreload() {
  game.load.audio("audioCoin", "audio/coin.wav");
  game.load.audio("audioJump", "audio/jump.wav");
  game.load.spritesheet("spriteDude", "img/dude.png", 40, 50);
  game.load.spritesheet("spriteCoin", "img/coin_sheet.png", 24, 24);
}

/**
 * Create comum com dados comuns a todos os creates
 * do sistema.
 */
function commomCreate(playerPositionX, playerPositionY) {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  configKeys();
  configPlayerHUD(playerPositionX, playerPositionY);
  configAudio();
}

/**
 * Update comum com dados comuns a todos os updates
 * do sistema
 */
function commomUpdate() {
  enableCollision();
  enablePlayerMovement();
}
